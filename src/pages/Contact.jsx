import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInSection } from '../components/Animations';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  const [formState, setFormState] = useState('idle'); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => {
      setFormState('success');
      e.target.reset();
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.info.call'),
      details: ['+91 88664 28843', '+91 84699 19203'],
      sub: t('contact.info.available'),
    },
    {
      icon: Mail,
      title: t('contact.info.email'),
      details: ['marketing@gujaratbiotech.com', 'info@gujaratbiotech.com'],
      sub: t('contact.info.response'),
    },
    {
      icon: MapPin,
      title: t('contact.info.location'),
      details: ['Unjha, Gujarat, India'],
      sub: 'Survey No. 1283, Unjha-Unava Hwy',
    },
  ];

  return (
    <div className="pt-20">
      {/* === HEADER === */}
      <section className="relative py-20 overflow-hidden bg-[#0a130a]">
        <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a130a]/90 to-[#0a130a]" />
        <div className="wrap relative z-10 text-center">
          <FadeInSection>
            <span className="eyebrow">{t('contact.header.eyebrow')}</span>
            <div className="rule-c" />
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mt-2 mb-5">
              {t('contact.header.title')}
            </h1>
            <p className="text-slate-400 max-w-xl mx-auto text-lg">
              {t('contact.header.subtitle')}
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* === CONTACT GRID === */}
      <section className="section-pad">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form Side */}
            <div className="lg:col-span-2">
              <FadeInSection>
                <div className="glass p-8 sm:p-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  
                  <h2 className="font-display text-3xl font-bold text-white mb-8 flex items-center gap-3">
                    <MessageSquare className="w-6 h-6 text-green-400" />
                    {t('contact.form.title')}
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">
                          {t('contact.form.name')}
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="John Doe"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">
                          {t('contact.form.email')}
                        </label>
                        <input
                          required
                          type="email"
                          placeholder="john@example.com"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">
                        {t('contact.form.subject')}
                      </label>
                      <input
                        required
                        type="text"
                        placeholder={t('contact.form.subjectPlace')}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">
                        {t('contact.form.message')}
                      </label>
                      <textarea
                        required
                        rows="5"
                        placeholder={t('contact.form.messagePlace')}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all resize-none"
                      ></textarea>
                    </div>

                    <button
                      disabled={formState !== 'idle'}
                      type="submit"
                      className={`btn-green w-full sm:w-auto px-8 py-4 flex items-center justify-center gap-2 group transition-all ${
                        formState !== 'idle' ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {formState === 'sending' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          {t('contact.form.sending')}
                        </>
                      ) : (
                        <>
                          {t('contact.form.send')}
                          <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>

                    <AnimatePresence>
                      {formState === 'success' && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-sm font-medium flex items-center gap-3"
                        >
                          <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white shrink-0">
                            ✓
                          </div>
                          {t('contact.form.success')}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                </div>
              </FadeInSection>
            </div>

            {/* Info Side */}
            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <FadeInSection key={item.title} delay={i * 0.1}>
                  <div className="glass p-6 group hover:border-green-500/30 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0 group-hover:bg-green-500/20 transition-all">
                        <item.icon className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                        <div className="space-y-1">
                          {item.details.map((detail) => (
                            <p key={detail} className="text-slate-300 font-medium">{detail}</p>
                          ))}
                        </div>
                        <p className="text-slate-500 text-xs mt-3">{item.sub}</p>
                      </div>
                    </div>
                  </div>
                </FadeInSection>
              ))}

              {/* Hours / Map Placeholder */}
              <FadeInSection delay={0.3}>
                <div className="glass p-6 border-l-4 border-green-500">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 text-green-400" />
                    <h3 className="text-white font-bold">{t('contact.info.hours')}</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-slate-300">
                      <span>Mon - Sat:</span>
                      <span className="text-white font-medium">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>Sunday:</span>
                      <span className="italic">Closed</span>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* === MAP SECTION === */}
      <section className="pb-20">
        <div className="wrap">
          <FadeInSection>
            <div className="relative rounded-3xl overflow-hidden glass p-3 group">
              <div className="absolute inset-0 bg-green-500/5 group-hover:bg-green-500/10 transition-colors duration-500" />
              
              <div className="relative h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.807909334812!2d72.386561!3d23.611111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c37890b639169%3A0xc668472f883f3e8f!2sUnjha%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1714900000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gujarat Bio Tech Location"
                ></iframe>
              </div>
              
              <div className="absolute bottom-10 left-10 right-10 md:left-auto md:right-10 md:w-80 glass p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-green-400" />
                  </div>
                  <h3 className="text-white font-bold">Visit Our Factory</h3>
                </div>
                <p className="text-slate-400 text-sm mb-4">
                  Survey No. 1283, Unjha-Unava Highway, Unjha, Mehsana, Gujarat 384170
                </p>
                <a 
                  href="https://maps.google.com/?q=Gujarat+Bio+Tech+Unjha" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 text-green-400 text-sm font-bold hover:text-green-300 transition-colors"
                >
                  Get Driving Directions <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
