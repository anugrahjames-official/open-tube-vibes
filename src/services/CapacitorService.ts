
import { Capacitor } from '@capacitor/core';
import { StatusBar } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Share } from '@capacitor/share';
import { Storage } from '@capacitor/storage';
import { PushNotifications } from '@capacitor/push-notifications';

export class CapacitorService {
  static isNative(): boolean {
    return Capacitor.isNativePlatform();
  }

  static async initializeApp() {
    if (this.isNative()) {
      // Hide the splash screen
      await SplashScreen.hide();

      // Set status bar style
      await StatusBar.setStyle({ style: 'dark' });
      
      // Request push notification permissions
      await PushNotifications.requestPermissions();
      
      await PushNotifications.register();
    }
  }

  static async takePicture() {
    if (!this.isNative()) {
      console.log('Camera not available on web');
      return null;
    }

    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera
      });
      
      return image;
    } catch (error) {
      console.error('Error taking picture', error);
      return null;
    }
  }

  static async shareContent(title: string, text: string, url?: string) {
    if (!this.isNative()) {
      if (navigator.share) {
        try {
          await navigator.share({
            title,
            text,
            url
          });
        } catch (error) {
          console.error('Error sharing', error);
        }
      } else {
        console.log('Web Share API not available');
      }
      return;
    }

    try {
      await Share.share({
        title,
        text,
        url,
        dialogTitle: 'Share with your friends'
      });
    } catch (error) {
      console.error('Error sharing', error);
    }
  }

  static async storeData(key: string, value: any) {
    if (this.isNative()) {
      await Storage.set({ key, value: JSON.stringify(value) });
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  static async getData(key: string) {
    if (this.isNative()) {
      const { value } = await Storage.get({ key });
      return value ? JSON.parse(value) : null;
    } else {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    }
  }
}

export default CapacitorService;
