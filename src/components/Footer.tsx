import React from 'react';
import { Instagram, Youtube, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="py-24 bg-black border-t border-gray-900 text-center px-6">
      <div className="mb-12">
        <h2 className="text-3xl font-bold neon-text mb-6">CONTACT US</h2>
        <p className="text-gray-400 text-lg">Business Inquiry: LaughEntertainment@gmail.com</p>
      </div>
      
      <div className="flex justify-center space-x-8 text-2xl mb-12">
        <a href="#" className="text-white hover:text-neon-green transition-colors">
          <Instagram size={32} />
        </a>
        <a href="#" className="text-white hover:text-neon-green transition-colors">
          <Youtube size={32} />
        </a>
        <a href="#" className="text-white hover:text-neon-green transition-colors">
          <Twitter size={32} />
        </a>
      </div>
      
      <div className="max-w-4xl mx-auto border-t border-gray-900 pt-10">
        <p className="text-xs text-gray-600 uppercase tracking-[0.3em]">
          &copy; {new Date().getFullYear()} Laugh Entertainment. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
