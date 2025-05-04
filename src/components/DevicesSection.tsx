
import React, { useState } from 'react';
import { Smartphone, Apple, Tv, Tablet, Monitor, PlayCircle, Gamepad } from "lucide-react";

const devices = [
  {
    icon: <Smartphone className="h-16 w-16" />,
    name: "Android",
    description: "Smart TVs, Boxes, Phones & Tablets",
    features: ["Full HD & 4K Support", "Multi-screen", "Google Play Store App"]
  },
  {
    icon: <Apple className="h-16 w-16" />,
    name: "iOS & macOS",
    description: "iPhones, iPads, Apple TVs & Macs",
    features: ["App Store Application", "Picture-in-Picture", "AirPlay Support"]
  },
  {
    icon: <Tv className="h-16 w-16" />,
    name: "Smart TVs",
    description: "Samsung, LG, Sony, Fire TV & more",
    features: ["Native TV Apps", "Remote Control", "Voice Command"]
  },
  {
    icon: <Monitor className="h-16 w-16" />,
    name: "Windows & Linux",
    description: "Desktop applications & web players",
    features: ["Cross-platform Support", "Low Resource Usage", "Easy Installation"]
  },
  {
    icon: <PlayCircle className="h-16 w-16" />,
    name: "Media Players",
    description: "VLC, Kodi, Perfect Player & IPTV Smarters",
    features: ["Custom Playlist Support", "EPG Integration", "Advanced Features"]
  },
  {
    icon: <Gamepad className="h-16 w-16" />,
    name: "Gaming Consoles",
    description: "Xbox, PlayStation & Smart TVs",
    features: ["Controller Navigation", "Big Screen Experience", "Game & Watch"]
  }
];

const DevicesSection = () => {
  const [activeDevice, setActiveDevice] = useState<number | null>(null);

  return (
    <section id="devices" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Watch on <span className="text-iptv-primary">Any Device</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our service works seamlessly across all your favorite devices
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {devices.map((device, index) => (
            <div 
              key={index} 
              className="relative group cursor-pointer"
              onMouseEnter={() => setActiveDevice(index)}
              onMouseLeave={() => setActiveDevice(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-r from-iptv-primary to-purple-600 rounded-2xl blur opacity-50 group-hover:opacity-70 transition-opacity ${activeDevice === index ? 'animate-pulse' : ''}`}></div>
              <div className="relative p-8 bg-gray-900 rounded-2xl flex flex-col items-center text-center h-full border border-gray-700/50 overflow-hidden">
                <div className="text-iptv-primary mb-5 group-hover:scale-110 transition-transform">
                  {device.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-white">
                  {device.name}
                </h3>
                <p className="text-gray-400 text-lg mb-4">
                  {device.description}
                </p>
                
                <div className={`w-full transition-all duration-300 ${activeDevice === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <div className="border-t border-gray-700 my-3"></div>
                  <ul className="text-sm text-left">
                    {device.features.map((feature, idx) => (
                      <li key={idx} className="py-1 flex items-center text-gray-300">
                        <div className="w-1 h-1 bg-iptv-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevicesSection;
