import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nihit.nitify',
  appName: 'nitify',
  server: {
    url: 'https://nitify-frontend.vercel.app/signin',
    cleartext: true
  }
};

export default config;
