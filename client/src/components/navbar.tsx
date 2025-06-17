import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "@/lib/smooth-scroll";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Reviews", id: "reviews" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'navbar-blur shadow-lg' : 'navbar-blur'
    } border-b border-gray-200`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="bg-[hsl(24,100%,50%)] text-white px-3 py-2 rounded-lg font-bold text-lg">
              PP
            </div>
            <div className="ml-3">
              <span className="font-bold text-gray-900 text-lg">PICHCOM PRINTS</span>
              <div className="text-sm text-gray-600 font-medium">& GRAPHICS</div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-gray-700 hover:text-[hsl(24,100%,50%)] font-medium transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>
          
          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="text-sm">
              <div className="text-[hsl(24,100%,50%)] font-semibold">+254 740 318 091</div>
              <div className="text-gray-600">pichcomgraphics@gmail.com</div>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-[hsl(24,100%,50%)]"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[hsl(24,100%,50%)] font-medium"
              >
                {item.name}
              </button>
            ))}
            <div className="px-3 py-2 border-t">
              <div className="text-[hsl(24,100%,50%)] font-semibold">+254 740 318 091</div>
              <div className="text-gray-600 text-sm">pichcomgraphics@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
