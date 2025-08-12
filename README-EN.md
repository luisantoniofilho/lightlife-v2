# LightLife v2

> A full-stack platform for intelligent nutritional management, combining precise macro calculation with personalized meal suggestions.

### [➡️ View Live Demo](https://lightlife.vercel.app/)

<br>

## 📜 About The Project

**LightLife** is a nutritional management platform designed to be a complete and intelligent solution for the end-user. Using a hybrid architecture (SSR + Client Components) with Next.js 15, the project focuses on delivering high performance and a fluid, responsive user experience on any device.

The core of the application consists of calculating the user's nutritional needs based on their biometric data and, from there, consuming the Spoonacular API to offer a customized recipes menu, based on the user diet calories.

---

### Key Skills Demonstrated

_REST API Integration, Data Normalization, Scalable Systems Design, Cache Management, Cloud Cost Optimization, Advanced TypeScript, Responsive Web Design._

## ✨ Key Features

- **🔍 Meal Suggestions:** Integration with the Spoonacular API to search and filter recipes based on the user's calories.
- **📊 Dynamic Nutritional Calculation:** An algorithm that calculates macronutrient needs (proteins, carbs, fats) and calories based on the user's biometric data.
- **📈 Interactive Dashboard:** A responsive control panel that displays nutritional data in interactive charts, built with the Recharts library.
- **🔐 Secure Authentication:** Social login (OAuth) with Google, implemented with NextAuth.js for a secure and streamlined flow.
- **📱 Adaptive Forms:** Robust front-end and back-end data validation with Zod and TypeScript, ensuring the integrity and security of the information entered in fully responsive layouts.

## 🚀 Technical Highlights & Challenges Overcome

- **Performance Optimization:** Queries to the Spoonacular API were refined to achieve an **average latency of 320ms** on mobile networks (4G), ensuring a fast user experience.
- **Data Normalization:** Creation of an abstraction layer to normalize and unify nutritional data from three distinct sources (MongoDB, Spoonacular API, and user input).
- **Cost Optimization:** Development of an intelligent rate-limiting system for consuming the external API, reducing the application's operational costs.
- **Unified Design System:** UI componentization with Tailwind CSS to ensure visual consistency of information, especially when displaying recipes across different breakpoints (mobile, tablet, desktop).

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (v15)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Authentication:** [NextAuth.js](https://next-auth.js.org/)
- **Database & Auth Provider:** [MongoDB](https://mongodb.com/) (Authentication, MongoDB Atlas)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Schema Validation:** [Zod](https://zod.dev/)
- **Data Visualization:** [Recharts](https://recharts.org/)
- **External API:** [Spoonacular API](https://spoonacular.com/food-api)
- **Deployment:** [Vercel](https://vercel.com/)

## ⚙️ Getting Started

Follow the steps below to run the project in your local environment.

### Prerequisites

- Node.js (v18 or higher)
- Git

### Installation

1.  Clone the repository:
    ```bash
    git clone [https://github.com/luisantoniofilho/lightlife-v2.git](https://github.com/luisantoniofilho/lightlife-v2.git)
    ```
2.  Navigate to the project directory:
    ```bash
    cd lightlife-v2
    ```
3.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Environment Setup

1.  Create a `.env.local` file in the project root. You can copy `.env.example` if it exists, or create a new one.

2.  Add the following environment variables with your keys from MongoDB, Spoonacular, and NextAuth:

    ```env
    # GOOGLE
    AUTH_GOOGLE_ID=
    AUTH_GOOGLE_SECRET=

    # NEXTAUTH
    NEXTAUTH_URL=
    NEXTAUTH_SECRET=

    # MONGODB
    MONGODB_URL=

    # SPOONACULAR
    SPOONACULAR_API_KEY=
    ```

### Running the Application

1.  Start the development server:
    ```bash
    npm run dev
    ```
2.  Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

## 📬 Contact

**Luis Antonio**

- GitHub: [@luisantoniofilho](https://github.com/luisantoniofilho)
- LinkedIn: [Luis Antonio](linkedin.com/in/luis-antonio-497180299/)
