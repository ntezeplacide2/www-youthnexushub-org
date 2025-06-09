
import { useEffect } from 'react';

// Extend the Window interface to include Tally
declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

export const JoinMovement = () => {
  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    script.onload = () => {
      if (typeof window.Tally !== 'undefined') {
        window.Tally.loadEmbeds();
      }
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section id="join" className="py-20 bg-accent/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              ✊ Join the Movement
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-foreground leading-relaxed max-w-3xl mx-auto">
              Want to make a difference in your community? Volunteer with Youth Nexus Hub Ltd and be part of a youth-powered mission for digital awareness, safe gambling, and community resilience.
            </p>
          </div>

          <div className="bg-background rounded-lg shadow-lg p-6 slide-up">
            <iframe 
              data-tally-src="https://tally.so/embed/mZLGEe?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
              loading="lazy" 
              width="100%" 
              height="1499" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0} 
              title="Join as a Volunteer or Supporter"
              className="w-full min-h-[1499px] rounded-md"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
