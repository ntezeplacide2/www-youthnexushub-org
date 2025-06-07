
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500 opacity-10"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-green-300 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-300 rounded-full opacity-20 animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&h=200&q=80" 
              alt="Youth Nexus Hub Ltd Logo" 
              className="w-32 h-auto md:w-40 hover-scale transition-all duration-300"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-orange-500 bg-clip-text text-transparent animate-fade-in">
            Empowering Youth to Make Smarter, Safer Choices
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed animate-fade-in delay-200">
            Youth Nexus Hub Ltd is a Rwandan-based social impact organization committed to youth empowerment through digital education, safe gambling awareness, and creative innovation.
          </p>

          {/* Banner Image */}
          <div className="mb-8 flex justify-center animate-fade-in delay-300">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=400&q=80" 
              alt="Youth Nexus Hub Banner - Empowering youth for a brighter future" 
              className="rounded-lg shadow-2xl max-w-full h-auto hover-scale transition-all duration-300"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-400">
            <Button 
              onClick={scrollToAbout}
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg transition-all duration-300 hover-scale"
            >
              Discover Our Story
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 text-lg transition-all duration-300"
            >
              Explore Programs
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-purple-600" />
        </div>
      </div>
    </section>
  );
};
