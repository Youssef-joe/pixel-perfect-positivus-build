
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: 'Search engine',
      subtitle: 'optimization',
      description: 'Improve your website\'s visibility and ranking on search engines with our proven SEO strategies.',
      bgColor: 'bg-positivus-gray',
      textColor: 'text-positivus-dark',
      accentColor: 'bg-positivus-green'
    },
    {
      title: 'Pay-per-click',
      subtitle: 'advertising',
      description: 'Drive immediate traffic and conversions with targeted PPC campaigns across all major platforms.',
      bgColor: 'bg-positivus-green',
      textColor: 'text-positivus-dark',
      accentColor: 'bg-white'
    },
    {
      title: 'Social Media',
      subtitle: 'Marketing',
      description: 'Build and engage your community with strategic social media campaigns that drive real results.',
      bgColor: 'bg-positivus-dark',
      textColor: 'text-white',
      accentColor: 'bg-positivus-green'
    },
    {
      title: 'Email',
      subtitle: 'Marketing',
      description: 'Nurture leads and retain customers with personalized email campaigns that convert.',
      bgColor: 'bg-positivus-gray',
      textColor: 'text-positivus-dark',
      accentColor: 'bg-positivus-green'
    },
    {
      title: 'Content',
      subtitle: 'Creation',
      description: 'Engage your audience with high-quality content that tells your brand story effectively.',
      bgColor: 'bg-positivus-green',
      textColor: 'text-positivus-dark',
      accentColor: 'bg-white'
    },
    {
      title: 'Analytics and',
      subtitle: 'Tracking',
      description: 'Make data-driven decisions with comprehensive analytics and performance tracking.',
      bgColor: 'bg-positivus-dark',
      textColor: 'text-white',
      accentColor: 'bg-positivus-green'
    }
  ];

  return (
    <section id="services" className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-positivus-dark mb-6">
            Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`${service.bgColor} border-2 border-positivus-dark rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group`}
            >
              <CardContent className="p-0">
                <div className="flex justify-between items-start mb-6">
                  <div className="space-y-1">
                    <h3 className={`text-2xl lg:text-3xl font-bold ${service.textColor}`}>
                      {service.title}
                    </h3>
                    <h4 className={`text-2xl lg:text-3xl font-bold ${service.textColor}`}>
                      {service.subtitle}
                    </h4>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className={`w-8 h-8 ${service.accentColor} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <svg
                        className={`w-4 h-4 ${service.textColor === 'text-white' ? 'text-positivus-dark' : 'text-white'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <p className={`${service.textColor} opacity-80 leading-relaxed`}>
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
