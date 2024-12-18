import React from 'react';
import { RecommendationCard } from './RecommendationCard';
import { recommendations } from '../../data/recommendations';

export function Recommendations() {
  return (
    <section id="recommendations" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendations.map((recommendation, index) => (
            <RecommendationCard
              key={index}
              recommendation={recommendation}
            />
          ))}
        </div>
      </div>
    </section>
  );
}