
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Team = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO and Founder',
      experience: '10+ years of experience in digital marketing.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Jane Doe',
      role: 'Director of Operations',
      experience: '7+ years of experience in project management and team leadership.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Michael Brown',
      role: 'Senior SEO Specialist',
      experience: '5+ years of experience in SEO and content creation.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Emily Johnson',
      role: 'PPC Manager',
      experience: '3+ years of experience in paid search advertising.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Brian Williams',
      role: 'Social Media Specialist',
      experience: '4+ years of experience in social media marketing.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Sarah Kim',
      role: 'Content Creator',
      experience: '2+ years of experience in writing and content creation.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face'
    }
  ];

  return (
    <section id="about" className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-positivus-dark mb-6">
            Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the skilled and experienced team behind our successful digital marketing strategies
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="bg-white border-2 border-positivus-dark rounded-3xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
            >
              <CardContent className="p-0 text-center">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-positivus-green group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Member Info */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-positivus-dark">
                    {member.name}
                  </h3>
                  <p className="text-positivus-dark font-medium">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.experience}
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3 mt-6">
                  <div className="w-8 h-8 bg-positivus-dark rounded-full flex items-center justify-center hover:bg-positivus-green transition-colors duration-300 cursor-pointer">
                    <span className="text-white text-xs font-bold">in</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-positivus-dark text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105">
            See all team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
