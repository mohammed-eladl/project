
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      {[
        { Icon: Facebook, href: '#' },
        { Icon: Twitter, href: '#' },
        { Icon: Instagram, href: '#' },
        { Icon: Linkedin, href: '#' },
      ].map(({ Icon, href }, index) => (
        <a
          key={index}
          href={href}
          className="text-gray-400 hover:text-white transition-colors duration-200"
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
};