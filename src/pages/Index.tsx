
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BetGuardFeature } from "@/components/BetGuardFeature";
import { UrgencyMessage } from "@/components/UrgencyMessage";
import { About } from "@/components/About";
import { Programs } from "@/components/Programs";
import { TakeAction } from "@/components/TakeAction";
import { YourStory } from "@/components/YourStory";
import { PartnerWithUs } from "@/components/PartnerWithUs";
import { Impact } from "@/components/Impact";
import { JoinMovement } from "@/components/JoinMovement";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { FinalCTA } from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <BetGuardFeature />
      <UrgencyMessage />
      <About />
      <Programs />
      <TakeAction />
      <YourStory />
      <PartnerWithUs />
      <Impact />
      <JoinMovement />
      <Testimonials />
      <Contact />
      <FinalCTA />
      
      {/* Authority Line */}
      <motion.div
        className="bg-primary/5 py-6"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-center text-md font-medium text-foreground/80 max-w-3xl mx-auto px-6">
          Youth Nexus Hub Ltd — Building awareness, tools, and opportunities for safer, smarter youth across Africa.
        </p>
      </motion.div>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-6">
            <div className="mb-4 flex justify-center">
              <img 
                src="/lovable-uploads/c1eef694-5e1a-4f0a-a863-3778edbf61cd.png" 
                alt="Youth Nexus Hub Ltd Logo" 
                className="h-16 w-auto opacity-90"
              />
            </div>
            <p className="text-lg italic opacity-90 mb-4">
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
