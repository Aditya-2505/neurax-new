import { Brain, Database, TrendingUp, Shield, ArrowRight } from 'lucide-react';

interface TechnologyProps {
  setCurrentPage: (page: string) => void;
}

export default function Technology({ setCurrentPage }: TechnologyProps) {
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient min-h-[420px] flex items-center pt-[70px] relative overflow-hidden">
        {/* Futuristic Background Overlays */}
        <div className="absolute inset-0 grid-bg-overlay opacity-40 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full relative z-10">
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
              <img src="/assets/glowing_brain.png" alt="AI Brain Technology" className="w-full h-auto object-contain filter drop-shadow-[0_0_40px_rgba(59,130,246,0.3)] animate-float" />
              
              {/* Floating Panel 1 */}
              <div className="hidden md:block floating-panel panel-1 absolute bg-slate-900/60 backdrop-blur-md border border-[rgba(59,130,246,0.15)] rounded-lg p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-20 animate-float" style={{ animationDelay: '-1s' }}>
                <h6 className="text-[10px] text-gray-400 uppercase tracking-wider mb-2 font-medium">Cognitive Insights</h6>
                <div className="h-10 mt-2 flex items-end gap-1">
                  <div className="w-[15%] h-[30%] bg-blue-500 rounded-sm"></div>
                  <div className="w-[15%] h-[50%] bg-blue-500 rounded-sm"></div>
                  <div className="w-[15%] h-[40%] bg-blue-500 rounded-sm"></div>
                  <div className="w-[15%] h-[70%] bg-blue-500 rounded-sm"></div>
                  <div className="w-[15%] h-[60%] bg-blue-500 rounded-sm"></div>
                  <div className="w-[15%] h-[90%] bg-white rounded-sm animate-pulse"></div>
                </div>
              </div>

              {/* Floating Panel 2 */}
              <div className="hidden md:block floating-panel panel-2 absolute bg-slate-900/60 backdrop-blur-md border border-[rgba(59,130,246,0.15)] rounded-lg p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-20 animate-float" style={{ animationDelay: '-3s' }}>
                <h6 className="text-[10px] text-gray-400 uppercase tracking-wider mb-1 font-medium">Recovery Progress</h6>
                <div className="text-xl font-bold text-white">72%</div>
                <div className="h-1.5 w-full bg-slate-700/50 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full w-[72%]"></div>
                </div>
              </div>

              {/* Floating Panel 3 */}
              <div className="hidden md:block floating-panel panel-3 absolute bg-slate-900/60 backdrop-blur-md border border-[rgba(59,130,246,0.15)] rounded-lg p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-20 animate-float" style={{ animationDelay: '-5s' }}>
                <h6 className="text-[10px] text-gray-400 uppercase tracking-wider mb-2 font-medium">Risk Score</h6>
                <div className="flex gap-1 items-end h-10 mt-2">
                  <div className="flex-1 h-[30%] bg-slate-700/50 rounded-sm"></div>
                  <div className="flex-1 h-[40%] bg-slate-700/50 rounded-sm"></div>
                  <div className="flex-1 h-[50%] bg-slate-700/50 rounded-sm"></div>
                  <div className="flex-1 h-[60%] bg-blue-500 rounded-sm"></div>
                  <div className="flex-1 h-[70%] bg-slate-700/50 rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technology Pillars */}
      <section className="py-20 relative overflow-hidden bg-[#060814] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
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
            <div key={i} className="glass-card rounded-xl p-6 flex flex-col items-center text-center">
              <div className="icon-circle mb-5">
                {item.icon}
              </div>
              <h3 className="text-white font-bold text-base mb-3">{item.title}</h3>
              <div className="w-8 h-[2px] bg-blue-600 mb-3" />
              <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Future Section */}
      <section className="py-20 relative overflow-hidden bg-[#030712]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-8 items-start relative z-10">
          {/* Left text */}
          <div className="lg:col-span-1">
            <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3">The Future</p>
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-3">Building the Future of Neurotechnology</h2>
            <div className="w-12 h-[3px] bg-blue-600 mb-5 rounded-full" />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              We are constantly innovating to bring next-generation neurotechnology solutions that will redefine the future of cognitive care and rehabilitation.
            </p>
            <button onClick={() => setCurrentPage('About Us')} className="btn-primary text-sm shadow-[0_4px_14px_rgba(37,99,235,0.2)]">
              Explore Our Vision
            </button>
          </div>

          {/* Right: 3 cards */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                img: '/assets/smart_stylus.png',
                title: 'Smart Neuro-Stylus',
                desc: 'Next-gen digital tools designed to capture cognitive interactions naturally and accurately.'
              },
              {
                img: '/assets/neuro_watch.png',
                title: 'Neuro-Monitoring Wearables',
                desc: 'Wearable technology for continuous monitoring of neurological and behavioral indicators.'
              },
              {
                img: '/assets/connected_ecosystem.png',
                title: 'Connected Ecosystem',
                desc: 'An integrated ecosystem connecting patients, clinicians, and care providers seamlessly.'
              }
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 group flex flex-col h-full">
                <div className="overflow-hidden h-40 border-b border-white/5">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-white font-bold text-base mb-2 group-hover:text-blue-400 transition-colors duration-300">{item.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Banner */}
      <section className="py-8 relative overflow-hidden bg-[#060814] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-4">
            <div className="icon-circle-sm flex-shrink-0">
              <Shield size={20} className="text-blue-400" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Privacy, security, and ethical AI are at the core of everything we build.<br className="hidden md:block" />
              We are committed to responsible innovation in cognitive healthcare.
            </p>
          </div>
          <button onClick={() => setCurrentPage('Privacy Policy')} className="text-blue-400 text-sm font-semibold flex items-center gap-2 hover:text-blue-300 transition-colors whitespace-nowrap">
            Learn About Our Security <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
