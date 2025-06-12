
import { useTallyForm } from '@/hooks/useTallyForm';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const JoinPage = () => {
  useTallyForm();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header with back button */}
          <div className="mb-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="mb-4 text-primary hover:bg-primary/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                ✊ Join the Movement
              </h1>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-foreground leading-relaxed max-w-3xl mx-auto">
                Want to make a difference in your community? Volunteer with Youth Nexus Hub Ltd and be part of a youth-powered mission for digital awareness, safe gambling, and community resilience. Together, we can create lasting change.
              </p>
            </div>
          </div>

          {/* Form container */}
          <div className="bg-background rounded-lg shadow-lg p-4">
            <iframe 
              data-tally-src="https://tally.so/embed/mZLGEe?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
              loading="lazy" 
              width="100%" 
              height="700" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0} 
              title="Join as a Volunteer or Supporter"
              className="w-full h-[700px] rounded-md border-0"
              style={{ overflow: 'hidden' }}
              sandbox="allow-scripts allow-forms allow-same-origin"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
