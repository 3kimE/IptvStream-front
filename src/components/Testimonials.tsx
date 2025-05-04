
import React from 'react';
import { Star } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Alex Johnson",
    location: "United States",
    quote: "I've tried many IPTV services, but this one stands out with its reliability and channel selection. The 4K streams are absolutely stunning!",
    rating: 5
  },
  {
    name: "Sarah Miller",
    location: "Canada",
    quote: "Customer service is excellent! Any issues are resolved quickly, and the channel lineup is impressive. Really happy with my subscription.",
    rating: 5
  },
  {
    name: "David Chen",
    location: "Australia",
    quote: "The app works flawlessly on all my devices. I can watch my favorite sports from around the world without any buffering.",
    rating: 4
  },
  {
    name: "Elena Garcia",
    location: "Spain",
    quote: "I love being able to watch my local channels even when traveling abroad. The service is worth every penny.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            What Our <span className="text-iptv-primary">Customers Say</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied users enjoying premium entertainment
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Carousel 
            opts={{ 
              align: "start",
              loop: true
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-white/5 flex flex-col">
                    <div className="flex text-yellow-400 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                      {[...Array(5 - testimonial.rating)].map((_, i) => (
                        <Star key={i + testimonial.rating} className="h-5 w-5 text-gray-500" />
                      ))}
                    </div>
                    <blockquote className="text-gray-300 flex-grow italic mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.location}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-iptv-primary border-none hover:bg-iptv-primary/80 text-white" />
            <CarouselNext className="right-4 bg-iptv-primary border-none hover:bg-iptv-primary/80 text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
