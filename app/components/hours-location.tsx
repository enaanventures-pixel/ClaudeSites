"use client";

import { ClockIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { business } from "../lib/business";
import { GlassPanel, SectionLabel, SectionTitle } from "./glass-panel";
import { QuickContactDialog } from "./quick-contact-dialog";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HoursLocation() {
  const today = new Date().toLocaleDateString("en-CA", { weekday: "long" });

  return (
    <section id="hours" className="scroll-mt-28 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <SectionLabel>Visit</SectionLabel>
          <SectionTitle>Find us in Sutherland.</SectionTitle>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          <GlassPanel variant="strong" glow="orange" className="lg:col-span-5 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-white/10">
                <ClockIcon className="size-5 text-white" />
              </span>
              <h3 className="font-display text-xl font-semibold text-white">Hours</h3>
            </div>
            <ul className="mt-6 space-y-2">
              {business.hours.map((entry) => {
                const isToday = entry.day === today;
                return (
                  <li
                    key={entry.day}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-3 text-sm transition-colors duration-300",
                      isToday
                        ? "bg-white text-black"
                        : "bg-white/5 text-white/75 hover:bg-white/10",
                    )}
                  >
                    <span>{entry.day}</span>
                    <span>{entry.time}</span>
                  </li>
                );
              })}
            </ul>
          </GlassPanel>

          <GlassPanel
            id="visit"
            variant="strong"
            glow="blue"
            className="scroll-mt-28 lg:col-span-7 p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-white/10">
                  <MapPinIcon className="size-5 text-white" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">{business.fullName}</h3>
                  <p className="text-sm text-white/55">{business.address.full}</p>
                </div>
              </div>
              <QuickContactDialog />
            </div>

            <a
              href={business.phoneHref}
              className="mt-4 inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-white/80 transition-colors duration-300 hover:text-white"
            >
              <PhoneIcon className="size-4" />
              {business.phone}
            </a>

            <GlassPanel variant="subtle" className="mt-6 overflow-hidden p-0">
              <iframe
                title="5 Minutes Convenience Store location map"
                src={business.mapsEmbed}
                className="h-72 w-full border-0 sm:h-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </GlassPanel>

            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-6 inline-flex cursor-pointer rounded-full bg-white text-black hover:bg-white/90",
              )}
            >
              Open in Google Maps
            </a>
          </GlassPanel>
        </div>
      </div>
    </section>
  );
}
