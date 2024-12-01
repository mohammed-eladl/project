import React from 'react';
import { Menu } from 'lucide-react';
import { Logo } from './Logo';
import { NavLinkK } from './NavLink';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Logo />
          
          <nav className="hidden md:flex space-x-8">
            <NavLinkK href="/home">Home</NavLinkK>
            <NavLinkK href="/about-us">About US</NavLinkK>
            <NavLinkK href="/portfolio">Portfolio</NavLinkK>
            <NavLinkK href="/contact-us">Contact</NavLinkK>
          </nav>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <NavLinkK href="/home" mobile>Home</NavLinkK>
          <NavLinkK href="/about-us" mobile>About US</NavLinkK>
          <NavLinkK href="/portfolio" mobile>Portfolio</NavLinkK>
          <NavLinkK href="/contact-us" mobile>Contact</NavLinkK>
        </div>
      </div>
    </header>
  );
}