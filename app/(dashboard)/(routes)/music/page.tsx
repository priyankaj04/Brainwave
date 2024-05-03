"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Music } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Empty } from "@/Components/empty";
import { Button } from "@/Components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/Components/ui/form";
import { Input } from "@/Components/ui/input";
import useProModal from "@/hooks/use-pro-modal";
import { toast } from "react-hot-toast";
import { formSchema } from "./constants";
import { ChatHeading } from "@/Components/chatheading";
import emerald from '@/assets/emerald.png';

const MusicPage = () => {
  const router = useRouter();
  const proModal = useProModal();
  const [music, setMusic] = useState("");

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
      setMusic("");
      const response = await axios.post("/api/music");
      setMusic(response.data.audio);

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
            src={emerald.src}
            alt="Gradient"
          />
        </div>
      </div>
      <ChatHeading
        title="Music Generation"
        description="Our most advanced AI Music Generation model."
        icon={Music}
        iconColor="text-emerald-500"
        bgColor="bg-emerald-500/10"
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
              <Button className="col-span-12 lg:col-span-2 w-full bg-emerald-500" disabled={isLoading}>
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Empty label="Brainwave is generating music..." />
            </div>
          )}
          {!music && !isLoading && <Empty label="Start typing to generate music." />}
          {music && (
            <audio controls className="w-full mt-8">
              <source src={music} />
            </audio>
          )}
        </div>
      </div>
    </div>
  );
};

export default MusicPage;
