
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'About us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Use Cases', href: '#cases' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Blog', href: '#blog' },
  ];

  return (
    <header className="bg-white py-4 px-6 sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-8 h-8 bg-positivus-dark rounded-full flex items-center justify-center mr-2">
            <span className="text-white font-bold text-sm">P</span>
          </div>
          <span className="text-2xl font-bold text-positivus-dark">Positivus</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-positivus-dark hover:text-gray-600 transition-colors duration-200 font-medium"
            >
              {item.label}
            </a>
          ))}
          <Button className="bg-positivus-green text-positivus-dark hover:bg-green-400 font-medium px-6 py-2 rounded-full">
            Request a quote
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="w-6 h-0.5 bg-positivus-dark transition-all duration-300"></span>
          <span className="w-6 h-0.5 bg-positivus-dark transition-all duration-300"></span>
          <span className="w-6 h-0.5 bg-positivus-dark transition-all duration-300"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 py-4 border-t border-gray-100">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-positivus-dark hover:text-gray-600 transition-colors duration-200 font-medium px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button className="bg-positivus-green text-positivus-dark hover:bg-green-400 font-medium px-6 py-2 rounded-full w-fit mx-2">
              Request a quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
