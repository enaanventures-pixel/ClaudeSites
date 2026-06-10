"use client";

import Image from "next/image";
import { gallery } from "../lib/business";
import { GlassPanel, SectionLabel, SectionTitle } from "./glass-panel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export function StoreGallery() {
  return (
    <section id="gallery" className="scroll-mt-28 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel>Inside the store</SectionLabel>
            <SectionTitle>A look inside.</SectionTitle>
          </div>
          <p className="max-w-md text-white/55">
            Bright aisles, fresh coffee, and a counter built for speed — see the space before you visit.
          </p>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="relative w-full"
        >
          <CarouselContent className="-ml-4">
            {gallery.map((item) => (
              <CarouselItem key={item.src} className="basis-full pl-4 md:basis-4/5 lg:basis-3/4">
                <GlassPanel variant="strong" className="overflow-hidden p-0">
                  <div className="relative aspect-[16/10] sm:aspect-[21/9]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 75vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
                      <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/50">
                        Gallery
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                </GlassPanel>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            className={cn(
              "left-2 cursor-pointer border-white/20 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20",
            )}
          />
          <CarouselNext
            className={cn(
              "right-2 cursor-pointer border-white/20 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20",
            )}
          />
        </Carousel>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((item) => (
            <GlassPanel key={`thumb-${item.src}`} className="group overflow-hidden p-0">
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="25vw"
                />
              </div>
            </GlassPanel>
          ))}
        </div>
      </div>
    </section>
  );
}
