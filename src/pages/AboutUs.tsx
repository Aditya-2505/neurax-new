import { Target, Eye, Heart, Brain, TrendingUp, Shield, Users, Linkedin } from 'lucide-react';

export default function AboutUs() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-[70px] relative overflow-hidden bg-[#000514] w-full">
        {/* Wrapper to ensure perfect horizontal alignment and compact spacing */}
        <div className="relative w-full py-6 md:py-8 lg:py-10 flex items-center">
          {/* Background Image Banner */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none bg-[#000514]">
            <img 
              src="/assets/about_us_bg.webp" 
              alt="About Us Background" 
              className="w-full h-full object-contain object-right opacity-100" 
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full relative z-10">
            <div>
              <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-4">About NeuraX</p>
              <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4">
                Driven by Purpose.<br />Built for Impact.
              </h1>
              <div className="w-10 h-[3px] bg-blue-600 mb-6" />
              <p className="text-gray-300 text-base leading-relaxed mb-4 max-w-md">
                NeuraX Cognitive Solutions was founded with a simple belief — that every individual deserves the chance for a better recovery and a better quality of life after a neurological event.
              </p>
              <p className="text-gray-300 text-base leading-relaxed max-w-md">
                We combine deep clinical understanding with advanced technology to build the future of cognitive care.
              </p>
            </div>
            {/* Empty right column to let the background illustration show through on the right */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-16 bg-[#060814] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/5 rounded-2xl overflow-hidden glass-panel">
            {[
              {
                icon: <Target size={28} className="text-blue-400" />,
                title: 'Our Mission',
                content: 'To empower healthcare providers with intelligent neurotechnology solutions that enable continuous cognitive recovery and better outcomes for patients.'
              },
              {
                icon: <Eye size={28} className="text-blue-400" />,
                title: 'Our Vision',
                content: 'To become the global leader in longitudinal neuro-recovery infrastructure and redefine the future of neurological care.'
              },
              {
                icon: <Heart size={28} className="text-blue-400" />,
                title: 'Our Values',
                isList: true,
                col1: ['Patient-Centered', 'Scientific Integrity'],
                col2: ['Innovation', 'Compassion']
              }
            ].map((item, i) => (
              <div key={i} className={`p-8 ${i < 2 ? 'border-b md:border-b-0 md:border-r border-white/5' : ''}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="icon-circle-sm flex-shrink-0 text-blue-400">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                </div>
                <div className="w-8 h-[2px] bg-blue-600 mb-4 rounded-full" />
                {item.isList ? (
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {[...item.col1!, ...item.col2!].map((v, j) => (
                      <p key={j} className="text-gray-300 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        {v}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-300 text-sm leading-relaxed">{item.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder + Advisors */}
      <section className="py-20 relative overflow-hidden bg-[#030712]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
          {/* Founder's Story */}
          <div className="glass-panel rounded-2xl overflow-hidden flex flex-col justify-between h-full">
            <div className="relative h-56 overflow-hidden border-b border-white/5">
              <img
                src="/assets/founder_silhouette.png"
                alt="Founder"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e162d]/90 via-[#0e162d]/30 to-transparent" />
            </div>
            <div className="p-8 md:p-10 flex-grow flex flex-col justify-between">
              <div>
                <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3">Founder's Story</p>
                <h2 className="text-white text-2xl font-bold mb-2">A Personal Mission to Drive Change</h2>
                <div className="w-12 h-[3px] bg-blue-600 mb-5 rounded-full" />
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  NeuraX was born from a deep passion for neuroscience and a first-hand understanding of the challenges patients and families face during recovery.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Our founder, Dr. Varshini, MD, with a background in medicine and a keen interest in neurorehabilitation, envisioned a world where technology and empathy come together to transform lives.
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 flex items-center justify-between flex-wrap gap-4 mt-auto">
                <div>
                  <h4 className="text-white font-bold text-base leading-tight">Dr. Varshini, MD</h4>
                  <p className="text-gray-500 text-xs mt-0.5">Founder & Medical Lead</p>
                </div>
                <a
                  href="https://www.linkedin.com/in/dr-varshini-md-103438212/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-blue-400 hover:text-blue-300 transition-colors font-medium border border-blue-500/20 px-3.5 py-2 rounded-lg bg-blue-500/5 hover:bg-blue-500/10"
                >
                  <Linkedin size={14} /> Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Advisors */}
          <div className="glass-panel rounded-2xl p-8 md:p-10 flex flex-col justify-between h-full">
            <div>
              <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3">Advisors</p>
              <h2 className="text-white text-2xl font-bold mb-2">Guided by Expertise</h2>
              <div className="w-12 h-[3px] bg-blue-600 mb-5 rounded-full" />
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                We are supported by a diverse team of advisors and mentors with expertise in neurology, healthcare, technology, and strategy.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Brain size={24} className="text-blue-450" />, title: 'Neurology', desc: 'Clinical excellence and guidance' },
                { icon: <TrendingUp size={24} className="text-blue-450" />, title: 'Healthcare Strategy', desc: 'Building scalable healthcare solutions' },
                { icon: <Shield size={24} className="text-blue-450" />, title: 'Technology', desc: 'AI, data science and innovation' },
                { icon: <Users size={24} className="text-blue-450" />, title: 'Public Health', desc: 'Impact-driven healthcare' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center p-4 bg-slate-900/40 border border-white/5 rounded-xl">
                  <div className="icon-circle-sm mb-3 text-blue-400">
                    {item.icon}
                  </div>
                  <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
