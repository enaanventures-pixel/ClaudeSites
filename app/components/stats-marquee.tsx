import { highlights } from "../lib/business";
import { GlassPanel } from "./glass-panel";

const items = [
  ...highlights,
  { label: "Cold drinks", detail: "Always chilled" },
  { label: "Fresh coffee", detail: "Brewed daily" },
  { label: "Local favorite", detail: "Sutherland owned" },
];

export function StatsMarquee() {
  const track = [...items, ...items];

  return (
    <section className="relative overflow-hidden border-y border-white/10 py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#050508] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#050508] to-transparent" />

      <div className="flex w-max animate-marquee gap-4 px-4">
        {track.map((item, index) => (
          <GlassPanel
            key={`${item.label}-${index}`}
            variant="subtle"
            className="flex shrink-0 items-center gap-4 rounded-full px-6 py-3"
          >
            <span className="text-sm font-medium text-white">{item.label}</span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span className="text-sm text-white/55">{item.detail}</span>
          </GlassPanel>
        ))}
      </div>
    </section>
  );
}
