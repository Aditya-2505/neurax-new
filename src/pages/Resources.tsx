import { FlaskConical, BookOpen, Shield, Globe, Brain, TrendingUp, Users, Cpu, ArrowRight } from 'lucide-react';

interface ResourcesProps {
  setCurrentPage: (page: string) => void;
}

export default function Resources({ setCurrentPage }: ResourcesProps) {
  return (
    <div>
      {/* Hero */}
      <section className="pt-[70px] pb-12 relative overflow-hidden bg-brandBg w-full border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[380px] md:min-h-[460px] lg:min-h-[500px] w-full relative z-10">
          {/* Text in left column */}
          <div className="order-1 lg:order-1 flex flex-col items-start">
            <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase mb-4">Research & Resources</p>
            <h1 className="text-slate-900 text-4xl md:text-5xl font-bold leading-tight mb-4">
              Science-Backed.<br />Evidence-Driven.
            </h1>
            <div className="w-10 h-[3px] bg-blue-600 mb-6" />
            <p className="text-slate-655 text-base leading-relaxed max-w-md mb-6">
              NeuraX is grounded in neuroscience, driven by research, and committed to advancing the future of neuro-recovery through innovation and clinical validation.
            </p>
          </div>

          {/* Client dashboard illustration in right column */}
          <div className="order-2 lg:order-2 block w-full h-[300px] sm:h-[380px] lg:h-[400px] relative overflow-hidden rounded-2xl">
            <img 
              src="/assets/client_resources_hero.png" 
              alt="NeuraX Neural Activity Dashboard" 
              className="w-full h-full object-cover" 
            />
            {/* Soft Blending Gradients to dissolve into the background */}
            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-brandBg to-transparent pointer-events-none lg:block hidden" />
            <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-brandBg/60 to-transparent pointer-events-none lg:hidden block" />
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-brandBg via-brandBg/40 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-brandLight/80 to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-brandBg/60 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-10 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-slate-200/60 rounded-2xl overflow-hidden glass-panel bg-slate-50/20">
            {[
              {
                icon: <FlaskConical size={28} className="text-blue-600" />,
                title: 'Research-Driven',
                desc: 'Our solutions are built on rigorous scientific research and clinical evidence.'
              },
              {
                icon: <BookOpen size={28} className="text-blue-600" />,
                title: 'Evidence-Based',
                desc: 'Aligned with global guidelines and best practices in neurology and rehabilitation.'
              },
              {
                icon: <Shield size={28} className="text-blue-600" />,
                title: 'Clinically Validated',
                desc: 'Continuous testing and validation through pilot studies and clinical collaborations.'
              },
              {
                icon: <Globe size={28} className="text-blue-600" />,
                title: 'Global Perspective',
                desc: 'Informed by worldwide research to create solutions that are relevant, scalable, and impactful.'
              }
            ].map((item, i) => (
              <div key={i} className={`p-7 flex items-start gap-4 ${i < 3 ? 'border-b lg:border-b-0 lg:border-r border-slate-200/60' : ''}`}>
                <div className="icon-circle-sm flex-shrink-0 text-blue-600">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold text-sm mb-2">{item.title}</h3>
                  <p className="text-slate-550 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Research Areas */}
      <section className="py-12 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-slate-900 text-2xl md:text-3xl font-bold text-center mb-12">Key Research Areas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                icon: <Brain size={28} className="text-blue-600" />,
                title: 'Cognitive Assessment',
                desc: 'Digital cognitive assessments for early detection and monitoring.'
              },
              {
                icon: <TrendingUp size={28} className="text-blue-600" />,
                title: 'Longitudinal Studies',
                desc: 'Tracking cognitive recovery patterns over time to improve outcomes.'
              },
              {
                icon: <Users size={28} className="text-blue-600" />,
                title: 'Neurorehabilitation',
                desc: 'Evidence-based rehabilitation strategies for better recovery and independence.'
              },
              {
                icon: <Cpu size={28} className="text-blue-600" />,
                title: 'AI in Neurology',
                desc: 'Leveraging artificial intelligence to uncover insights and support clinical decisions.'
              },
              {
                icon: <Globe size={28} className="text-blue-600" />,
                title: 'Public Health Impact',
                desc: 'Building scalable solutions that improve access and outcomes at a population level.'
              }
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 flex flex-col items-center text-center bg-white">
                <div className="icon-circle mb-4 text-blue-600">
                  {item.icon}
                </div>
                <h3 className="text-slate-900 font-bold text-sm mb-2">{item.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration + Institutions */}
      <section className="py-12 bg-white border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
          {/* Collaboration CTA */}
          <div className="glass-panel rounded-2xl p-8 flex items-center gap-6 h-full bg-slate-50/20">
            <div className="icon-circle flex-shrink-0 text-blue-600">
              <FlaskConical size={28} />
            </div>
            <div>
              <h3 className="text-slate-900 font-bold text-xl mb-2">Advancing Neuro-Recovery Through Collaboration.</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                We collaborate with leading hospitals, research institutions, and experts to drive meaningful change in neurological care.
              </p>
              <button onClick={() => setCurrentPage('Contact')} className="btn-primary text-sm shadow-[0_4px_14px_rgba(37,99,235,0.15)]">
                Collaborate With Us <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Institutions */}
          <div className="glass-panel rounded-2xl p-8 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-slate-900 font-bold text-base mb-4">Guided by Science.</h3>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-6">
                <div className="bg-white rounded-lg p-2.5 flex items-center justify-center h-16 shadow-sm border border-slate-100 hover:scale-105 transition-transform duration-300">
                  <img src="/assets/who.webp" alt="World Health Organization" className="max-h-full max-w-full object-contain" />
                </div>
                <div className="bg-white rounded-lg p-2.5 flex items-center justify-center h-16 shadow-sm border border-slate-100 hover:scale-105 transition-transform duration-300">
                  <img src="/assets/icmr.webp" alt="Indian Council of Medical Research (ICMR)" className="max-h-full max-w-full object-contain" />
                </div>
                <div className="bg-white rounded-lg p-2.5 flex items-center justify-center h-16 shadow-sm border border-slate-100 hover:scale-105 transition-transform duration-300">
                  <img src="/assets/america.webp" alt="American Heart Association" className="max-h-full max-w-full object-contain" />
                </div>
                <div className="bg-white rounded-lg p-2.5 flex items-center justify-center h-16 shadow-sm border border-slate-100 hover:scale-105 transition-transform duration-300">
                  <img src="/assets/lancet.webp" alt="The Lancet" className="max-h-full max-w-full object-contain" />
                </div>
                <div className="bg-white rounded-lg p-2.5 flex items-center justify-center h-16 shadow-sm border border-slate-100 hover:scale-105 transition-transform duration-300 col-span-2 sm:col-span-1">
                  <img src="/assets/nih.webp" alt="National Institutes of Health (NIH)" className="max-h-full max-w-full object-contain" />
                </div>
              </div>
            </div>
            <p className="text-slate-450 text-[11px] mt-6">References are indicative. NeuraX aligns with global research and clinical guidelines.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
