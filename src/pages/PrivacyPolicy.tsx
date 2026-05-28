import { useState } from 'react';
import { User, Brain, Monitor, FileText, Shield } from 'lucide-react';
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
      <section className="hero-gradient py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3">Legal</p>
            <h1 className="text-white text-4xl font-bold mb-3">Privacy Policy</h1>
            <p className="text-gray-400 text-sm mb-4">Last updated: May 20, 2025</p>
            <p className="text-gray-300 text-sm leading-relaxed max-w-lg">
              NeuraX Cognitive Solutions Pvt. Ltd. ("NeuraX", "we", "our", "us") is committed to protecting your privacy and ensuring the security of your personal and health-related information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
            </p>
          </div>
          <div className="flex justify-end">
            <div className="w-64">
              <BrainSide />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-light py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-gray-200 p-4 sticky top-24">
              {sections.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-full text-left text-sm py-2 px-3 rounded mb-1 transition-colors ${active === i ? 'bg-blue-600 text-white font-semibold' : 'text-gray-600 hover:bg-blue-50'}`}
                >
                  {i + 1}. {s}
                </button>
              ))}
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h2 className="text-gray-900 text-xl font-bold mb-2 text-blue-700">1. Information We Collect</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                We collect information to provide and improve our AI-enabled cognitive recovery solutions.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                {[
                  { icon: <User size={24} className="text-blue-500" />, title: 'Personal Information', desc: 'Name, email, phone number, demographic details when you contact us or sign up for updates.' },
                  { icon: <Brain size={24} className="text-blue-500" />, title: 'Health & Cognitive Data', desc: 'Cognitive assessments, recovery progress, therapy interactions, and related clinical information.' },
                  { icon: <Monitor size={24} className="text-blue-500" />, title: 'Device & Usage Data', desc: 'Device type, browser, IP address, usage patterns, and diagnostic logs.' },
                  { icon: <FileText size={24} className="text-blue-500" />, title: 'Other Information', desc: 'Information you voluntarily provide in forms, surveys, or communications.' }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center">
                    <div className="icon-circle mb-3">
                      {item.icon}
                    </div>
                    <h4 className="text-gray-800 font-semibold text-xs mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 mb-6">
                <p className="text-gray-600 text-sm">All health-related data is collected only with your informed consent.</p>
              </div>

              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <div>
                  <h3 className="text-gray-800 font-bold mb-1">2. How We Use Information</h3>
                  <p>We use the information collected to operate and improve our platform, personalize user experiences, conduct research and clinical validation, and communicate with you about our services.</p>
                </div>
                <div>
                  <h3 className="text-gray-800 font-bold mb-1">3. Information Sharing</h3>
                  <p>We do not sell your personal information. We may share information with clinical collaborators and healthcare providers involved in your care, with your consent, and as required by law.</p>
                </div>
                <div>
                  <h3 className="text-gray-800 font-bold mb-1">4. Data Security</h3>
                  <p>We implement enterprise-grade security measures including encryption, access controls, and regular security audits to protect your information.</p>
                </div>
                <div>
                  <h3 className="text-gray-800 font-bold mb-1">5. Your Rights</h3>
                  <p>You have the right to access, correct, or delete your personal information. You may also withdraw consent for data processing at any time by contacting us.</p>
                </div>
                <div>
                  <h3 className="text-gray-800 font-bold mb-1">9. Contact Us</h3>
                  <p>For privacy-related queries, contact us at: <span className="text-blue-600">hello@neuraxcog.com</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
