
import { Card, CardContent } from "@/components/ui/card";

export const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            What People Say
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/10 shadow-xl slide-up">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="text-4xl md:text-6xl text-accent mb-6">"</div>
              <blockquote className="text-xl md:text-2xl text-foreground italic leading-relaxed mb-8">
                Youth Nexus Hub is exactly what Africa needs right now. Their approach to combining digital literacy with social awareness is brilliant and much needed for the next generation.
              </blockquote>
              <div className="border-t border-primary/20 pt-6">
                <p className="font-semibold text-primary text-lg">Community Education Partner</p>
                <p className="text-muted-foreground">Rwanda Ministry of Education Collaboration</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
