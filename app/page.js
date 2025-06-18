import Hero from "@/components/Sections/hero";
import Section0 from "@/components/Sections/_section-0";
import Section1 from "@/components/Sections/_section-1";
import Section2 from "@/components/Sections/_section-2";
import Brands from "@/components/Sections/brands";
import Section3 from "@/components/Sections/_section-3";
import Testimonials from "@/components/Sections/testimonials";
import Cta from "@/components/Sections/cta";

export default function Home() {
  return (
   <>
    <Hero/>
    <Brands />
    <Section0 />
    <Section1 />
    <Section2 />
    <Section3 />
    <Testimonials />
    <Cta />
   </>
  );
}
