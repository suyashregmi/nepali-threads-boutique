
import { ShoppingBag, Search, Menu } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const { setIsCartOpen, getTotalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-orange-100 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              NepalThreads
            </h1>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Men</a>
            <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Women</a>
            <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Traditional</a>
            <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Sale</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="h-5 w-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
