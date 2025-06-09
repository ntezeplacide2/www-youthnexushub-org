
import { useEffect } from 'react';

// Extend the Window interface to include Tally
declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

export const PartnerWithUs = () => {
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
    <section id="partner" className="py-16 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              🤝 Partner With Us
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-foreground leading-relaxed max-w-3xl mx-auto">
              We're always looking to collaborate with purpose-driven people and organizations. Whether you're planning a campaign, co-hosting an event, or exploring sponsorship, we'd love to hear from you.
            </p>
          </div>

          <div className="bg-background rounded-lg shadow-lg p-4 slide-up">
            <iframe 
              data-tally-src="https://tally.so/embed/wQaxK1?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
              loading="lazy" 
              width="100%" 
              height="700" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0} 
              title="Partner or Collaborate With Us"
              className="w-full h-[700px] rounded-md border-0"
              style={{ overflow: 'hidden' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
