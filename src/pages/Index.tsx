
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, BookOpen, Contact } from "lucide-react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Mission } from "@/components/Mission";
import { Programs } from "@/components/Programs";
import { Contact as ContactSection } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50">
      <Hero />
      <About />
      <Mission />
      <Programs />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Youth Nexus Hub Ltd</h3>
            <p className="text-lg italic opacity-90">
              "Built by youth. Led by purpose. Powered by community."
            </p>
          </div>
          <div className="text-sm opacity-75">
            <p>© 2024 Youth Nexus Hub Ltd. Based in Kigali, Rwanda.</p>
            <p className="mt-2">Empowering youth to make smarter, safer choices.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
