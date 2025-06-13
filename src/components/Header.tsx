
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`bg-white shadow-sm border-b border-gray-100 fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'py-2 shadow-lg' : 'py-4'
    }`}>
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Horizontal Logo */}
        <div className="flex items-center gap-4">
          <img 
            src="/lovable-uploads/c1eef694-5e1a-4f0a-a863-3778edbf61cd.png" 
            alt="Youth Nexus Hub Ltd" 
            className={`w-auto transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'}`}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-gray-700 hover:text-blue-900 font-medium transition-all duration-200 hover:scale-105"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-700 hover:text-blue-900 font-medium transition-all duration-200 hover:scale-105"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('programs')}
            className="text-gray-700 hover:text-blue-900 font-medium transition-all duration-200 hover:scale-105"
          >
            Programs
          </button>
          <button 
            onClick={() => navigate('/portfolio')}
            className="text-gray-700 hover:text-blue-900 font-medium transition-all duration-200 hover:scale-105"
          >
            Portfolio
          </button>
          <button 
            onClick={() => scrollToSection('partner')}
            className="text-gray-700 hover:text-blue-900 font-medium transition-all duration-200 hover:scale-105"
          >
            Partner
          </button>
          <button 
            onClick={() => scrollToSection('join')}
            className="text-gray-700 hover:text-blue-900 font-medium transition-all duration-200 hover:scale-105"
          >
            Join Us
          </button>
          <button 
            onClick={() => scrollToSection('impact')}
            className="text-gray-700 hover:text-blue-900 font-medium transition-all duration-200 hover:scale-105"
          >
            Impact
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-gray-700 hover:text-blue-900 font-medium transition-all duration-200 hover:scale-105"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};
