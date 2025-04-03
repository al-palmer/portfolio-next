"use client"

import * as React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Footer } from "@/components/ui/footer"
import { ContactButtons } from "@/components/ui/contact-buttons";

import { Github, DownloadCloud, Linkedin } from 'lucide-react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Button } from "@/components/ui/button";
import FollowCursor from "@/components/ui/cursor";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundImage: 'url("https://i.imgur.com/3zWPiWe.jpeg")' }}
    >
      <div className="flex-grow">
        <div className="flex justify-center items-center p-10">
          <Avatar>
            <AvatarImage src="https://i.imgur.com/nK5R2gC.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        
        <div className="flex justify-center items-center text-2xl pl-5 pr-5">
          <h1>Hello, I&apos;m Alex Palmer</h1>
        </div>

        <div className="flex grid justify-center items-center text-lg text-muted-foreground pl-5 pr-5 text-center mt-3">
          <p>I am a motivated, hardworking individual seeking to gain valuable experience in the computing industry.</p>
          <p>Studying for my T-Level in Digital Production, Design and Development at Nescot College.</p>
        </div>

        <ContactButtons />

        <div className="flex justify-center gap-4 pt-5 pl-4 pr-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a href="https://github.com/al-palmer/">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                  </Button>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>GitHub</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <a href="">
                  <Button variant="outline" size="icon">
                    <DownloadCloud className="h-4 w-4" />
                  </Button>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Download CV</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <a href="https://uk.linkedin.com/">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>LinkedIn</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <h2 className="flex justify-center items-center text-2xl pt-15 pb-10">What languages have I practiced?</h2>

        <Accordion type="single" collapsible className="w-full pl-15 pr-15">
          <AccordionItem value="item-1">
            <AccordionTrigger>Java</AccordionTrigger>
            <AccordionContent>
              Java is the language that I am most familiar with, I use it to create add-ons for various different games.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>TypeScript</AccordionTrigger>
            <AccordionContent>
              I began learning TypeScript in order to develop my understanding of web based programming languages.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Python</AccordionTrigger>
            <AccordionContent>
              Python was the chosen language for most of my projects at Nescot over the last two years.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      <Footer />
      <FollowCursor />
    </div>
  );
}