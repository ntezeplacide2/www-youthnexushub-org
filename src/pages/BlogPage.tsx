import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, Book, Tag, User, Clock, Heart, MessageCircle, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const BlogPage = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: "Welcome to My Reflection Journal",
      excerpt: "Hello and welcome 👋 This space is my personal digital notebook — a place where I share my journey, ideas, and reflections.",
      content: `Hello and welcome 👋

This space is my personal digital notebook — a place where I share my journey, ideas, and reflections. Here, you'll find thoughts on technology, AI, safe gambling, and creative media, along with updates on the projects I'm building.

I believe learning is a continuous process, and documenting it openly helps me grow while also inspiring others who might be on similar paths. Expect posts ranging from project insights and career reflections to personal experiments in design, AI, and storytelling.

Thanks for stopping by, and I hope you'll find value in following along with my journey. 🚀`,
      date: "2024-01-20",
      readTime: "3 min",
      tags: ["Welcome", "Personal", "Journey"],
      featured: true
    },
    {
      id: 2,
      title: "Building BetGuard AI: Lessons from the Lovable Challenge",
      excerpt: "Insights from developing an AI-powered safe gambling tool and participating in the $40K Lovable Build Challenge.",
      content: `Participating in the Lovable Build Challenge was an incredible experience that pushed me to think creatively about AI's role in social impact...`,
      date: "2024-01-18",
      readTime: "7 min",
      tags: ["AI", "Safe Gambling", "Development"],
      featured: true
    },
    {
      id: 3,
      title: "The Power of Creative Media in Digital Advocacy",
      excerpt: "How storytelling and visual media can amplify important social messages, particularly in the context of responsible gambling awareness.",
      content: `In my work with safe gambling advocacy, I've learned that technical solutions alone aren't enough...`,
      date: "2024-01-15",
      readTime: "5 min",
      tags: ["Creative Media", "Advocacy", "Storytelling"],
      featured: false
    },
    {
      id: 4,
      title: "Youth Empowerment Through Technology: A Vision for Africa",
      excerpt: "Exploring how Youth Nexus Hub Ltd aims to equip young Africans with digital literacy and ethical tech practices.",
      content: `Technology has the power to transform lives, but only when it's accessible and ethically implemented...`,
      date: "2024-01-12",
      readTime: "6 min",
      tags: ["Youth", "Technology", "Africa", "Education"],
      featured: false
    },
    {
      id: 5,
      title: "Technical Support as a Pathway to Understanding User Needs",
      excerpt: "What I've learned about empathy, problem-solving, and user experience through years of technical support work.",
      content: `Working in technical support has taught me more about human psychology and problem-solving than any formal course...`,
      date: "2024-01-10",
      readTime: "4 min",
      tags: ["Technical Support", "UX", "Learning"],
      featured: false
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/portfolio')}
            className="flex items-center gap-2 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Button>
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-bold mb-2">Reflection Journal</h1>
            <p className="text-xl text-muted-foreground">
              My digital notebook for thoughts, insights, and project updates
            </p>
          </div>
        </div>
      </header>

      {/* Featured Posts */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">Featured Posts</h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Book className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-primary">Featured</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="group-hover:bg-primary/10">
                      Read More
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="flex items-center gap-1 px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs">
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">Recent Posts</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {recentPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-3">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          Eric Uwitonze
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button variant="outline" size="sm">
                        Read Post
                      </Button>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Heart className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MessageCircle className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to get notified when I publish new posts about technology, AI, and social impact.
            </p>
            <Card>
              <CardContent className="p-6">
                <form className="flex flex-col md:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <Button type="submit" size="lg">
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground mt-3">
                  No spam, unsubscribe at any time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-xl font-bold mb-2">Eric Uwitonze</h3>
          <p className="text-primary-foreground/80 mb-4">Reflection Journal</p>
          <Button variant="ghost" onClick={() => navigate('/portfolio')} className="text-primary-foreground hover:bg-primary-foreground/20">
            Back to Portfolio
          </Button>
        </div>
      </footer>
    </div>
  );
};