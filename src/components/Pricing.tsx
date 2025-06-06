
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

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
    limitations: [
      "Single Screen",
      "No Premium Sports",
      "No PPV Events"
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
    limitations: [
      "No Premium Sports",
      "No PPV Events"
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
    limitations: [
      "No PPV Events"
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
    limitations: [],
    popular: false,
    savings: "Save $80"
  }
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <section id="pricing" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Simple & Transparent <span className="text-iptv-primary">Pricing</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your entertainment needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-iptv-primary/20 ${
                plan.popular 
                  ? 'border-2 border-iptv-primary' 
                  : 'border border-gray-700/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -right-12 top-6 bg-iptv-primary text-white py-1 px-12 transform rotate-45">
                  Popular
                </div>
              )}
              
              <div className="bg-gradient-to-b from-gray-900 to-gray-800 p-8">
                <h3 className="text-xl font-semibold mb-2 text-white">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                </div>
                {plan.savings && (
                  <span className="inline-block mt-1 mb-4 text-sm font-medium py-1 px-3 rounded-full bg-iptv-primary/20 text-iptv-primary">
                    {plan.savings}
                  </span>
                )}
                
                <div className="my-6 border-t border-gray-700"></div>
                
                <ul className="mb-6 space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <div className="mr-3 p-1 rounded-full bg-green-500/20">
                        <Check className="h-4 w-4 text-green-500" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                  
                  {plan.limitations.map((limitation, idx) => (
                    <li key={`limit-${idx}`} className="flex items-center text-gray-500">
                      <div className="mr-3 p-1 rounded-full bg-red-500/10">
                        <X className="h-4 w-4 text-red-500" />
                      </div>
                      <span>{limitation}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular 
                    ? 'bg-iptv-primary hover:bg-iptv-primary/90' 
                    : 'bg-gray-800 hover:bg-gray-700 border border-iptv-primary/60'
                  }`}
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 text-gray-400 max-w-xl mx-auto">
          <p>
            Need a custom plan? <a href="#contact" className="text-iptv-primary hover:underline">Contact us</a> for special packages and multi-user discounts.
          </p>
          <p className="mt-2 text-gray-500 text-sm">
            All plans come with our 7-day money-back guarantee. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
