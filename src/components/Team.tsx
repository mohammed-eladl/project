import React from 'react';
import { Section } from './shared/Section';
import { TeamMember } from './shared/TeamMember';

const teamMembers = [
  {
    name: 'Shady abdel fattah',
    title: 'Chief Executive Officer',
    email: 'shady@vision-metalleader.com',
    imageUrl: 'src/assets/Image1.png'
  },
  {
    name: 'Amir Zain',
    title: 'Commercial Director',
    email: 'amir@vision-metalleader.com',
    imageUrl: 'src/assets/Picture.png'
  },
  {
    name: 'Mohamed Howas',
    title: 'Sales Manager',
    email: 'mohamed@vision-metalleader.com',
    imageUrl: 'src/assets/Image.png'
  }
];

export function Team() {
  return (
    <Section id="team" bgColor="white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Chefs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMember key={member.email} {...member} />
          ))}
        </div>
      </div>
    </Section>
  );
}