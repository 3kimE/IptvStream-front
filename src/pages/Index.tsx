
import React from "react";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import ChannelsSlider from "@/components/ChannelsSlider";
import Benefits from "@/components/Benefits";
import Devices from "@/components/Devices";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-iptv-background">
      <Navbar />
      <HeroCarousel />
      <ChannelsSlider />
      <Benefits />
      <Devices />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
