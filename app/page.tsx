import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import FAQ from "@/components/home/FAQ";
import Testimonials from "@/components/home/Testimonials";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/home/CTA";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <main>
        <ScrollAnimation>
          <Hero />
        </ScrollAnimation>
        <ScrollAnimation>
          <Services />
        </ScrollAnimation>
        <ScrollAnimation>
          <FeaturedProperties />
        </ScrollAnimation>
        <ScrollAnimation>
          <Testimonials />
        </ScrollAnimation>
        <ScrollAnimation>
          <FAQ />
        </ScrollAnimation>
        <ScrollAnimation>
          <CTA />
        </ScrollAnimation>
      </main>
      <Footer />
    </div>
  );
}
