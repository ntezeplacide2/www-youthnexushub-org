
import { Button } from "@/components/ui/button";

export const Header = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Horizontal Logo */}
        <div className="flex items-center gap-4">
          <img 
            src="/lovable-uploads/c1eef694-5e1a-4f0a-a863-3778edbf61cd.png" 
            alt="Youth Nexus Hub Ltd" 
            className="h-12 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-gray-700 hover:text-blue-900 font-medium transition-colors duration-200"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-700 hover:text-blue-900 font-medium transition-colors duration-200"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('programs')}
            className="text-gray-700 hover:text-blue-900 font-medium transition-colors duration-200"
          >
            Programs
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-gray-700 hover:text-blue-900 font-medium transition-colors duration-200"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};
