import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const navLinks = ['Home', 'Solutions', 'Technology', 'About Us', 'Resources', 'Contact'];

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e1a] border-b border-[rgba(59,130,246,0.15)]">
      <div className="max-w-7xl mx-auto px-6 h-[70px] flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => setCurrentPage('Home')} className="flex items-center gap-3">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
            {/* Neural network brain */}
            <g className="animate-pulse">
              <circle cx="8" cy="8" r="1.5" fill="#3b82f6" filter="url(#glow)" />
              <circle cx="16" cy="6" r="1.5" fill="#3b82f6" filter="url(#glow)" />
              <circle cx="24" cy="8" r="1.5" fill="#3b82f6" filter="url(#glow)" />
              <circle cx="10" cy="16" r="1.5" fill="#3b82f6" filter="url(#glow)" />
              <circle cx="16" cy="18" r="1.5" fill="#3b82f6" filter="url(#glow)" />
              <circle cx="22" cy="16" r="1.5" fill="#3b82f6" filter="url(#glow)" />
              <circle cx="14" cy="24" r="1.5" fill="#3b82f6" filter="url(#glow)" />
              <circle cx="18" cy="24" r="1.5" fill="#3b82f6" filter="url(#glow)" />

              <line x1="8" y1="8" x2="16" y2="6" stroke="#3b82f6" strokeWidth="0.5" opacity="0.6" />
              <line x1="16" y1="6" x2="24" y2="8" stroke="#3b82f6" strokeWidth="0.5" opacity="0.6" />
              <line x1="8" y1="8" x2="10" y2="16" stroke="#3b82f6" strokeWidth="0.5" opacity="0.6" />
              <line x1="24" y1="8" x2="22" y2="16" stroke="#3b82f6" strokeWidth="0.5" opacity="0.6" />
              <line x1="10" y1="16" x2="16" y2="18" stroke="#3b82f6" strokeWidth="0.5" opacity="0.6" />
              <line x1="16" y1="18" x2="22" y2="16" stroke="#3b82f6" strokeWidth="0.5" opacity="0.6" />
              <line x1="16" y1="18" x2="14" y2="24" stroke="#3b82f6" strokeWidth="0.5" opacity="0.6" />
              <line x1="16" y1="18" x2="18" y2="24" stroke="#3b82f6" strokeWidth="0.5" opacity="0.6" />

              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="1" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
            </g>
          </svg>
          <div className="flex flex-col leading-tight">
            <span className="text-white font-bold text-lg">
              Neura<span className="text-blue-500">X</span>
            </span>
            <span className="text-gray-400 text-[11px] font-light">Cognitive Solutions</span>
          </div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => setCurrentPage(link)}
              className={`text-sm font-medium transition-colors relative pb-1 ${
                currentPage === link
                  ? 'text-blue-400 nav-active-underline'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {link}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => setCurrentPage('Contact')}
            className="btn-outline text-sm"
          >
            Partner With Us
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a0e1a] border-t border-[rgba(59,130,246,0.15)] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => { setCurrentPage(link); setMobileOpen(false); }}
              className={`text-sm font-medium text-left ${
                currentPage === link ? 'text-blue-400' : 'text-gray-300'
              }`}
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => { setCurrentPage('Contact'); setMobileOpen(false); }}
            className="btn-outline text-sm w-fit"
          >
            Partner With Us
          </button>
        </div>
      )}
    </nav>
  );
}
