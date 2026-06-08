import { useState } from 'react';
import { Info, Heart, Shield, AlertTriangle, User, CheckCircle } from 'lucide-react';
import { BrainHero } from '../components/BrainViz';

const sections = [
  'General Information',
  'No Medical Advice',
  'Clinical Validation',
  'Emergency Disclaimer',
  'Professional Consultation',
  'No Guarantee',
  'Updates',
  'Contact Us'
];

const disclaimerItems = [
  {
    icon: <Info size={20} className="text-blue-600" />,
    title: '1. General Information',
    desc: 'NeuraX provides AI-enabled tools for cognitive monitoring and neuro-recovery support. The platform is not a medical device and is not intended for diagnostic or treatment purposes.'
  },
  {
    icon: <Heart size={20} className="text-blue-600" />,
    title: '2. No Medical Advice',
    desc: 'Nothing on this platform constitutes medical advice, diagnosis, or treatment. The platform should not be used as a substitute for professional medical judgment.'
  },
  {
    icon: <Shield size={20} className="text-blue-600" />,
    title: '3. Clinical Validation',
    desc: 'Our solutions are currently under development and undergoing early-stage clinical validation. Performance may vary based on individual conditions.'
  },
  {
    icon: <AlertTriangle size={20} className="text-blue-600" />,
    title: '4. Emergency Disclaimer',
    desc: 'NeuraX does not provide emergency medical services. If you are experiencing a medical emergency, call your local emergency number immediately.'
  },
  {
    icon: <User size={20} className="text-blue-600" />,
    title: '5. Professional Consultation',
    desc: 'Always consult a qualified healthcare professional for any medical concerns, diagnosis, or treatment decisions.'
  },
  {
    icon: <CheckCircle size={20} className="text-blue-600" />,
    title: '6. No Guarantee',
    desc: 'While we strive for accuracy, NeuraX does not guarantee the completeness, reliability, or accuracy of the information or insights provided.'
  }
];

export default function MedicalDisclaimer() {
  const [active, setActive] = useState(0);

  return (
    <div className="pt-[70px]">
      <section className="hero-gradient py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase mb-3">Legal</p>
            <h1 className="text-slate-900 text-4xl font-bold mb-3">Medical Disclaimer</h1>
            <p className="text-slate-500 text-sm mb-4">Last updated: May 20, 2025</p>
            <p className="text-slate-600 text-sm leading-relaxed max-w-lg">
              The information and services provided by NeuraX Cognitive Solutions Pvt. Ltd. are intended for informational and supportive purposes only.
            </p>
          </div>
          <div className="flex justify-end">
            <div className="w-64">
              <BrainHero />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
          <div className="lg:col-span-1">
            <div className="glass-panel rounded-2xl p-4 sticky top-24 bg-slate-50/50">
              {sections.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-full text-left text-sm py-2 px-3 rounded mb-1 transition-colors ${active === i ? 'bg-blue-600 text-white font-semibold' : 'text-slate-650 hover:bg-slate-100 hover:text-slate-900'}`}
                >
                  {i + 1}. {s}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="glass-panel rounded-2xl p-8 md:p-10 bg-white">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {disclaimerItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-slate-50/50 rounded-xl p-4 border border-slate-100">
                    <div className="mt-0.5 flex-shrink-0 text-blue-600">{item.icon}</div>
                    <div>
                      <h3 className="text-slate-900 font-bold text-sm mb-1">{item.title}</h3>
                      <p className="text-slate-550 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-100 mb-6 flex items-start gap-3">
                <AlertTriangle size={18} className="text-yellow-600 flex-shrink-0 mt-0.5 animate-pulse" />
                <p className="text-yellow-800 text-sm font-medium">
                  NeuraX does not provide emergency medical services or replace professional clinical judgment. In case of a medical emergency, seek immediate assistance from a qualified healthcare provider.
                </p>
              </div>

              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <div>
                  <h3 className="text-slate-900 font-bold mb-1">7. Updates</h3>
                  <p>Information on this platform may be updated periodically. We encourage users to review this disclaimer regularly.</p>
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold mb-1">8. Contact Us</h3>
                  <p>For questions about this Medical Disclaimer, contact us at: <span className="text-blue-600 font-semibold">hello@neuraxcog.com</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
