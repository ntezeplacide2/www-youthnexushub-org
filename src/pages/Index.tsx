
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, BookOpen, Contact } from "lucide-react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Mission } from "@/components/Mission";
import { Programs } from "@/components/Programs";
import { Impact } from "@/components/Impact";
import { Contact as ContactSection } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50">
      <Hero />
      <About />
      <Programs />
      <Impact />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-6">
            {/* Logo in Footer */}
            <div className="mb-4 flex justify-center">
              <img 
                src="/lovable-uploads/fb4284a6-f2be-4f4e-ad3a-ab7cc7d660cc.png" 
                alt="Youth Nexus Hub Ltd Logo" 
                className="w-20 h-auto opacity-90"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Youth Nexus Hub Ltd</h3>
            <p className="text-lg italic opacity-90">
              "Empowering youth with skills, awareness, and purpose."
            </p>
          </div>
          <div className="text-sm opacity-75">
            <p>© 2024 Youth Nexus Hub Ltd. Based in Kigali, Rwanda.</p>
            <p className="mt-2">Youth-led, values-driven, committed to turning challenges into opportunity.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
