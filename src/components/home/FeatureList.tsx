import React from 'react';
import { Check } from 'lucide-react';

export function FeatureList() {
  const features = [
    { title: 'Precision and Quality', paired: 'On-time Delivery' },
    { title: 'Perfect Work', paired: 'Custom Solutions' },
    { title: 'Client Priority', paired: 'Competitive Pricing' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {features.map(({ title, paired }, index) => (
        <React.Fragment key={index}>
          <div className="flex items-center space-x-2">
            <div className="flex-shrink-0">
              <Check className="h-5 w-5 text-gray-400" />
            </div>
            <span className="text-gray-900">{title}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex-shrink-0">
              <Check className="h-5 w-5 text-gray-400" />
            </div>
            <span className="text-gray-900">{paired}</span>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}