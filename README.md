# Vendly - Modern E-Commerce Platform

![Vendly Waitlist](public/og-image.png)

Vendly is a modern, easy-to-use e-commerce platform built for individuals and small businesses who want to sell online without the complexity and high costs of traditional tools.

This repository contains the source code for the **Vendly Waitlist Landing Page**, designed to capture early interest and build a community before the full platform launch.

## 🚀 Key Features

-   **Modern & Aesthetic UI**: A polished, "slate-themed" design using `Tailwind CSS v4` and generic variables for easy theming (Dark/Light mode ready).
-   **Smooth Animations**: Integrated `Framer Motion` for engaging entrance and state transition animations.
-   **Waitlist Logic**: Functional email capture form that validates inputs and stores data securely in a local JSON file (`data/waitlist.json`).
-   **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop viewports.
-   **Performance Focused**: Built on **Next.js 15** and **React 19** for blazing fast load times and SEO optimization.

## 🛠️ Tech Stack

-   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
-   **Library**: [React 19](https://react.dev/)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Utilities**: `clsx`, `tailwind-merge` for robust class management.

## 📂 Project Structure

```bash
vendly/
├── src/
│   ├── app/                # Next.js App Router pages and API routes
│   │   ├── api/waitlist/   # Backend logic for storing emails
│   │   ├── globals.css     # Global styles and Tailwind configuration
│   │   ├── layout.tsx      # Root layout with font and metadata configuration
│   │   └── page.tsx        # Main landing page composition
│   ├── components/
│   │   ├── landing/        # Landing page specific components (Hero, Features, Form)
│   │   └── ui/             # Reusable UI components (Button, Input)
│   └── lib/                # Utility functions (cn helper)
├── data/                   # Local storage for waitlist entries
│   └── waitlist.json       # JSON file containing captured emails
├── public/                 # Static assets
└── package.json            # Project dependencies and scripts
```

## 🏁 Getting Started

Follow these steps to run the project locally:

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/vendly.git
    cd vendly
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open the app**:
    Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment (Vercel) & Database Setup

This project uses **Prisma** with **PostgreSQL**.

### 1. Vercel Postgres Setup
1.  Go to your Vercel Project Dashboard.
2.  Navigate to **Storage** -> **Create Database** -> **Postgres**.
3.  Connect the database to your project.
4.  Vercel will add the `POSTGRES_PRISMA_URL` and `POSTGRES_URL_NON_POOLING` variables automatically.

### 2. Update Schema
After connecting the database, you need to push your Prisma schema to the DB:
```bash
npx prisma db push
```
(You can run this locally if you pull the env vars, or add it to your build command).

### 3. Deploy
Push your code to GitHub. Vercel will automatically build and deploy.

## 🧪 Verification
1.  Enter an email on the landing page.
2.  Check the database using **Prisma Studio** (`npx prisma studio`) or the Vercel Storage "Data" tab.

## 🔮 Roadmap

-   [x] Waitlist Landing Page
-   [ ] User Authentication (Auth.js / Clerk)
-   [ ] Dashboard UI
-   [ ] Product Management
-   [ ] Stripe Integration for Payments
-   [ ] Public Storefront Generation

## 📄 License

This project is licensed under the MIT License.
