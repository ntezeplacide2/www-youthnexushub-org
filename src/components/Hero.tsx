
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPrograms = () => {
    document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="bg-gradient-to-br from-blue-50 to-gray-50 py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Empowering youth with skills, awareness, and purpose.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
            Built in Rwanda. Impacting Africa.
          </p>
          
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Youth Nexus Hub Ltd is a youth-led social impact organization equipping young people with digital skills, safe gambling awareness, and tools to lead change in their communities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToAbout}
              size="lg" 
              className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              👉 Explore Our Work
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToPrograms}
              className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              Join the Movement
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
