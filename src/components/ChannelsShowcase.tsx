
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample channel data by category
const channelCategories = [
  {
    id: "sports",
    name: "Sports",
    channels: [
      { name: "ESPN", logo: "https://via.placeholder.com/100x60?text=ESPN" },
      { name: "Sky Sports", logo: "https://via.placeholder.com/100x60?text=SkySports" },
      { name: "beIN", logo: "https://via.placeholder.com/100x60?text=beIN" },
      { name: "NBC Sports", logo: "https://via.placeholder.com/100x60?text=NBC" },
      { name: "Fox Sports", logo: "https://via.placeholder.com/100x60?text=Fox" },
      { name: "DAZN", logo: "https://via.placeholder.com/100x60?text=DAZN" },
      { name: "Euro Sport", logo: "https://via.placeholder.com/100x60?text=EuroSport" },
      { name: "BT Sport", logo: "https://via.placeholder.com/100x60?text=BTSport" },
    ],
  },
  {
    id: "movies",
    name: "Movies",
    channels: [
      { name: "HBO", logo: "https://via.placeholder.com/100x60?text=HBO" },
      { name: "Showtime", logo: "https://via.placeholder.com/100x60?text=Showtime" },
      { name: "Cinemax", logo: "https://via.placeholder.com/100x60?text=Cinemax" },
      { name: "AMC", logo: "https://via.placeholder.com/100x60?text=AMC" },
      { name: "TNT", logo: "https://via.placeholder.com/100x60?text=TNT" },
      { name: "Starz", logo: "https://via.placeholder.com/100x60?text=Starz" },
      { name: "Netflix", logo: "https://via.placeholder.com/100x60?text=Netflix" },
      { name: "Prime", logo: "https://via.placeholder.com/100x60?text=Prime" },
    ],
  },
  {
    id: "news",
    name: "News",
    channels: [
      { name: "CNN", logo: "https://via.placeholder.com/100x60?text=CNN" },
      { name: "BBC", logo: "https://via.placeholder.com/100x60?text=BBC" },
      { name: "Al Jazeera", logo: "https://via.placeholder.com/100x60?text=AlJazeera" },
      { name: "FOX News", logo: "https://via.placeholder.com/100x60?text=FOXNews" },
      { name: "MSNBC", logo: "https://via.placeholder.com/100x60?text=MSNBC" },
      { name: "Sky News", logo: "https://via.placeholder.com/100x60?text=SkyNews" },
      { name: "Euronews", logo: "https://via.placeholder.com/100x60?text=Euronews" },
      { name: "France24", logo: "https://via.placeholder.com/100x60?text=France24" },
    ],
  },
  {
    id: "entertainment",
    name: "Entertainment",
    channels: [
      { name: "MTV", logo: "https://via.placeholder.com/100x60?text=MTV" },
      { name: "Comedy Central", logo: "https://via.placeholder.com/100x60?text=ComedyCentral" },
      { name: "Disney+", logo: "https://via.placeholder.com/100x60?text=Disney+" },
      { name: "Hulu", logo: "https://via.placeholder.com/100x60?text=Hulu" },
      { name: "FX", logo: "https://via.placeholder.com/100x60?text=FX" },
      { name: "Bravo", logo: "https://via.placeholder.com/100x60?text=Bravo" },
      { name: "History", logo: "https://via.placeholder.com/100x60?text=History" },
      { name: "Discovery", logo: "https://via.placeholder.com/100x60?text=Discovery" },
    ],
  },
];

const ChannelsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("sports");

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white inline-block bg-gradient-to-r from-iptv-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
            10,000+ Live Channels
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Endless entertainment options from around the world at your fingertips
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="sports" className="w-full" onValueChange={setActiveCategory}>
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-800/50 backdrop-blur-lg p-1">
                {channelCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-iptv-primary data-[state=active]:to-purple-600 data-[state=active]:text-white"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {channelCategories.map((category) => (
              <TabsContent 
                key={category.id} 
                value={category.id} 
                className="focus-visible:outline-none focus-visible:ring-0 animate-fade-in"
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {category.channels.map((channel, idx) => (
                    <div
                      key={`${category.id}-${idx}`}
                      className="p-4 bg-gray-800/40 backdrop-blur-sm rounded-xl border border-white/5 flex items-center justify-center hover:border-iptv-primary/50 hover:bg-gray-700/40 hover:transform hover:scale-105 transition-all duration-300"
                    >
                      <img
                        src={channel.logo}
                        alt={channel.name}
                        className="max-w-full max-h-12 object-contain"
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400">
            ...and thousands more channels across all categories
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChannelsShowcase;
