import { useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Profile1 from "@/assets/Profile2.jpg";
import SingleMessage from "@/components/SingleMessage";

const Messages = () => {
  return (
    <div className="h-[90vh]">
      <ResizablePanelGroup
        direction="horizontal"
        className="w-full rounded-lg border "
      >
        <ResizablePanel defaultSize={30}>
          <div className="flex flex-col">
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
            <SingleMessage />
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={70}>
          <div className="flex flex-col justify-end h-full bg-slate-100 p-6">
            {/* Messages */}
            <div className="min-w-[600px]">
              <div className="chat chat-start">
                <div className="chat-bubble chat-bubble-primary">
                  What kind of nonsense is this
                </div>
              </div>
              <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-success">
                  Calm down, Anakin.
                </div>
              </div>
              <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-success">
                  Put me on the Council and not make me a Master!??
                </div>
              </div>
              <div className="chat chat-start">
                <div className="chat-bubble chat-bubble-primary">
                  That&apos;s never been done in the history of the Jedi.
                  It&apos;s insulting!
                </div>
              </div>
              <div className="chat chat-end">
                <div className="chat-bubble chat-bubble-success">
                  To be on the Council at your age.
                </div>
              </div>
            </div>
            <div>
              <div className="grid w-full gap-1.5">
                <Label htmlFor="message-2">Your Message</Label>
                <Textarea
                  placeholder="Type your message here."
                  id="message-2"
                />
                <p className="text-sm text-muted-foreground">
                  Your message will be copied to the support team.
                </p>
              </div>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Messages;
