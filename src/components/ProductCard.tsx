
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  sizes: string[];
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize
    });
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {product.originalPrice && (
          <Badge className="absolute top-3 left-3 bg-red-600 text-white">
            -{discountPercentage}%
          </Badge>
        )}
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-gray-800 group-hover:text-orange-600 transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl font-bold text-orange-600">
            NPR {product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              NPR {product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        <div className="mb-3">
          <label className="text-sm font-medium text-gray-700 mb-2 block">Size:</label>
          <div className="flex gap-2">
            {product.sizes.map((size) => (
              <Button
                key={size}
                variant={selectedSize === size ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedSize(size)}
                className={selectedSize === size 
                  ? "bg-orange-600 text-white" 
                  : "border-gray-300 text-gray-700 hover:border-orange-600"
                }
              >
                {size}
              </Button>
            ))}
          </div>
        </div>

        <Button 
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white"
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};
