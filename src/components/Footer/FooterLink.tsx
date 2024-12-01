
import { LucideIcon } from 'lucide-react';


interface FooterLinkProps {
  href: string;
  icon?: LucideIcon;
  children: React.ReactNode;
}

export const FooterLink = ({ href, icon: Icon, children }: FooterLinkProps) => {
  return (
    <a
      href={href}
      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
    >
      {Icon && <Icon size={16} />}
      <span>{children}</span>
    </a>
  );
};