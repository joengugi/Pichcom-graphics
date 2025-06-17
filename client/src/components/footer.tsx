import { scrollToSection } from "@/lib/smooth-scroll";
import { Phone, Mail, MapPin } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import logoImage from "@assets/Pichcom graphics_1750150523804.png";

export default function Footer() {
  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About Us", id: "about" },
    { name: "Reviews", id: "reviews" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src={logoImage} 
                alt="Pichcom Prints & Graphics Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Your trusted partner for professional printing and graphics solutions in Kenya. 
              Transforming ideas into reality since 2024.
            </p>
            <div className="text-sm text-gray-400">
              <p>© 2024 Pichcom Prints & Graphics. All rights reserved.</p>
              <p className="mt-2">Design | Print | Brand | Advertise</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-[hsl(24,100%,50%)] transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <a href="tel:+254740318091" className="flex items-center hover:text-white transition-colors">
                <Phone className="w-5 h-5 mr-2 text-[hsl(24,100%,50%)]" />
                +254 740 318 091
              </a>
              <a href="mailto:pichcomgraphics@gmail.com" className="flex items-center hover:text-white transition-colors">
                <Mail className="w-5 h-5 mr-2 text-[hsl(24,100%,50%)]" />
                pichcomgraphics@gmail.com
              </a>
              <p className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-[hsl(24,100%,50%)]" />
                Nairobi, Kenya
              </p>
              <a 
                href="https://www.tiktok.com/@_pichcom?_t=8nnTNWDkZzK&_r=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center hover:text-white transition-colors"
              >
                <SiTiktok className="w-5 h-5 mr-2 text-[hsl(24,100%,50%)]" />
                @_pichcom
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
