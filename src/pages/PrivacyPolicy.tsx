import { useState } from 'react';
import { User, Brain, Monitor, FileText } from 'lucide-react';
import { BrainSide } from '../components/BrainViz';

const sections = [
  'Information We Collect',
  'How We Use Information',
  'Information Sharing',
  'Data Security',
  'Your Rights',
  'Cookies & Tracking',
  "Children's Privacy",
  'Changes to This Policy',
  'Contact Us'
];

export default function PrivacyPolicy() {
  const [active, setActive] = useState(0);

  return (
    <div className="pt-[70px]">
      {/* Hero */}
      <section className="hero-gradient py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase mb-3">Legal</p>
            <h1 className="text-slate-900 text-4xl font-bold mb-3">Privacy Policy</h1>
            <p className="text-slate-500 text-sm mb-4">Last updated: May 20, 2025</p>
            <p className="text-slate-650 text-sm leading-relaxed max-w-lg">
              NeuraX Cognitive Solutions Pvt. Ltd. ("NeuraX", "we", "our", "us") is committed to protecting your privacy and ensuring the security of your personal and health-related information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
            </p>
          </div>
          <div className="flex justify-end">
            <div className="w-full max-w-[320px] md:max-w-[400px] aspect-[16/9] rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm bg-white">
              <img 
                src="/assets/client_privacy_hero.png" 
                alt="Privacy Policy Document" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
          {/* Sidebar */}
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

          {/* Main content */}
          <div className="lg:col-span-3">
            <div className="glass-panel rounded-2xl p-8 md:p-10 bg-white">
              <h2 className="text-slate-900 text-xl font-bold mb-2">1. Information We Collect</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                We collect information to provide and improve our AI-enabled cognitive recovery solutions.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                {[
                  { icon: <User size={24} className="text-blue-600" />, title: 'Personal Information', desc: 'Name, email, phone number, demographic details when you contact us or sign up for updates.' },
                  { icon: <Brain size={24} className="text-blue-600" />, title: 'Health & Cognitive Data', desc: 'Cognitive assessments, recovery progress, therapy interactions, and related clinical information.' },
                  { icon: <Monitor size={24} className="text-blue-600" />, title: 'Device & Usage Data', desc: 'Device type, browser, IP address, usage patterns, and diagnostic logs.' },
                  { icon: <FileText size={24} className="text-blue-600" />, title: 'Other Information', desc: 'Information you voluntarily provide in forms, surveys, or communications.' }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center">
                    <div className="icon-circle mb-3 bg-slate-50 border-slate-100">
                      {item.icon}
                    </div>
                    <h4 className="text-slate-900 font-semibold text-xs mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 mb-6">
                <p className="text-slate-700 text-sm font-medium">All health-related data is collected only with your informed consent.</p>
              </div>

              <div className="space-y-4 text-slate-655 text-sm leading-relaxed">
                <div>
                  <h3 className="text-slate-900 font-bold mb-1">2. How We Use Information</h3>
                  <p>We use the information collected to operate and improve our platform, personalize user experiences, conduct research and clinical validation, and communicate with you about our services.</p>
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold mb-1">3. Information Sharing</h3>
                  <p>We do not sell your personal information. We may share information with clinical collaborators and healthcare providers involved in your care, with your consent, and as required by law.</p>
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold mb-1">4. Data Security</h3>
                  <p>We implement enterprise-grade security measures including encryption, access controls, and regular security audits to protect your information.</p>
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold mb-1">5. Your Rights</h3>
                  <p>You have the right to access, correct, or delete your personal information. You may also withdraw consent for data processing at any time by contacting us.</p>
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold mb-1">9. Contact Us</h3>
                  <p>For privacy-related queries, contact us at: <span className="text-blue-600 font-semibold">neuraxcognitivesolutions@gmail.com</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
