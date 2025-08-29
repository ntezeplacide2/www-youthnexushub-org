import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Mail, Phone, Github, Linkedin, Camera, Code, Users, TrendingUp, Shield, BarChart3, ExternalLink, Play, FileText, Download, MapPin, Calendar, Book, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AIChatWidget } from "@/components/AIChatWidget";

export const PortfolioPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const projects = [
    {
      title: "BetGuard AI",
      category: "AI & Social Impact",
      description: "AI-powered safe gambling risk checker that helps users assess habits and adopt healthier behavior. Built for the $40K Lovable Build Challenge.",
      image: "/lovable-uploads/99f77507-1891-4f0d-b9e1-2672f6447693.png",
      tech: ["React", "AI/ML", "TypeScript", "Tailwind CSS"],
      status: "Live",
      link: "https://betguard-ai-friend.lovable.app",
      github: "#"
    },
    {
      title: "SmartMail Africa",
      category: "AI & Business Tools",
      description: "AI-driven email marketing tool designed for African SMEs. Features smart campaign generation, predictive send-time optimization, and automated audience segmentation.",
      image: "/lovable-uploads/60129db8-26d2-4844-9a22-63b9a751550c.png",
      tech: ["Node.js", "AI/ML", "PostgreSQL", "React"],
      status: "In Development",
      link: "#",
      github: "#"
    },
    {
      title: "Safe Gambling Advocacy Campaign",
      category: "Creative Media & Advocacy",
      description: "Produced digital content, social media campaigns, and video storytelling in partnership with Green Horizon Venture to raise awareness of responsible gambling.",
      image: "/lovable-uploads/2e7a5af7-770a-4a69-81bd-fc1ca96e7ce9.png",
      tech: ["Adobe Suite", "Video Production", "Social Media", "Content Strategy"],
      status: "Completed",
      link: "#",
      github: "#"
    },
    {
      title: "Youth Nexus Hub Platform",
      category: "Community & Education",
      description: "Digital platform empowering young people through responsible technology use and advocacy. Features community forums, educational resources, and mentorship programs.",
      image: "/lovable-uploads/d4f24810-bb43-4bdc-a9ee-84223274ab4a.png",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      status: "In Development",
      link: "#",
      github: "#"
    },
    {
      title: "Feedback Board App",
      category: "Web Development",
      description: "User feedback platform to gather and prioritize feature requests. Built with modern web technologies and real-time updates.",
      image: "/lovable-uploads/c1eef694-5e1a-4f0a-a863-3778edbf61cd.png",
      tech: ["React", "Express.js", "MongoDB", "Socket.io"],
      status: "Completed",
      link: "#",
      github: "#"
    },
    {
      title: "Photography Portfolio",
      category: "Creative Media",
      description: "Collection of professional photography work including portraits, events, and documentary photography for various campaigns and projects.",
      image: "/lovable-uploads/fb4284a6-f2be-4f4e-ad3a-ab7cc7d660cc.png",
      tech: ["DSLR Photography", "Lightroom", "Photoshop", "Studio Lighting"],
      status: "Ongoing",
      link: "#",
      github: "#"
    }
  ];

  const onlineProfiles = [
    { name: "GitHub", icon: Github, url: "https://github.com/ericuwitonze", color: "bg-gray-900" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/ericuwitonze", color: "bg-blue-600" },
    { name: "Behance", icon: Camera, url: "https://behance.net/ericuwitonze", color: "bg-blue-500" },
    { name: "Kaggle", icon: BarChart3, url: "https://kaggle.com/ericuwitonze", color: "bg-teal-500" },
    { name: "Zindi", icon: TrendingUp, url: "https://zindi.africa/users/ericuwitonze", color: "bg-orange-500" },
    { name: "HuggingFace", icon: Code, url: "https://huggingface.co/ericuwitonze", color: "bg-yellow-500" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
            <nav className="hidden md:flex items-center gap-6">
              {["overview", "projects", "about", "profiles", "blog", "contact"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    document.getElementById(tab)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`capitalize font-medium transition-colors ${
                    activeTab === tab ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="overview" className="pt-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-block bg-accent/10 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
                👋 Hi, I'm Eric Uwitonze
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Technical Support • Creative Media • AI & Safe Gambling Advocate
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                I combine technical expertise with creative storytelling and social impact projects. From IT operations to AI-powered tools, I build solutions that help businesses grow and communities thrive.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
                <Button size="lg" variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact Me
                </Button>
                <Button size="lg" variant="ghost" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                  <Play className="w-4 h-4 mr-2" />
                  View Projects
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Kigali, Rwanda
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Available for Remote Work
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative">
                <img 
                  src="/lovable-uploads/99f77507-1891-4f0d-b9e1-2672f6447693.png" 
                  alt="Eric Uwitonze - Professional Photo" 
                  className="w-80 h-80 object-cover rounded-3xl mx-auto shadow-2xl border-4 border-background animate-fade-in"
                />
                <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-4 rounded-2xl shadow-lg animate-fade-in">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div className="absolute -top-6 -left-6 bg-success text-success-foreground p-4 rounded-2xl shadow-lg animate-fade-in">
                  <Shield className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my work in AI, web development, creative media, and social impact projects.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  )}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Live' ? 'bg-success text-success-foreground' :
                      project.status === 'In Development' ? 'bg-accent text-accent-foreground' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                    <div className="flex gap-2">
                      {project.link !== "#" && (
                        <Button size="sm" variant="ghost" asChild>
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                      {project.github !== "#" && (
                        <Button size="sm" variant="ghost" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-accent font-medium">{project.category}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">About Me</h2>
              <p className="text-xl text-muted-foreground">
                Tech support meets digital empowerment, powering youth through safe and ethical tech.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/3">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/2e7a5af7-770a-4a69-81bd-fc1ca96e7ce9.png" 
                    alt="Eric - Professional Portrait" 
                    className="w-full max-w-sm mx-auto rounded-2xl shadow-xl"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>
                {/* Video Placeholder */}
                <Card className="mt-6">
                  <CardContent className="p-6 text-center">
                    <div className="bg-muted rounded-lg p-8 mb-4">
                      <Play className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Intro Video Coming Soon</p>
                    </div>
                    <p className="text-sm">Watch my 2-minute introduction video</p>
                  </CardContent>
                </Card>
              </div>
              <div className="lg:w-2/3 space-y-6">
                <div>
                  <p className="text-lg leading-relaxed text-foreground mb-6">
                    I'm <strong>Eric Uwitonze</strong>, a technical support specialist, digital media creator, and founder of <strong>Youth Nexus Hub Ltd</strong>, a youth-centered platform empowering young people through responsible technology use and advocacy. My work blends hands-on tech support (Power BI, remote desktop systems), multimedia storytelling (Adobe Suite, DSLR video), and community engagement to drive social impact across digital spaces.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-foreground mb-6">
                    Through Youth Nexus Hub Ltd, I envision a future where every young person in Africa is equipped to navigate and shape the digital world ethically.
                  </p>
                </div>
                
                <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-none">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-primary mb-2">Let's collaborate:</h3>
                    <p className="text-foreground">
                      I'm currently open to remote tech support opportunities, digital advocacy campaigns, and projects focused on youth empowerment through tech and media.
                    </p>
                  </CardContent>
                </Card>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  {[
                    { icon: Code, label: "Tech Support" },
                    { icon: Camera, label: "Creative Media" },
                    { icon: Users, label: "Leadership" },
                    { icon: Shield, label: "Advocacy" }
                  ].map((item, index) => (
                    <div key={index} className="text-center p-4 bg-background rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                      <p className="font-semibold text-sm">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Profiles Hub */}
      <section id="profiles" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Online Profiles Hub</h2>
            <p className="text-xl text-muted-foreground">
              Connect with me across different platforms and see my work in action.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {onlineProfiles.map((profile, index) => (
              <a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 ${profile.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                      <profile.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-semibold text-sm group-hover:text-primary transition-colors">{profile.name}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
          
          {/* Comms Materials */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8">Communications Materials</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              <Button size="lg" variant="outline">
                <FileText className="w-4 h-4 mr-2" />
                Sample Cover Letter
              </Button>
              <Button size="lg" variant="outline">
                <FileText className="w-4 h-4 mr-2" />
                One-Page Profile
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reflection Journal Preview */}
      <section id="blog" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Reflection Journal</h2>
            <p className="text-xl text-muted-foreground">
              My digital notebook for sharing thoughts, project updates, and professional insights.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <Book className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle>Welcome to My Reflection Journal</CardTitle>
                    <p className="text-sm text-muted-foreground">Published 2 days ago</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Hello and welcome 👋 This space is my personal digital notebook — a place where I share my journey, ideas, and reflections. Here, you'll find thoughts on technology, AI, safe gambling, and creative media, along with updates on the projects I'm building...
                </p>
                <Button variant="outline" size="sm">
                  Read More
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
            <div className="text-center">
              <Button size="lg" onClick={() => navigate('/blog')}>
                <Book className="w-4 h-4 mr-2" />
                View All Posts
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Let's Connect</h2>
              <p className="text-xl text-muted-foreground">
                Have a project, opportunity, or idea? Let's talk!
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:erikal20w@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        erikal20w@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <a href="https://wa.me/250788123456" className="text-muted-foreground hover:text-primary transition-colors">
                        +250 788 123 456
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Linkedin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <a href="https://linkedin.com/in/ericuwitonze" className="text-muted-foreground hover:text-primary transition-colors">
                        linkedin.com/in/ericuwitonze
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name</label>
                        <input 
                          type="text" 
                          className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name</label>
                        <input 
                          type="text" 
                          className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <textarea 
                        rows={4}
                        className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Tell me about your project or opportunity..."
                      ></textarea>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="captcha" className="rounded" />
                      <label htmlFor="captcha" className="text-sm text-muted-foreground">
                        I'm not a robot (Captcha verification)
                      </label>
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                      <MessageCircle className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Eric Uwitonze</h3>
              <p className="text-primary-foreground/80">Technical Support • Creative Media • AI Advocate</p>
            </div>
            <div className="flex gap-4">
              {onlineProfiles.slice(0, 4).map((profile, index) => (
                <a
                  key={index}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <profile.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} Eric Uwitonze. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      {/* AI Chat Widget */}
      <AIChatWidget />
    </div>
  );
};