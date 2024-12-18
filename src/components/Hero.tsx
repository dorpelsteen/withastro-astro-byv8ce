import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section 
      className="pt-32 pb-16 min-h-[90vh] relative flex items-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://lh7-rt.googleusercontent.com/docsz/AD_4nXcjUXk1fX_dgwsOf9Gw-3zf4daLQXsP7f8Txs9kwfBu-QHQwoxClib07O_qj9gea9zDWHHQ0e0B1zchcczoigKbFUoN7TGIF1MeI6SwIRbG3L9HQ5X6RHVoMzhILdKbSDi2YvaaAA?key=_De0L0LGXSW6HeyNti3l8Vt4)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Mechanical Design Engineer
          </h1>
          <p className="text-xl leading-relaxed mb-8">
            Hands-on Engineer with 4 years of professional mechanical design experience. 
            Specialized in innovative technology, prototyping and styling with a focus on 
            Consumer Goods, Lab Devices, Cleantech and EV projects.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              View Portfolio
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white text-white px-6 py-3 rounded-md hover:bg-white/10 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}