
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cart } from "@/components/Cart";
import { ProductCard } from "@/components/ProductCard";
import { CartProvider } from "@/contexts/CartContext";

const menProducts = [
  {
    id: "2",
    name: "Modern Kurta Set",
    price: 2800,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=500&fit=crop",
    category: "Men",
    sizes: ["M", "L", "XL", "XXL"]
  },
  {
    id: "8",
    name: "Modern Blazer",
    price: 4200,
    originalPrice: 5000,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    category: "Men",
    sizes: ["M", "L", "XL", "XXL"]
  }
];

const Men = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Men's Collection</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our premium men's collection featuring traditional and modern styles
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {menProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <Footer />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default Men;
