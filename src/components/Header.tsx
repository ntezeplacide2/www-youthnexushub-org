
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link as LinkIcon } from "lucide-react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
          {/* BetGuard AI Button */}
          <Button
            size="lg"
            onClick={() => navigate('/betguard')}
            className="ml-4 flex items-center bg-yellow-400 text-black font-bold px-6 py-2 rounded-lg shadow-lg hover:bg-yellow-500 hover:text-black transition-all duration-200 border-2 border-yellow-500"
            style={{ letterSpacing: ".5px" }}
          >
            <LinkIcon className="mr-2" size={20} />
            BetGuard AI
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label="Open Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute left-0 w-full bg-white shadow-lg px-6 pt-4 pb-6 z-50 animate-in fade-in">
          <div className="flex flex-col gap-3">
            <button onClick={() => { scrollToSection('hero'); setMobileMenuOpen(false); }}
              className="text-gray-700 text-lg font-medium text-left">Home</button>
            <button onClick={() => { scrollToSection('about'); setMobileMenuOpen(false); }}
              className="text-gray-700 text-lg font-medium text-left">About</button>
            <button onClick={() => { scrollToSection('programs'); setMobileMenuOpen(false); }}
              className="text-gray-700 text-lg font-medium text-left">Programs</button>
            <button onClick={() => { navigate('/portfolio'); setMobileMenuOpen(false); }}
              className="text-gray-700 text-lg font-medium text-left">Portfolio</button>
            <button onClick={() => { scrollToSection('partner'); setMobileMenuOpen(false); }}
              className="text-gray-700 text-lg font-medium text-left">Partner</button>
            <button onClick={() => { scrollToSection('join'); setMobileMenuOpen(false); }}
              className="text-gray-700 text-lg font-medium text-left">Join Us</button>
            <button onClick={() => { scrollToSection('impact'); setMobileMenuOpen(false); }}
              className="text-gray-700 text-lg font-medium text-left">Impact</button>
            <button onClick={() => { scrollToSection('contact'); setMobileMenuOpen(false); }}
              className="text-gray-700 text-lg font-medium text-left">Contact</button>
            {/* BetGuard AI Button Mobile */}
            <Button
              size="lg"
              onClick={() => { navigate('/betguard'); setMobileMenuOpen(false); }}
              className="w-full mt-2 flex items-center bg-yellow-400 text-black font-bold px-6 py-2 rounded-lg shadow-lg hover:bg-yellow-500 hover:text-black transition-all duration-200 border-2 border-yellow-500 justify-center"
              style={{ letterSpacing: ".5px" }}
            >
              <LinkIcon className="mr-2" size={20} />
              BetGuard AI
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
