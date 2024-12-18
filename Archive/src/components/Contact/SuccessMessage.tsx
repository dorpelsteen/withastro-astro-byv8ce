import React from 'react';
import { CheckCircle } from 'lucide-react';

export function SuccessMessage() {
  return (
    <div className="text-center space-y-4">
      <div className="flex justify-center">
        <CheckCircle size={48} className="text-green-500" />
      </div>
      <h3 className="text-2xl font-semibold text-gray-900">Message Sent Successfully!</h3>
      <p className="text-gray-600">
        Thank you for reaching out. I'll get back to you as soon as possible.
      </p>
    </div>
  );
}