
import React from 'react';

// Sample channel data by category
const channelCategories = [
  {
    category: "Sports",
    channels: [
      { name: "ESPN", logo: "https://via.placeholder.com/100x60?text=ESPN" },
      { name: "Sky Sports", logo: "https://via.placeholder.com/100x60?text=SkySports" },
      { name: "beIN", logo: "https://via.placeholder.com/100x60?text=beIN" },
      { name: "NBC Sports", logo: "https://via.placeholder.com/100x60?text=NBC" },
      { name: "Fox Sports", logo: "https://via.placeholder.com/100x60?text=Fox" },
      { name: "DAZN", logo: "https://via.placeholder.com/100x60?text=DAZN" },
    ],
  },
  {
    category: "Movies",
    channels: [
      { name: "HBO", logo: "https://via.placeholder.com/100x60?text=HBO" },
      { name: "Showtime", logo: "https://via.placeholder.com/100x60?text=Showtime" },
      { name: "Cinemax", logo: "https://via.placeholder.com/100x60?text=Cinemax" },
      { name: "AMC", logo: "https://via.placeholder.com/100x60?text=AMC" },
      { name: "TNT", logo: "https://via.placeholder.com/100x60?text=TNT" },
      { name: "Starz", logo: "https://via.placeholder.com/100x60?text=Starz" },
    ],
  },
  {
    category: "News",
    channels: [
      { name: "CNN", logo: "https://via.placeholder.com/100x60?text=CNN" },
      { name: "BBC", logo: "https://via.placeholder.com/100x60?text=BBC" },
      { name: "Al Jazeera", logo: "https://via.placeholder.com/100x60?text=AlJazeera" },
      { name: "FOX News", logo: "https://via.placeholder.com/100x60?text=FOXNews" },
      { name: "MSNBC", logo: "https://via.placeholder.com/100x60?text=MSNBC" },
      { name: "Sky News", logo: "https://via.placeholder.com/100x60?text=SkyNews" },
    ],
  },
];

const ChannelsSlider = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-iptv-background to-iptv-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            Popular <span className="text-iptv-primary">Live TV</span> Channels
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Access over 10,000+ channels from around the world with our premium IPTV subscription
          </p>
        </div>
        
        <div className="space-y-12">
          {channelCategories.map((category, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white pl-4 border-l-4 border-iptv-primary">
                {category.category}
              </h3>
              
              <div className="relative overflow-hidden">
                <div className="double-track">
                  {/* First copy of channels */}
                  <div className="infinite-scroll flex space-x-6 py-4">
                    {category.channels.map((channel, idx) => (
                      <div
                        key={`${idx}-1`}
                        className="flex-shrink-0 w-32 h-20 p-2 glass-card rounded-lg flex items-center justify-center hover:border-iptv-primary hover:scale-105 transition-all duration-300"
                      >
                        <img
                          src={channel.logo}
                          alt={channel.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                  
                  {/* Duplicate for infinite scroll effect */}
                  <div className="infinite-scroll flex space-x-6 py-4">
                    {category.channels.map((channel, idx) => (
                      <div
                        key={`${idx}-2`}
                        className="flex-shrink-0 w-32 h-20 p-2 glass-card rounded-lg flex items-center justify-center hover:border-iptv-primary hover:scale-105 transition-all duration-300"
                      >
                        <img
                          src={channel.logo}
                          alt={channel.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Gradient fade on edges */}
                <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-iptv-background to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-iptv-background to-transparent z-10"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChannelsSlider;
