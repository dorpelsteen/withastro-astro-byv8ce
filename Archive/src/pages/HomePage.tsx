import React from 'react';
import { Hero } from '../components/Hero';
import { Experience } from '../components/Experience';
import { Skills } from '../components/Skills';
import { Portfolio } from '../components/Portfolio/Portfolio';
import { About } from '../components/About';
import { Contact } from '../components/Contact';

export function HomePage() {
  return (
    <main>
      <Hero />
      <Experience />
      <Skills />
      <Portfolio />
      <About />
      <Contact />
    </main>
  );
}