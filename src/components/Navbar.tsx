
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 
      ${scrolled ? 'backdrop-blur-lg bg-black/80 shadow-lg shadow-black/20' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-white">
            <span className="bg-gradient-to-r from-iptv-primary to-purple-500 bg-clip-text text-transparent">IPTV</span>
            <span>Stream</span>
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-white hover:text-iptv-primary transition-colors font-medium">Home</a>
          <a href="#features" className="text-white hover:text-iptv-primary transition-colors font-medium">Features</a>
          <a href="#devices" className="text-white hover:text-iptv-primary transition-colors font-medium">Devices</a>
          <a href="#pricing" className="text-white hover:text-iptv-primary transition-colors font-medium">Pricing</a>
          <a href="#faq" className="text-white hover:text-iptv-primary transition-colors font-medium">FAQ</a>
          <a href="#contact" className="text-white hover:text-iptv-primary transition-colors font-medium">Contact</a>
          <Button className="bg-iptv-primary hover:bg-iptv-primary/90 text-white rounded-full px-6">Get Started</Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col space-y-6">
              <a 
                href="#home" 
                className="text-white hover:text-iptv-primary transition-colors text-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#features" 
                className="text-white hover:text-iptv-primary transition-colors text-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#devices" 
                className="text-white hover:text-iptv-primary transition-colors text-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Devices
              </a>
              <a 
                href="#pricing" 
                className="text-white hover:text-iptv-primary transition-colors text-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#faq" 
                className="text-white hover:text-iptv-primary transition-colors text-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <a 
                href="#contact" 
                className="text-white hover:text-iptv-primary transition-colors text-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button className="bg-iptv-primary hover:bg-iptv-primary/90 text-white w-full rounded-full">
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
