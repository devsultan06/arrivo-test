import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/home/CTA";
import ServicesHero from "@/components/services/ServicesHero";
import UnlockPropertyValue from "@/components/services/UnlockPropertyValue";
import EffortlessPropertyManagement from "@/components/services/EffortlessPropertyManagement";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#141414]">
      <Navbar />
      <main>
        <ServicesHero />
        <UnlockPropertyValue />
        <EffortlessPropertyManagement />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
