
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto rounded-full"></div>
          </div>
          
          <Card className="bg-gray-50 border-0 shadow-lg">
            <CardContent className="p-8 lg:p-12">
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p>
                  Youth Nexus Hub Ltd was founded with a clear purpose: to help young people in Rwanda and across Africa make smarter choices in a fast-changing world. What started as a passion to raise awareness about gambling harm has grown into a mission to empower youth through digital tools, creative skills, and purpose-driven leadership.
                </p>
                
                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                  <p className="font-semibold text-gray-800 text-xl">
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
