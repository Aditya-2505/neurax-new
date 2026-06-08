import { Brain, Database, TrendingUp, Shield, ArrowRight } from 'lucide-react';

interface TechnologyProps {
  setCurrentPage: (page: string) => void;
}

export default function Technology({ setCurrentPage }: TechnologyProps) {
  return (
    <div>
      {/* Hero */}
      <section className="pt-[70px] pb-12 relative overflow-hidden bg-gradient-to-br from-blue-50/50 via-white to-slate-50 w-full border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[380px] md:min-h-[460px] lg:min-h-[500px] w-full relative z-10">
          <div>
            <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase mb-4">Our Technology</p>
            <h1 className="text-slate-900 text-4xl md:text-5xl font-bold leading-tight mb-4">
              The Intelligence Layer Behind Recovery
            </h1>
            <div className="w-10 h-[3px] bg-blue-600 mb-6" />
            <p className="text-slate-650 text-base leading-relaxed max-w-md">
              NeuraX leverages advanced AI, data science, and neuroscience to deliver intelligent solutions for continuous cognitive recovery and better neurological outcomes.
            </p>
          </div>
          
          {/* Client eeg session photo in right column */}
          <div className="hidden lg:block relative w-full h-[360px] xl:h-[400px]">
            <img 
              src="/assets/client_eeg_session.jpg" 
              alt="EEG Session and Neuro-Monitoring Technology" 
              className="w-full h-full object-cover rounded-2xl shadow-lg border border-slate-200/60" 
            />
          </div>
        </div>
      </section>

      {/* Core Technology Pillars */}
      <section className="py-20 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {[
            {
              icon: <Brain size={32} className="text-blue-600" />,
              title: 'Intelligent Recovery Systems',
              desc: 'AI-enabled systems that support cognitive assessment, monitoring, and recovery workflows.'
            },
            {
              icon: <Database size={32} className="text-blue-600" />,
              title: 'Longitudinal Data Intelligence',
              desc: 'Continuous data collection and analysis that helps track recovery progression over time.'
            },
            {
              icon: <TrendingUp size={32} className="text-blue-600" />,
              title: 'AI Analytics Engine',
              desc: 'Advanced algorithms that identify patterns and provide meaningful insights for better decisions.'
            },
            {
              icon: <Shield size={32} className="text-blue-600" />,
              title: 'Secure & Scalable Infrastructure',
              desc: 'Enterprise-grade, secure, and scalable infrastructure built to handle sensitive healthcare data with compliance.'
            }
          ].map((item, i) => (
            <div key={i} className="glass-card rounded-xl p-6 flex flex-col items-center text-center bg-slate-50/20">
              <div className="icon-circle mb-5">
                {item.icon}
              </div>
              <h3 className="text-slate-900 font-bold text-base mb-3">{item.title}</h3>
              <div className="w-8 h-[2px] bg-blue-600 mb-3" />
              <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Future Section */}
      <section className="py-20 relative overflow-hidden bg-slate-50 border-t border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-8 items-start relative z-10">
          {/* Left text */}
          <div className="lg:col-span-1">
            <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase mb-3">The Future</p>
            <h2 className="text-slate-900 text-2xl md:text-3xl font-bold mb-3">Building the Future of Neurotechnology</h2>
            <div className="w-12 h-[3px] bg-blue-600 mb-5 rounded-full" />
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              We are constantly innovating to bring next-generation neurotechnology solutions that will redefine the future of cognitive care and rehabilitation.
            </p>
            <button onClick={() => setCurrentPage('About Us')} className="btn-primary text-sm shadow-[0_4px_14px_rgba(37,99,235,0.15)]">
              Explore Our Vision
            </button>
          </div>

          {/* Right: 3 cards */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                img: '/assets/client_stylus.png',
                title: 'Smart Neuro-Stylus',
                desc: 'Next-gen digital tools designed to capture cognitive interactions naturally and accurately.'
              },
              {
                img: '/assets/client_watch.png',
                title: 'Neuro-Monitoring Wearables',
                desc: 'Wearable technology for continuous monitoring of neurological and behavioral indicators.'
              },
              {
                img: '/assets/client_connected.png',
                title: 'Connected Ecosystem',
                desc: 'An integrated ecosystem connecting patients, clinicians, and care providers seamlessly.'
              }
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 group flex flex-col h-full bg-white">
                <div className="overflow-hidden h-40 border-b border-slate-100">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-slate-900 font-bold text-base mb-2 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Banner */}
      <section className="py-8 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-4">
            <div className="icon-circle-sm flex-shrink-0">
              <Shield size={20} className="text-blue-600" />
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Privacy, security, and ethical AI are at the core of everything we build.<br className="hidden md:block" />
              We are committed to responsible innovation in cognitive healthcare.
            </p>
          </div>
          <button onClick={() => setCurrentPage('Privacy Policy')} className="text-blue-600 text-sm font-semibold flex items-center gap-2 hover:text-blue-800 transition-colors whitespace-nowrap">
            Learn About Our Security <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
