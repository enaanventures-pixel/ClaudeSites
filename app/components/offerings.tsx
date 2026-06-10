"use client";

import Image from "next/image";
import {
  CoffeeIcon,
  CroissantIcon,
  CupSodaIcon,
  MilkIcon,
  SandwichIcon,
  ShoppingBasketIcon,
} from "lucide-react";
import { departments } from "../lib/business";
import { GlassPanel, SectionLabel, SectionTitle } from "./glass-panel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const iconMap = {
  "cup-soda": CupSodaIcon,
  coffee: CoffeeIcon,
  croissant: CroissantIcon,
  sandwich: SandwichIcon,
  milk: MilkIcon,
  "shopping-basket": ShoppingBasketIcon,
} as const;

const tabImages: Record<string, string> = {
  Fountain: "/Inside_Store_1.png",
  Coffee: "/Inside_Store_3.png",
  Bakery: "/Inside_Store_1.png",
  Deli: "/Inside_Store_1.png",
  "Dairy & Essentials": "/Inside_Store_2.png",
  "Snacks & Beverages": "/Inside_Store_2.png",
};

export function Offerings() {
  return (
    <section id="shop" className="scroll-mt-28 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Departments</SectionLabel>
          <SectionTitle>Everything you need. One fast stop.</SectionTitle>
          <p className="mt-6 text-lg text-white/55">
            Explore what&apos;s inside — from fountain drinks to deli hot food, organized for your routine.
          </p>
        </div>

        <Tabs defaultValue={departments[0].title} className="mt-14">
          <TabsList className="mx-auto flex h-auto w-full max-w-4xl flex-wrap justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl">
            {departments.map((dept) => {
              const Icon = iconMap[dept.icon];
              return (
                <TabsTrigger
                  key={dept.title}
                  value={dept.title}
                  className="cursor-pointer rounded-xl border border-transparent px-4 py-2.5 text-sm font-medium text-white/60 transition-all duration-300 data-active:border-white/15 data-active:bg-white/10 data-active:text-white"
                >
                  <Icon className="mr-2 inline size-4" />
                  {dept.title}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {departments.map((dept) => {
            const Icon = iconMap[dept.icon];
            return (
              <TabsContent key={dept.title} value={dept.title} className="mt-8 outline-none">
                <GlassPanel variant="strong" glow="blue" className="overflow-hidden">
                  <div className="grid lg:grid-cols-2">
                    <div className="relative min-h-[280px] lg:min-h-[420px]">
                      <Image
                        src={tabImages[dept.title]}
                        alt={dept.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40 lg:bg-gradient-to-l lg:from-black/30 lg:to-transparent" />
                    </div>
                    <div className="flex flex-col justify-center p-8 sm:p-12">
                      <span
                        className={cn(
                          "mb-6 inline-flex size-14 items-center justify-center rounded-2xl text-white",
                          dept.accent,
                        )}
                      >
                        <Icon className="size-7" />
                      </span>
                      <h3 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        {dept.title}
                      </h3>
                      <p className="mt-4 text-lg leading-8 text-white/65">{dept.description}</p>
                      <p className="mt-8 text-sm uppercase tracking-[0.2em] text-white/40">
                        Walk in · Grab · Go
                      </p>
                    </div>
                  </div>
                </GlassPanel>
              </TabsContent>
            );
          })}
        </Tabs>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept) => {
            const Icon = iconMap[dept.icon];
            return (
              <GlassPanel
                key={`card-${dept.title}`}
                className="group cursor-default p-6 transition-all duration-300 hover:border-white/25 hover:bg-white/12"
              >
                <Icon className="size-5 text-white/70 transition-colors duration-300 group-hover:text-white" />
                <p className="mt-4 font-display text-lg font-medium text-white">{dept.title}</p>
                <p className="mt-2 text-sm leading-6 text-white/50">{dept.description}</p>
              </GlassPanel>
            );
          })}
        </div>
      </div>
    </section>
  );
}
