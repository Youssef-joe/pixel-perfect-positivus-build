
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-positivus-dark leading-tight">
              Navigating the{' '}
              <span className="relative">
                digital
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-positivus-green -skew-x-12"></div>
              </span>{' '}
              landscape for success
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Our digital marketing agency helps businesses grow and succeed online through innovative strategies and measurable results.
            </p>

            <Button className="bg-positivus-dark text-white hover:bg-gray-800 font-medium px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105">
              Book a consultation
            </Button>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative animate-slide-in-left">
            <div className="bg-positivus-gray rounded-3xl p-8 relative overflow-hidden">
              {/* Abstract shapes representing digital marketing */}
              <div className="space-y-6">
                {/* Chart representation */}
                <div className="flex items-end space-x-3 justify-center">
                  <div className="w-4 h-8 bg-positivus-green rounded"></div>
                  <div className="w-4 h-12 bg-positivus-dark rounded"></div>
                  <div className="w-4 h-16 bg-positivus-green rounded"></div>
                  <div className="w-4 h-10 bg-positivus-dark rounded"></div>
                  <div className="w-4 h-20 bg-positivus-green rounded"></div>
                </div>
                
                {/* Growth arrow */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-32 h-1 bg-positivus-green transform rotate-12"></div>
                    <div className="absolute right-0 top-0 w-3 h-3 border-t-2 border-r-2 border-positivus-green transform rotate-45 -translate-y-1"></div>
                  </div>
                </div>

                {/* Digital elements */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                    <div className="w-8 h-8 bg-positivus-green rounded mx-auto mb-2"></div>
                    <span className="text-xs text-gray-600">SEO</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                    <div className="w-8 h-8 bg-positivus-dark rounded mx-auto mb-2"></div>
                    <span className="text-xs text-gray-600">PPC</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                    <div className="w-8 h-8 bg-positivus-green rounded mx-auto mb-2"></div>
                    <span className="text-xs text-gray-600">Social</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
