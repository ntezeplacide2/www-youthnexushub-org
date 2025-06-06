
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              About Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-lg hover-scale transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-center text-gray-800 mb-4">
                Our Story
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                Youth Nexus Hub Ltd was born out of a simple but urgent question: 
                <span className="font-semibold text-purple-700"> What if young people had the knowledge, tools, and support to protect themselves from digital harms, and use their skills for good?</span>
              </p>
              
              <p>
                Founded in 2023 by <span className="font-semibold text-blue-700">Eric Kalisa</span>, a trained communicator, digital content creator, and advocate for responsible gambling, the Hub was created to turn lived experience into action.
              </p>
              
              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-lg border-l-4 border-orange-500">
                <p className="font-medium text-gray-800">
                  We've faced challenges, broken promises, and delays, but we've turned them into fuel. Today, Youth Nexus Hub stands as a youth-led, community-rooted initiative, determined to inspire smarter choices and brighter futures.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
