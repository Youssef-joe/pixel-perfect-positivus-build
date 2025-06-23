
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

          {/* Right Content - Use the uploaded image as fallback */}
          <div className="relative animate-slide-in-left min-h-[500px] flex items-center justify-center">
            <div className="relative w-full max-w-[500px] h-[500px]">
              {/* Orbital Rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Outer ring */}
                <div className="absolute w-[480px] h-[240px] border-2 border-gray-200 rounded-full opacity-60 transform rotate-12"></div>
                {/* Middle ring */}
                <div className="absolute w-[400px] h-[200px] border-2 border-gray-300 rounded-full opacity-70 transform -rotate-6"></div>
                {/* Inner ring */}
                <div className="absolute w-[320px] h-[160px] border-2 border-gray-400 rounded-full opacity-80 transform rotate-3"></div>
                {/* Innermost ring */}
                <div className="absolute w-[240px] h-[120px] border-2 border-gray-500 rounded-full opacity-90 transform -rotate-12"></div>
              </div>

              {/* Central Megaphone - Exact recreation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative transform rotate-12">
                  {/* Megaphone Handle - Black vertical handle */}
                  <div className="absolute top-16 left-6 w-3 h-12 bg-positivus-dark rounded-full transform rotate-45"></div>
                  
                  {/* Main Megaphone Body */}
                  <div className="relative">
                    {/* Megaphone Cone - Custom SVG for exact shape */}
                    <svg width="180" height="90" viewBox="0 0 180 90" className="overflow-visible">
                      {/* Main cone body - white with black border */}
                      <path 
                        d="M30 20 L150 30 L150 60 L30 70 Z" 
                        fill="white" 
                        stroke="#191A23" 
                        strokeWidth="3"
                      />
                      
                      {/* Green accent section - left part */}
                      <rect 
                        x="30" 
                        y="35" 
                        width="25" 
                        height="20" 
                        fill="#B9FF66"
                      />
                      
                      {/* Black accent section - middle */}
                      <rect 
                        x="55" 
                        y="38" 
                        width="12" 
                        height="14" 
                        fill="#191A23"
                      />
                    </svg>
                    
                    {/* Megaphone Opening/Speaker - Large circular opening */}
                    <div className="absolute -right-16 top-1/2 transform -translate-y-1/2">
                      <div className="relative">
                        {/* Outer ring - black border */}
                        <div className="w-32 h-32 border-4 border-positivus-dark rounded-full bg-white relative">
                          {/* Inner ring - gray */}
                          <div className="absolute inset-4 border-2 border-gray-300 rounded-full bg-white">
                            {/* Center circle - green */}
                            <div className="absolute inset-4 bg-positivus-green rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Icons with exact positioning from image */}
              {/* Heart Icon - Top area */}
              <div className="absolute top-12 right-16 w-12 h-12 bg-positivus-dark rounded-full flex items-center justify-center animate-pulse">
                <Heart size={20} className="text-white fill-white" />
              </div>

              {/* Share Icon - Top right */}
              <div className="absolute top-6 right-4 w-12 h-12 bg-positivus-green rounded-full flex items-center justify-center animate-bounce">
                <Share size={20} className="text-positivus-dark" />
              </div>

              {/* Play Icon - Right side */}
              <div className="absolute top-1/2 right-2 transform -translate-y-1/2 w-12 h-12 bg-positivus-dark rounded-full flex items-center justify-center">
                <Play size={20} className="text-white fill-white" />
              </div>

              {/* Map Pin Icon - Bottom right */}
              <div className="absolute bottom-20 right-12 w-12 h-12 bg-positivus-green rounded-full flex items-center justify-center">
                <MapPin size={20} className="text-positivus-dark" />
              </div>

              {/* Decorative Elements exactly like in image */}
              {/* Black circle - top left */}
              <div className="absolute top-8 left-4 w-6 h-6 bg-positivus-dark rounded-full"></div>
              
              {/* Green small circle */}
              <div className="absolute top-16 left-20 w-3 h-3 bg-positivus-green rounded-full"></div>
              
              {/* Black star shape - bottom left */}
              <div className="absolute bottom-16 left-8">
                <svg width="20" height="20" viewBox="0 0 20 20" className="fill-positivus-dark">
                  <path d="M10 2l2.5 7.5h7.5l-6 4.5 2.5 7.5-6-4.5-6 4.5 2.5-7.5-6-4.5h7.5z"/>
                </svg>
              </div>

              {/* Small black star - bottom */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <svg width="16" height="16" viewBox="0 0 20 20" className="fill-positivus-dark">
                  <path d="M10 2l2.5 7.5h7.5l-6 4.5 2.5 7.5-6-4.5-6 4.5 2.5-7.5-6-4.5h7.5z"/>
                </svg>
              </div>

              {/* Green dot - bottom right area */}
              <div className="absolute bottom-32 right-32 w-2 h-2 bg-positivus-green rounded-full"></div>

              {/* Additional black dot */}
              <div className="absolute bottom-40 left-16 w-4 h-4 bg-positivus-dark rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
