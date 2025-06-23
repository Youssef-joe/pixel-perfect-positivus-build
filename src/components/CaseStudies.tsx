
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
      linkText: 'Learn more',
      bgColor: 'bg-positivus-dark'
    },
    {
      title: 'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
      linkText: 'Learn more',
      bgColor: 'bg-positivus-green'
    },
    {
      title: 'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.',
      linkText: 'Learn more',
      bgColor: 'bg-positivus-dark'
    }
  ];

  return (
    <section id="cases" className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-positivus-dark mb-6">
            Case Studies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className={`${study.bgColor} border-2 border-positivus-dark rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group`}
            >
              <CardContent className="p-0 flex flex-col h-full">
                <p className={`${study.bgColor === 'bg-positivus-green' ? 'text-positivus-dark' : 'text-white'} text-lg leading-relaxed mb-6 flex-grow`}>
                  {study.title}
                </p>
                
                <div className="flex items-center space-x-2 group-hover:translate-x-2 transition-transform duration-300">
                  <span className={`${study.bgColor === 'bg-positivus-green' ? 'text-positivus-dark' : 'text-positivus-green'} font-medium`}>
                    {study.linkText}
                  </span>
                  <svg
                    className={`w-4 h-4 ${study.bgColor === 'bg-positivus-green' ? 'text-positivus-dark' : 'text-positivus-green'}`}
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
