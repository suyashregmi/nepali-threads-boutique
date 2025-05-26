
import { useState } from "react";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { Cart } from "@/components/Cart";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/contexts/CartContext";

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <Header />
        <Hero />
        <ProductGrid />
        <Footer />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default Index;
