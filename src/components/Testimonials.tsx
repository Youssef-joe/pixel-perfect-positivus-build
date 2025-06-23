
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      author: "John Smith",
      company: "Marketing Director at XYZ Corp"
    },
    {
      quote: "Positivus has been instrumental in helping us reach our target audience and increase our online sales. Their team is knowledgeable, creative, and always willing to go the extra mile to ensure our success. We couldn't be happier with the results.",
      author: "Jane Doe",
      company: "CEO at ABC Company"
    },
    {
      quote: "The team at Positivus helped us revamp our entire digital strategy. Their expertise in SEO and PPC advertising has resulted in a 300% increase in qualified leads. Professional service from start to finish.",
      author: "Mike Johnson",
      company: "Founder at Tech Startup"
    }
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-positivus-dark mb-6">
            Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="bg-positivus-dark rounded-3xl p-8 lg:p-12 relative">
          <div className="grid lg:grid-cols-1 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`bg-transparent border-none ${index === 0 ? 'block' : 'hidden lg:block'}`}
              >
                <CardContent className="p-0">
                  <div className="space-y-6">
                    {/* Quote */}
                    <blockquote className="text-white text-lg lg:text-xl leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    {/* Author */}
                    <div className="text-positivus-green">
                      <p className="font-bold text-lg">{testimonial.author}</p>
                      <p className="text-sm opacity-80">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === 0 ? 'bg-positivus-green' : 'bg-white opacity-50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
