import { Star } from "lucide-react";

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Sarah Mwangi",
      company: "CEO, TechCorp Kenya",
      review: "Exceptional service and outstanding quality! Pichcom Graphics delivered our corporate branding materials exactly as we envisioned. Their attention to detail is remarkable.",
      initials: "SM"
    },
    {
      name: "James Kariuki",
      company: "Marketing Director, Events Plus",
      review: "Fast turnaround time and professional results. Their large format printing for our event banners was perfect. Highly recommend their services!",
      initials: "JK"
    },
    {
      name: "Agnes Mutua",
      company: "Principal, Nairobi Academy",
      review: "Professional, reliable, and creative. Their school branding services helped us create a cohesive visual identity that our students and staff love.",
      initials: "AM"
    }
  ];

  const colors = ["bg-[hsl(24,100%,50%)]", "bg-[hsl(0,73%,50%)]", "bg-[hsl(43,96%,56%)]"];

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <div className="flex mb-4">
                {[...Array(5)].map((_, starIndex) => (
                  <Star key={starIndex} className="w-5 h-5 text-[hsl(43,96%,56%)] fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "{review.review}"
              </p>
              <div className="flex items-center">
                <div className={`w-12 h-12 ${colors[index]} rounded-full flex items-center justify-center text-white font-bold mr-4`}>
                  {review.initials}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{review.name}</div>
                  <div className="text-sm text-gray-600">{review.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
