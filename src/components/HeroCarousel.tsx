
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

// Sample movie data
const movies = [
  {
    id: 1,
    title: "Tenet",
    description: "Armed with only one word, Tenet, a secret agent journeys through a twilight world of international espionage.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=2069",
  },
  {
    id: 2,
    title: "Dune",
    description: "Feature adaptation of Frank Herbert's science fiction novel about the son of a noble family entrusted with the protection of the most valuable asset in the galaxy.",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=2250",
  },
  {
    id: 3,
    title: "Interstellar",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    image: "https://images.unsplash.com/photo-1608346128025-1896b97a6fa8?auto=format&fit=crop&q=80&w=2070",
  },
  {
    id: 4,
    title: "The Mandalorian",
    description: "After the fall of the Galactic Empire, a lone gunfighter makes his way through the outer reaches of the lawless galaxy.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=2070",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % movies.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {movies.map((movie, index) => (
        <div
          key={movie.id}
          className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image with Blur and Gradient Overlay */}
          <div className="absolute inset-0 bg-black">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-60 blur-sm"
              style={{ backgroundImage: `url(${movie.image})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-iptv-background/70 to-iptv-background"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4 flex flex-col items-start justify-center h-full pt-16 md:pt-24">
              <div className="max-w-2xl animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                  {movie.title}
                </h2>
                <p className="text-lg mb-6 text-gray-200 max-w-xl">
                  {movie.description}
                </p>
                <div className="flex space-x-4">
                  <Button size="lg" className="bg-iptv-primary hover:bg-iptv-primary/90 text-white">
                    Get Subscription
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white/10"
                  >
                    <Play className="mr-2 h-4 w-4" /> Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {movies.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-iptv-primary" : "bg-gray-500/50"
            } transition-all duration-300`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
