"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@tabler/icons-react";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
function AddNewSessionDialog({ label = "Start a Consultation" }) {
  const [note, setNote] = useState<string>();
  return (
    <Dialog>
      <DialogTrigger>
        <Button className='mt-3'>
          <span className='flex items-center justify-center rounded-lg w-5 h-5 bg-white text-black font-bold text-lg'>
            +
          </span>{" "}
          {label}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Basic Details</DialogTitle>
          <DialogDescription asChild>
            <div>
              <h2>Add Symptoms or Any Other Details</h2>
              <Textarea
                placeholder='Add Details Here...'
                className='h-[200px] mt-1'
                onChange={(e) => setNote(e.target.value)}
              />
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>
            <Button variant={"outline"}>Cancel</Button>
          </DialogClose>
          <Button disabled={!note}>
            Next <ArrowRight />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddNewSessionDialog;
