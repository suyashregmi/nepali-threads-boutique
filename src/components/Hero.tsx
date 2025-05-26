
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-red-50 to-yellow-100"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-orange-300 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border-2 border-red-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border-2 border-yellow-300 rounded-full"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent animate-fade-in">
          Authentic Nepal
          <br />
          Fashion
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto animate-fade-in">
          Discover the perfect blend of traditional Nepali craftsmanship and modern style. 
          From the heart of the Himalayas to your wardrobe.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-3 text-lg">
            Shop Collection
          </Button>
          <Button variant="outline" size="lg" className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg">
            View Traditional Wear
          </Button>
        </div>
      </div>
    </section>
  );
};
