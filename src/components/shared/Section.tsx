import React from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  bgColor?: 'white' | 'gray';
}

export function Section({ 
  id, 
  className = '', 
  children,
  bgColor = 'white'
}: SectionProps) {
  return (
    <section 
      id={id} 
      className={`
        py-24 
        ${bgColor === 'white' ? 'bg-white' : 'bg-gray-50'}
        ${className}
      `}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}