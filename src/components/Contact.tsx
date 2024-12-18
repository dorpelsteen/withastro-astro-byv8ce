import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { ContactForm } from './Contact/ContactForm';
import { SuccessMessage } from './Contact/SuccessMessage';

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Connect</h2>
          <p className="text-gray-600 mb-8">
            Interested in discussing a project or just want to say hello? Feel free to reach out!
          </p>
          
          {isSubmitted ? (
            <SuccessMessage />
          ) : (
            <ContactForm onSubmitSuccess={() => setIsSubmitted(true)} />
          )}
        </div>
      </div>
    </section>
  );
}