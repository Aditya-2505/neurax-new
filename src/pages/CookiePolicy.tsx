import { useState } from 'react';
import { Cookie, Monitor, Settings, Trash2, Globe, RefreshCw, Mail } from 'lucide-react';
import { BrainHero } from '../components/BrainViz';

const sections = [
  'What Are Cookies?',
  'How We Use Cookies',
  'Types of Cookies',
  'Managing Cookies',
  'Third-Party Cookies',
  'Updates',
  'Contact Us'
];

export default function CookiePolicy() {
  const [active, setActive] = useState(0);

  return (
    <div className="pt-[70px]">
      <section className="hero-gradient py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3">Legal</p>
            <h1 className="text-white text-4xl font-bold mb-3">Cookie Policy</h1>
            <p className="text-gray-400 text-sm mb-4">Last updated: May 20, 2025</p>
            <p className="text-gray-300 text-sm leading-relaxed max-w-lg">
              This Cookie Policy explains how NeuraX Cognitive Solutions Pvt. Ltd. ("NeuraX", "we", "our", "us") uses cookies and similar technologies on our website.
            </p>
          </div>
          <div className="flex justify-end">
            <div className="w-64">
              <BrainHero />
            </div>
          </div>
        </div>
      </section>

      <section className="section-light py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
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

          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    icon: <Cookie size={20} className="text-blue-400" />,
                    title: '1. What Are Cookies?',
                    desc: 'Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and improve your experience.'
                  },
                  {
                    icon: <Monitor size={20} className="text-blue-400" />,
                    title: '2. How We Use Cookies',
                    desc: 'We use cookies to enhance website functionality, analyze site performance, understand user behavior, and personalize content.'
                  },
                  {
                    icon: <Settings size={20} className="text-blue-400" />,
                    title: '4. Managing Cookies',
                    desc: 'You can control or delete cookies through your browser settings. Disabling cookies may affect the functionality of our website.'
                  },
                  {
                    icon: <Globe size={20} className="text-blue-400" />,
                    title: '5. Third-Party Cookies',
                    desc: 'We may use third-party services (e.g., analytics providers) that set cookies to help us understand website traffic and usage.'
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4 border border-gray-100">
                    <div className="mt-0.5 flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="text-gray-800 font-bold text-sm mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <h3 className="text-gray-800 font-bold text-sm mb-3">3. Types of Cookies</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {[
                    { name: 'Essential Cookies', desc: 'Required for website operation' },
                    { name: 'Performance Cookies', desc: 'Help us analyse website usage' },
                    { name: 'Functional Cookies', desc: 'Remember your preferences' },
                    { name: 'Targeting Cookies', desc: 'Used to deliver relevant content' }
                  ].map((c, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      <span><strong>{c.name}</strong> – {c.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <div>
                  <h3 className="text-gray-800 font-bold mb-1">6. Updates</h3>
                  <p>We may update this Cookie Policy from time to time. Changes will be posted on this page with the updated date.</p>
                </div>
                <div>
                  <h3 className="text-gray-800 font-bold mb-1">7. Contact Us</h3>
                  <p>For questions about this Cookie Policy, contact us at: <span className="text-blue-600">hello@neuraxcog.com</span></p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 mt-6">
                <p className="text-gray-600 text-sm">By continuing to use our website, you consent to the use of cookies as described in this policy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
