
import React from 'react';
import { Check, Tv, Video } from "lucide-react";

const benefits = [
  {
    icon: <Tv className="h-10 w-10 text-iptv-primary" />,
    title: "10,000+ Channels & VOD",
    description: "Access to over 10,000 channels and a vast library of movies and TV shows on demand."
  },
  {
    icon: <Check className="h-10 w-10 text-iptv-primary" />,
    title: "Anti-freeze Technology",
    description: "Enjoy uninterrupted streaming with our advanced anti-buffering technology."
  },
  {
    icon: <Video className="h-10 w-10 text-iptv-primary" />,
    title: "99.9% Uptime Servers",
    description: "Our robust infrastructure ensures your entertainment is always available when you need it."
  },
  {
    icon: <Check className="h-10 w-10 text-iptv-primary" />,
    title: "4K Ultra HD Quality",
    description: "Experience crystal clear picture with 4K Ultra HD streams on compatible devices."
  }
];

const Benefits = () => {
  return (
    <section id="features" className="py-20 bg-iptv-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            Why Choose <span className="text-iptv-primary">Our Service</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We provide the most reliable and feature-rich IPTV service on the market
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl p-6 flex flex-col items-center text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 p-3 bg-iptv-card rounded-full">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {benefit.title}
              </h3>
              <p className="text-gray-400">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
