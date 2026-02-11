"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/about/AboutHero";
import OurValues from "@/components/about/OurValues";
import OurAchievements from "@/components/about/OurAchievements";
import NavigatingExperience from "@/components/about/NavigatingExperience";
import MeetTheTeam from "@/components/about/MeetTheTeam";
import OurValuedClients from "@/components/about/OurValuedClients";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#141414] ">
      <Navbar />
      <main className="pb-20">
        <AboutHero />
        <OurValues />
        <OurAchievements />
        <NavigatingExperience />
        <MeetTheTeam />
        <OurValuedClients />
      </main>
      <Footer />
    </div>
  );
}
