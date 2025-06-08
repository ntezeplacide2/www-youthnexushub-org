
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Impact = () => {
  const impacts = [
    {
      icon: "🎯",
      title: "Youth Reached",
      value: "500+",
      description: "Young people engaged through our programs and campaigns"
    },
    {
      icon: "🏫",
      title: "Schools Visited",
      value: "25+",
      description: "Educational institutions where we've delivered awareness sessions"
    },
    {
      icon: "📱",
      title: "Digital Skills Trained",
      value: "200+",
      description: "Youth equipped with practical digital and media skills"
    },
    {
      icon: "🤝",
      title: "Community Events",
      value: "15+",
      description: "Dialogues and workshops fostering community engagement"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Our Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Measuring change, celebrating progress, and building momentum for a brighter future
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {impacts.map((impact, index) => (
            <Card 
              key={index} 
              className="text-center border-0 shadow-lg hover-scale transition-all duration-300 group bg-white"
            >
              <CardHeader className="pb-4">
                <div className="text-5xl mb-4">{impact.icon}</div>
                <CardTitle className="text-3xl font-bold text-purple-600 group-hover:text-blue-600 transition-colors duration-300">
                  {impact.value}
                </CardTitle>
                <h3 className="text-xl font-semibold text-gray-800">
                  {impact.title}
                </h3>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {impact.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Together, we're building a generation of informed, skilled, and purpose-driven young leaders.
            </h3>
            <p className="text-gray-700 text-lg">
              Every workshop, every conversation, and every young person we reach brings us closer to a future where youth make smarter, safer choices and lead positive change in their communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
