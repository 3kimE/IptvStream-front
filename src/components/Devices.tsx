
import React from 'react';
import { Android, Apple, Smartphone, Tv } from "lucide-react";

const supportedDevices = [
  {
    icon: <Android className="h-16 w-16" />,
    name: "Android",
    description: "Smart TVs, Boxes, Phones & Tablets"
  },
  {
    icon: <Apple className="h-16 w-16" />,
    name: "iOS & macOS",
    description: "iPhones, iPads, Apple TVs & Macs"
  },
  {
    icon: <Tv className="h-16 w-16" />,
    name: "Smart TVs",
    description: "Samsung, LG, Sony, Fire TV & more"
  },
  {
    icon: <Smartphone className="h-16 w-16" />,
    name: "Other Devices",
    description: "MAG, Firestick, Windows, Linux & VLC"
  },
];

const Devices = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-iptv-card/30 to-iptv-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            Available on <span className="text-iptv-primary">All Your Devices</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Watch your favorite content on any device, anytime, anywhere
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {supportedDevices.map((device, index) => (
            <div 
              key={index} 
              className="relative glass-card rounded-xl p-6 flex flex-col items-center text-center transition-transform hover:scale-105 duration-300"
            >
              <div className="text-iptv-primary mb-4">
                {device.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {device.name}
              </h3>
              <p className="text-gray-400 text-sm">
                {device.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Devices;
