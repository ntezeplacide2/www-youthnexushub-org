
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPrograms = () => {
    document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="bg-gradient-to-br from-blue-50 to-gray-50 py-32 lg:py-40 mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Empowering youth with skills, awareness, and purpose.
          </h1>
          
          <p className={`text-xl md:text-2xl text-foreground mb-4 font-medium transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Built in Rwanda. Impacting Africa.
          </p>
          
          <p className={`text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Youth Nexus Hub Ltd is a youth-led social impact organization equipping young people with digital skills, safe gambling awareness, and tools to lead change in their communities.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Button 
              onClick={scrollToAbout}
              size="lg" 
              className="bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 pulse-glow"
            >
              👉 Explore Our Work
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToPrograms}
              className="border-2 border-primary text-primary hover:bg-success hover:text-success-foreground px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              Join the Movement
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
