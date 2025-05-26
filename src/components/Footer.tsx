
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              NepalThreads
            </h3>
            <p className="text-gray-300 text-sm">
              Bringing authentic Nepali fashion to the world. Quality craftsmanship, 
              traditional designs, and modern comfort.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Returns</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Traditional Wear</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Men's Collection</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Women's Collection</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Sale Items</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Kathmandu, Nepal</p>
              <p>+977-1-XXXXXXX</p>
              <p>info@nepalthreads.com</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-orange-400 transition-colors">Facebook</a>
                <a href="#" className="hover:text-orange-400 transition-colors">Instagram</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 NepalThreads. All rights reserved. Made with ❤️ in Nepal.</p>
        </div>
      </div>
    </footer>
  );
};
