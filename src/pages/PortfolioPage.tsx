
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Mail, Phone, Linkedin, Camera, Code, Users, TrendingUp, Shield, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const PortfolioPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <div className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-4 text-primary-foreground hover:bg-primary-foreground/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                🌟 Eric's Digital Portfolio
              </h1>
              <p className="text-xl lg:text-2xl opacity-90 mb-6">
                Technical Support | Creative Media | Social Impact Advocate
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="font-semibold"
                  onClick={() => window.open('mailto:erikal20w@gmail.com')}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Camera className="w-4 h-4 mr-2" />
                  View Projects
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="/lovable-uploads/99f77507-1891-4f0d-b9e1-2672f6447693.png" 
                  alt="Eric - Professional Photo" 
                  className="w-80 h-80 object-cover rounded-full mx-auto shadow-2xl border-4 border-primary-foreground/20"
                />
                <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground p-4 rounded-full shadow-lg">
                  <TrendingUp className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">About Me</h2>
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/3">
                <img 
                  src="/lovable-uploads/2e7a5af7-770a-4a69-81bd-fc1ca96e7ce9.png" 
                  alt="Eric - Professional Portrait" 
                  className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="lg:w-2/3">
                <p className="text-lg leading-relaxed text-foreground">
                  I'm Eric — a versatile professional with experience in technical support, multimedia production, and social impact projects focused on safe gambling. I combine my skills in customer service, video production, and stakeholder engagement to create meaningful content and solutions.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                    <Code className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold text-sm">Tech Support</p>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                    <Camera className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold text-sm">Creative Media</p>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                    <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold text-sm">Leadership</p>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                    <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold text-sm">Advocacy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Professional Experience</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary" />
                  Technical Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">PremierBet & Editec</p>
                <p>Supporting clients and resolving technical issues with a customer-centric approach.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Operations Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">Hospitality & Telecom</p>
                <p>Led teams in hospitality and telecom sectors, focusing on quality service delivery.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="w-5 h-5 text-primary" />
                  Creative Media
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">Film & Digital Content</p>
                <p>Filmmaking, photography, and video editing for campaigns promoting safe gambling awareness.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Skills */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Key Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 bg-background p-4 rounded-lg shadow-sm">
              <Code className="w-6 h-6 text-primary" />
              <span className="font-medium">Technical Support & Customer Service</span>
            </div>
            <div className="flex items-center gap-3 bg-background p-4 rounded-lg shadow-sm">
              <Camera className="w-6 h-6 text-primary" />
              <span className="font-medium">Multimedia Production</span>
            </div>
            <div className="flex items-center gap-3 bg-background p-4 rounded-lg shadow-sm">
              <Users className="w-6 h-6 text-primary" />
              <span className="font-medium">Communication & Engagement</span>
            </div>
            <div className="flex items-center gap-3 bg-background p-4 rounded-lg shadow-sm">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-medium">Safe Gambling Advocacy</span>
            </div>
            <div className="flex items-center gap-3 bg-background p-4 rounded-lg shadow-sm">
              <BarChart3 className="w-6 h-6 text-primary" />
              <span className="font-medium">Data Analytics & Power BI</span>
            </div>
            <div className="flex items-center gap-3 bg-background p-4 rounded-lg shadow-sm">
              <Code className="w-6 h-6 text-primary" />
              <span className="font-medium">Web Development Basics</span>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Projects */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Selected Projects</h2>
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/lovable-uploads/60129db8-26d2-4844-9a22-63b9a751550c.png" 
                  alt="Eric - Professional Work" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Safe Gambling Campaign</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Developed multimedia content and educational materials to promote responsible gambling in Rwanda.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Code className="w-16 h-16 text-primary" />
              </div>
              <CardHeader>
                <CardTitle>Feedback Board App</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Designed and coded a user feedback platform to gather and prioritize feature requests.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/lovable-uploads/d4f24810-bb43-4bdc-a9ee-84223274ab4a.png" 
                  alt="Eric - Casual Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Youth Nexus Hub Ltd</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Founder of a social enterprise supporting youth empowerment and advocacy projects.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Education & Certifications</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Formal Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-semibold">Diploma in Information Systems</h4>
                  <p className="text-sm text-muted-foreground">Core technical foundation</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-semibold">Biomedical Laboratory Training</h4>
                  <p className="text-sm text-muted-foreground">Including internship experience</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Professional Certifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="border-l-2 border-accent pl-4">
                  <h4 className="font-semibold">ICDL Certified</h4>
                  <p className="text-sm text-muted-foreground">Data Analytics, Cyber Security, Power BI</p>
                </div>
                <div className="border-l-2 border-accent pl-4">
                  <h4 className="font-semibold">Filmmaking & Photography</h4>
                  <p className="text-sm text-muted-foreground">GreenLand Film & Television School</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Connect!</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            I'm open to collaborations, projects, and opportunities that make a difference. Reach out via:
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <img 
              src="/lovable-uploads/2e924eef-f23d-40c6-bdc8-f42484ded357.png" 
              alt="Eric - Contact Photo" 
              className="w-32 h-32 object-cover rounded-full border-4 border-primary-foreground/20"
            />
            <div className="space-y-4">
              <Button 
                size="lg" 
                variant="secondary" 
                className="w-full md:w-auto"
                onClick={() => window.open('mailto:erikal20w@gmail.com')}
              >
                <Mail className="w-4 h-4 mr-2" />
                erikal20w@gmail.com
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full md:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => window.open('https://linkedin.com/in/eric-uwitonze-954a3b16a', '_blank')}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn Profile
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full md:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => window.open('tel:+250783385395')}
              >
                <Phone className="w-4 h-4 mr-2" />
                +250 783 385 395
              </Button>
            </div>
          </div>
          
          <div className="text-center opacity-80">
            <p className="text-lg">📍 Kigali, Rwanda</p>
          </div>
        </div>
      </section>
    </div>
  );
};
