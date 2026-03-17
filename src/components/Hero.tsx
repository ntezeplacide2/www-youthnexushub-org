
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shield } from "lucide-react";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
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
            Youth Nexus Hub Ltd is a youth-led organization using technology, awareness, and digital skills to help young people make smarter and safer life decisions across Africa.
          </p>
          
          {/* Primary & Secondary CTAs */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-4 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Button 
              onClick={() => navigate('/betguard')}
              size="lg" 
              className="bg-accent hover:bg-primary text-accent-foreground hover:text-primary-foreground px-8 py-4 text-lg font-bold rounded-lg transition-all duration-300 hover:scale-105 pulse-glow shadow-lg ring-2 ring-accent"
            >
              <Shield className="mr-2" size={22} />
              Check Your Gambling Risk
            </Button>
            
            <Button 
              onClick={() => scrollToSection('about')}
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              👉 Explore Our Work
            </Button>
          </div>

          {/* Additional CTA buttons */}
          <div className={`mt-8 flex flex-wrap gap-3 justify-center transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Button 
              variant="ghost" 
              onClick={() => navigate('/partner')}
              className="text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
            >
              🤝 Become a Partner
            </Button>
            
            <Button 
              variant="ghost" 
              onClick={() => navigate('/join')}
              className="text-primary hover:bg-success hover:text-success-foreground transition-all duration-300 hover:scale-105"
            >
              ✊ Join as a Volunteer
            </Button>
            
            <Button 
              variant="ghost" 
              onClick={() => navigate('/share-story')}
              className="text-primary hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105"
            >
              📖 Share Your Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
