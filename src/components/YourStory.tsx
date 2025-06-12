
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { BookOpen, Users, Heart } from "lucide-react";

export const YourStory = () => {
  const navigate = useNavigate();

  return (
    <section id="your-story" className="py-16 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Your Story Matters
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-foreground leading-relaxed max-w-3xl mx-auto mb-8">
              We're collecting stories from young people who have experienced gambling-related challenges, digital pressure, or personal growth. Your voice can help inspire change.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Share Your Journey</h3>
              <p className="text-muted-foreground">Tell us about your experiences and challenges</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Inspire Others</h3>
              <p className="text-muted-foreground">Help other young people facing similar situations</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <Heart className="w-12 h-12 text-success mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Drive Change</h3>
              <p className="text-muted-foreground">Be part of creating awareness and solutions</p>
            </div>
          </div>

          <div className="text-center">
            <Button 
              onClick={() => navigate('/share-story')}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              📖 Share Your Story
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              Anonymous and confidential • Takes 5-10 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
