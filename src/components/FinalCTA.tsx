
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Shield } from "lucide-react";

export const FinalCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-br from-accent/10 to-primary/10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Take control today
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
          It only takes 3 minutes to understand your habits and make safer decisions.
        </p>
        <Button
          onClick={() => navigate('/betguard')}
          size="lg"
          className="bg-accent hover:bg-primary text-accent-foreground hover:text-primary-foreground px-8 py-4 text-lg font-bold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg pulse-glow"
        >
          <Shield className="mr-2" size={20} />
          Start Your 3-Minute Check-In
        </Button>
      </div>
    </section>
  );
};
