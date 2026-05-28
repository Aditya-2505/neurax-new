import { Target, Eye, Heart, Brain, TrendingUp, Shield, Users } from 'lucide-react';
import { BrainHands } from '../components/BrainViz';

export default function AboutUs() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient min-h-[420px] flex items-center pt-[70px]">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
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
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-lg">
              <BrainHands />
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-[#0d1b3e] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[rgba(59,130,246,0.2)] rounded-xl overflow-hidden">
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
              <div key={i} className={`p-8 ${i < 2 ? 'border-b md:border-b-0 md:border-r border-[rgba(59,130,246,0.2)]' : ''}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="icon-circle-sm flex-shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                </div>
                <div className="w-8 h-[2px] bg-blue-500 mb-4" />
                {item.isList ? (
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {[...item.col1!, ...item.col2!].map((v, j) => (
                      <p key={j} className="text-gray-300 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
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
      <section className="section-light py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Founder's Story */}
          <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=700"
                alt="Founder"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
            </div>
            <div className="p-8">
              <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase mb-3">Founder's Story</p>
              <h2 className="text-gray-900 text-2xl font-bold mb-2">A Personal Mission to Drive Change</h2>
              <div className="w-10 h-[3px] bg-blue-600 mb-5" />
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                NeuraX was born from a deep passion for neuroscience and a first-hand understanding of the challenges patients and families face during recovery.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our founder, with a background in medicine and a keen interest in neurorehabilitation, envisioned a world where technology and empathy come together to transform lives.
              </p>
            </div>
          </div>

          {/* Advisors */}
          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase mb-3">Advisors</p>
            <h2 className="text-gray-900 text-2xl font-bold mb-2">Guided by Expertise</h2>
            <div className="w-10 h-[3px] bg-blue-600 mb-5" />
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              We are supported by a diverse team of advisors and mentors with expertise in neurology, healthcare, technology, and strategy.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { icon: <Brain size={24} className="text-blue-500" />, title: 'Neurology', desc: 'Clinical excellence and guidance' },
                { icon: <TrendingUp size={24} className="text-blue-500" />, title: 'Healthcare Strategy', desc: 'Building scalable healthcare solutions' },
                { icon: <Shield size={24} className="text-blue-500" />, title: 'Technology', desc: 'AI, data science and innovation' },
                { icon: <Users size={24} className="text-blue-500" />, title: 'Public Health', desc: 'Impact-driven healthcare' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="icon-circle mb-3">
                    {item.icon}
                  </div>
                  <h4 className="text-gray-900 font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
