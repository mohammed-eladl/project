
import { Mail, MapPin } from 'lucide-react';
import { FooterSection } from './FooterSection';
import { FooterLink } from './FooterLink';
import { SocialLinks } from './SocialLinks';


export const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Information Section */}
          <FooterSection title="INFORMATION">
            <p className="text-gray-300 text-sm leading-relaxed">
              Years earlier, Passionate, well-educated & armed with decades of experience, 
              our team fated to meet. At one of those thoughtful gathering, we decided to 
              evolve our story from employees to entrepreneurs, from ideas to actions, from 
              dreams to reality.
            </p>
            <a href="/home">
            <img src="src/assets/Frame 1000004154.png" className="h-12 w-40" />
            </a>
          </FooterSection>

          {/* Navigation Section */}
          <FooterSection title="NAVIGATION">
            {[
              { text: 'Homepage', href: '/home' },
              { text: 'About Us', href: '/about-us' },
              { text: 'Portfolio', href: '/portfolio' },
              { text: 'Contact', href: '/contact' },
            ].map((link, index) => (
              <FooterLink key={index} href={link.href}>
                {link.text}
              </FooterLink>
            ))}
          </FooterSection>

          {/* Contact Section with Social Links */}
          <FooterSection title="CONTACT US">
            <div className="space-y-6">
              <div className="space-y-2">
                <FooterLink href="https://maps.app.goo.gl/RspcqXNmRZrXx5AL7" icon={MapPin}>
                  10th of Ramadan City
                </FooterLink>
                <FooterLink href="mailto:shady@vision-metalworks.com" icon={Mail}>
                  shady@vision-metalworks.com
                </FooterLink>
                <FooterLink href="mailto:amir@vision-metalworks.com" icon={Mail}>
                  amir@vision-metalworks.com
                </FooterLink>
                <FooterLink href="mailto:mohamed@vision-metalworks.com" icon={Mail}>
                  mohamed@vision-metalworks.com
                </FooterLink>
              </div>
              <SocialLinks />
              
            </div>
          </FooterSection>
        </div>

        {/* Copyright Section */}
        <div className="mt-4 pt-8 border-t border-gray-800">
          <p className="text-center text-white text-sm">
            ALL RIGHT RESERVED - VISION METAL WORKS
          </p>
        </div>
      </div>
    </footer>
  );
};