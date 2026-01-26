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

## 🚀 Deployment (Vercel)

This project is optimized for deployment on Vercel with **Vercel Postgres**.

1.  **Push to GitHub**: Make sure your code is committed and pushed.
    ```bash
    git add .
    git commit -m "Ready for deploy"
    git push
    ```

2.  **Import to Vercel**: 
    - Go to [Vercel Dashboard](https://vercel.com/new).
    - Import your repository `vendly`.

3.  **Connect Database**:
    - Once deployed (or during setup), go to the **Storage** tab in your Vercel project.
    - Click **"Connect Store"** -> **"Create New"** -> **"Postgres"**.
    - Accept the defaults and click **Connect**.
    - Vercel will automatically add the `POSTGRES_URL` and other environment variables to your project.

4.  **Redeploy**:
    - You might need to Redeploy (Deployments -> Redeploy) for the environment variables to take effect.

## 🧪 Verification

To verify the Waitlist functionality:
1.  Enter an email address in the input field.
2.  Click "Join Waitlist".
3.  Check your Vercel Dashboard -> Storage -> Postgres -> **Data** tab. You should see a `waitlist` table with the email entry.

## 🔮 Roadmap

-   [x] Waitlist Landing Page
-   [ ] User Authentication (Auth.js / Clerk)
-   [ ] Dashboard UI
-   [ ] Product Management
-   [ ] Stripe Integration for Payments
-   [ ] Public Storefront Generation

## 📄 License

This project is licensed under the MIT License.
