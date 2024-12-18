import React from 'react';
import { Calendar, Building2 } from 'lucide-react';

const experiences = [
  {
    title: 'Mechanical Design & Project Engineer',
    company: 'Comate Engineering & Design',
    period: 'Sep 2022 - Jul 2024',
    description: 'Applied advanced design thinking to develop innovative solutions in mechanical engineering. Worked on a lab device and fibre-optic enclosure for telecom. Tasks ranged from full assembly designing to sourcing, prototyping and verification testing. Parts design ranged from milling, sheet metal all the way to injection molding.',
  },
  {
    title: 'Mechanical Design & Project Engineer',
    company: 'CEE',
    period: 'Oct 2020 - Dec 2021',
    description: 'Designed and optimized mechanical systems for industrial applications. Mainly piping and support constructions. Tasks ranged from 3D scanning the environment and making digital twin to designing pipe work and preparing weld and mounting plans and coordinating the execution.',
  },
  {
    title: 'Design Engineer',
    company: 'Hypno Crafts',
    period: 'Jan 2024 - Now',
    description: 'At Hypno Crafts, I envision the styling and mechanical aspect of our products. Our company specializes in creating detailed digital build plans for innovative DIY electronics projects, like a mushroom incubator.',
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
            >
              <div className="md:w-1/3">
                <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                <div className="flex items-center gap-2 text-gray-600 mt-2">
                  <Building2 size={18} />
                  <span>{exp.company}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mt-2">
                  <Calendar size={18} />
                  <span>{exp.period}</span>
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}