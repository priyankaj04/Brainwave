"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Code } from "lucide-react";
import { useRouter } from "next/navigation";
import OpenAI from "openai";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ReactMarkdown from "react-markdown";
import * as z from "zod";
import { ChatHeading } from "@/Components/chatheading";
import { Empty } from "@/Components/empty";
import { Button } from "@/Components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/Components/ui/form";
import { Input } from "@/Components/ui/input";
import { cn } from "@/lib/utils";
import { UserAvatar } from "@/Components/useravatar";
import { Avatar } from "@/Components/avatar";
import useProModal from "@/hooks/use-pro-modal";
import { toast } from "react-hot-toast";
import { formSchema } from "./constants";
import green from '@/assets/green.png';

const CodePage = () => {
  const router = useRouter();
  const proModal = useProModal();
  const [messages, setMessages] = useState<OpenAI.ChatCompletionMessage[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    try {
      const userMessage: OpenAI.ChatCompletionMessage = {
        role: "assistant",
        content: values.prompt,
      };
      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/code", {
        messages: newMessages,
      });

      setMessages((current) => [...current, userMessage, response.data]);
      form.reset();
    } catch (error: any) {
      console.log(error);
      if (error?.response?.status === 403) {
        proModal.onOpen();
      } else {
        toast.error("Something went wrong.");
      }
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <div className="fixed w-screen h-screen opacity-20 pointer-events-none">
        <div className="fixed top-1/2 left-1/2 w-screen h-screen -translate-x-3/4 -translate-y-1/2">
          <img
            className="w-full h-full"
            src={green.src}
            alt="Gradient"
          />
        </div>
      </div>
      <ChatHeading
        title="Code Generation"
        description="Our most advanced AI Code Generation model."
        icon={Code}
        iconColor="text-green-700"
        bgColor="bg-green-700/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border items-center bg-n-4/10 backdrop-blur-lg border-n-10 w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        {...field}
                        placeholder="Start typing here..."
                        className="border-0 border-transparent outline-none focus:outline-none focus:border-transparent text-xl bg-n-6/10 font-sora focus:ring-0 focus:ring-transparent"
                        disabled={isLoading}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className="col-span-12 lg:col-span-2 w-full bg-green-700" disabled={isLoading}>
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Empty label="Brainwave is generating code..." />
            </div>
          )}
          {messages.length === 0 && !isLoading && <Empty label="Start typing to have a conversation." />}
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "p-8 w-full flex items-start gap-x-8 rounded-lg",
                  message.role === "assistant" ? "bg-white border border-black/10" : "bg-muted"
                )}
              >
                {message.role === "assistant" ? <UserAvatar /> : <Avatar />}
                <ReactMarkdown
                  className="text-sm overflow-hidden leading-7"
                  components={{
                    pre: ({ node, ...props }) => (
                      <div className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg">
                        <pre {...props} />
                      </div>
                    ),
                    code: ({ node, ...props }) => <code className="rounded-sm p-1 bg-black/10" {...props} />,
                  }}
                >
                  {message.content || ""}
                </ReactMarkdown>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodePage;
