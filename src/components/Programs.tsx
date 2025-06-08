
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Programs = () => {
  const programs = [
    {
      icon: "🎲",
      title: "Think Before You Bet",
      description: "An awareness campaign using storytelling, videos, and school outreach to help youth understand the risks of irresponsible gambling.",
      status: "Active",
      color: "bg-red-50 border-red-200"
    },
    {
      icon: "💻",
      title: "Youth Digital Lab",
      description: "Workshops and training sessions in media production, data storytelling, and digital advocacy—giving youth practical skills to make impact.",
      status: "Active",
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: "🤝",
      title: "Community Dialogues",
      description: "Events and safe spaces where parents, teachers, and young people come together to discuss digital harm, resilience, and responsible living.",
      status: "Active",
      color: "bg-green-50 border-green-200"
    },
    {
      icon: "🌱",
      title: "Youth Impact Studio",
      description: "A support and mentoring hub for young changemakers building social innovation projects in their communities.",
      status: "Coming Soon",
      color: "bg-yellow-50 border-yellow-200"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transforming challenges into opportunities through innovative, youth-led initiatives
          </p>
          <div className="w-20 h-1 bg-blue-900 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className={`${program.color} border-2 shadow-lg hover:shadow-xl transition-all duration-300 group`}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{program.icon}</div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    program.status === 'Coming Soon' 
                      ? 'bg-yellow-200 text-yellow-800' 
                      : 'bg-green-200 text-green-800'
                  }`}>
                    {program.status}
                  </span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {program.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {program.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
