
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "1 Month",
    price: "$15",
    features: [
      "10,000+ Live Channels",
      "VOD Library Access",
      "HD & 4K Streams",
      "24/7 Support",
      "All Devices Supported"
    ],
    popular: false
  },
  {
    name: "3 Months",
    price: "$35",
    features: [
      "10,000+ Live Channels",
      "VOD Library Access",
      "HD & 4K Streams", 
      "24/7 Support",
      "All Devices Supported",
      "Multi-screen Support"
    ],
    popular: true,
    savings: "Save $10"
  },
  {
    name: "6 Months",
    price: "$60",
    features: [
      "10,000+ Live Channels",
      "VOD Library Access",
      "HD & 4K Streams",
      "24/7 Support",
      "All Devices Supported",
      "Multi-screen Support",
      "Premium Sports Channels"
    ],
    popular: false,
    savings: "Save $30"
  },
  {
    name: "12 Months",
    price: "$100",
    features: [
      "10,000+ Live Channels",
      "VOD Library Access",
      "HD & 4K Streams",
      "24/7 Support",
      "All Devices Supported",
      "Multi-screen Support",
      "Premium Sports Channels",
      "PPV Events Included"
    ],
    popular: false,
    savings: "Save $80"
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-iptv-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            Simple & Flexible <span className="text-iptv-primary">Pricing</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Choose the perfect subscription plan for your entertainment needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative glass-card rounded-xl p-6 flex flex-col 
                ${plan.popular ? 'border-2 border-iptv-primary' : 'border border-gray-700'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit px-4 py-1 bg-iptv-primary text-white text-sm font-bold rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.savings && (
                    <span className="text-sm text-iptv-primary font-medium mb-1">
                      {plan.savings}
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm">per subscription</p>
              </div>
              
              <ul className="mb-8 space-y-3 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <Check className="mr-2 h-5 w-5 text-iptv-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${plan.popular 
                  ? 'bg-iptv-primary hover:bg-iptv-primary/90' 
                  : 'bg-iptv-card hover:bg-iptv-card/80 border border-iptv-primary/60'
                }`}
              >
                Buy Now
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 text-gray-400 max-w-xl mx-auto">
          <p>
            Need a custom plan? <a href="#contact" className="text-iptv-primary underline">Contact us</a> for special packages and multi-user discounts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
