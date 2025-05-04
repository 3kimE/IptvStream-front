
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ChannelsShowcase from "@/components/ChannelsShowcase";
import FeaturesGrid from "@/components/FeaturesGrid";
import DevicesSection from "@/components/DevicesSection";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <Navbar />
      <HeroSection />
      <div className="relative">
        <div className="absolute inset-0 bg-[url('/images/gradient-bg.svg')] bg-cover bg-no-repeat opacity-5"></div>
        <div className="absolute inset-0 bg-[url('/images/noise.svg')] bg-repeat opacity-[0.02]"></div>
        <ChannelsShowcase />
        <FeaturesGrid />
        <DevicesSection />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
