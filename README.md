# 🥦 LightLife-v2 – Personalized Nutrition Planner

🔗 Test it live: [lightlife-v2.vercel.app](https://lightlife-v2.vercel.app)

LightLife-v2 is a web app that helps users calculate and track their daily macronutrients based on personal data and fitness goals.

Built with Next.js App Router, MongoDB, and Google OAuth, LightLife-v2 delivers personalized nutrition plans with interactive charts and a responsive interface.

---

## 🚀 Features

- 🔐 Authentication via Google OAuth (NextAuth.js)
- 🍽️ Calculate personalized macronutrients based on user data
- 📊 Interactive charts showing nutrient distribution (Recharts)
- ⚙️ Form validation with Zod and FormData API
- 🔄 Hybrid SSR with Server & Client Components (Next.js 15 App Router)
- 🌐 Responsive UI styled with Tailwind CSS

---

## 🧰 Tech Stack

### Frontend

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS

### Backend

- MongoDB Atlas
- NextAuth.js

### Validation

- Zod

### APIs

- Spoonacular API

---

## ⚙️ Getting Started

1. Clone the repository

   git clone https://github.com/luisantoniofilho/lightlife-v2.git
   cd lightlife-v2

2. Install dependencies

   npm install

3. Configure environment variables

   Create a .env.local file with:
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_SECRET=your_nextauth_secret
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   SPOONACULAR_API_KEY=your_spoonacular_api_key

4. Run the development server

   npm run dev
