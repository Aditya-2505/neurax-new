import { Brain, Database, TrendingUp, Shield, ArrowRight } from 'lucide-react';
import { BrainSide } from '../components/BrainViz';

interface TechnologyProps {
  setCurrentPage: (page: string) => void;
}

export default function Technology({ setCurrentPage }: TechnologyProps) {
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient min-h-[420px] flex items-center pt-[70px]">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <div>
            <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-4">Our Technology</p>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4">
              The Intelligence Layer Behind Recovery
            </h1>
            <div className="w-10 h-[3px] bg-blue-600 mb-6" />
            <p className="text-gray-300 text-base leading-relaxed max-w-md">
              NeuraX leverages advanced AI, data science, and neuroscience to deliver intelligent solutions for continuous cognitive recovery and better neurological outcomes.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <BrainSide />
            </div>
          </div>
        </div>
      </section>

      {/* Core Technology Pillars */}
      <section className="bg-[#0d1b3e] py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Brain size={32} className="text-blue-400" />,
              title: 'Intelligent Recovery Systems',
              desc: 'AI-enabled systems that support cognitive assessment, monitoring, and recovery workflows.'
            },
            {
              icon: <Database size={32} className="text-blue-400" />,
              title: 'Longitudinal Data Intelligence',
              desc: 'Continuous data collection and analysis that helps track recovery progression over time.'
            },
            {
              icon: <TrendingUp size={32} className="text-blue-400" />,
              title: 'AI Analytics Engine',
              desc: 'Advanced algorithms that identify patterns and provide meaningful insights for better decisions.'
            },
            {
              icon: <Shield size={32} className="text-blue-400" />,
              title: 'Secure & Scalable Infrastructure',
              desc: 'Enterprise-grade, secure, and scalable infrastructure built to handle sensitive healthcare data with compliance.'
            }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="icon-circle mb-5">
                {item.icon}
              </div>
              <h3 className="text-white font-bold text-base mb-3">{item.title}</h3>
              <div className="w-8 h-[2px] bg-blue-500 mb-3" />
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Future Section */}
      <section className="section-light py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Left text */}
          <div className="lg:col-span-1">
            <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase mb-3">The Future</p>
            <h2 className="text-gray-900 text-2xl font-bold mb-3">Building the Future of Neurotechnology</h2>
            <div className="w-10 h-[3px] bg-blue-600 mb-5" />
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              We are constantly innovating to bring next-generation neurotechnology solutions that will redefine the future of cognitive care and rehabilitation.
            </p>
            <button onClick={() => setCurrentPage('About Us')} className="btn-primary text-sm">
              Explore Our Vision
            </button>
          </div>

          {/* Right: 3 cards */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                img: 'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=600',
                title: 'Smart Neuro-Stylus',
                desc: 'Next-gen digital tools designed to capture cognitive interactions naturally and accurately.'
              },
              {
                img: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=600',
                title: 'Neuro-Monitoring Wearables',
                desc: 'Wearable technology for continuous monitoring of neurological and behavioral indicators.'
              },
              {
                img: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600',
                title: 'Connected Ecosystem',
                desc: 'An integrated ecosystem connecting patients, clinicians, and care providers seamlessly.'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden border border-gray-200">
                <img src={item.img} alt={item.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-gray-900 font-bold text-sm mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Banner */}
      <section className="bg-[#0d1b3e] border-t border-[rgba(59,130,246,0.2)] py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="icon-circle-sm flex-shrink-0">
              <Shield size={20} className="text-blue-400" />
            </div>
            <p className="text-gray-300 text-sm">
              Privacy, security, and ethical AI are at the core of everything we build.<br className="hidden md:block" />
              We are committed to responsible innovation in cognitive healthcare.
            </p>
          </div>
          <button onClick={() => setCurrentPage('Privacy Policy')} className="text-blue-400 text-sm font-medium flex items-center gap-2 hover:text-blue-300 transition-colors whitespace-nowrap">
            Learn About Our Security <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
