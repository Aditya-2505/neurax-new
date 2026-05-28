import { Building2, Microscope, Users, Handshake, Shield, FlaskConical, BookOpen, Brain, ArrowRight, Send, Mail } from 'lucide-react';
import { useState } from 'react';
import { BrainHands } from '../components/BrainViz';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', org: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will get back to you soon.');
    setForm({ name: '', email: '', org: '', subject: '', message: '' });
  };

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient min-h-[420px] flex items-center pt-[70px]">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <div>
            <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-4">Partner With NeuraX</p>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4">
              Let's Build the Future of Neuro-Recovery <span className="text-blue-500">Together.</span>
            </h1>
            <div className="w-10 h-[3px] bg-blue-600 mb-6" />
            <p className="text-gray-300 text-base leading-relaxed max-w-md">
              NeuraX is building the infrastructure for continuous cognitive recovery. We collaborate with forward-thinking partners who share our vision for better neurological outcomes.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-lg">
              <BrainHands />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities + Contact Form */}
      <section className="section-light py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Partnership content */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Partnership Opportunities */}
            <div>
              <p className="text-gray-700 text-xs font-semibold tracking-widest uppercase mb-1">Partnership Opportunities</p>
              <div className="w-10 h-[3px] bg-blue-600 mb-6 mt-2" />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  {
                    icon: <Building2 size={28} className="text-blue-500" />,
                    title: 'Hospitals & Clinics',
                    desc: 'Integrate NeuraX solutions into your care pathways to enhance patient recovery and outcomes.'
                  },
                  {
                    icon: <Microscope size={28} className="text-blue-500" />,
                    title: 'Rehabilitation Centers',
                    desc: 'Empower your programs with continuous cognitive monitoring and digital rehabilitation solutions.'
                  },
                  {
                    icon: <Brain size={28} className="text-blue-500" />,
                    title: 'Research Collaborations',
                    desc: 'Partner with us to advance neuroscience research and co-develop evidence-based innovations.'
                  },
                  {
                    icon: <Users size={28} className="text-blue-500" />,
                    title: 'Strategic Partnerships',
                    desc: 'Work with us to shape the future of neurotechnology and create meaningful impact globally.'
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-5 border border-gray-200 flex flex-col items-center text-center">
                    <div className="icon-circle mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-gray-900 font-bold text-sm mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Clinical Validation Box */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="flex items-start gap-6">
                <div className="icon-circle flex-shrink-0">
                  <Shield size={28} className="text-blue-500" />
                </div>
                <div>
                  <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase mb-2">Currently Advancing</p>
                  <h3 className="text-gray-900 font-bold text-lg mb-2">Through Clinical Validation</h3>
                  <div className="w-10 h-[3px] bg-blue-600 mb-4" />
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    NeuraX is currently in development and undergoing early-stage clinical validation to ensure the highest standards of safety, accuracy, and clinical relevance.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      { icon: <FlaskConical size={16} className="text-blue-500" />, title: 'Research-Driven', desc: 'Grounded in neuroscience and clinical research' },
                      { icon: <BookOpen size={16} className="text-blue-500" />, title: 'Clinically Guided', desc: 'Developed with input from neurologists and experts' },
                      { icon: <Brain size={16} className="text-blue-500" />, title: 'AI-Enabled', desc: 'Intelligent systems for deeper cognitive insights' },
                      { icon: <ArrowRight size={16} className="text-blue-500" />, title: 'Future-Focused', desc: 'Building scalable infrastructure for long-term impact' }
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          {item.icon}
                          <span className="text-gray-800 text-xs font-semibold">{item.title}</span>
                        </div>
                        <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="card-dark rounded-xl p-8">
            <h2 className="text-white text-2xl font-bold mb-2">Send Us a Message</h2>
            <div className="w-10 h-[3px] bg-blue-600 mb-4" />
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              We'd love to hear from you. Tell us about your interest and our team will get back to you.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Organization / Hospital / Institution"
                value={form.org}
                onChange={e => setForm({...form, org: e.target.value})}
              />
              <input
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={e => setForm({...form, subject: e.target.value})}
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={e => setForm({...form, message: e.target.value})}
                required
              />
              <button type="submit" className="btn-primary justify-center mt-2">
                Send Message <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
