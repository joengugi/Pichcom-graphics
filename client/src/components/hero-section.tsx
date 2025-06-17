import { scrollToSection } from "@/lib/smooth-scroll";

export default function HeroSection() {
  return (
    <section id="home" className="pt-16 hero-gradient min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Professional <span className="text-yellow-300">Printing</span> & Graphics Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Transform ideas into reality with exceptional printing and innovative graphic design services in Kenya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('services')}
                className="bg-white text-[hsl(24,100%,50%)] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
              >
                Explore Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[hsl(24,100%,50%)] transition-colors text-center"
              >
                Get Quote
              </button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional printing equipment" 
              className="rounded-xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="text-[hsl(24,100%,50%)] text-3xl font-bold">10+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
