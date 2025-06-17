import { useState, useEffect } from "react";
import { scrollToSection } from "@/lib/smooth-scroll";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "@assets/img 1_1750151863988.jpg";
import img2 from "@assets/img 2_1750151863988.jpg";
import img3 from "@assets/Img 3_1750151863988.jpg";
import img4 from "@assets/opt-lasers_1750151863988.jpg";

export default function HeroSection() {
  const carouselImages = [
    { src: img1, alt: "Comprehensive printing services showcase including posters, flyers, t-shirts, and promotional materials" },
    { src: img2, alt: "Custom branded mugs showcasing quality printing on merchandise" },
    { src: img3, alt: "Professional DTF printing equipment and custom apparel including branded clothing and bags" },
    { src: img4, alt: "State-of-the-art laser engraving equipment for precision printing services" }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <section id="home" className="pt-16 hero-gradient min-h-screen flex items-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
              Professional <span className="text-yellow-300">Printing</span> & Graphics Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 drop-shadow-md">
              Transform ideas into reality with exceptional printing and innovative graphic design services in Kenya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('services')}
                className="bg-white text-[hsl(24,100%,50%)] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center shadow-lg"
              >
                Explore Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[hsl(24,100%,50%)] transition-colors text-center shadow-lg"
              >
                Get Quote
              </button>
            </div>
          </div>
          
          <div className="relative">
            {/* Carousel Container */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <div className="relative h-96 md:h-[500px]">
                {carouselImages.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
