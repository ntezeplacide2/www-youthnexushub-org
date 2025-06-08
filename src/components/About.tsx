
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-lg hover-scale transition-all duration-300">
            <CardContent className="space-y-6 text-lg leading-relaxed text-gray-700 p-8">
              <p>
                Youth Nexus Hub Ltd was founded with a clear purpose: to help young people in Rwanda and across Africa make smarter choices in a fast-changing world. What started as a passion to raise awareness about gambling harm has grown into a mission to empower youth through digital tools, creative skills, and purpose-driven leadership.
              </p>
              
              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-lg border-l-4 border-orange-500">
                <p className="font-medium text-gray-800">
                  We are youth-led, values-driven, and committed to turning challenges into opportunity.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
