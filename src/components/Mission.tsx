
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Mission = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-100 via-blue-100 to-orange-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <Card className="bg-gradient-to-br from-purple-600 to-blue-600 text-white border-0 shadow-xl hover-scale transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-3xl font-bold mb-4 text-center">
                  🎯 Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-center">
                  To empower youth through education, innovation, and digital awareness—starting with responsible gambling education and expanding into broader tools for social impact.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="bg-gradient-to-br from-orange-500 to-yellow-500 text-white border-0 shadow-xl hover-scale transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-3xl font-bold mb-4 text-center">
                  🌍 Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-center">
                  A generation of informed, skilled, and purpose-driven young people leading positive change in their communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
