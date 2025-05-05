
import { useState, useEffect } from 'react';
import { Capacitor } from '@capacitor/core';

export function useNative() {
  const [isNative, setIsNative] = useState(false);
  const [platform, setPlatform] = useState<'ios' | 'android' | 'web'>('web');

  useEffect(() => {
    const checkPlatform = () => {
      const isNativePlatform = Capacitor.isNativePlatform();
      setIsNative(isNativePlatform);
      
      if (isNativePlatform) {
        if (Capacitor.getPlatform() === 'ios') {
          setPlatform('ios');
        } else if (Capacitor.getPlatform() === 'android') {
          setPlatform('android');
        } else {
          setPlatform('web');
        }
      } else {
        setPlatform('web');
      }
    };
    
    checkPlatform();
  }, []);

  return { isNative, platform };
}

export default useNative;
