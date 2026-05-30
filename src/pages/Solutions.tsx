import { Brain, TrendingUp, Monitor, UserCheck, Shield, Building2 } from 'lucide-react';

interface SolutionsProps {
  setCurrentPage: (page: string) => void;
}

export default function Solutions({ setCurrentPage }: SolutionsProps) {
  return (
    <div>
      {/* Hero */}
      <section className="pt-[70px] relative overflow-hidden bg-[#000a1e] w-full">
        {/* Wrapper to ensure perfect horizontal alignment and compact spacing */}
        <div className="relative w-full py-6 md:py-8 lg:py-10 flex items-center">
          {/* Background Image Banner */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none bg-[#000a1e]">
            <img 
              src="/assets/solution_bg.webp" 
              alt="Solutions Background" 
              className="w-full h-full object-contain object-right opacity-100" 
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full relative z-10">
            <div>
              <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-4">Our Solutions</p>
              <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4">
                Comprehensive Solutions for Continuous Neuro-Recovery
              </h1>
              <div className="w-10 h-[3px] bg-blue-600 mb-6" />
              <p className="text-gray-300 text-base leading-relaxed max-w-md">
                NeuraX provides AI-enabled neurorehabilitation and cognitive monitoring solutions that extend beyond hospital walls, ensuring better recovery, better outcomes, and better lives.
              </p>
            </div>
            {/* Empty right column to let the background illustration show through on the right */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* Solution Cards */}
      <section className="py-20 relative overflow-hidden bg-[#030712]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
          {[
            {
              icon: <Brain size={32} className="text-blue-400" />,
              title: 'Cognitive Assessment',
              desc: 'Structured digital cognitive assessments designed to evaluate and track cognitive functions efficiently and remotely.'
            },
            {
              icon: <TrendingUp size={32} className="text-blue-400" />,
              title: 'Longitudinal Monitoring',
              desc: 'Continuous tracking of cognitive health and recovery progression over time to support timely clinical decisions.'
            },
            {
              icon: <Monitor size={32} className="text-blue-400" />,
              title: 'Remote Rehabilitation',
              desc: 'Technology-enabled rehabilitation programs that help patients stay engaged and supported beyond hospital discharge.'
            },
            {
              icon: <UserCheck size={32} className="text-blue-400" />,
              title: 'Clinical Decision Support',
              desc: 'AI-assisted insights and alerts that help clinicians make more informed and confident decisions.'
            },
            {
              icon: <Shield size={32} className="text-blue-400" />,
              title: 'Secure & Compliant',
              desc: 'Built with privacy, security, and compliance at the core to safeguard patient data and clinical integrity.'
            }
          ].map((item, i) => (
            <div key={i} className="glass-card rounded-xl p-6 flex flex-col items-start hover:-translate-y-1.5 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full bg-slate-900/50 border border-white/5 flex items-center justify-center mb-6 group-hover:border-blue-500/40 group-hover:bg-blue-950/20 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-white font-bold text-base mb-2 group-hover:text-blue-450 transition-colors duration-300">{item.title}</h3>
              <div className="w-8 h-[2px] bg-blue-600 mb-4 group-hover:w-12 transition-all duration-300" />
              <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="py-12 relative overflow-hidden bg-[#060814] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="flex items-center gap-6">
            <div className="hidden md:block">
              <img
                src="/assets/glowing_brain.png"
                alt="Brain"
                className="w-20 h-20 object-cover rounded-lg opacity-80 brain-glow blend-screen"
              />
            </div>
            <p className="text-gray-300 text-base font-medium max-w-md">
              Our solutions are designed to seamlessly integrate into hospitals, rehabilitation centers, and neurological care ecosystems.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:block icon-circle-sm">
              <Building2 size={24} className="text-blue-400" />
            </div>
            <div className="flex flex-col gap-3 items-start">
              <p className="text-white text-sm font-semibold">Ready to transform neuro-recovery care?</p>
              <button onClick={() => setCurrentPage('Contact')} className="btn-primary">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
