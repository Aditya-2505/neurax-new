import { useState } from 'react';
import { ArrowRight, Brain, Database, Shield, TrendingUp, Info, Mail, Settings, Users, Rocket } from 'lucide-react';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

export default function Home({ setCurrentPage }: HomeProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const steps = [
    { icon: <Settings size={20} />, label: 'Research & Development', desc: 'Building and refining our technologies with scientific rigor.' },
    { icon: <Users size={20} />, label: 'Pilot Workflows', desc: 'Testing in controlled environments.' },
    { icon: <Shield size={20} />, label: 'Clinical Validation', desc: 'Evaluating performance and safety in collaboration with clinical experts.' },
    { icon: <Rocket size={20} />, label: 'Future Impact', desc: 'Delivering scalable solutions for better cognitive recovery.' }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="pt-[70px] relative overflow-hidden bg-[#000514] w-full">
        {/* Wrapper to ensure perfect horizontal alignment and compact spacing */}
        <div className="relative w-full py-6 md:py-8 lg:py-10 flex items-center">
          {/* Background Image Banner */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none bg-[#000514]">
            <img 
              src="/assets/home_bg.webp" 
              alt="Home Background" 
              className="w-full h-full object-contain object-right opacity-100" 
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-950/40 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-blue-400 text-[10px] md:text-xs font-semibold tracking-widest uppercase">
                  Advancing the Future of Cognitive Recovery
                </span>
              </div>
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 tracking-tight">
                Intelligence Today.<br />
                Recovery for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Tomorrow.</span>
              </h1>
              <div className="w-12 h-[3px] bg-blue-600 mb-6 rounded-full" />
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 max-w-md">
                NeuraX Cognitive Solutions is building AI-enabled infrastructure for continuous neuro-recovery and better neurological outcomes. Driven by science. Built for the future.
              </p>
              <button onClick={() => setCurrentPage('Solutions')} className="btn-primary shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_4px_25px_rgba(37,99,235,0.5)] transition-all duration-300">
                Explore Our Solutions <ArrowRight size={16} />
              </button>
            </div>
            {/* Empty right column to let the background illustration show through on the right */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-16 relative overflow-hidden bg-[#060814] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {[
            {
              icon: <Brain size={28} />,
              title: 'AI-Powered Intelligence',
              desc: 'Advanced algorithms that enable cognitive assessment, monitoring, and personalized recovery pathways.'
            },
            {
              icon: <Database size={28} />,
              title: 'Longitudinal Data Ecosystem',
              desc: 'Continuous data collection and analysis for tracking progress and informing better clinical decisions.'
            },
            {
              icon: <Shield size={28} />,
              title: 'Secure & Scalable',
              desc: 'Enterprise-grade security and scalable infrastructure designed to handle sensitive neurological data.'
            },
            {
              icon: <TrendingUp size={28} />,
              title: 'Evidence-Driven Outcomes',
              desc: 'Built on neuroscience and clinical evidence to support meaningful and measurable recovery.'
            }
          ].map((item, i) => (
            <div key={i} className="glass-card rounded-xl p-6 flex flex-col items-start gap-4">
              <div className="icon-circle-sm text-blue-400 flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Current Focus + Connect */}
      <section className="py-20 relative overflow-hidden bg-[#030712]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          {/* Left: Clinical Validation */}
          <div className="lg:col-span-2 glass-panel rounded-2xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
            <div>
              <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3">Our Focus</p>
              <h2 className="text-white text-2xl md:text-3xl font-bold mb-1">Currently Advancing</h2>
              <h2 className="text-white text-2xl md:text-3xl font-bold mb-3">Through Clinical Validation</h2>
              <div className="w-12 h-[3px] bg-blue-600 mb-3 rounded-full" />

              {/* Progress steps */}
              <div 
                className="flex items-start gap-2 mb-8 overflow-x-auto pt-6 pb-2"
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {steps.map((step, i, arr) => {
                  const isHovering = hoveredIndex !== null;
                  const isHighlighted = isHovering ? hoveredIndex === i : i <= 2;
                  const opacity = isHovering ? (hoveredIndex === i ? 1 : 0.3) : (i <= 2 ? 0.95 : 0.35);

                  let circleClass = '';
                  if (isHighlighted) {
                    if (i === 2) {
                      circleClass = 'border-blue-500 bg-blue-950/60 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.5)]';
                    } else {
                      circleClass = 'border-blue-500/50 bg-blue-950/20 text-blue-300/90 shadow-[0_0_10px_rgba(59,130,246,0.15)]';
                    }
                  } else {
                    circleClass = 'border-slate-800 bg-slate-900/40 text-slate-500';
                  }

                  let labelClass = '';
                  if (isHighlighted) {
                    labelClass = i === 2 ? 'text-blue-400 font-extrabold' : 'text-blue-400/80 font-semibold';
                  } else {
                    labelClass = 'text-slate-500';
                  }

                  return (
                    <div 
                      key={i} 
                      className="flex items-start gap-1 flex-1 min-w-[140px] cursor-pointer"
                      onMouseEnter={() => setHoveredIndex(i)}
                      style={{ opacity, transition: 'all 0.3s ease' }}
                    >
                      <div className="flex flex-col items-center flex-1">
                        <div className="relative w-12 h-12 mb-3">
                          {/* Pulsing ring for current state */}
                          {i === 2 && (
                            <>
                              <span className="absolute -inset-2 rounded-full bg-blue-500/25 animate-ping pointer-events-none z-0" />
                              <span className="absolute -inset-1 rounded-full border border-blue-500/30 animate-pulse pointer-events-none z-0" />
                            </>
                          )}
                          <div className={`w-full h-full rounded-full flex items-center justify-center border-2 ${circleClass} transition-all duration-300 relative z-10`}>
                            {step.icon}
                          </div>
                        </div>
                        <p className={`text-xs text-center mb-1.5 flex items-center justify-center gap-1.5 ${labelClass} transition-colors duration-300`}>
                          {i === 2 && (
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                          )}
                          {step.label}
                        </p>
                        <p className="text-[11px] text-gray-400 text-center leading-relaxed">{step.desc}</p>
                      </div>
                      {i < arr.length - 1 && (
                        <div className="mt-5 w-6 flex-shrink-0 flex items-center">
                          <div className={`h-[1.5px] w-full ${i < 2 ? 'bg-blue-500/40 shadow-[0_0_4px_rgba(59,130,246,0.3)]' : 'bg-slate-850'}`} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                NeuraX is in the development phase and undergoing early-stage clinical validation to ensure the highest standards of safety, accuracy, and clinical relevance.
              </p>

              <div className="flex items-start gap-3 bg-blue-950/20 rounded-lg p-4 border border-blue-900/30">
                <Info size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-300">We are at an early stage of development and not yet commercially available.</p>
              </div>
            </div>
          </div>

          {/* Right: Let's Connect */}
          <div className="glass-panel rounded-2xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
            {/* Glowing Network Nodes background rendered inline with SVG */}
            <svg className="absolute right-0 bottom-0 w-3/5 h-4/5 pointer-events-none z-10 opacity-40" viewBox="0 0 200 200">
                <defs>
                    <filter id="svg-glow-connect" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>
                
                {/* Connecting lines */}
                <line x1="120" y1="180" x2="160" y2="130" stroke="#3b82f6" strokeWidth="0.8" opacity="0.4" />
                <line x1="160" y1="130" x2="190" y2="170" stroke="#3b82f6" strokeWidth="0.8" opacity="0.4" />
                <line x1="190" y1="170" x2="150" y2="200" stroke="#3b82f6" strokeWidth="0.8" opacity="0.4" />
                <line x1="150" y1="200" x2="120" y2="180" stroke="#3b82f6" strokeWidth="0.8" opacity="0.4" />
                <line x1="120" y1="180" x2="190" y2="170" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2" />
                <line x1="160" y1="130" x2="150" y2="200" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2" />

                <line x1="80" y1="140" x2="120" y2="180" stroke="#3b82f6" strokeWidth="0.8" opacity="0.4" />
                <line x1="80" y1="140" x2="110" y2="90" stroke="#3b82f6" strokeWidth="0.8" opacity="0.4" />
                <line x1="110" y1="90" x2="160" y2="130" stroke="#3b82f6" strokeWidth="0.8" opacity="0.4" />
                
                <line x1="150" y1="70" x2="110" y2="90" stroke="#3b82f6" strokeWidth="0.8" opacity="0.3" />
                <line x1="150" y1="70" x2="160" y2="130" stroke="#3b82f6" strokeWidth="0.8" opacity="0.3" />
                <line x1="150" y1="70" x2="195" y2="80" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2" />
                <line x1="195" y1="80" x2="160" y2="130" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2" />
                
                <line x1="50" y1="170" x2="80" y2="140" stroke="#3b82f6" strokeWidth="0.6" opacity="0.3" />
                <line x1="50" y1="170" x2="100" y2="190" stroke="#3b82f6" strokeWidth="0.6" opacity="0.3" />
                <line x1="100" y1="190" x2="120" y2="180" stroke="#3b82f6" strokeWidth="0.8" opacity="0.4" />
                <line x1="100" y1="190" x2="150" y2="200" stroke="#3b82f6" strokeWidth="0.8" opacity="0.4" />
                
                {/* Glowing node circles */}
                <circle cx="120" cy="180" r="3.5" fill="#60a5fa" filter="url(#svg-glow-connect)" />
                <circle cx="160" cy="130" r="4.5" fill="#3b82f6" filter="url(#svg-glow-connect)" />
                <circle cx="190" cy="170" r="3" fill="#3b82f6" filter="url(#svg-glow-connect)" />
                <circle cx="150" cy="200" r="3.5" fill="#60a5fa" filter="url(#svg-glow-connect)" />
                <circle cx="80" cy="140" r="3.5" fill="#3b82f6" filter="url(#svg-glow-connect)" />
                <circle cx="110" cy="90" r="2.5" fill="#60a5fa" filter="url(#svg-glow-connect)" />
                <circle cx="150" cy="70" r="3" fill="#3b82f6" filter="url(#svg-glow-connect)" />
                <circle cx="195" cy="80" r="2" fill="#60a5fa" filter="url(#svg-glow-connect)" />
                <circle cx="50" cy="170" r="2.5" fill="#3b82f6" filter="url(#svg-glow-connect)" />
                <circle cx="100" cy="190" r="3" fill="#3b82f6" filter="url(#svg-glow-connect)" />
            </svg>

            <div className="relative z-20 flex flex-col justify-between h-full min-h-[320px]">
              <div>
                <h2 className="text-white text-2xl font-bold mb-1">Let's Connect</h2>
                <div className="w-12 h-[3px] bg-blue-600 mb-5 rounded-full" />
                <p className="text-gray-300 text-sm leading-relaxed mb-8">
                  Interested in collaborating or learning more about NeuraX? We'd love to hear from you.
                </p>
              </div>
              <div className="flex flex-col gap-4 mt-auto">
                <button
                  onClick={() => setCurrentPage('Contact')}
                  className="w-full flex items-center justify-center gap-2 border border-blue-500 text-blue-400 hover:bg-blue-600/10 hover:text-white bg-transparent py-3 px-6 rounded-md font-semibold text-sm transition-all duration-300"
                >
                  Send Us a Message <ArrowRight size={16} />
                </button>
                <div className="flex items-center gap-3 text-white text-sm">
                  <div className="w-9 h-9 rounded-full bg-blue-900/30 border border-blue-800/40 flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-blue-400" />
                  </div>
                  <a href="mailto:hello@neuraxcog.com" className="hover:text-blue-400 transition-colors">hello@neuraxcog.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
