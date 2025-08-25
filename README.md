# Nitify – Smart Bookmarking & Note App

Nitify is a **modern bookmarking and note-taking app** that lets you save anything you want to revisit later — whether it’s a tweet, a video, or any useful resource.  
Think of it as your **personal hub** to capture, organize, and share content effortlessly.

---

## Installation

##  Android
[Download APK](https://drive.google.com/file/d/1-RMylpBbuvp6cXludI3OCCaq1WPDX6ZV/view?usp=sharing) -> Nitify.apk
##  Windows
[Download exe](https://drive.google.com/file/d/1G7V8_WLCbB20Vu94XlGmFuX4sk2M3VQU/view?usp=sharing) -> Nitify.exe

##  Mac
[Download dmg](https://drive.google.com/file/d/1Lht5CQfWDlzaPGWl6nBXE_CJdOPL4pou/view?usp=sharing) -> Nitify.dmg


## Features

- Save notes, tweets, videos, or any useful link  
- Secure user authentication (sign up / login)  
- Generate shareable links to your saved items  
- Responsive UI built with Tailwind CSS  
- Fast stack with React + Express.js  
- Backend deployed on Render  
- MongoDB ODM (Mongoose) for database management  

---

## Tech Stack

- **Frontend:** React, TypeScript, Vite, Tailwind CSS  
- **Backend:** Node.js, Express.js, TypeScript  
- **Database:** MongoDB with Mongoose (ODM)  
- **Authentication:** JWT + bcrypt  
- **Deployment:** Render (backend), Vercel/Netlify (frontend – optional)  

---

## Architecture

                    ┌─────────────────────┐
                    │       Frontend      │
                    │  React + Vite + TS  │
                    │   Tailwind CSS UI   │
                    └─────────┬──────────┘
                              │
                      HTTP/REST API calls
                              │
                    ┌─────────▼──────────┐
                    │      Backend       │
                    │ Express.js + TS    │
                    │ JWT Auth + Bcrypt  │
                    └─────────┬──────────┘
                              │
                          Mongoose ODM
                              │
                    ┌─────────▼──────────┐
                    │     MongoDB        │
                    │   Cloud / Local    │
                    └─────────────────────┘


- The **frontend** handles UI, routing, and API requests.  
- The **backend** exposes RESTful APIs for authentication, content management, and sharing.  
- Data is stored securely in **MongoDB** through Mongoose models.  
- JWT is used for session authentication, stored in cookies for security.  

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (>= 18)  
- [MongoDB](https://www.mongodb.com/) (local or cloud e.g. Atlas)  

---

### Backend Setup

```bash
# Clone the repo and enter backend
git clone git@github.com:devrel-labs/Nitify.app.git
cd Nitify-main

# Install dependencies
npm install

# Create .env file
MONGODB_URI=mongodb://localhost:27017/nitify_db
JWT_SECRET=your-secret-key

# Run development server
npm run dev

```
### frontend Setup
```bash
cd Nitify_frontend-main

# Install dependencies
npm install

# Create .env file
VITE_NITIFY_DOMAIN=http://localhost:8080
VITE_NITIFY_CLIENT_DOMAIN=http://localhost:5173

# Run dev server
npm run dev
```

```

Nitify.app.main/                 # Backend (Express server)
├── src/                     # Source code (TypeScript)
│   ├── controllers/         # Route handlers (auth, content, share)
│   ├── models/              # Mongoose data models (User, Content, Link)
│   ├── routes/              # Express route definitions
│   ├── middlewares/         # Middleware (e.g., auth check)
│   ├── db.ts                # Database connection setup
│   ├── index.ts             # App entry point (Express setup)
│   └── config.ts            # Configuration (e.g., JWT secret)
├── build/                   # Compiled JavaScript output (from TS)
├── package.json
└── tsconfig.json

Nitify.app.client/        # Frontend (React app)
├── public/                  # Static files
├── src/
│   ├── components/          # Reusable UI components (cards, forms, navbar, etc.)
│   ├── pages/               # Page components (Home, Dashboard, SignIn, SharedView, etc.)
│   ├── context/             # Context providers (e.g., theme)
│   ├── hooks/               # Custom React hooks
│   ├── icons/               # SVG icon components
│   ├── Data/                # Static data (features list)
│   ├── App.tsx              # Main app component and routes
│   └── main.tsx             # Entry point (DOM rendering)
├── vite.config.ts
└── package.json
```

