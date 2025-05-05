
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.7e13424122d84f9a9850d09d1c35fe43',
  appName: 'open-tube-vibes',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    url: "https://7e134241-22d8-4f9a-9850-d09d1c35fe43.lovableproject.com?forceHideBadge=true",
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#0F0F0F",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
    },
    StatusBar: {
      style: "dark",
      backgroundColor: "#0F0F0F"
    },
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"]
    }
  },
  android: {
    backgroundColor: "#0F0F0F",
  },
  ios: {
    backgroundColor: "#0F0F0F",
  }
};

export default config;
