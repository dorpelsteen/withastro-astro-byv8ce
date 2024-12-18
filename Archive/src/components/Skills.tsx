import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const skillCategories = [
  {
    title: 'CAD Software',
    skills: ['Solidworks', 'Creo', 'Solid Edge', 'Onshape', 'Fusion360', 'Siemens NX', 'Autocad'],
  },
  {
    title: 'Design & Assembly',
    skills: ['Architecture', 'Motion Studies', 'Mechatronics', 'Snap Joints', 'IPX7 seal design', 'Rendering', '2D drawings'],
  },
  {
    title: 'Design for manufacturing',
    skills: ['Injection Molding', 'Milling', 'Sheet metal', 'Welding', '3D printing', 'Steel Construction'],
  },
  {
    title: 'Engineering',
    skills: ['FEM Analysis', 'Material Selection', 'Tolerance analysis', 'BOM Management', 'Requirement Documentation', 'Verification Testing', 'GD&T', 'Prototyping'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-2 text-gray-600">
                    <CheckCircle2 size={18} className="text-blue-600" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}