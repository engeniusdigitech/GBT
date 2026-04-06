import { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInSection } from '../components/Animations';

const contactDetails = [
  {
    icon: MapPin,
    title: 'Our Address',
    lines: [
      'Survey Number 1283, Unjha - Unava Highway',
      'Behind Carvan Hotel, Near Bhagat Kapasiya',
      'Unjha, Mehsana, Gujarat, India',
    ],
    action: null,
  },
  {
    icon: Phone,
    title: 'Phone Numbers',
    lines: ['+91 88664 28843', '+91 84699 19203'],
    action: { type: 'tel', value: '+918866428843', label: 'Call Now' },
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['Dharmik.dave@newberry.in', 'Chaudharysamar14jan@gmail.com'],
    action: { type: 'mailto', value: 'Dharmik.dave@newberry.in', label: 'Send Email' },
  },
];

const products = ['Psyllium Husk', 'Cumin (Jeera)', 'Cattle Feed', 'Multiple Products'];
const quantities = ['< 1 Metric Ton', '1-5 Metric Tons', '5-20 Metric Tons', '20+ Metric Tons (Bulk)'];

export default function Contact() {
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', country: '',
    product: '', quantity: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Your name is required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Please enter a valid email';
    if (!form.product) e.product = 'Please select a product';
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setErrors({});
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const whatsappUrl = `https://wa.me/918866428843?text=${encodeURIComponent(
    `Hello Gujarat Bio Tech!\n\nI am interested in:\nProduct: ${form.product || '[select product]'}\nQuantity: ${form.quantity || '[unspecified]'}\nCountry: ${form.country || '[unspecified]'}\n\nPlease share pricing and availability.`
  )}`;

  const inputClass =
    'w-full bg-[#0a130a] border border-green-900/50 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500/30 transition-all duration-200';

  const errorClass = 'text-red-400 text-xs mt-1';

  return (
    <div className="pt-20">
      {/* === PAGE HEADER === */}
      <section className="relative py-20 overflow-hidden bg-[#0a130a]">
        <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-top opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a130a]/90 to-[#0a130a]" />
        <div className="wrap relative z-10 text-center">
          <FadeInSection>
            <span className="eyebrow">Get In Touch</span>
            <div className="rule-c" />
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mt-2 mb-5">
              Start Your Export Journey
            </h1>
            <p className="text-slate-400 max-w-xl mx-auto text-lg">
              Request a quote, ask about product specs, or send us an inquiry — our team will respond within 24 hours.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* === CONTACT CARDS === */}
      <section className="py-12">
        <div className="wrap">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
            {contactDetails.map((item, i) => (
              <FadeInSection key={item.title} delay={i * 0.1}>
                <div className="glass p-6 h-full">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-3">{item.title}</h3>
                  <div className="space-y-1 mb-4">
                    {item.lines.map((line) => (
                      <p key={line} className="text-slate-400 text-sm">{line}</p>
                    ))}
                  </div>
                  {item.action && (
                    <a
                      href={`${item.action.type}:${item.action.value}`}
                      className="text-green-400 text-sm font-semibold flex items-center gap-1.5 hover:text-green-300 transition-colors"
                    >
                      {item.action.label} <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* === INQUIRY FORM + WHATSAPP === */}
      <section className="pb-16">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <FadeInSection>
                <div className="glass p-8">
                  <h2 className="font-display text-2xl font-bold text-white mb-2">Product Inquiry Form</h2>
                  <p className="text-slate-400 text-sm mb-7">Fill in the details and we'll get back to you within 24 hours with pricing and availability.</p>

                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center text-center py-12"
                      >
                        <div className="w-20 h-20 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center mb-5">
                          <CheckCircle2 className="w-10 h-10 text-green-400" />
                        </div>
                        <h3 className="font-display text-2xl font-bold text-white mb-3">Inquiry Received!</h3>
                        <p className="text-slate-400 mb-6 max-w-sm">
                          Thank you, {form.name}. We'll review your inquiry and respond within 24 business hours.
                        </p>
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-green"
                        >
                          <MessageCircle className="w-4 h-4" /> Also message us on WhatsApp
                        </a>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        onSubmit={handleSubmit}
                        noValidate
                        className="space-y-4"
                      >
                        {/* Row 1 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-slate-400 text-xs uppercase tracking-wider mb-1.5 block">
                              Your Name *
                            </label>
                            <input
                              id="contact-name"
                              type="text"
                              name="name"
                              value={form.name}
                              onChange={handleChange}
                              placeholder="John Smith"
                              className={inputClass}
                            />
                            {errors.name && <p className={errorClass}>{errors.name}</p>}
                          </div>
                          <div>
                            <label className="text-slate-400 text-xs uppercase tracking-wider mb-1.5 block">
                              Company Name
                            </label>
                            <input
                              id="contact-company"
                              type="text"
                              name="company"
                              value={form.company}
                              onChange={handleChange}
                              placeholder="Your Company Ltd."
                              className={inputClass}
                            />
                          </div>
                        </div>

                        {/* Row 2 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-slate-400 text-xs uppercase tracking-wider mb-1.5 block">
                              Email Address *
                            </label>
                            <input
                              id="contact-email"
                              type="email"
                              name="email"
                              value={form.email}
                              onChange={handleChange}
                              placeholder="john@company.com"
                              className={inputClass}
                            />
                            {errors.email && <p className={errorClass}>{errors.email}</p>}
                          </div>
                          <div>
                            <label className="text-slate-400 text-xs uppercase tracking-wider mb-1.5 block">
                              Phone / WhatsApp
                            </label>
                            <input
                              id="contact-phone"
                              type="tel"
                              name="phone"
                              value={form.phone}
                              onChange={handleChange}
                              placeholder="+1 555 000 0000"
                              className={inputClass}
                            />
                          </div>
                        </div>

                        {/* Row 3 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-slate-400 text-xs uppercase tracking-wider mb-1.5 block">
                              Country
                            </label>
                            <input
                              id="contact-country"
                              type="text"
                              name="country"
                              value={form.country}
                              onChange={handleChange}
                              placeholder="United States"
                              className={inputClass}
                            />
                          </div>
                          <div>
                            <label className="text-slate-400 text-xs uppercase tracking-wider mb-1.5 block">
                              Product of Interest *
                            </label>
                            <select
                              id="contact-product"
                              name="product"
                              value={form.product}
                              onChange={handleChange}
                              className={inputClass}
                            >
                              <option value="">Select a product</option>
                              {products.map((p) => (
                                <option key={p} value={p}>{p}</option>
                              ))}
                            </select>
                            {errors.product && <p className={errorClass}>{errors.product}</p>}
                          </div>
                        </div>

                        {/* Quantity */}
                        <div>
                          <label className="text-slate-400 text-xs uppercase tracking-wider mb-1.5 block">
                            Required Quantity
                          </label>
                          <div className="flex flex-wrap gap-2">
                            {quantities.map((q) => (
                              <button
                                key={q}
                                type="button"
                                onClick={() => setForm((prev) => ({ ...prev, quantity: q }))}
                                className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-200 ${
                                  form.quantity === q
                                    ? 'bg-green-500 border-green-500 text-white'
                                    : 'border-green-900/60 text-slate-400 hover:border-green-500/60 hover:text-slate-200'
                                }`}
                              >
                                {q}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Message */}
                        <div>
                          <label className="text-slate-400 text-xs uppercase tracking-wider mb-1.5 block">
                            Message / Specifications
                          </label>
                          <textarea
                            id="contact-message"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            rows={4}
                            placeholder="Please share any specific requirements, delivery port, certification needs, etc."
                            className={`${inputClass} resize-none`}
                          />
                        </div>

                        {/* Submit */}
                        <button
                          type="submit"
                          id="contact-submit"
                          disabled={loading}
                          className="btn-green w-full justify-center py-3.5 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {loading ? (
                            <span className="flex items-center gap-2">
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                              />
                              Submitting...
                            </span>
                          ) : (
                            <>
                              <Send className="w-4 h-4" /> Submit Inquiry
                            </>
                          )}
                        </button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </FadeInSection>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* WhatsApp CTA */}
              <FadeInSection delay={0.15}>
                <div className="glass p-6 border-green-500/30">
                  <div className="w-12 h-12 rounded-xl bg-[#25d366]/10 border border-[#25d366]/20 flex items-center justify-center mb-4">
                    <MessageCircle className="w-6 h-6 text-[#25d366]" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">Prefer WhatsApp?</h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Chat directly with our export team for instant replies and product discussions.
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="contact-whatsapp"
                    className="flex items-center gap-2.5 bg-[#25d366] hover:bg-[#128c7e] text-white font-semibold px-4 py-2.5 rounded-lg transition-all duration-300 text-sm justify-center hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                  </a>
                </div>
              </FadeInSection>

              {/* Business hours */}
              <FadeInSection delay={0.25}>
                <div className="glass p-6">
                  <h3 className="font-display text-lg font-bold text-white mb-4">Business Hours</h3>
                  <div className="space-y-2.5 text-sm">
                    {[
                      { day: 'Monday – Saturday', hours: '9:00 AM – 7:00 PM IST' },
                      { day: 'Sunday', hours: 'Closed (WhatsApp only)' },
                    ].map((h) => (
                      <div key={h.day} className="flex justify-between items-center">
                        <span className="text-slate-400">{h.day}</span>
                        <span className="text-white font-medium text-xs">{h.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-green-900/30">
                    <p className="text-slate-500 text-xs">
                      Response time: Within 24 business hours. Export inquiries prioritized.
                    </p>
                  </div>
                </div>
              </FadeInSection>

              {/* Map */}
              <FadeInSection delay={0.35}>
                <div className="glass overflow-hidden">
                  <iframe
                    title="Gujarat Bio Tech Location"
                    src="https://maps.google.com/maps?q=Unjha,+Mehsana,+Gujarat,+India&output=embed"
                    className="w-full h-44 opacity-80"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <p className="text-slate-400 text-xs">
                      Survey No. 1283, Unjha-Unava Hwy, Unjha, Mehsana, Gujarat
                    </p>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
