
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-positivus-dark mb-6">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with Us: Let's Discuss Your Digital Marketing Needs
          </p>
        </div>

        {/* Contact Form */}
        <Card className="bg-positivus-gray border-2 border-positivus-dark rounded-3xl max-w-4xl mx-auto">
          <CardContent className="p-8 lg:p-12">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-positivus-dark font-medium mb-2">
                    Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    className="border-2 border-positivus-dark rounded-xl py-3 px-4 focus:border-positivus-green focus:ring-positivus-green"
                  />
                </div>
                <div>
                  <label className="block text-positivus-dark font-medium mb-2">
                    Email*
                  </label>
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="border-2 border-positivus-dark rounded-xl py-3 px-4 focus:border-positivus-green focus:ring-positivus-green"
                  />
                </div>
              </div>

              <div>
                <label className="block text-positivus-dark font-medium mb-2">
                  Message*
                </label>
                <Textarea
                  placeholder="Tell us about your project"
                  rows={6}
                  className="border-2 border-positivus-dark rounded-xl py-3 px-4 focus:border-positivus-green focus:ring-positivus-green resize-none"
                />
              </div>

              <Button
                type="submit"
                className="bg-positivus-dark text-white hover:bg-gray-800 font-medium px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 w-full md:w-auto"
              >
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-positivus-green rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-positivus-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-positivus-dark mb-2">Email</h3>
            <p className="text-gray-600">hello@positivus.com</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-positivus-green rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-positivus-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-bold text-positivus-dark mb-2">Phone</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-positivus-green rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-positivus-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-positivus-dark mb-2">Office</h3>
            <p className="text-gray-600">123 Marketing St, Digital City</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
