"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { ChatHeading } from "@/components/ChatHeading";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { toast } from "react-hot-toast";
import { formSchema } from "./constants";
import useProModal from "@/hooks/use-pro-modal";
import { useRouter } from "next/navigation";
import * as z from "zod";
// import { ChatCompletionRequestMessage } from "openai";
// import { useState } from "react";
// import * as z from "zod";
import { Empty } from "@/components/Empty";
import { UserAvatar } from "@/components/UserAvatar";
import { Avatar } from "@/components/Avatar";
import GradientBackground from '@/components/GradientBackground';
// import useProModal from "@/hooks/use-pro-modal";


const ConversationPage = () => {
  const router = useRouter();
  const proModal = useProModal();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);

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
      const userMessage: ChatCompletionRequestMessage = {
        role: "user",
        content: values.prompt,
      };
      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/conversation", {
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
    <GradientBackground color="bg-violet-500">
      <div>
        <ChatHeading
          title="Conversation"
          description="Our most advanced AI conversation model."
          icon={MessageSquare}
          iconColor="text-violet-500"
          bgColor="bg-violet-500/10"
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
                <Button className="col-span-12 self-center  lg:col-span-2 :w-full text-white bg-violet-500" disabled={isLoading}>
                  Generate
                </Button>
              </form>
            </Form>
          </div>
          <div className="space-y-4 mt-4">
            {isLoading && (
              <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
                <Empty label="Brainwave is thinking..." />
              </div>
            )}
            {messages.length === 0 && !isLoading && <Empty label="Start typing to have a conversation." />}
            <div className="flex flex-col-reverse gap-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    "p-8 w-full flex items-start gap-x-8 rounded-lg",
                    message.role === "user" ? "bg-white border border-black/10" : "bg-muted"
                  )}
                >
                  {message.role === "user" ? <UserAvatar /> : <Avatar />}
                  <p className="text-sm">{message.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </GradientBackground>
  );
};

export default ConversationPage;
