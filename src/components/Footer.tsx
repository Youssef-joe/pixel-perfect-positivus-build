
import React from 'react';

const Footer = () => {
  const footerLinks = {
    'About us': ['Our Story', 'Team', 'Careers', 'News'],
    'Services': ['SEO', 'PPC', 'Social Media', 'Content Creation'],
    'Use Cases': ['E-commerce', 'B2B', 'Healthcare', 'Technology'],
    'Pricing': ['SEO Plans', 'PPC Management', 'Social Media', 'Custom Solutions']
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: 'LinkedIn' },
    { name: 'Facebook', icon: 'Facebook' },
    { name: 'Twitter', icon: 'Twitter' }
  ];

  return (
    <footer className="bg-positivus-dark text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-positivus-green rounded-full flex items-center justify-center mr-2">
                <span className="text-positivus-dark font-bold text-sm">P</span>
              </div>
              <span className="text-2xl font-bold text-white">Positivus</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Navigating the digital landscape for success. We help businesses grow and succeed online through innovative strategies.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-positivus-green hover:text-positivus-dark transition-all duration-300"
                >
                  <span className="text-sm font-bold">
                    {social.icon === 'LinkedIn' ? 'in' : social.icon === 'Facebook' ? 'f' : 't'}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-bold text-positivus-green mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-positivus-green transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Stay Updated
              </h3>
              <p className="text-gray-300">
                Subscribe to our newsletter for the latest digital marketing insights and tips.
              </p>
            </div>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white rounded-lg text-positivus-dark focus:outline-none focus:ring-2 focus:ring-positivus-green"
              />
              <button className="bg-positivus-green text-positivus-dark px-6 py-3 rounded-lg font-medium hover:bg-green-400 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Positivus. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-positivus-green transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-positivus-green transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-positivus-green transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
