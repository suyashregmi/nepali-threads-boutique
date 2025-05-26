
import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { Button } from "@/components/ui/button";

const categories = ["All", "Men", "Women", "Traditional", "Casual"];

const products = [
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
    id: "2",
    name: "Modern Kurta Set",
    price: 2800,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=500&fit=crop",
    category: "Men",
    sizes: ["M", "L", "XL", "XXL"]
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
    id: "4",
    name: "Casual Cotton Shirt",
    price: 1800,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=500&fit=crop",
    category: "Casual",
    sizes: ["S", "M", "L", "XL"]
  },
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
    id: "6",
    name: "Hemp Casual Wear",
    price: 2200,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
    category: "Casual",
    sizes: ["M", "L", "XL"]
  },
  {
    id: "7",
    name: "Traditional Gunyu Cholo",
    price: 5200,
    image: "https://images.unsplash.com/photo-1617114919297-3c8ddb01f599?w=400&h=500&fit=crop",
    category: "Traditional",
    sizes: ["S", "M", "L"]
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

export const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Featured Collection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our curated selection of authentic Nepali clothing, from traditional wear to modern styles
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category 
                ? "bg-gradient-to-r from-orange-600 to-red-600 text-white" 
                : "border-orange-600 text-orange-600 hover:bg-orange-50"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
