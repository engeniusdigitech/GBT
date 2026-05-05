import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, Globe, Star, Shield, Leaf, Award, ChevronDown,
  TrendingUp, CheckCircle2, Package
} from 'lucide-react';
import { FadeInSection, StaggerContainer, StaggerItem, ScaleOnHover } from '../components/Animations';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  const stats = [
    { value: '99%', label: t('home.stats.purity'), icon: Star },
    { value: '3+', label: t('home.stats.markets'), icon: Globe },
    { value: '100%', label: t('home.stats.tested'), icon: Shield },
    { value: '15+', label: t('home.stats.experience'), icon: Award },
  ];

  const products = [
    {
      name: 'Psyllium Husk',
      tagline: t('home.products.psyllium.tagline', 'Nature\'s Premium Fiber'),
      description: t('home.products.psyllium.desc', 'Export-grade psyllium husk with very high fiber content and exceptional purity.'),
      image: '/psyllium.png',
      badge: t('home.products.psyllium.badge', 'High Fiber'),
      color: 'from-amber-600/20 to-yellow-500/5',
      link: '/products#psyllium',
    },
    {
      name: 'Cumin (Jeera)',
      tagline: t('home.products.jeera.tagline', 'Unjha\'s Signature Spice'),
      description: t('home.products.jeera.desc', 'Flagship product with exceptional aroma and essential oil content.'),
      image: '/jeera.png',
      badge: t('home.products.jeera.badge', 'Flagship'),
      color: 'from-orange-600/20 to-amber-500/5',
      link: '/products#jeera',
    },
    {
      name: 'Psyllium Husk Powder',
      tagline: t('home.products.psylliumPowder.tagline', 'Pure Fiber Power'),
      description: t('home.products.psylliumPowder.desc', 'Fine-mesh psyllium powder for easy mixing and rapid efficacy.'),
      image: '/psyllium-powder.png',
      badge: t('home.products.psylliumPowder.badge', 'Pure Powder'),
      color: 'from-green-600/20 to-emerald-500/5',
      link: '/products#psyllium-powder',
    },
  ];

  const highlights = [
    { icon: CheckCircle2, text: t('home.whyUs.highlights.supply', 'End-to-end supply chain from farm to packaging') },
    { icon: CheckCircle2, text: t('home.whyUs.highlights.unjha', 'Own processing units in Unjha, Gujarat') },
    { icon: CheckCircle2, text: t('home.whyUs.highlights.quality', 'Strict quality control at every stage') },
    { icon: CheckCircle2, text: t('home.whyUs.highlights.bulk', 'Bulk export packaging available') },
    { icon: CheckCircle2, text: t('home.whyUs.highlights.certified', 'Certified high-purity standards') },
  ];

  return (
    <div>
      {/* === HERO SECTION === */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.png"
            alt="Agricultural fields in Gujarat"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1a0f]/90 via-[#0f1a0f]/70 to-[#0f1a0f]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a0f] via-transparent to-[#0f1a0f]/30" />
        </div>

        {/* Content */}
        <div className="wrap relative z-10 pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              {t('home.hero.title')}{' '}
              <span className="grad-text">{t('home.hero.titleAccent')}</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl"
            >
              {t('home.hero.subtitle')}
            </motion.p>
            
            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact" className="btn-green text-base px-7 py-3.5">
                {t('home.hero.ctaPrimary')} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/products" className="btn-ghost text-base px-7 py-3.5">
                {t('home.hero.ctaSecondary')}
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown className="w-5 h-5 text-green-500" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* === STATS SECTION === */}
      <section className="py-12 bg-[#0a130a] border-y border-green-950/50">
        <div className="wrap">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <FadeInSection key={stat.label} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center group">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-3 transition-all duration-300 group-hover:bg-green-500/20">
                    <stat.icon className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="font-display text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-slate-500 text-xs uppercase tracking-widest">{stat.label}</div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* === CERTIFICATES SECTION === */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="wrap">
          <FadeInSection>
            <div className="text-center mb-10">
              <span className="text-green-600 text-xs font-bold uppercase tracking-widest">Global Standards</span>
              <h2 className="text-3xl font-bold text-slate-900 mt-2">Our Certifications</h2>
              <p className="text-slate-500 mt-2 max-w-lg mx-auto">We adhere to the highest international quality and safety benchmarks.</p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80 hover:opacity-100 transition-opacity">
              <img 
                src="/certificates_banner.png" 
                alt="Our Certificates" 
                className="max-w-full h-auto rounded-lg shadow-sm"
              />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* === PRODUCTS PREVIEW === */}
      <section className="section-pad">
        <div className="wrap">
          <FadeInSection>
            <div className="text-center mb-14">
              <span className="eyebrow">{t('home.products.eyebrow')}</span>
              <div className="rule-c" />
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
                {t('home.products.title')}
              </h2>
              <p className="text-slate-400 max-w-lg mx-auto">
                {t('home.products.subtitle')}
              </p>
            </div>
          </FadeInSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <StaggerItem key={product.name}>
                <ScaleOnHover className="h-full">
                  <Link to={product.link} className="block h-full glass overflow-hidden group cursor-pointer">
                    {/* Image */}
                    <div className={`relative h-52 bg-gradient-to-br ${product.color} overflow-hidden`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a0f]/80 to-transparent" />
                      {/* Badge */}
                      <span className="absolute top-3 right-3 bg-green-500/90 text-white text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
                        {product.badge}
                      </span>
                    </div>
                    {/* Content */}
                    <div className="p-5">
                      <p className="text-green-400 text-xs font-semibold tracking-widest uppercase mb-1">
                        {product.tagline}
                      </p>
                      <h3 className="font-display text-xl font-bold text-white mb-2">{product.name}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">{product.description}</p>
                      <div className="flex items-center gap-1.5 text-green-400 text-sm font-semibold group-hover:gap-2.5 transition-all duration-300">
                        {t('home.products.viewDetails', 'View Details')} <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInSection className="text-center mt-10">
            <Link to="/products" className="btn-ghost">
              {t('home.products.exploreAll', 'Explore All Products')} <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* === GLOBAL REACH === */}
      <section className="section-pad bg-[#0d180d] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <Globe className="w-full h-full text-green-500 scale-150 translate-x-1/4" />
        </div>
        <div className="wrap relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInSection>
              <span className="eyebrow">Global Reach</span>
              <div className="rule" />
              <h2 className="font-display text-4xl font-bold text-white mb-6">Serving Markets Across 6 Continents</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                With a robust supply chain and deep understanding of international compliance, we export premium Gujarat agricultural products to over 30 countries. Our logistics network ensures timely delivery and perfect product integrity.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { region: 'North America', status: 'Major Partner' },
                  { region: 'Europe', status: 'High Compliance' },
                  { region: 'Middle East', status: 'Core Market' },
                  { region: 'South East Asia', status: 'Fast Growing' }
                ].map((item) => (
                  <div key={item.region} className="bg-white/5 border border-white/10 p-4 rounded-xl">
                    <div className="text-white font-bold">{item.region}</div>
                    <div className="text-green-500 text-xs uppercase font-semibold mt-1">{item.status}</div>
                  </div>
                ))}
              </div>
            </FadeInSection>
            
            <FadeInSection delay={0.2}>
              <div className="relative">
                <div className="glass p-8 rounded-2xl border-green-500/20">
                  <div className="flex flex-wrap gap-3">
                    {[
                      '🇺🇸 USA', '🇩🇪 Germany', '🇦🇪 UAE', '🇻🇳 Vietnam', '🇹🇭 Thailand', 
                      '🇲🇾 Malaysia', '🇮🇩 Indonesia', '🇪🇬 Egypt', '🇲🇦 Morocco', '🇯🇵 Japan',
                      '🇨🇳 China', '🇬🇧 UK', '🇫🇷 France', '🇲🇽 Mexico', '🇧🇷 Brazil', 
                      '🇦🇺 Australia', '🇹🇷 Turkey', '🇿🇦 South Africa', '🇸🇦 Saudi Arabia',
                      '🇰🇷 South Korea', '🇨🇦 Canada', '🇮🇹 Italy', '🇪🇸 Spain'
                    ].map((dest) => (
                      <span key={dest} className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-slate-300 font-semibold hover:border-green-500/50 hover:bg-green-500/5 transition-all cursor-default">
                        {dest}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold text-2xl">30+</div>
                      <div className="text-slate-500 text-xs uppercase">Countries Exported</div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-bold text-2xl">500+</div>
                      <div className="text-slate-500 text-xs uppercase">Annual Containers</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* === WHY CHOOSE US === */}
      <section className="section-pad bg-[#0a130a]">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Image side */}
            <FadeInSection>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] glow">
                  <img
                    src="/factory.png"
                    alt="Gujarat Bio Tech processing facility"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-900/30 to-transparent" />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-5 -right-5 glass p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">15+ {t('home.whyUs.years', 'Years')}</div>
                    <div className="text-slate-400 text-xs">{t('home.whyUs.excellence', 'Processing Excellence')}</div>
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* Text side */}
            <FadeInSection delay={0.2}>
              <span className="eyebrow">{t('home.whyUs.eyebrow')}</span>
              <div className="rule" />
              <h2 className="font-display text-4xl font-bold text-white mb-5">
                {t('home.whyUs.title')}
              </h2>
              <p className="text-slate-400 leading-relaxed mb-7">
                {t('home.whyUs.desc')}
              </p>
              <ul className="space-y-3 mb-8">
                {highlights.map((h) => (
                  <li key={h.text} className="flex items-center gap-3">
                    <h.icon className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{h.text}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn-green">
                {t('home.whyUs.learnMore', 'Learn About Us')} <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* === CTA STRIP === */}
      <section className="py-16">
        <div className="wrap">
          <FadeInSection>
            <div
              className="relative rounded-2xl overflow-hidden p-12 text-center"
              style={{
                background: 'linear-gradient(135deg, #14532d 0%, #16a34a 50%, #15803d 100%)',
              }}
            >
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/4" />

              <div className="relative z-10">
                <Package className="w-10 h-10 text-green-200 mx-auto mb-4" />
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
                  {t('home.cta.title')}
                </h2>
                <p className="text-green-100 mb-8 max-w-lg mx-auto">
                  {t('home.cta.subtitle')}
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-white text-green-800 font-bold px-7 py-3.5 rounded-lg hover:bg-green-50 transition-all duration-300 flex items-center gap-2 hover:-translate-y-1 hover:shadow-xl"
                  >
                    {t('home.cta.quote')} <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://wa.me/918866428843?text=Hello%21%20I%27m%20interested%20in%20sourcing%20your%20products."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25d366] text-white font-bold px-7 py-3.5 rounded-lg hover:bg-[#128c7e] transition-all duration-300 flex items-center gap-2 hover:-translate-y-1 hover:shadow-xl"
                  >
                    {t('home.cta.whatsapp')}
                  </a>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
