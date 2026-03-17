
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Shield, Lock, Zap, Globe } from "lucide-react";

export const BetGuardFeature = () => {
  const navigate = useNavigate();

  const features = [
    { icon: <Lock className="h-5 w-5" />, text: "Anonymous and private" },
    { icon: <Zap className="h-5 w-5" />, text: "Instant feedback" },
    { icon: <Globe className="h-5 w-5" />, text: "Built for youth in Africa" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent-foreground px-4 py-2 rounded-full mb-6 font-medium">
            <Shield className="h-5 w-5" />
            Featured Tool
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            BetGuard AI – Your Safer Gambling Friend
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            A quick, private self-check tool that helps you understand your gambling habits and make safer decisions in just 3 minutes.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-2 text-foreground font-medium">
                <span className="text-accent">{f.icon}</span>
                {f.text}
              </div>
            ))}
          </div>

          <Button
            onClick={() => navigate('/betguard')}
            size="lg"
            className="bg-accent hover:bg-primary text-accent-foreground hover:text-primary-foreground px-8 py-4 text-lg font-bold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Start Your 3-Minute Check-In
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            No signup required. Completely confidential.
          </p>
        </div>
      </div>
    </section>
  );
};
