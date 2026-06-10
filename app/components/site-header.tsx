"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MenuIcon, PhoneIcon } from "lucide-react";
import { business, navLinks } from "../lib/business";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-500 sm:px-6",
          scrolled
            ? "glass border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "border-transparent bg-transparent",
        )}
      >
        <Link href="#" className="group flex min-w-0 items-center gap-3">
          <Image
            src={business.logo}
            alt={business.fullName}
            width={120}
            height={48}
            className="h-10 w-auto shrink-0 object-contain brightness-110 sm:h-11"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="cursor-pointer rounded-full px-4 py-2 text-sm font-medium text-white/70 transition-colors duration-300 hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={business.phoneHref}
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden cursor-pointer rounded-full bg-white text-black transition-all duration-300 hover:bg-white/90 sm:inline-flex",
            )}
          >
            <PhoneIcon className="size-4" />
            Call
          </a>

          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="cursor-pointer rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 lg:hidden"
                  aria-label="Open menu"
                >
                  <MenuIcon className="size-5" />
                </Button>
              }
            />
            <SheetContent
              side="right"
              className="glass w-full max-w-sm border-l border-white/15 bg-[#0a0a0c]/90 p-0 text-white"
            >
              <SheetHeader className="border-b border-white/10 px-6 py-5 text-left">
                <SheetTitle className="font-display text-white">{business.name}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <SheetClose
                    key={link.href}
                    render={
                      <a
                        href={link.href}
                        className="cursor-pointer rounded-xl px-4 py-3 text-sm font-medium text-white/80 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                      >
                        {link.label}
                      </a>
                    }
                  />
                ))}
                <SheetClose
                  render={
                    <a
                      href={business.phoneHref}
                      className={cn(
                        buttonVariants(),
                        "mt-3 cursor-pointer rounded-full bg-white text-black hover:bg-white/90",
                      )}
                    >
                      <PhoneIcon className="size-4" />
                      {business.phone}
                    </a>
                  }
                />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
