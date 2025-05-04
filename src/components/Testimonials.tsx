
import React, { useState } from 'react';
import { Star, ChevronRight, ChevronLeft, MessageSquare, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const testimonials = [
  {
    name: "Alex Johnson",
    location: "United States",
    quote: "I've tried many IPTV services, but this one stands out with its reliability and channel selection. The 4K streams are absolutely stunning!",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=alex"
  },
  {
    name: "Sarah Miller",
    location: "Canada",
    quote: "Customer service is excellent! Any issues are resolved quickly, and the channel lineup is impressive. Really happy with my subscription.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "David Chen",
    location: "Australia",
    quote: "The app works flawlessly on all my devices. I can watch my favorite sports from around the world without any buffering.",
    rating: 4,
    image: "https://i.pravatar.cc/150?u=david"
  },
  {
    name: "Elena Garcia",
    location: "Spain",
    quote: "I love being able to watch my local channels even when traveling abroad. The service is worth every penny.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=elena"
  },
  {
    name: "Michael Thompson",
    location: "United Kingdom",
    quote: "Being able to watch UK sporting events while traveling has been a game-changer. The streaming quality is excellent even on hotel Wi-Fi.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=michael"
  },
  {
    name: "Olivia Rodriguez",
    location: "Mexico",
    quote: "After trying several IPTV services, this is the only one that provides consistently good streaming quality. My family loves it!",
    rating: 4,
    image: "https://i.pravatar.cc/150?u=olivia"
  }
];

const Testimonials = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send this data to your backend
    console.log({ name, email, message, rating });
    
    // Show success toast
    toast({
      title: "Testimonial submitted!",
      description: "Thank you for sharing your experience with us.",
    });
    
    // Reset form
    setName('');
    setEmail('');
    setMessage('');
    setRating(5);
  };

  return (
    <section id="testimonials" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            What Our <span className="text-iptv-primary">Customers Say</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied users enjoying premium entertainment
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto mb-20">
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
                  <div className="h-full p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-white/5 flex flex-col transition-all hover:border-iptv-primary/30 hover:bg-gray-800/70">
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
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-iptv-primary">
                        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">{testimonial.name}</p>
                        <p className="text-sm text-gray-400">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-iptv-primary border-none hover:bg-iptv-primary/80 text-white">
              <ChevronLeft className="h-6 w-6" />
            </CarouselPrevious>
            <CarouselNext className="right-4 bg-iptv-primary border-none hover:bg-iptv-primary/80 text-white">
              <ChevronRight className="h-6 w-6" />
            </CarouselNext>
          </Carousel>
        </div>

        {/* Customer Testimonial Submission Form */}
        <div className="max-w-3xl mx-auto bg-gray-800/50 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-white/10">
          <div className="flex items-center mb-6">
            <MessageSquare className="text-iptv-primary mr-3" />
            <h3 className="text-2xl font-bold">Share Your Experience</h3>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input 
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10 bg-gray-900 border-gray-700 text-white"
                    placeholder="John Smith"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                <Input 
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-900 border-gray-700 text-white"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Your Testimonial</label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-md bg-gray-900 border-gray-700 text-white p-3 focus:ring-iptv-primary focus:border-iptv-primary"
                placeholder="Share your experience with our IPTV service..."
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-3">Your Rating</label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button 
                    key={star} 
                    type="button"
                    onClick={() => setRating(star)}
                    className="focus:outline-none"
                  >
                    <Star 
                      className={`h-8 w-8 ${rating >= star ? 'text-yellow-400 fill-yellow-400' : 'text-gray-500'}`} 
                    />
                  </button>
                ))}
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full md:w-auto bg-iptv-primary hover:bg-iptv-primary/90 text-white"
            >
              Submit Your Testimonial
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
