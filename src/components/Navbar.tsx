import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'AUDITION', href: '#audition' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed w-full z-50 py-4 px-6 flex justify-between items-center border-b border-gray-800 transition-all duration-300",
      isScrolled ? "glass-nav" : "bg-transparent"
    )}>
      <div className="text-2xl font-black tracking-tighter neon-text">LAUGH ENT.</div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 text-sm font-bold tracking-widest">
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className="hover:text-neon-green transition-colors">
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden text-neon-green"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full glass-nav border-b border-gray-800 flex flex-col items-center py-8 space-y-6 md:hidden">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-bold tracking-widest hover:text-neon-green"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
