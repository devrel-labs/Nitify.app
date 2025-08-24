# Nitify Build Tools Setup Guide

This guide explains how to **set up the project**, **build debug/release APKs**, **sign them**, and optionally **build desktop Electron apps**. Follow each step carefully to get the project running.

---

## Prerequisites

Before starting, make sure the following are installed:

- **Node.js & npm** (v18+ recommended)  
- **Electron & Electron-builder** 
- **Java JDK** (v21)  
- **Android Studio** (with SDK & platform tools)  
- **Capacitor CLI**:  
  ```bash
  npm install -g @capacitor/cli
  npm install @capacitor/core
  npm install @capacitor/android

## Capacitor Configuration

app uses a remote URL, configure capacitor.config.ts like this:
```
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nihit.nitify',
  appName: 'Nitify',
  webDir: '.', // no local web assets needed
  server: {
    url: 'https://nitify-frontend.vercel.app',
    cleartext: true
  }
};

export default config;
```

## Build Desktop Application
```
npm install
npm run dist
```

## Add Android Platform
```
npx cap add android
npx cap sync android # capacitor sync
```

## Build APKs
```
cd android
./gradlew assembleDebug
#install apk
adb install app-release.apk
```
