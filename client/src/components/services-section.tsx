import laserIcon from "@assets/laser_1750152764007.png";
import printIcon from "@assets/print_1026499_1750152764007.png";
import printingIcon from "@assets/printing_1750152764007.png";
import corporateIcon from "@assets/corporate_7713569_1750152764007.png";
import educationIcon from "@assets/education_5432774_1750152764007.png";
import illustrationIcon from "@assets/illustration_1750152764007.png";
import cncMachineImage from "@assets/alethia-briones-CNeX-281hsg-unsplash_1750153505926.jpg";

export default function ServicesSection() {
  const services = [
    {
      icon: laserIcon,
      title: "Portable Laser Printing",
      description: "High-quality document printing with precision and speed for all your business needs.",
      features: ["Document printing", "Business cards", "Letterheads"],
      color: "bg-[hsl(24,100%,50%)]"
    },
    {
      icon: printingIcon,
      title: "Large Format Printing",
      description: "Eye-catching large format prints perfect for marketing and promotional materials.",
      features: ["Banners & posters", "Signage", "Exhibition displays"],
      color: "bg-[hsl(0,73%,50%)]"
    },
    {
      icon: printIcon,
      title: "UV-DTF & Screen Printing",
      description: "Advanced printing techniques for custom apparel and promotional merchandise.",
      features: ["T-shirt printing", "Custom merchandise", "Promotional items"],
      color: "bg-[hsl(43,96%,56%)]"
    },
    {
      icon: corporateIcon,
      title: "Corporate Branding",
      description: "Complete branding solutions to establish and strengthen your corporate identity.",
      features: ["Logo design", "Brand guidelines", "Marketing materials"],
      color: "bg-[hsl(24,100%,50%)]"
    },
    {
      icon: educationIcon,
      title: "School Branding",
      description: "Specialized branding and printing services tailored for educational institutions.",
      features: ["School uniforms", "Educational materials", "Institutional signage"],
      color: "bg-[hsl(0,73%,50%)]"
    },
    {
      icon: illustrationIcon,
      title: "Graphic Design",
      description: "Creative graphic design services to bring your vision to life with stunning visuals.",
      features: ["Creative concepts", "Visual identity", "Digital graphics"],
      color: "bg-[hsl(43,96%,56%)]"
    }
  ];

  const galleryImages = [
    {
      src: cncMachineImage,
      alt: "Professional CNC machine for precision manufacturing and engraving"
    },
    {
      src: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Graphic designer working on brand identity"
    },
    {
      src: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Corporate branding materials and stationery"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver high-quality printing solutions and creative graphics to help your business stand out and achieve its goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-gray-50 rounded-xl p-8 text-center border border-gray-200 hover:shadow-lg">
              <div className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                <img src={service.icon} alt={`${service.title} icon`} className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="text-left text-gray-600 space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="text-[hsl(24,100%,50%)] mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="rounded-xl shadow-lg w-full h-64 object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
