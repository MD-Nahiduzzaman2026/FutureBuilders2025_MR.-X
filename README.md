# HealthBridge Bangladesh

## 1. Team Name and Member Details

*Team Name:* MR.X

*Team Members:*
- Arnob Aich Anurag - Web Developer + AI Integration + Planning
- Sadia Sultana - AI Trainer + BrainStorming
- Naim Islam - Coordinator + Planning

---

## 2. Problem Statement

In the sprawling greens of Bangladesh's hill tracts and the distant stretches of rural villages, life often moves with a quiet rhythm—yet behind that calm lies a persistent struggle: access to medical support. For millions living in these regions, healthcare is not a guaranteed right but a long-distance hope, often travelling on unpaved roads, across rivers, or through steep, forested terrain.

*Key Challenges:*
- Geographic isolation in hill tracts and remote villages
- Limited or no internet connectivity
- Shortage of medical facilities and trained healthcare workers
- Low smartphone penetration
- Economic barriers to healthcare access
- Delayed emergency response due to infrastructure limitations

---

## 3. Solution Overview

HealthBridge Bangladesh is an offline-first Progressive Web Application that brings AI-powered medical assistance to rural communities in Bangladesh with limited internet connectivity using Google's FLAN-T5 language model.

*Core Features:*
- AI-powered symptom checker using FLAN-T5 (works offline with quantized model for faster inference)
- Health records storage with local IndexedDB and server sync
- Emergency resources and first aid guides
- Responsive design optimized for low-bandwidth networks

---

## 4. Technologies Used(Web Application) 

*Frontend:* React.js, Tailwind CSS, Vite, React Query, Wouter, Framer Motion

*AI/ML:* FLAN-T5 (Xenova/flan-t5-small), @xenova/transformers (with quantization)

*Backend:* Node.js, Express.js, Drizzle ORM, better-sqlite3 (SQLite)

---

## 5. AI Tools Disclosure

*Development Tools:*
- Kilo Code - Code implementation, debugging, optimization, and setup
- Claude AI - System architecture, code generation, documentation
- Replit Agent/Bolt.new - Application scaffolding
- GitHub Copilot - Code completion and suggestions
- ChatGPT - Brainstorming and debugging

*AI Models in Application:*
- FLAN-T5 (Google) - Medical text understanding and symptom analysis
- Transformers.js - Browser-based model execution with quantization for performance

---

## 6. How the Solution Handles Limited Internet Access

*Offline-First Architecture:*
- Service Workers cache all critical assets (app, AI model, medical database)
- IndexedDB stores user data and responses locally
- Complete functionality without internet after initial load
- Quantized FLAN-T5 model for faster offline inference

*Bandwidth Adaptation:*
- Offline: Full features from cache with local AI processing
- 2G: Text-only mode, minimal data transfer
- 3G+: Progressive loading with optimized assets
- 4G+: Full feature set with server sync

*Data Sync:*
- Local-first data storage using IndexedDB
- Health records stored locally and synced when online
- Actions queued when offline
- Auto-sync when connection restored
- Network detection with visual indicators

*Optimization:*
- Model quantization for faster AI inference
- Code splitting and lazy loading
- Optimized bundle size with Vite
- Efficient data structures with Drizzle ORM
- SQLite for lightweight local database

*Demo:*




https://github.com/user-attachments/assets/eb341ced-01a7-4a1c-9081-3eb77fdb0537

