import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Package } from 'lucide-react';
import { FadeInSection, StaggerContainer, StaggerItem } from '../components/Animations';
import { useTranslation } from 'react-i18next';

export default function Products() {
  const { t } = useTranslation();
  const location = useLocation();

  const products = [
    {
      id: 'psyllium',
      name: 'Psyllium Husk',
      tagline: t('home.products.psyllium.tagline', 'Nature\'s Premium Dietary Fiber'),
      image: '/psyllium.png',
      badge: t('home.products.psyllium.badge', 'Export Grade'),
      badgeColor: 'bg-amber-500',
      accentColor: 'border-amber-500',
      description: t('products.psyllium.desc', 'Psyllium husk from Gujarat Bio Tech is processed from certified Plantago ovata seeds.'),
      useCases: t('products.psyllium.useCases', 'Pharmaceutical formulations, dietary supplements, food fiber enrichment.'),
      specs: [
        { label: t('products.labels.purity', 'Purity'), value: '99% min' },
        { label: t('products.labels.moisture', 'Moisture'), value: '≤14%' },
        { label: t('products.labels.packaging', 'Packaging'), value: '25kg / 50kg bags' },
        { label: t('products.labels.origin', 'Origin'), value: 'Unjha, Gujarat, India' },
      ],
      highlights: [
        t('products.psyllium.h1', 'High swelling factor for superior fiber efficacy'),
        t('products.psyllium.h2', 'Multiple mesh sizes available'),
        t('products.psyllium.h3', 'Pharmaceutical and food grade'),
      ],
    },
    {
      id: 'jeera',
      name: 'Cumin (Jeera)',
      tagline: t('home.products.jeera.tagline', 'Unjha\'s Signature Spice'),
      image: '/jeera.png',
      badge: t('home.products.jeera.badge', 'Flagship Product'),
      badgeColor: 'bg-green-500',
      accentColor: 'border-green-500',
      description: t('products.jeera.desc', 'Our flagship product sourced directly from the Unjha mandi.'),
      brand: t('products.jeera.brand', 'Retail brand: "Manpasand Jeera"'),
      useCases: t('products.jeera.useCases', 'Spice blends, food processing, seasoning mixes.'),
      specs: [
        { label: t('products.labels.type', 'Type'), value: 'Whole / Processed' },
        { label: t('products.labels.oil', 'Essential Oil'), value: '3-4%' },
        { label: t('products.labels.purity', 'Purity'), value: '98-99%' },
        { label: t('products.labels.packaging', 'Packaging'), value: 'Retail & Bulk' },
      ],
      highlights: [
        t('products.jeera.h1', 'Sourced from Unjha — world\'s largest cumin market'),
        t('products.jeera.h2', 'High essential oil content (3-4%)'),
        t('products.jeera.h3', 'Machine-cleaned & hand-picked grades'),
      ],
    },
    {
      id: 'psyllium-powder',
      name: 'Psyllium Husk Powder',
      tagline: t('home.products.psylliumPowder.tagline', 'Pure Fiber Power'),
      image: '/psyllium-powder.png',
      badge: t('home.products.psylliumPowder.badge', 'Premium Grade'),
      badgeColor: 'bg-emerald-600',
      accentColor: 'border-emerald-500',
      description: t('products.psylliumPowder.desc', 'Our Psyllium Husk Powder is milled to perfection, offering high purity and rapid dissolution.'),
      useCases: t('products.psylliumPowder.useCases', 'Health drinks, baking applications, dietary fiber supplements.'),
      specs: [
        { label: t('products.labels.purity', 'Purity'), value: '85% to 99%' },
        { label: t('products.labels.moisture', 'Moisture'), value: '≤12%' },
        { label: t('products.labels.packaging', 'Packaging'), value: '25kg Paper Bags / HDPE' },
        { label: t('products.labels.origin', 'Origin'), value: 'Unjha, Gujarat, India' },
      ],
      highlights: [
        t('products.psylliumPowder.h1', 'Ultra-fine mesh for smooth texture'),
        t('products.psylliumPowder.h2', 'Rapid hydration and swelling'),
        t('products.psylliumPowder.h3', 'Pharmaceutical and food grade available'),
      ],
    },
  ];

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [location]);

  return (
    <div className="pt-20">
      {/* === PAGE HEADER === */}
      <section className="relative py-20 overflow-hidden bg-[#0a130a]">
        <div className="absolute inset-0 bg-[url('/jeera.png')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a130a]/90 to-[#0a130a]" />
        <div className="wrap relative z-10 text-center">
          <FadeInSection>
            <span className="eyebrow">{t('products.header.eyebrow')}</span>
            <div className="rule-c" />
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mt-2 mb-5">
              {t('products.header.title')}
            </h1>
            <p className="text-slate-400 max-w-xl mx-auto text-lg">
              {t('products.header.subtitle')}
            </p>
          </FadeInSection>

          {/* Quick nav */}
          <FadeInSection delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {products.map((p) => (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  className="bg-white/5 border border-white/10 hover:border-green-500/40 hover:bg-green-500/10 text-slate-300 hover:text-green-400 transition-all duration-300 text-sm px-4 py-2 rounded-full font-medium"
                >
                  {p.name}
                </a>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* === PRODUCT SECTIONS === */}
      {products.map((product, index) => (
        <section
          key={product.id}
          id={product.id}
          className={`section-pad ${index % 2 !== 0 ? 'bg-[#0a130a]' : ''}`}
        >
          <div className="wrap">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image */}
              <FadeInSection className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className={`relative rounded-2xl overflow-hidden aspect-[4/3] border-2 ${product.accentColor}/30`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a0f]/70 to-transparent" />
                  <span className={`absolute top-4 left-4 ${product.badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-full`}>
                    {product.badge}
                  </span>
                </div>
              </FadeInSection>

              {/* Content */}
              <FadeInSection delay={0.2} className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                <span className="eyebrow">{product.tagline}</span>
                <div className="rule" />
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
                  {product.name}
                </h2>
                <p className="text-slate-400 leading-relaxed mb-4">{product.description}</p>
                {product.brand && (
                  <div className="glass p-3 mb-4 flex items-center gap-2.5">
                    <Package className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <p className="text-slate-300 text-sm">{product.brand}</p>
                  </div>
                )}
                <p className="text-slate-500 text-sm mb-5">
                  <span className="text-slate-300 font-medium">{t('products.labels.applications', 'Applications')}: </span>
                  {product.useCases}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {product.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="btn-green">
                  {t('products.inquire')} <ArrowRight className="w-4 h-4" />
                </Link>
              </FadeInSection>
            </div>

            {/* Spec Table */}
            <FadeInSection delay={0.3} className="mt-10">
              <div className="glass overflow-hidden">
                <div className="px-6 py-4 border-b border-green-900/40">
                  <h3 className="font-display text-lg font-bold text-white">{t('products.specs')}</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4">
                  {product.specs.map((spec, i) => (
                    <div
                      key={spec.label}
                      className={`px-5 py-4 ${i % 4 !== 3 ? 'border-r border-green-900/30' : ''} ${i >= 4 ? 'border-t border-green-900/30' : ''}`}
                    >
                      <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">{spec.label}</p>
                      <p className="text-white font-semibold text-sm">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>
      ))}

      {/* === CTA === */}
      <section className="py-14 bg-[#0a130a]">
        <div className="wrap text-center">
          <FadeInSection>
            <h2 className="font-display text-3xl font-bold text-white mb-4">{t('products.custom.title')}</h2>
            <p className="text-slate-400 mb-7 max-w-md mx-auto">
              {t('products.custom.desc')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-green">{t('products.custom.quote')} <ArrowRight className="w-4 h-4" /></Link>
              <a
                href="https://wa.me/918866428843?text=I'm interested in your products."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                {t('products.custom.whatsapp')}
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
