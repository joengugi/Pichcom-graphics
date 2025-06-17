import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We will get back to you soon.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      info: "+254 740 318 091",
      color: "bg-[hsl(24,100%,50%)]"
    },
    {
      icon: Mail,
      title: "Email",
      info: "pichcomgraphics@gmail.com",
      color: "bg-[hsl(0,73%,50%)]"
    },
    {
      icon: MapPin,
      title: "Location",
      info: "Nairobi, Kenya",
      color: "bg-[hsl(43,96%,56%)]"
    },
    {
      icon: Clock,
      title: "Business Hours",
      info: "Mon - Fri: 8:00 AM - 6:00 PM\nSat: 9:00 AM - 4:00 PM",
      color: "bg-[hsl(24,100%,50%)]"
    }
  ];

  const whyChooseUs = [
    "High-quality materials and printing",
    "Fast turnaround times",
    "Competitive pricing",
    "Professional design support",
    "Excellent customer service"
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your vision to life? Contact us today for a consultation and free quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className={`${item.color} w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-300 whitespace-pre-line">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h4 className="font-semibold text-lg mb-4">Why Choose Us?</h4>
              <ul className="space-y-3 text-gray-300">
                {whyChooseUs.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-[hsl(24,100%,50%)] mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Your Name *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your full name"
                            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-[hsl(24,100%,50%)] focus:border-transparent"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your phone number"
                            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-[hsl(24,100%,50%)] focus:border-transparent"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Email Address *</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-[hsl(24,100%,50%)] focus:border-transparent"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Service Interested In</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-gray-700 border-gray-600 text-white focus:ring-2 focus:ring-[hsl(24,100%,50%)] focus:border-transparent">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="portable-laser">Portable Laser Printing</SelectItem>
                          <SelectItem value="large-format">Large Format Printing</SelectItem>
                          <SelectItem value="uv-dtf">UV-DTF & Screen Printing</SelectItem>
                          <SelectItem value="corporate-branding">Corporate Branding</SelectItem>
                          <SelectItem value="school-branding">School Branding</SelectItem>
                          <SelectItem value="graphic-design">Graphic Design</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Message *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project requirements..."
                          className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-[hsl(24,100%,50%)] focus:border-transparent resize-none min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[hsl(24,100%,50%)] hover:bg-[hsl(24,100%,45%)] text-white font-semibold py-4 px-6 rounded-lg transition-colors"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
