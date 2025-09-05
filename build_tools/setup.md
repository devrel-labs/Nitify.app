
# Nitify Build & Setup Guide

This guide explains how to **set up the project**, **build Android APKs (Debug & Release)**, **sign them**, and optionally **build the Electron desktop app**.

---

## Prerequisites

Ensure you have the following installed:

- **Node.js** (v18+) & **npm**
- **Electron & electron-builder**
- **Java JDK** (v21)
- **Android Studio** (with SDK & platform tools)
- **Capacitor CLI**:
  ```bash
  npm install -g @capacitor/cli
  npm install @capacitor/core
  npm install @capacitor/android
  ```

---

## Capacitor Configuration

Update `capacitor.config.ts` as:

```ts
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

---

## Project Setup

Install dependencies:

```bash
npm install
```

---

## Run the Project

### ▶ For Electron App (Development Mode)
```bash
npm run electron:dev
```

### ▶ For Android (Sync & Open in Android Studio)
```bash
npx cap add android       # Add Android platform (only first time)
npx cap sync android      # Sync changes
npx cap open android      # Open in Android Studio
```

---

## Build Desktop App (Electron)

```bash
npm run dist
```

The built files will be in the `dist/` folder.

---

## Build Android APKs

### Debug APK
```bash
cd android
./gradlew assembleDebug
```

### Release APK
```bash
cd android
./gradlew assembleRelease
```

**Install APK on device:**
```bash
adb install app-release.apk
```

---

## Signing APK (Optional)

If you need to sign the APK manually:

```bash
jarsigner -verbose -sigalg SHA256withRSA -digestalg SHA-256 -keystore my-release-key.keystore app-release-unsigned.apk alias_name
zipalign -v 4 app-release-unsigned.apk app-release.apk
```

---

### Folder Structure for Builds
- **Electron build output** → `dist/`
- **Android build output** → `android/app/build/outputs/apk/`
