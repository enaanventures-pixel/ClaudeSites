import { faqs } from "../lib/faqs";
import { GlassPanel, SectionLabel, SectionTitle } from "./glass-panel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ExperienceFaq() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionLabel>FAQ</SectionLabel>
            <SectionTitle>
              Questions,
              <span className="block text-white/45">answered.</span>
            </SectionTitle>
            <p className="mt-6 max-w-md text-lg text-white/55">
              Everything you need to know before you stop by — hours, delivery, and what makes us different.
            </p>
          </div>

          <GlassPanel variant="strong" className="p-2 sm:p-4">
            <Accordion className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`item-${index}`}
                  className="border-white/10 px-4"
                >
                  <AccordionTrigger className="cursor-pointer py-5 text-left text-base font-medium text-white hover:no-underline [&[data-state=open]]:text-white">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-base leading-7 text-white/60">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </GlassPanel>
        </div>
      </div>
    </section>
  );
}
