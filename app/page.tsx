import { About } from "./components/about";
import { ExperienceFaq } from "./components/experience-faq";
import { Hero } from "./components/hero";
import { HoursLocation } from "./components/hours-location";
import { Offerings } from "./components/offerings";
import { OrderSection } from "./components/order-section";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { StatsMarquee } from "./components/stats-marquee";
import { StoreGallery } from "./components/store-gallery";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <StatsMarquee />
        <About />
        <Offerings />
        <StoreGallery />
        <ExperienceFaq />
        <HoursLocation />
        <OrderSection />
      </main>
      <SiteFooter />
    </>
  );
}
