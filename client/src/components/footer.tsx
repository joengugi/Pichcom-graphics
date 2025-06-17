import { scrollToSection } from "@/lib/smooth-scroll";
import { Phone, Mail, MapPin } from "lucide-react";

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
              <div className="bg-[hsl(24,100%,50%)] text-white px-3 py-2 rounded-lg font-bold text-lg mr-3">
                PP
              </div>
              <div>
                <span className="font-bold text-xl">PICHCOM PRINTS</span>
                <div className="text-sm text-gray-400 font-medium">& GRAPHICS</div>
              </div>
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
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-[hsl(24,100%,50%)]" />
                +254 740 318 091
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-[hsl(24,100%,50%)]" />
                pichcomgraphics@gmail.com
              </p>
              <p className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-[hsl(24,100%,50%)]" />
                Nairobi, Kenya
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
