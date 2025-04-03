"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner"

import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"

import { ContactForm } from "@/components/ui/contact-form";

export function ContactButtons() {
  const copyEmail = () => {
    navigator.clipboard.writeText('contact@alexpalmer.site');
    toast("Copied email address to clipboard.")
  };

  return (
    <div className="flex justify-center gap-4 mt-8 mb-8 pl-4 pr-4">
      
      <Drawer>
        <DrawerTrigger asChild>
            <Button className="w-[145px]" variant="outline">Contact me</Button>
        </DrawerTrigger>
        <DrawerContent className="w-[600px] max-w-[90vw] mx-auto gap-4">
            <DrawerHeader>
                <DrawerTitle>Want to get in touch?</DrawerTitle>
                <DrawerDescription>Please fill out the following form to contact me. Responses may take up to 48 hours.</DrawerDescription>
                <ContactForm></ContactForm>
            </DrawerHeader>
        </DrawerContent>
      </Drawer>

      <Button
        className="w-[145px]"
        variant="outline" 
        onClick={copyEmail}
      >
        Copy email
      </Button>
    </div>
  );
}