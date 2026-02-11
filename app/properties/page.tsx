"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/home/CTA";
import PropertiesHero from "@/components/properties/PropertiesHero";
import DiscoverProperties from "@/components/properties/DiscoverProperties";
import LetsMakeItHappen from "@/components/properties/LetsMakeItHappen";

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-[#141414]">
      <Navbar />
      <main className="">
        <PropertiesHero />
        <DiscoverProperties />
        <LetsMakeItHappen />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
