import { Building2, Microscope, Users, Shield, FlaskConical, BookOpen, Brain, ArrowRight, Send, Loader2 } from 'lucide-react';
import { useState } from 'react';

// ==========================================
// GOOGLE FORM CONFIGURATION
// Configured for form link: https://forms.gle/nF4W38Rx4wbNTDpx6
// ==========================================
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdZRnXV8DrHiOssMJaOZV2rMpcFeGPc3qE8dGYK1oMADyUgpw/formResponse";
const FIELDS = {
  name: "entry.973210114",
  email: "entry.1154153673",
  org: "entry.314301118",
  subject: "entry.54993741",
  interest: "entry.148570321",
  message: "entry.2015168528"
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', org: '', subject: '', interest: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new URLSearchParams();
      formData.append(FIELDS.name, form.name);
      formData.append(FIELDS.email, form.email);
      formData.append(FIELDS.org, form.org);
      formData.append(FIELDS.subject, form.subject);
      formData.append(FIELDS.interest, form.interest);
      formData.append(FIELDS.message, form.message);

      // Submit data via POST with no-cors to avoid CORS block policy
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formData.toString()
      });

      alert("Thank you! Your message has been submitted successfully.");
      setForm({ name: "", email: "", org: "", subject: "", interest: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again or email hello@neuraxcog.com directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="pt-[70px] relative overflow-hidden bg-[#010619] w-full">
        {/* Wrapper to ensure perfect horizontal alignment and compact spacing */}
        <div className="relative w-full py-6 md:py-8 lg:py-10 flex items-center">
          {/* Background Image Banner */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none bg-[#010619]">
            <img 
              src="/assets/contact_bg.webp" 
              alt="Contact Background" 
              className="w-full h-full object-contain object-right opacity-100" 
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full relative z-10">
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
            {/* Empty right column to let the background illustration show through on the right */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* Partnership Opportunities + Contact Form */}
      <section className="py-20 relative overflow-hidden bg-[#030712]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          {/* Left: Partnership content */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Partnership Opportunities */}
            <div>
              <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-1">Partnership Opportunities</p>
              <div className="w-12 h-[3px] bg-blue-600 mb-6 mt-2 rounded-full" />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  {
                    icon: <Building2 size={28} className="text-blue-400" />,
                    title: 'Hospitals & Clinics',
                    desc: 'Integrate NeuraX solutions into your care pathways to enhance patient recovery and outcomes.'
                  },
                  {
                    icon: <Microscope size={28} className="text-blue-400" />,
                    title: 'Rehabilitation Centers',
                    desc: 'Empower your programs with continuous cognitive monitoring and digital rehabilitation solutions.'
                  },
                  {
                    icon: <Brain size={28} className="text-blue-400" />,
                    title: 'Research Collaborations',
                    desc: 'Partner with us to advance neuroscience research and co-develop evidence-based innovations.'
                  },
                  {
                    icon: <Users size={28} className="text-blue-400" />,
                    title: 'Strategic Partnerships',
                    desc: 'Work with us to shape the future of neurotechnology and create meaningful impact globally.'
                  }
                ].map((item, i) => (
                  <div key={i} className="glass-card rounded-2xl p-5 flex flex-col items-center text-center h-full">
                    <div className="icon-circle mb-4 text-blue-400">
                      {item.icon}
                    </div>
                    <h3 className="text-white font-bold text-sm mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-[11px] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Clinical Validation Box */}
            <div className="glass-panel rounded-2xl p-8">
              <div className="flex items-start gap-6">
                <div className="icon-circle flex-shrink-0 text-blue-400">
                  <Shield size={28} />
                </div>
                <div>
                  <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-2">Currently Advancing</p>
                  <h3 className="text-white font-bold text-lg mb-2">Through Clinical Validation</h3>
                  <div className="w-12 h-[3px] bg-blue-600 mb-4 rounded-full" />
                  <p className="text-gray-450 text-sm leading-relaxed mb-6">
                    NeuraX is currently in development and undergoing early-stage clinical validation to ensure the highest standards of safety, accuracy, and clinical relevance.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      { icon: <FlaskConical size={16} className="text-blue-400" />, title: 'Research-Driven', desc: 'Grounded in neuroscience and clinical research' },
                      { icon: <BookOpen size={16} className="text-blue-400" />, title: 'Clinically Guided', desc: 'Developed with input from neurologists and experts' },
                      { icon: <Brain size={16} className="text-blue-400" />, title: 'AI-Enabled', desc: 'Intelligent systems for deeper cognitive insights' },
                      { icon: <ArrowRight size={16} className="text-blue-400" />, title: 'Future-Focused', desc: 'Building scalable infrastructure for long-term impact' }
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          {item.icon}
                          <span className="text-white text-xs font-semibold">{item.title}</span>
                        </div>
                        <p className="text-gray-400 text-[11px] leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="glass-panel rounded-2xl p-8 h-fit">
            <h2 className="text-white text-2xl font-bold mb-2">Send Us a Message</h2>
            <div className="w-12 h-[3px] bg-blue-600 mb-5 rounded-full" />
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
              <select
                value={form.interest}
                onChange={e => setForm({...form, interest: e.target.value})}
                className={form.interest ? "text-white" : "text-[#4b5563]"}
              >
                <option value="">Primary Area of Interest (Optional)</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Product/Service Demo Request">Product/Service Demo Request</option>
                <option value="Technical Support">Technical Support</option>
                <option value="Partnership Opportunities">Partnership Opportunities</option>
                <option value="Media/Press Inquiry">Media/Press Inquiry</option>
                <option value="Billing/Account Inquiry">Billing/Account Inquiry</option>
                <option value="Career Opportunities">Career Opportunities</option>
                <option value="Other">Other</option>
              </select>
              <textarea
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={e => setForm({...form, message: e.target.value})}
                required
              />
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-primary justify-center mt-2 shadow-[0_4px_14px_rgba(37,99,235,0.25)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>Sending... <Loader2 size={16} className="animate-spin" /></>
                ) : (
                  <>Send Message <Send size={16} /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
