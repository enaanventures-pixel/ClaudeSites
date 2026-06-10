import Image from "next/image";
import { ArrowDownIcon, ArrowRightIcon, PhoneIcon } from "lucide-react";
import { business, highlights } from "../lib/business";
import { GlassPanel } from "./glass-panel";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden">
      <Image
        src="/StoreFront.png"
        alt="5 Minutes Convenience Store exterior"
        fill
        priority
        className="object-cover object-center scale-105"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-[#050508]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(0,108,183,0.25),transparent_45%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-36 sm:px-6 sm:pb-24 sm:pt-44">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <Badge className="mb-6 cursor-default rounded-full border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/80 hover:bg-white/10">
              Sutherland · Saskatoon
            </Badge>

            <h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
              <span className="text-gradient-brand">In. Out.</span>
              <br />
              <span className="text-gradient-accent">Five minutes.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70 sm:text-xl">
              {business.tagline} A neighborhood store engineered for speed — cold drinks, hot coffee, and essentials without the wait.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#visit"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "cursor-pointer rounded-full bg-white px-8 text-black transition-all duration-300 hover:scale-[1.02] hover:bg-white/90",
                )}
              >
                Visit Store
                <ArrowRightIcon className="size-4" />
              </a>
              <a
                href={business.phoneHref}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "cursor-pointer rounded-full border-white/25 bg-white/5 px-8 text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10",
                )}
              >
                <PhoneIcon className="size-4" />
                {business.phone}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {highlights.map((item, index) => (
              <GlassPanel
                key={item.label}
                variant={index === 0 ? "strong" : "default"}
                glow={index === 0 ? "blue" : "none"}
                className={cn(
                  "p-4 sm:p-5",
                  index === 0 && "col-span-2 sm:col-span-1",
                )}
              >
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
                  {item.label}
                </p>
                <p className="mt-2 font-display text-lg font-medium text-white sm:text-xl">
                  {item.detail}
                </p>
              </GlassPanel>
            ))}
          </div>
        </div>

        <a
          href="#about"
          className="mt-16 inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-white/50 transition-colors duration-300 hover:text-white"
        >
          Scroll to explore
          <ArrowDownIcon className="size-4 animate-float" />
        </a>
      </div>
    </section>
  );
}
