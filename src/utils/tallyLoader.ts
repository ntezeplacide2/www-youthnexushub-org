
interface TallyWindow extends Window {
  Tally?: {
    loadEmbeds: () => void;
  };
}

declare const window: TallyWindow;

class TallyScriptLoader {
  private static instance: TallyScriptLoader;
  private isLoaded = false;
  private isLoading = false;
  private loadPromise: Promise<void> | null = null;

  static getInstance(): TallyScriptLoader {
    if (!TallyScriptLoader.instance) {
      TallyScriptLoader.instance = new TallyScriptLoader();
    }
    return TallyScriptLoader.instance;
  }

  async loadTallyScript(): Promise<void> {
    if (this.isLoaded) {
      this.initializeTally();
      return Promise.resolve();
    }

    if (this.isLoading && this.loadPromise) {
      return this.loadPromise;
    }

    this.isLoading = true;
    this.loadPromise = new Promise((resolve, reject) => {
      // Check if script already exists
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (existingScript) {
        this.isLoaded = true;
        this.isLoading = false;
        this.initializeTally();
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      script.crossOrigin = 'anonymous';
      
      // Add error handling
      script.onerror = () => {
        this.isLoading = false;
        console.error('Failed to load Tally script');
        reject(new Error('Failed to load Tally script'));
      };

      script.onload = () => {
        this.isLoaded = true;
        this.isLoading = false;
        this.initializeTally();
        resolve();
      };

      document.head.appendChild(script);
    });

    return this.loadPromise;
  }

  private initializeTally(): void {
    if (typeof window.Tally !== 'undefined') {
      try {
        window.Tally.loadEmbeds();
      } catch (error) {
        console.error('Error initializing Tally embeds:', error);
      }
    }
  }

  cleanup(): void {
    const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
    if (existingScript) {
      document.head.removeChild(existingScript);
      this.isLoaded = false;
      this.isLoading = false;
      this.loadPromise = null;
    }
  }
}

export const tallyLoader = TallyScriptLoader.getInstance();
