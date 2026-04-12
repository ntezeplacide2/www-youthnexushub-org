
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Shield, Handshake, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

export const TakeAction = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          Take Action Today
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you want to understand your habits, learn new skills, or support others, there's a place for you at Youth Nexus Hub.
        </p>
        <motion.p
          className="text-md text-foreground/70 italic max-w-xl mx-auto mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Small steps today can prevent bigger challenges tomorrow.
        </motion.p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            onClick={() => navigate('/betguard')}
            size="lg"
            className="bg-accent hover:bg-primary text-accent-foreground hover:text-primary-foreground px-8 py-4 text-lg font-bold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Shield className="mr-2" size={20} />
            Check Your Gambling Risk
          </Button>
          <Button
            onClick={() => navigate('/partner')}
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            <Handshake className="mr-2" size={20} /> Become a Partner
          </Button>
          <Button
            onClick={() => navigate('/join')}
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-success hover:text-success-foreground px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            <HeartHandshake className="mr-2" size={20} /> Join as a Volunteer
          </Button>
        </div>
      </div>
    </section>
  );
};
