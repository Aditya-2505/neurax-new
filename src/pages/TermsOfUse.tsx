import { useState } from 'react';
import { CheckCircle, Monitor, Copyright, User, AlertTriangle, Shield, FileText, Gavel, RefreshCw, Mail } from 'lucide-react';
import { BrainSide } from '../components/BrainViz';

const sections = [
  'Acceptance of Terms',
  'Use of the Website',
  'Intellectual Property',
  'User Responsibilities',
  'Disclaimers',
  'Limitation of Liability',
  'Indemnification',
  'Termination',
  'Governing Law',
  'Changes to Terms',
  'Contact Us'
];

const termItems = [
  {
    icon: <CheckCircle size={20} className="text-blue-400" />,
    title: '1. Acceptance of Terms',
    desc: 'By using our website and solutions, you agree to these Terms & Conditions and our Privacy Policy.'
  },
  {
    icon: <Monitor size={20} className="text-blue-400" />,
    title: '2. Use of the Website',
    desc: 'Our website and solutions are for informational and professional use only. You agree not to use the platform for any unlawful purpose.'
  },
  {
    icon: <Copyright size={20} className="text-blue-400" />,
    title: '3. Intellectual Property',
    desc: 'All content, trademarks, logos, and materials on this website are the property of NeuraX and are protected by applicable laws.'
  },
  {
    icon: <AlertTriangle size={20} className="text-blue-400" />,
    title: '4. Disclaimers',
    desc: 'NeuraX solutions are under development and clinical validation. Content is provided "as is" without warranties of any kind.'
  },
  {
    icon: <Shield size={20} className="text-blue-400" />,
    title: '5. Limitation of Liability',
    desc: 'NeuraX shall not be liable for any indirect, incidental, or consequential damages arising from use of our platform.'
  },
  {
    icon: <Gavel size={20} className="text-blue-400" />,
    title: '6. Governing Law',
    desc: 'These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of laws.'
  }
];

export default function TermsOfUse() {
  const [active, setActive] = useState(0);

  return (
    <div className="pt-[70px]">
      {/* Hero */}
      <section className="hero-gradient py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3">Legal</p>
            <h1 className="text-white text-4xl font-bold mb-3">Terms & Conditions</h1>
            <p className="text-gray-400 text-sm mb-4">Last updated: May 20, 2025</p>
            <p className="text-gray-300 text-sm leading-relaxed max-w-lg">
              Welcome to NeuraX Cognitive Solutions Pvt. Ltd. ("NeuraX"). By accessing or using our website and services, you agree to be bound by these Terms & Conditions.
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

          {/* Main */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {termItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4 border border-gray-100">
                    <div className="mt-0.5 flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="text-gray-800 font-bold text-sm mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 mb-6 flex items-start gap-3">
                <AlertTriangle size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-600 text-sm">
                  NeuraX is an early-stage company advancing AI-enabled neuro-recovery solutions. Our services are not intended to replace professional medical advice, diagnosis, or treatment.
                </p>
              </div>

              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <div>
                  <h3 className="text-gray-800 font-bold mb-1">7. Indemnification</h3>
                  <p>You agree to indemnify and hold harmless NeuraX and its affiliates from any claims, losses, or damages arising from your use of the platform or violation of these terms.</p>
                </div>
                <div>
                  <h3 className="text-gray-800 font-bold mb-1">8. Termination</h3>
                  <p>We reserve the right to suspend or terminate your access to the platform at our discretion, without prior notice, for conduct that violates these terms.</p>
                </div>
                <div>
                  <h3 className="text-gray-800 font-bold mb-1">10. Changes to Terms</h3>
                  <p>We may update these Terms from time to time. Continued use of the platform constitutes acceptance of any changes.</p>
                </div>
                <div>
                  <h3 className="text-gray-800 font-bold mb-1">11. Contact Us</h3>
                  <p>For questions about these Terms, contact us at: <span className="text-blue-600">hello@neuraxcog.com</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
