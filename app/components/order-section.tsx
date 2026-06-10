import { ArrowRightIcon } from "lucide-react";
import { business } from "../lib/business";
import { GlassPanel, SectionLabel, SectionTitle } from "./glass-panel";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function OrderSection() {
  return (
    <section id="order" className="scroll-mt-28 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <GlassPanel
          variant="strong"
          glow="red"
          className="relative overflow-hidden px-6 py-16 sm:px-12 sm:py-20"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-brand-red/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 size-80 rounded-full bg-brand-blue/20 blur-3xl" />

          <div className="relative mx-auto max-w-3xl text-center">
            <SectionLabel>Delivery</SectionLabel>
            <SectionTitle className="text-4xl sm:text-5xl">
              Order to your door.
            </SectionTitle>
            <p className="mt-6 text-lg text-white/60">
              Snacks, drinks, and essentials — delivered through our partners when you can&apos;t make it in.
            </p>
          </div>

          <div className="relative mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-2">
            {business.orderLinks.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <GlassPanel className="group h-full p-6 transition-all duration-300 hover:border-white/25 hover:bg-white/12 sm:p-8">
                  <p className="font-display text-2xl font-semibold text-white">{platform.name}</p>
                  <p className="mt-3 text-sm leading-7 text-white/55">{platform.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-all duration-300 group-hover:gap-3 group-hover:text-white">
                    Order now
                    <ArrowRightIcon className="size-4" />
                  </span>
                </GlassPanel>
              </a>
            ))}
          </div>

          <div className="relative mx-auto mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={business.phoneHref}
              className={cn(
                buttonVariants({ size: "lg" }),
                "cursor-pointer rounded-full bg-white px-8 text-black hover:bg-white/90",
              )}
            >
              Call {business.phone}
            </a>
            <a
              href="#visit"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "cursor-pointer rounded-full border-white/20 bg-transparent px-8 text-white hover:bg-white/10",
              )}
            >
              Visit instead
            </a>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}
