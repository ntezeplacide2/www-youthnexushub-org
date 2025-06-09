
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Story
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <Card className="bg-secondary border-0 shadow-lg">
            <CardContent className="p-8 lg:p-12">
              <div className="space-y-6 text-lg leading-relaxed text-foreground">
                <p>
                  Youth Nexus Hub Ltd was founded with a clear purpose: to help young people in Rwanda and across Africa make smarter choices in a fast-changing world. What started as a passion to raise awareness about gambling harm has grown into a mission to empower youth through digital tools, creative skills, and purpose-driven leadership.
                </p>
                
                <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                  <p className="font-semibold text-primary text-xl">
                    We are youth-led, values-driven, and committed to turning challenges into opportunity.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
