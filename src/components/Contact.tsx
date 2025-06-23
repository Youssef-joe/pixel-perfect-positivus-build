
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Contact = () => {
  return (
    <section className="bg-positivus-gray py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Contact Card */}
        <div className="bg-positivus-gray rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-positivus-dark leading-tight">
                Let's make things happen
              </h2>
              
              <p className="text-lg text-positivus-dark leading-relaxed max-w-lg">
                Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
              </p>

              <Button className="bg-positivus-dark text-white hover:bg-gray-800 font-medium px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105">
                Get your free proposal
              </Button>
            </div>

            {/* Right Illustration */}
            <div className="relative flex items-center justify-center min-h-[300px]">
              {/* Background Star Shape */}
              <div className="absolute top-4 right-8 w-16 h-16">
                <svg viewBox="0 0 24 24" className="w-full h-full text-gray-300 fill-current">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>

              {/* Central Illustration */}
              <div className="relative">
                {/* Orbital Rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Multiple orbital rings */}
                  <div className="absolute w-64 h-32 border-2 border-gray-400 rounded-full opacity-40 transform rotate-12"></div>
                  <div className="absolute w-56 h-28 border-2 border-gray-400 rounded-full opacity-50 transform -rotate-12"></div>
                  <div className="absolute w-48 h-24 border-2 border-gray-400 rounded-full opacity-60 transform rotate-6"></div>
                </div>

                {/* Central Black Circle with Eyes */}
                <div className="relative z-10 w-20 h-20 bg-positivus-dark rounded-full flex items-center justify-center">
                  {/* Two white oval eyes */}
                  <div className="flex space-x-2">
                    <div className="w-3 h-4 bg-white rounded-full"></div>
                    <div className="w-3 h-4 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Floating Elements */}
                {/* Green Diamond Shape */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-positivus-green transform rotate-45"></div>
                </div>

                {/* Additional decorative elements */}
                <div className="absolute -top-4 -left-4 w-3 h-3 bg-gray-400 rounded-full"></div>
                <div className="absolute -bottom-4 -right-4 w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Newsletter Section */}
        <div className="bg-positivus-dark rounded-3xl p-8 lg:p-12 mt-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold text-white">
                Stay Updated
              </h3>
              <p className="text-white opacity-80">
                Subscribe to our newsletter for the latest digital marketing insights and updates.
              </p>
            </div>

            {/* Right Newsletter Form */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email" 
                placeholder="Email"
                className="bg-transparent border-white text-white placeholder:text-white placeholder:opacity-70 rounded-full px-6 py-3 flex-1"
              />
              <Button className="bg-positivus-green text-positivus-dark hover:bg-green-400 font-medium px-8 py-3 rounded-full whitespace-nowrap">
                Subscribe to news
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
