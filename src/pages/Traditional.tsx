
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cart } from "@/components/Cart";
import { ProductCard } from "@/components/ProductCard";
import { CartProvider } from "@/contexts/CartContext";

const traditionalProducts = [
  {
    id: "1",
    name: "Traditional Daura Suruwal",
    price: 4500,
    originalPrice: 5500,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
    category: "Traditional",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "3",
    name: "Elegant Sari Collection",
    price: 6200,
    originalPrice: 7500,
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=500&fit=crop",
    category: "Traditional",
    sizes: ["Free Size"]
  },
  {
    id: "7",
    name: "Traditional Gunyu Cholo",
    price: 5200,
    image: "https://images.unsplash.com/photo-1617114919297-3c8ddb01f599?w=400&h=500&fit=crop",
    category: "Traditional",
    sizes: ["S", "M", "L"]
  }
];

const Traditional = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Traditional Collection</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Authentic traditional Nepali clothing preserving our cultural heritage
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {traditionalProducts.map((product) => (
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

export default Traditional;
