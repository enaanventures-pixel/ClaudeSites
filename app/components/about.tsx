import { business } from "../lib/business";
import { GlassPanel, SectionLabel, SectionTitle } from "./glass-panel";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const pillars = [
  "Fast checkout",
  "Fully stocked",
  "Friendly service",
  "Cold drinks",
];

export function About() {
  return (
    <section id="about" className="scroll-mt-28 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionLabel>About</SectionLabel>
          <SectionTitle>
            Neighborhood retail,
            <span className="block text-white/45">reimagined.</span>
          </SectionTitle>
          <p className="mt-8 max-w-lg text-lg leading-8 text-white/60">
            {business.description}
          </p>
        </div>

        <GlassPanel variant="strong" glow="red" className="p-8 sm:p-10">
          <div className="flex items-center gap-4">
            <Avatar className="size-12 border border-white/20">
              <AvatarFallback className="bg-brand-red/20 text-sm font-semibold text-white">
                5M
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-display text-lg font-medium text-white">{business.fullName}</p>
              <p className="text-sm text-white/50">
                {business.neighborhood}, {business.city}
              </p>
            </div>
          </div>

          <Separator className="my-6 bg-white/10" />

          <p className="text-base leading-8 text-white/70">{business.story}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {pillars.map((item) => (
              <span
                key={item}
                className="cursor-default rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-wider text-white/70"
              >
                {item}
              </span>
            ))}
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}
