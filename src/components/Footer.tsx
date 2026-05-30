import { Linkedin } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  return (
    <footer className="bg-[#030712] border-t border-white/5 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <button onClick={() => setCurrentPage('Home')} className="flex items-center">
          <img src="/assets/logo-removebg-preview.png" alt="NeuraX" className="h-7 block opacity-85 hover:opacity-100 transition-opacity" />
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
          <a href="https://www.linkedin.com/in/dr-varshini-md-103438212/" target="_blank" rel="noreferrer" className="ml-2 text-gray-400 hover:text-white transition-colors">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
