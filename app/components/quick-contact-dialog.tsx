"use client";

import { MessageCircleIcon } from "lucide-react";
import { business } from "../lib/business";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function QuickContactDialog() {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button
            variant="outline"
            className="cursor-pointer rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10"
          >
            <MessageCircleIcon className="size-4" />
            Quick contact
          </Button>
        }
      />
      <DialogContent className="glass border-white/15 bg-[#0c0c0f]/95 text-white sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-white">Get in touch</DialogTitle>
          <DialogDescription className="text-white/55">
            Call us directly or save our address for your next visit.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 pt-2">
          <div className="space-y-2">
            <Label htmlFor="phone-display" className="text-white/70">
              Phone
            </Label>
            <Input
              id="phone-display"
              readOnly
              value={business.phone}
              className="cursor-pointer border-white/15 bg-white/5 text-white"
              onClick={() => window.open(business.phoneHref, "_self")}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address-display" className="text-white/70">
              Address
            </Label>
            <Input
              id="address-display"
              readOnly
              value={business.address.full}
              className="border-white/15 bg-white/5 text-white"
            />
          </div>
          <a href={business.phoneHref} className="block">
            <Button className="w-full cursor-pointer rounded-full bg-white text-black hover:bg-white/90">
              Call {business.phone}
            </Button>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
