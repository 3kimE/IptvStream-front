
import React from 'react';
import { Tv, Shield, Zap, Globe, Tv2, Play, MonitorPlay } from "lucide-react";

const features = [
  {
    icon: <Tv className="h-10 w-10 text-iptv-primary" />,
    title: "10,000+ Live Channels",
    description: "Access thousands of live TV channels from around the world in HD and 4K quality."
  },
  {
    icon: <MonitorPlay className="h-10 w-10 text-purple-500" />,
    title: "Extensive VOD Library",
    description: "Browse through a vast collection of movies and TV shows available on demand."
  },
  {
    icon: <Shield className="h-10 w-10 text-blue-500" />,
    title: "Secure Connection",
    description: "Our encrypted connection ensures your streaming activity remains private and secure."
  },
  {
    icon: <Zap className="h-10 w-10 text-iptv-primary" />,
    title: "Zero Buffering",
    description: "Enjoy smooth playback with our advanced anti-buffering technology and high-speed servers."
  },
  {
    icon: <Globe className="h-10 w-10 text-purple-500" />,
    title: "Global Content",
    description: "Access regional content from across the globe with our international channel lineup."
  },
  {
    icon: <Play className="h-10 w-10 text-blue-500" />,
    title: "Catch-Up TV",
    description: "Missed your favorite show? Watch it later with our 7-day catch-up TV feature."
  },
];

const FeaturesGrid = () => {
  return (
    <section id="features" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Exceptional <span className="bg-gradient-to-r from-iptv-primary to-purple-500 bg-clip-text text-transparent">Streaming Experience</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our IPTV service delivers premium entertainment with cutting-edge technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 hover:border-iptv-primary/50 transition-all group"
            >
              <div className="mb-5 p-3 bg-gray-800/80 rounded-xl inline-block group-hover:bg-gray-800 transition-all">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-iptv-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
