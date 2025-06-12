
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Handshake, Calendar, DollarSign } from "lucide-react";

export const PartnerWithUs = () => {
  const navigate = useNavigate();

  return (
    <section id="partner" className="py-16 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              🤝 Partner With Us
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-foreground leading-relaxed max-w-3xl mx-auto mb-8">
              We're always looking to collaborate with purpose-driven people and organizations. Let's create meaningful impact together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Co-host Events</h3>
              <p className="text-muted-foreground">Collaborate on workshops and awareness campaigns</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <DollarSign className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Sponsorship</h3>
              <p className="text-muted-foreground">Support our programs and reach youth audiences</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <Handshake className="w-12 h-12 text-success mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Strategic Alliance</h3>
              <p className="text-muted-foreground">Long-term partnerships for community impact</p>
            </div>
          </div>

          <div className="text-center">
            <Button 
              onClick={() => navigate('/partner')}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              🤝 Become a Partner
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              Quick partnership inquiry • Get response within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
