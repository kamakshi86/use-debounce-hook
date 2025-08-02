# 🪝 useDebounce Hook Demo

This project demonstrates a custom `useDebounce` React hook built with TypeScript and Vite.  
It delays updating the value until after a given timeout period, useful for search inputs and API optimizations.

## 🔧 Features

- ⚛️ React + TypeScript
- 🐇 Custom `useDebounce` hook
- 🕒 Controlled delay (default 500ms)
- ✅ Clean and minimal example

## 📸 Demo

[https://use-debounce-hook.vercel.app/](https://use-debounce-hook.vercel.app/)

## 📂 Folder Structure

src/
├── hooks/
│ └── useDebounce.ts
├── App.tsx
└── main.tsx

## 🚀 Getting Started

1. Clone the repo  
2. Install dependencies  
3. Run the dev server

```bash
git clone https://github.com/your-username/use-debounce-hook.git
cd use-debounce-hook
npm install
npm run dev

🧠 What is useDebounce?
useDebounce is a custom React hook that delays updating a value until after a specified delay. Great for search inputs, filters, or anything API-driven.

const debounced = useDebounce(value, 500);

📜 License
MIT
