import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div 
      className={`
        p-6 bg-gray-50 rounded-lg shadow-sm
        ${hover ? 'hover:bg-gray-100 hover:-translate-y-1' : ''}
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
}