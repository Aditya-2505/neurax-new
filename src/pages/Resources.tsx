import { FlaskConical, BookOpen, Shield, Globe, Brain, TrendingUp, Users, Cpu, ArrowRight } from 'lucide-react';
import { BrainSide } from '../components/BrainViz';

interface ResourcesProps {
  setCurrentPage: (page: string) => void;
}

export default function Resources({ setCurrentPage }: ResourcesProps) {
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient min-h-[420px] flex items-center pt-[70px]">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
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
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-lg">
              <BrainSide />
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-[#0d1b3e] border-b border-[rgba(59,130,246,0.2)] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-[rgba(59,130,246,0.2)] rounded-xl overflow-hidden">
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
              <div key={i} className={`p-7 flex items-start gap-4 ${i < 3 ? 'border-b lg:border-b-0 lg:border-r border-[rgba(59,130,246,0.2)]' : ''}`}>
                <div className="icon-circle-sm flex-shrink-0">
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
      <section className="section-light py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-gray-900 text-2xl font-bold text-center mb-10">Key Research Areas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                icon: <Brain size={28} className="text-blue-500" />,
                title: 'Cognitive Assessment',
                desc: 'Digital cognitive assessments for early detection and monitoring.'
              },
              {
                icon: <TrendingUp size={28} className="text-blue-500" />,
                title: 'Longitudinal Studies',
                desc: 'Tracking cognitive recovery patterns over time to improve outcomes.'
              },
              {
                icon: <Users size={28} className="text-blue-500" />,
                title: 'Neurorehabilitation',
                desc: 'Evidence-based rehabilitation strategies for better recovery and independence.'
              },
              {
                icon: <Cpu size={28} className="text-blue-500" />,
                title: 'AI in Neurology',
                desc: 'Leveraging artificial intelligence to uncover insights and support clinical decisions.'
              },
              {
                icon: <Globe size={28} className="text-blue-500" />,
                title: 'Public Health Impact',
                desc: 'Building scalable solutions that improve access and outcomes at a population level.'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 flex flex-col items-center text-center">
                <div className="icon-circle mb-4">
                  {item.icon}
                </div>
                <h3 className="text-gray-900 font-bold text-sm mb-2">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration + Institutions */}
      <section className="section-light pb-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Collaboration CTA */}
          <div className="bg-[#0d1b3e] rounded-xl p-8 flex items-center gap-6">
            <div className="icon-circle flex-shrink-0">
              <FlaskConical size={28} className="text-blue-400" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-2">Advancing Neuro-Recovery Through Collaboration.</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-5">
                We collaborate with leading hospitals, research institutions, and experts to drive meaningful change in neurological care.
              </p>
              <button onClick={() => setCurrentPage('Contact')} className="btn-primary text-sm">
                Collaborate With Us <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Institutions */}
          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <h3 className="text-gray-900 font-bold text-base mb-2">Guided by Science. Supported by Global Institutions.</h3>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mt-6 items-center">
              {[
                { name: 'World Health Organization', abbr: 'WHO' },
                { name: 'ICMR', abbr: 'ICMR' },
                { name: 'American Heart Association', abbr: 'AHA' },
                { name: 'The Lancet', abbr: 'LANCET' },
                { name: 'National Institutes of Health', abbr: 'NIH' }
              ].map((org, i) => (
                <div key={i} className="flex flex-col items-center text-center p-2">
                  <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-2">
                    <span className="text-blue-700 font-bold text-[9px] text-center leading-tight">{org.abbr}</span>
                  </div>
                  <p className="text-gray-500 text-[10px] text-center leading-tight">{org.name}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-xs mt-4">References are indicative. NeuraX aligns with global research and clinical guidelines.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
