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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 h-[70px] flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => setCurrentPage('Home')} className="flex items-center">
          <img src="/assets/logo-light-bg.png" alt="NeuraX Cognitive Solutions" className="h-11 block" />
        </button>
 
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => setCurrentPage(link)}
              className={`text-sm font-medium transition-colors relative pb-1 ${
                currentPage === link
                  ? 'text-blue-600 nav-active-underline'
                  : 'text-slate-600 hover:text-slate-900'
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
        <button className="md:hidden text-slate-800" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
 
      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-slate-200/80 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => { setCurrentPage(link); setMobileOpen(false); }}
              className={`text-sm font-medium text-left ${
                currentPage === link ? 'text-blue-600 font-semibold' : 'text-slate-600'
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
