import React from 'react';
import { Printer, Users, Music } from 'lucide-react';

export function About() {
  const activities = [
    {
      icon: <Printer size={24} />,
      title: '3D Printing & Prototyping',
      description: 'Passionate about bringing ideas to life through 3D printing. My home workshop serves as a creative space for prototyping and testing innovative designs.'
    },
    {
      icon: <Users size={24} />,
      title: 'Youth Movement Leadership',
      description: 'Dedicated (retired but still active) leader at KSA Balen youth organization, communication and billing of shelter/tent rental service, fostering community engagement and personal growth.'
    },
    {
      icon: <Music size={24} />,
      title: 'Cultural Event Organization',
      description: 'Member of Stagerage VZW. Active organizer of Altaar, a cultural event in my hometown. Managing large-scale gatherings with up to 3,000 visitors, bringing the community together through shared experiences.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Beyond Engineering</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4 text-blue-600">
                {activity.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {activity.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}