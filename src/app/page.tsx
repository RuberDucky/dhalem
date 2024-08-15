import { FAQSection } from "@/sections/FaqSection";
import { FeaturedProperty } from "@/sections/FeaturedProperty";
import { Footer } from "@/sections/Footer";
import { GetQuoteSection } from "@/sections/GetQouteSection";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { StepsOfBuying } from "@/sections/StepsOfBuying";
import { TestimonialsSection } from "@/sections/TestimonialSection";
import { VisionMissionSection } from "@/sections/VissionMission";
import { WhyChooseSection } from "@/sections/WhyChoose";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedProperty />
      <VisionMissionSection />
      <StepsOfBuying />
      <FAQSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <GetQuoteSection />
      <Footer />
    </>
  );
}
