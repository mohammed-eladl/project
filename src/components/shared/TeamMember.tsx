import React from 'react';
import { Card } from './Card';

interface TeamMemberProps {
  name: string;
  title: string;
  email: string;
  imageUrl: string;
}

export function TeamMember({ name, title, email, imageUrl }: TeamMemberProps) {
  return (
    <Card className="text-center space-y-4">
      <div className="relative w-32 h-32 mx-auto">
        <img
          src={imageUrl}
          alt={name}
          className="rounded-full w-full h-full object-cover shadow-lg"
        />
      </div>
      <div>
        <h3 className="font-bold text-xl text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600 uppercase tracking-wider">{title}</p>
        <a 
          href={`mailto:${email}`}
          className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
        >
          {email}
        </a>
      </div>
    </Card>
  );
}