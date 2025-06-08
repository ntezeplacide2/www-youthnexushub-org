
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Connect
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Whether you want to collaborate, support our work, or learn more—we'd love to hear from you.
            </p>
            <div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full mt-6"></div>
          </div>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl text-white">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6 text-lg">
                <div className="space-y-4">
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <MapPin className="w-5 h-5" />
                    <span>Kigali, Rwanda</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <Mail className="w-5 h-5" />
                    <span>erikal20w@gmail.com</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <Phone className="w-5 h-5" />
                    <span>+250783385395</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <Instagram className="w-5 h-5" />
                    <span>@youthnexushub</span>
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <Button 
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-4 text-lg transition-all duration-300 rounded-lg"
                  onClick={() => window.open('mailto:erikal20w@gmail.com', '_blank')}
                >
                  Start the Conversation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
