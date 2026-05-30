import { FlaskConical, BookOpen, Shield, Globe, Brain, TrendingUp, Users, Cpu, ArrowRight } from 'lucide-react';

interface ResourcesProps {
  setCurrentPage: (page: string) => void;
}

export default function Resources({ setCurrentPage }: ResourcesProps) {
  return (
    <div>
      {/* Hero */}
      <section className="pt-[70px] relative overflow-hidden bg-[#000414] w-full">
        {/* Wrapper to ensure perfect horizontal alignment and compact spacing */}
        <div className="relative w-full h-[380px] md:h-[460px] lg:h-[520px] flex items-center overflow-hidden">
          {/* Background Image Banner */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none bg-[#000414]">
            <img 
              src="/assets/resources_bg.webp" 
              alt="Resources Background" 
              className="w-full h-full object-contain object-right opacity-100" 
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full relative z-10">
            <div>
              <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-4">Research & Resources</p>
              <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4">
                Science-Backed.<br />Evidence-Driven.
              </h1>
              <div className="w-10 h-[3px] bg-blue-600 mb-6" />
              <p className="text-gray-300 text-base leading-relaxed max-w-md">
                NeuraX is grounded in neuroscience, driven by research, and committed to advancing the future of neuro-recovery through innovation and clinical validation.
              </p>
            </div>
            {/* Empty right column to let the background illustration show through on the right */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-16 bg-[#060814] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/5 rounded-2xl overflow-hidden glass-panel">
            {[
              {
                icon: <FlaskConical size={28} className="text-blue-400" />,
                title: 'Research-Driven',
                desc: 'Our solutions are built on rigorous scientific research and clinical evidence.'
              },
              {
                icon: <BookOpen size={28} className="text-blue-400" />,
                title: 'Evidence-Based',
                desc: 'Aligned with global guidelines and best practices in neurology and rehabilitation.'
              },
              {
                icon: <Shield size={28} className="text-blue-400" />,
                title: 'Clinically Validated',
                desc: 'Continuous testing and validation through pilot studies and clinical collaborations.'
              },
              {
                icon: <Globe size={28} className="text-blue-400" />,
                title: 'Global Perspective',
                desc: 'Informed by worldwide research to create solutions that are relevant, scalable, and impactful.'
              }
            ].map((item, i) => (
              <div key={i} className={`p-7 flex items-start gap-4 ${i < 3 ? 'border-b lg:border-b-0 lg:border-r border-white/5' : ''}`}>
                <div className="icon-circle-sm flex-shrink-0 text-blue-400">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Research Areas */}
      <section className="py-20 bg-[#030712]">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-12">Key Research Areas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                icon: <Brain size={28} className="text-blue-450" />,
                title: 'Cognitive Assessment',
                desc: 'Digital cognitive assessments for early detection and monitoring.'
              },
              {
                icon: <TrendingUp size={28} className="text-blue-450" />,
                title: 'Longitudinal Studies',
                desc: 'Tracking cognitive recovery patterns over time to improve outcomes.'
              },
              {
                icon: <Users size={28} className="text-blue-450" />,
                title: 'Neurorehabilitation',
                desc: 'Evidence-based rehabilitation strategies for better recovery and independence.'
              },
              {
                icon: <Cpu size={28} className="text-blue-450" />,
                title: 'AI in Neurology',
                desc: 'Leveraging artificial intelligence to uncover insights and support clinical decisions.'
              },
              {
                icon: <Globe size={28} className="text-blue-450" />,
                title: 'Public Health Impact',
                desc: 'Building scalable solutions that improve access and outcomes at a population level.'
              }
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 flex flex-col items-center text-center">
                <div className="icon-circle mb-4 text-blue-400">
                  {item.icon}
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{item.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration + Institutions */}
      <section className="py-20 bg-[#030712] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
          {/* Collaboration CTA */}
          <div className="glass-panel rounded-2xl p-8 flex items-center gap-6 h-full">
            <div className="icon-circle flex-shrink-0 text-blue-450">
              <FlaskConical size={28} />
            </div>
            <div>
              <h3 className="text-white font-bold text-xl mb-2">Advancing Neuro-Recovery Through Collaboration.</h3>
              <p className="text-gray-350 text-sm leading-relaxed mb-5">
                We collaborate with leading hospitals, research institutions, and experts to drive meaningful change in neurological care.
              </p>
              <button onClick={() => setCurrentPage('Contact')} className="btn-primary text-sm shadow-[0_4px_14px_rgba(37,99,235,0.25)]">
                Collaborate With Us <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Institutions */}
          <div className="glass-panel rounded-2xl p-8 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-white font-bold text-base mb-4">Guided by Science. Supported by Global Institutions.</h3>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-6">
                <div className="bg-white rounded-lg p-2.5 flex items-center justify-center h-16 shadow-sm hover:scale-105 transition-transform duration-300">
                  <img src="/assets/who.webp" alt="World Health Organization" className="max-h-full max-w-full object-contain" />
                </div>
                <div className="bg-white rounded-lg p-2.5 flex items-center justify-center h-16 shadow-sm hover:scale-105 transition-transform duration-300">
                  <img src="/assets/icmr.webp" alt="Indian Council of Medical Research (ICMR)" className="max-h-full max-w-full object-contain" />
                </div>
                <div className="bg-white rounded-lg p-2.5 flex items-center justify-center h-16 shadow-sm hover:scale-105 transition-transform duration-300">
                  <img src="/assets/america.webp" alt="American Heart Association" className="max-h-full max-w-full object-contain" />
                </div>
                <div className="bg-white rounded-lg p-2.5 flex items-center justify-center h-16 shadow-sm hover:scale-105 transition-transform duration-300">
                  <img src="/assets/lancet.webp" alt="The Lancet" className="max-h-full max-w-full object-contain" />
                </div>
                <div className="bg-white rounded-lg p-2.5 flex items-center justify-center h-16 shadow-sm hover:scale-105 transition-transform duration-300 col-span-2 sm:col-span-1">
                  <img src="/assets/nih.webp" alt="National Institutes of Health (NIH)" className="max-h-full max-w-full object-contain" />
                </div>
              </div>
            </div>
            <p className="text-slate-500 text-[11px] mt-6">References are indicative. NeuraX aligns with global research and clinical guidelines.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
