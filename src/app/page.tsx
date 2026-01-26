import { Features } from "@/components/landing/features";
import { Hero } from "@/components/landing/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Features />

      <footer className="w-full py-6 text-center text-sm text-muted-foreground border-t">
        <p>&copy; {new Date().getFullYear()} Vendly. All rights reserved.</p>
      </footer>
    </main>
  );
}
