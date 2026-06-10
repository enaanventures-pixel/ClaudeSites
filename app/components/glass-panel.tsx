import { cn } from "@/lib/utils";

type GlassPanelProps = React.ComponentProps<"div"> & {
  variant?: "default" | "strong" | "subtle";
  glow?: "red" | "blue" | "orange" | "none";
};

export function GlassPanel({
  className,
  variant = "default",
  glow = "none",
  children,
  ...props
}: GlassPanelProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border backdrop-blur-xl transition-all duration-500",
        variant === "default" && "border-white/15 bg-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.35)]",
        variant === "strong" && "border-white/20 bg-white/15 shadow-[0_16px_48px_rgba(0,0,0,0.45)]",
        variant === "subtle" && "border-white/10 bg-white/5 shadow-[0_4px_24px_rgba(0,0,0,0.25)]",
        glow === "red" && "shadow-[0_0_60px_rgba(215,25,32,0.12)]",
        glow === "blue" && "shadow-[0_0_60px_rgba(0,108,183,0.15)]",
        glow === "orange" && "shadow-[0_0_60px_rgba(248,152,29,0.12)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/50">
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}
