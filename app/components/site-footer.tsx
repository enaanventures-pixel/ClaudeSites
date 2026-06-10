import Image from "next/image";
import { business, navLinks } from "../lib/business";
import { GlassPanel } from "./glass-panel";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 pb-8 pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <GlassPanel variant="subtle" className="p-8 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div>
              <Image
                src={business.logo}
                alt={business.fullName}
                width={140}
                height={56}
                className="h-12 w-auto object-contain brightness-110"
              />
              <p className="mt-5 max-w-sm text-sm leading-7 text-white/50">
                Your Sutherland corner store — fast service, cold drinks, and essentials without the wait.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Contact</p>
              <ul className="mt-4 space-y-2 text-sm text-white/60">
                <li>{business.address.full}</li>
                <li>
                  <a
                    href={business.phoneHref}
                    className="cursor-pointer transition-colors duration-300 hover:text-white"
                  >
                    {business.phone}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Explore</p>
              <ul className="mt-4 space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="cursor-pointer text-white/60 transition-colors duration-300 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-white/10" />

          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {business.fullName}. All rights reserved.
          </p>
        </GlassPanel>
      </div>
    </footer>
  );
}
