
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Users, Megaphone, Award } from "lucide-react";

export const JoinMovement = () => {
  const navigate = useNavigate();

  return (
    <section id="join" className="py-16 bg-accent/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              <Users className="inline mr-2 h-8 w-8" /> Join the Movement
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-foreground leading-relaxed max-w-3xl mx-auto mb-8">
              Want to make a difference in your community? Volunteer with Youth Nexus Hub Ltd and be part of a youth-powered mission for digital awareness and community resilience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Community Outreach</h3>
              <p className="text-muted-foreground">Engage with local communities and schools</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <Megaphone className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Awareness Campaigns</h3>
              <p className="text-muted-foreground">Help spread important messages about digital safety</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <Award className="w-12 h-12 text-success mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Skill Development</h3>
              <p className="text-muted-foreground">Gain leadership and project management experience</p>
            </div>
          </div>

          <div className="text-center">
            <Button 
              onClick={() => navigate('/join')}
              size="lg"
              className="bg-success hover:bg-success/90 text-success-foreground px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Users className="mr-2 h-5 w-5" /> Join as a Volunteer
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              Flexible time commitment • Training provided • Make real impact
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
