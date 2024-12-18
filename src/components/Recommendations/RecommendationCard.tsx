import React from 'react';
import { FileText, Linkedin } from 'lucide-react';
import { Recommendation } from '../../types/recommendation';

interface RecommendationCardProps {
  recommendation: Recommendation;
}

export function RecommendationCard({ recommendation }: RecommendationCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{recommendation.name}</h3>
        <p className="text-gray-600">{recommendation.role}</p>
        <p className="text-gray-500">{recommendation.company}</p>
      </div>
      
      <blockquote className="text-gray-600 italic mb-6">
        "{recommendation.text}"
      </blockquote>
      
      <div className="flex items-center gap-4">
        <a
          href={recommendation.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
        >
          <Linkedin size={20} />
          <span>LinkedIn</span>
        </a>
        
        {recommendation.letterPdfUrl && (
          <a
            href={recommendation.letterPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
          >
            <FileText size={20} />
            <span>View Letter</span>
          </a>
        )}
      </div>
    </div>
  );
}