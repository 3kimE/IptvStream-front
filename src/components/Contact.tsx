
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-iptv-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            Get in <span className="text-iptv-primary">Touch</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help you
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="glass-card rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-white">Send us a message</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="text-gray-300 block mb-2">Name</label>
                <Input 
                  id="name" 
                  placeholder="Your name" 
                  className="bg-iptv-card border-gray-700 text-white"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="text-gray-300 block mb-2">Email</label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-iptv-card border-gray-700 text-white"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="text-gray-300 block mb-2">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Type your message here" 
                  className="bg-iptv-card border-gray-700 text-white h-32"
                />
              </div>
              
              <Button className="w-full bg-iptv-primary hover:bg-iptv-primary/90">
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
              <p className="text-gray-300 mb-4">
                We're committed to providing excellent customer support. Reach out to us through any of these channels:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-iptv-primary/20 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-iptv-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email us at</p>
                    <p className="text-white">support@iptvstream.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-500/20 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Chat on WhatsApp</p>
                    <a href="#" className="text-white hover:text-green-500">Click to Chat</a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-500/20 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Telegram Support</p>
                    <a href="#" className="text-white hover:text-blue-500">@IPTVStreamSupport</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Customer Support Hours</h3>
              <p className="text-gray-300">
                Our team is available 24/7 to assist you with any questions or technical issues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
