import { Linkedin } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  return (
    <footer className="bg-[#0a0e1a] border-t border-[rgba(59,130,246,0.15)] py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <button onClick={() => setCurrentPage('Home')} className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
            <g className="animate-pulse">
              <circle cx="8" cy="8" r="1.5" fill="#3b82f6" filter="url(#glow2)" />
              <circle cx="16" cy="6" r="1.5" fill="#3b82f6" filter="url(#glow2)" />
              <circle cx="24" cy="8" r="1.5" fill="#3b82f6" filter="url(#glow2)" />
              <circle cx="10" cy="16" r="1.5" fill="#3b82f6" filter="url(#glow2)" />
              <circle cx="16" cy="18" r="1.5" fill="#3b82f6" filter="url(#glow2)" />
              <circle cx="22" cy="16" r="1.5" fill="#3b82f6" filter="url(#glow2)" />
              <circle cx="14" cy="24" r="1.5" fill="#3b82f6" filter="url(#glow2)" />
              <circle cx="18" cy="24" r="1.5" fill="#3b82f6" filter="url(#glow2)" />

              <line x1="8" y1="8" x2="16" y2="6" stroke="#3b82f6" strokeWidth="0.5" opacity="0.6" />
              <line x1="16" y1="6" x2="24" y2="8" stroke="#3b82f6" strokeWidth="0.5" opacity="0.6" />
              <line x1="8" y1="8" x2="10" y2="16" stroke="#3b82f6" strokeWidth="0.5" opacity="0.6" />
              <line x1="24" y1="8" x2="22" y2="16" stroke="#3b82f6" strokeWidth="0.5" opacity="0.6" />
              <line x1="10" y1="16" x2="16" y2="18" stroke="#3b82f6" strokeWidth="0.5" opacity="0.6" />
              <line x1="16" y1="18" x2="22" y2="16" stroke="#3b82f6" strokeWidth="0.5" opacity="0.6" />
              <line x1="16" y1="18" x2="14" y2="24" stroke="#3b82f6" strokeWidth="0.5" opacity="0.6" />
              <line x1="16" y1="18" x2="18" y2="24" stroke="#3b82f6" strokeWidth="0.5" opacity="0.6" />

              <defs>
                <filter id="glow2" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="1" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
            </g>
          </svg>
          <div className="flex flex-col leading-tight text-left">
            <span className="text-white font-bold text-base">
              Neura<span className="text-blue-500">X</span>
            </span>
            <span className="text-gray-400 text-[10px] font-light">Cognitive Solutions</span>
          </div>
        </button>

        {/* Copyright */}
        <span className="text-gray-400 text-sm text-center">
          © NeuraX Cognitive Solutions Pvt. Ltd. All rights reserved.
        </span>

        {/* Links */}
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <button onClick={() => setCurrentPage('Privacy Policy')} className="hover:text-white transition-colors">Privacy Policy</button>
          <span className="text-gray-600">|</span>
          <button onClick={() => setCurrentPage('Terms of Use')} className="hover:text-white transition-colors">Terms of Use</button>
          <span className="text-gray-600">|</span>
          <button onClick={() => setCurrentPage('Contact')} className="hover:text-white transition-colors">Contact</button>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="ml-2 text-gray-400 hover:text-white transition-colors">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
