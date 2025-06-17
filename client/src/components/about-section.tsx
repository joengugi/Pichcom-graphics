export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Us</h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                Welcome to <strong className="text-[hsl(24,100%,50%)]">PICHCOM PRINTS & GRAPHICS</strong>, where we believe in the power of print to transform ideas into reality, because image is everything!
              </p>
              <p>
                <strong className="text-[hsl(24,100%,50%)]">PICHCOM PRINTS & GRAPHICS</strong> was established in Jan 2024, we have quickly grown to become a trusted name in the printing and graphics industry in Kenya. Our dedicated team is passionate about delivering high-quality products and exceptional customer service.
              </p>
              <p>
                We are committed to helping our clients achieve their goals through innovative printing solutions and creative graphic design that make lasting impressions.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-3xl font-bold text-[hsl(24,100%,50%)] mb-2">50+</div>
                <div className="text-gray-600 font-medium">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-3xl font-bold text-[hsl(0,73%,50%)] mb-2">Free</div>
                <div className="text-gray-600 font-medium">Delivery Around Nairobi</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional design team collaborating on projects" 
              className="rounded-xl shadow-2xl w-full h-auto"
            />
            <div className="absolute top-6 right-6 bg-[hsl(24,100%,50%)] text-white p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">Since 2024</div>
              <div className="text-sm">Trusted Partner</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
