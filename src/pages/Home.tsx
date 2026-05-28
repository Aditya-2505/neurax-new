import { ArrowRight, Brain, Database, Shield, TrendingUp, Info, Mail, Settings, Users, Rocket } from 'lucide-react';
import { BrainHero } from '../components/BrainViz';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

export default function Home({ setCurrentPage }: HomeProps) {
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient min-h-[520px] flex items-center pt-[70px]">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <div>
            <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-4">
              Advancing the Future of Cognitive Recovery
            </p>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4">
              Intelligence Today.<br />
              Recovery for <span className="text-blue-500">Tomorrow.</span>
            </h1>
            <div className="w-10 h-[3px] bg-blue-600 mb-6" />
            <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-md">
              NeuraX Cognitive Solutions is building AI-enabled infrastructure for continuous neuro-recovery and better neurological outcomes. Driven by science. Built for the future.
            </p>
            <button onClick={() => setCurrentPage('Solutions')} className="btn-primary">
              Explore Our Solutions <ArrowRight size={16} />
            </button>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <BrainHero />
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-[#0d1b3e] border-t border-b border-[rgba(59,130,246,0.2)] py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Brain size={28} className="text-blue-400" />,
              title: 'AI-Powered Intelligence',
              desc: 'Advanced algorithms that enable cognitive assessment, monitoring, and personalized recovery pathways.'
            },
            {
              icon: <Database size={28} className="text-blue-400" />,
              title: 'Longitudinal Data Ecosystem',
              desc: 'Continuous data collection and analysis for tracking progress and informing better clinical decisions.'
            },
            {
              icon: <Shield size={28} className="text-blue-400" />,
              title: 'Secure & Scalable',
              desc: 'Enterprise-grade security and scalable infrastructure designed to handle sensitive neurological data.'
            },
            {
              icon: <TrendingUp size={28} className="text-blue-400" />,
              title: 'Evidence-Driven Outcomes',
              desc: 'Built on neuroscience and clinical evidence to support meaningful and measurable recovery.'
            }
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="icon-circle-sm flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm mb-2">{item.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Current Focus + Connect */}
      <section className="section-light py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Clinical Validation */}
          <div className="lg:col-span-2 bg-white rounded-xl p-8 border border-gray-200">
            <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase mb-3">Our Current Focus</p>
            <h2 className="text-gray-900 text-2xl font-bold mb-1">Currently Advancing</h2>
            <h2 className="text-gray-900 text-2xl font-bold mb-3">Through Clinical Validation</h2>
            <div className="w-10 h-[3px] bg-blue-600 mb-5" />

            {/* Progress steps */}
            <div className="flex items-start gap-2 mb-6 overflow-x-auto pb-2">
              {[
                { icon: <Settings size={20} />, label: 'Research & Development', desc: 'Building and refining our technologies with scientific rigor.', active: false },
                { icon: <Users size={20} />, label: 'Pilot Workflows', desc: 'Testing in controlled environments.', active: false },
                { icon: <Shield size={20} />, label: 'Clinical Validation', desc: 'Evaluating performance and safety in collaboration with clinical experts.', active: true },
                { icon: <Rocket size={20} />, label: 'Future Impact', desc: 'Delivering scalable solutions for better cognitive recovery.', active: false },
              ].map((step, i, arr) => (
                <div key={i} className="flex items-start gap-1 flex-1 min-w-[120px]">
                  <div className="flex flex-col items-center flex-1">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 mb-2 ${step.active ? 'border-blue-500 bg-blue-50 text-blue-600' : 'border-gray-200 bg-gray-50 text-gray-400'}`}>
                      {step.icon}
                    </div>
                    <p className={`text-xs font-semibold text-center mb-1 ${step.active ? 'text-blue-600' : 'text-gray-700'}`}>{step.label}</p>
                    <p className="text-xs text-gray-500 text-center leading-relaxed">{step.desc}</p>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="mt-5 w-6 flex-shrink-0 flex items-center">
                      <div className="h-[1px] w-full bg-gray-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              NeuraX is in the development phase and undergoing early-stage clinical validation to ensure the highest standards of safety, accuracy, and clinical relevance.
            </p>

            <div className="flex items-start gap-3 bg-blue-50 rounded-lg p-4 border border-blue-100">
              <Info size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-600">We are at an early stage of development and not yet commercially available.</p>
            </div>
          </div>

          {/* Right: Let's Connect */}
          <div className="card-dark rounded-xl p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-white text-2xl font-bold mb-3">Let's Connect</h2>
              <div className="w-10 h-[3px] bg-blue-600 mb-5" />
              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                Interested in collaborating or learning more about NeuraX? We'd love to hear from you.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <button
                onClick={() => setCurrentPage('Contact')}
                className="btn-primary justify-center"
              >
                Send Us a Message <ArrowRight size={16} />
              </button>
              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <div className="icon-circle-sm flex-shrink-0" style={{ width: 36, height: 36 }}>
                  <Mail size={16} className="text-blue-400" />
                </div>
                <span>hello@neuraxcog.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
