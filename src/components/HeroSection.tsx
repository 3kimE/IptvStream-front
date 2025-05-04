
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Play, ChevronRight } from "lucide-react";

// Sample movie data
const movies = [
  {
    id: 1,
    title: "Stream Anywhere, Anytime",
    description: "Access over 10,000+ channels and premium content on any device with our cutting-edge IPTV service.",
    image: "https://images.unsplash.com/photo-1585951237318-9ea5e175b891?auto=format&fit=crop&q=80&w=2070",
    color: "from-purple-700"
  },
  {
    id: 2,
    title: "Ultimate Entertainment Hub",
    description: "Movies, sports, news, and shows from around the world - all in crystal-clear HD and 4K quality.",
    image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&q=80&w=2070",
    color: "from-red-700"
  },
  {
    id: 3,
    title: "Zero Buffering Experience",
    description: "Our advanced servers ensure smooth streaming without interruptions, anytime and everywhere.",
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=2070",
    color: "from-blue-700"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % movies.length);
        setIsTransitioning(false);
      }, 500);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const movie = movies[currentSlide];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 scale-110"
          style={{ 
            backgroundImage: `url(${movie.image})`,
            opacity: isTransitioning ? 0.5 : 0.7,
            transform: `scale(${isTransitioning ? 1.15 : 1.1})`,
          }}
        ></div>
        <div className={`absolute inset-0 bg-gradient-to-r ${movie.color} to-transparent opacity-60`}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-32 pb-16 md:pt-40 md:pb-32 relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 
            className={`text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 transition-all duration-500 ${
              isTransitioning ? "opacity-0 transform translate-y-4" : "opacity-100 transform translate-y-0"
            }`}
          >
            {movie.title}
          </h1>
          <p 
            className={`text-lg md:text-xl text-gray-200 mb-8 max-w-2xl transition-all duration-500 delay-200 ${
              isTransitioning ? "opacity-0 transform translate-y-4" : "opacity-100 transform translate-y-0"
            }`}
          >
            {movie.description}
          </p>
          
          <div className={`flex flex-wrap gap-4 transition-all duration-500 delay-300 ${
            isTransitioning ? "opacity-0 transform translate-y-4" : "opacity-100 transform translate-y-0"
          }`}>
            <Button size="lg" className="bg-iptv-primary hover:bg-iptv-primary/90 text-white rounded-full px-8 text-lg h-12">
              Get Started <ChevronRight className="ml-1 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 rounded-full px-8 text-lg h-12"
            >
              <Play className="mr-2 h-5 w-5" /> Watch Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-3 z-10">
        {movies.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-12 h-1 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-20" : "bg-white/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Overlay shape */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-5"></div>
    </section>
  );
};

export default HeroSection;
