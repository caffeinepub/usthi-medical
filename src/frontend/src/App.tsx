import { Toaster } from "@/components/ui/sonner";
import { useState } from "react";
import CategoriesSection from "./components/CategoriesSection";
import ContactSection from "./components/ContactSection";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import TrustBadges from "./components/TrustBadges";
import WhatsAppFloat from "./components/WhatsAppFloat";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  qty: number;
};

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: { id: number; name: string; price: number }) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="min-h-screen bg-background">
      <Toaster />
      <Header cartCount={totalItems} />
      <main>
        <HeroSection />
        <TrustBadges />
        <CategoriesSection />
        <FeaturedProducts addToCart={addToCart} cart={cart} />
        <HowItWorks />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
