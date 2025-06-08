
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Programs = () => {
  const programs = [
    {
      icon: "🎲",
      title: "Think Before You Bet",
      description: "An awareness campaign using storytelling, videos, and school outreach to help youth understand the risks of irresponsible gambling.",
      status: "Active",
      bgColor: "from-red-500 to-pink-500"
    },
    {
      icon: "💻",
      title: "Youth Digital Lab",
      description: "Workshops and training sessions in media production, data storytelling, and digital advocacy—giving youth practical skills to make impact.",
      status: "Active",
      bgColor: "from-blue-500 to-purple-500"
    },
    {
      icon: "🤝",
      title: "Community Dialogues",
      description: "Events and safe spaces where parents, teachers, and young people come together to discuss digital harm, resilience, and responsible living.",
      status: "Active",
      bgColor: "from-green-500 to-blue-500"
    },
    {
      icon: "🌱",
      title: "Youth Impact Studio",
      description: "A support and mentoring hub for young changemakers building social innovation projects in their communities.",
      status: "Coming Soon",
      bgColor: "from-orange-500 to-yellow-500"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming challenges into opportunities through innovative, youth-led initiatives
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden border-0 shadow-lg hover-scale transition-all duration-300 group"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${program.bgColor} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{program.icon}</div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    program.status === 'Coming Soon' 
                      ? 'bg-orange-100 text-orange-700' 
                      : 'bg-green-100 text-green-700'
                  }`}>
                    {program.status}
                  </span>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
                  {program.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  {program.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
