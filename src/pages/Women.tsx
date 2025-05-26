
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cart } from "@/components/Cart";
import { ProductCard } from "@/components/ProductCard";
import { CartProvider } from "@/contexts/CartContext";

const womenProducts = [
  {
    id: "5",
    name: "Designer Lehenga",
    price: 8500,
    originalPrice: 10000,
    image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=500&fit=crop",
    category: "Women",
    sizes: ["S", "M", "L"]
  },
  {
    id: "3",
    name: "Elegant Sari Collection",
    price: 6200,
    originalPrice: 7500,
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=500&fit=crop",
    category: "Traditional",
    sizes: ["Free Size"]
  }
];

const Women = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Women's Collection</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our elegant women's collection with traditional and contemporary designs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {womenProducts.map((product) => (
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

export default Women;
