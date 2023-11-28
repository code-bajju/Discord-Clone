"use client";

import {
  DialogTitle,
  DialogFooter,
  DialogHeader,
  DialogDescription,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog";

import {useForm} from "react-hook-form"

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
    name: z.string().min(1,{
        message:"server name is required."
    }),
    imageUrl: z.string().min(1,{
        message:"Photu jaruri hai"

    })
})
export const InitialModal = () => {
    const form = useForm({
        defaultValues :{
            defaultValues:{
                name : "",
                imageUrl:"",
            }
        }
    })

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
