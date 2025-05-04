
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is IPTV?",
    answer: "IPTV (Internet Protocol Television) is a service that delivers television content over Internet Protocol (IP) networks. Unlike traditional TV that relies on satellite or cable, IPTV uses your internet connection to stream content directly to your device."
  },
  {
    question: "How do I install and use the service?",
    answer: "After purchasing, you'll receive credentials to access our service. You can use these with compatible IPTV apps (like TiviMate, IPTV Smarters, GSE Smart IPTV, etc.) on your preferred device. We provide detailed setup guides for all supported devices."
  },
  {
    question: "Do you offer trials?",
    answer: "Yes, we offer 24-hour trials for a small fee to cover our server costs. This allows you to test our service quality and channel offerings before committing to a subscription. Contact our customer support for more details."
  },
  {
    question: "Which devices are compatible with your service?",
    answer: "Our service works on almost any device: Android, iOS, Windows, Mac, Smart TVs (Samsung, LG, Sony, etc.), Amazon Firestick, Android TV boxes, MAG devices, Formuler, and more. You can also use universal media players like VLC."
  },
  {
    question: "How many connections can I use simultaneously?",
    answer: "Our standard packages include 1 connection. If you need multiple connections for different devices or for family members, we offer multi-connection packages at discounted rates. Please check our pricing page or contact support."
  },
  {
    question: "What channels and content are included?",
    answer: "We offer 10,000+ live channels from around the world, including premium sports, movies, news, entertainment, and international channels. Our service also includes a vast VOD (Video on Demand) library with the latest movies and TV series."
  },
  {
    question: "What is your refund policy?",
    answer: "We offer a 7-day money-back guarantee if you're not satisfied with our service. Please contact our customer support team within 7 days of your purchase to process your refund."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-iptv-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            Frequently Asked <span className="text-iptv-primary">Questions</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Find answers to the most common questions about our IPTV service
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card border-none rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-white hover:text-iptv-primary text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0 text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-10 text-center">
            <p className="text-gray-300">
              Still have questions? 
              <a href="#contact" className="text-iptv-primary ml-1 hover:underline">
                Contact our support team
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
