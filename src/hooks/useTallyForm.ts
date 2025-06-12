
import { useEffect } from 'react';
import { tallyLoader } from '@/utils/tallyLoader';

export const useTallyForm = () => {
  useEffect(() => {
    let isMounted = true;

    const loadTally = async () => {
      try {
        await tallyLoader.loadTallyScript();
      } catch (error) {
        if (isMounted) {
          console.error('Failed to load Tally form:', error);
        }
      }
    };

    loadTally();

    return () => {
      isMounted = false;
    };
  }, []);
};
