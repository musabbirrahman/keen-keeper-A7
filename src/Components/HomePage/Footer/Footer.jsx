import React from 'react';
import { FaYoutube, FaFacebookF, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    // Outer container with the exact dark green background from your Figma
    <footer className="bg-[#244D3F] text-white pt-16 pb-8 mt-20">
      
      {/* Inner container matching the width of your Banner and AllFriends components */}
      <div className="w-[95%] md:w-[80%] mx-auto flex flex-col items-center">
        
        {/* Brand Name */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-wide">
          KeenKeeper
        </h2>
        
        {/* Subtitle / Tagline */}
        <p className="text-sm md:text-base text-gray-300 text-center max-w-2xl mb-10 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        
        {/* Social Links Section */}
        <div className="flex flex-col items-center mb-16">
          <span className="text-sm font-semibold mb-4 text-white/90">
            Social Links
          </span>
          <div className="flex gap-4">
            <a href="#" className="bg-white text-[#244D3F] p-2 rounded-full hover:bg-gray-200 hover:-translate-y-1 transition-all duration-200">
              <FaYoutube className="w-5 h-5" />
            </a>
            <a href="#" className="bg-white text-[#244D3F] p-2 rounded-full hover:bg-gray-200 hover:-translate-y-1 transition-all duration-200">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="#" className="bg-white text-[#244D3F] p-2 rounded-full hover:bg-gray-200 hover:-translate-y-1 transition-all duration-200">
              <FaXTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        {/* Bottom Bar: Copyright & Legal Links */}
        {/* I added a very faint border-t (border-white/10) to anchor the bottom section nicely */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-gray-400 pt-6 border-t border-white/10 gap-4">
          
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
          
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;