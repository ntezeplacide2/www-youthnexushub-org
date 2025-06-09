
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Programs = () => {
  const programs = [
    {
      icon: "🎲",
      title: "Think Before You Bet",
      description: "An awareness campaign using storytelling, videos, and school outreach to help youth understand the risks of irresponsible gambling.",
      status: "Active",
      color: "bg-red-50 border-red-200 hover:bg-red-100"
    },
    {
      icon: "💻",
      title: "Youth Digital Lab",
      description: "Workshops and training sessions in media production, data storytelling, and digital advocacy, giving youth practical skills to make impact.",
      status: "Active",
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100"
    },
    {
      icon: "🤝",
      title: "Community Dialogues",
      description: "Events and safe spaces where parents, teachers, and young people come together to discuss digital harm, resilience, and responsible living.",
      status: "Active",
      color: "bg-success/10 border-success/20 hover:bg-success/20"
    },
    {
      icon: "🌱",
      title: "Youth Impact Studio",
      description: "A support and mentoring hub for young changemakers building social innovation projects in their communities.",
      status: "Coming Soon",
      color: "bg-accent/10 border-accent/20 hover:bg-accent/20"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Our Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Transforming challenges into opportunities through innovative, youth-led initiatives
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className={`${program.color} border-2 shadow-lg hover:shadow-xl transition-all duration-300 group hover-scale slide-up`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{program.icon}</div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                    program.status === 'Coming Soon' 
                      ? 'bg-accent/20 text-accent-foreground group-hover:bg-accent/30' 
                      : 'bg-success/20 text-success-foreground group-hover:bg-success/30'
                  }`}>
                    {program.status}
                  </span>
                </div>
                <CardTitle className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors duration-300">
                  {program.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-foreground leading-relaxed">
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
