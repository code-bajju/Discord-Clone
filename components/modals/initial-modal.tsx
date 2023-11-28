"use client";

import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
  FormField,
  Form,
} from "@/components/ui/form";
import {
  DialogTitle,
  DialogFooter,
  DialogHeader,
  DialogDescription,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "server name is required.",
  }),
  imageUrl: z.string().min(1, {
    message: "Photu jaruri hai",
  }),
});
export const InitialModal = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      defaultValues: {
        name: "",
        imageUrl: "",
      },
    },
  });

  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Dialog open={true}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Customize new GROUP
          </DialogTitle>
          <DialogDescription className="text-center text-zinc">
            Giver your group a name and image you want you can change it later.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default InitialModal;
