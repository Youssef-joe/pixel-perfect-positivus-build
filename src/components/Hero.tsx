
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Share, Play, MapPin } from 'lucide-react';

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

          {/* Right Content - Detailed Illustration */}
          <div className="relative animate-slide-in-left min-h-[500px] flex items-center justify-center">
            <div className="relative w-full max-w-[500px] h-[500px]">
              {/* Orbital Rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Outer ring */}
                <div className="absolute w-96 h-96 border-2 border-gray-200 rounded-full opacity-60"></div>
                {/* Middle ring */}
                <div className="absolute w-80 h-80 border-2 border-gray-300 rounded-full opacity-70"></div>
                {/* Inner ring */}
                <div className="absolute w-64 h-64 border-2 border-gray-400 rounded-full opacity-80"></div>
              </div>

              {/* Central Megaphone */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative transform -rotate-12">
                  {/* Megaphone Handle */}
                  <div className="w-3 h-20 bg-positivus-dark rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 rotate-12"></div>
                  
                  {/* Megaphone Body */}
                  <div className="relative">
                    {/* Main cone */}
                    <div className="w-32 h-20 bg-white border-2 border-positivus-dark rounded-r-full relative overflow-hidden">
                      {/* Green accent band */}
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-12 bg-positivus-green"></div>
                      {/* Black accent */}
                      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 w-4 h-8 bg-positivus-dark"></div>
                    </div>
                    
                    {/* Megaphone mouth/speaker */}
                    <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
                      <div className="w-20 h-20 border-4 border-positivus-dark rounded-full bg-white relative">
                        <div className="absolute inset-2 border-2 border-gray-300 rounded-full"></div>
                        <div className="absolute inset-4 bg-positivus-green rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Icons with Animation */}
              {/* Heart Icon - Top Right */}
              <div className="absolute top-16 right-12 w-12 h-12 bg-positivus-dark rounded-full flex items-center justify-center animate-pulse">
                <Heart size={20} className="text-white fill-white" />
              </div>

              {/* Share Icon - Top Right */}
              <div className="absolute top-8 right-4 w-12 h-12 bg-positivus-green rounded-full flex items-center justify-center animate-bounce">
                <Share size={20} className="text-positivus-dark" />
              </div>

              {/* Play Icon - Middle Right */}
              <div className="absolute top-1/2 right-8 transform -translate-y-1/2 w-12 h-12 bg-positivus-dark rounded-full flex items-center justify-center">
                <Play size={20} className="text-white fill-white" />
              </div>

              {/* Map Pin Icon - Bottom Right */}
              <div className="absolute bottom-16 right-16 w-12 h-12 bg-positivus-green rounded-full flex items-center justify-center">
                <MapPin size={20} className="text-positivus-dark" />
              </div>

              {/* Additional Decorative Elements */}
              {/* Black dots */}
              <div className="absolute top-20 left-8 w-4 h-4 bg-positivus-dark rounded-full"></div>
              <div className="absolute bottom-32 left-12 w-3 h-3 bg-positivus-dark rounded-full"></div>
              
              {/* Green dots */}
              <div className="absolute top-32 left-16 w-2 h-2 bg-positivus-green rounded-full"></div>
              <div className="absolute bottom-20 right-32 w-2 h-2 bg-positivus-green rounded-full"></div>

              {/* Star shapes */}
              <div className="absolute bottom-24 left-20">
                <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] border-l-transparent border-r-transparent border-b-positivus-dark relative">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[12px] border-l-transparent border-r-transparent border-t-positivus-dark"></div>
                </div>
              </div>

              <div className="absolute bottom-40 left-4">
                <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[9px] border-l-transparent border-r-transparent border-b-positivus-dark relative">
                  <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[9px] border-l-transparent border-r-transparent border-t-positivus-dark"></div>
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
