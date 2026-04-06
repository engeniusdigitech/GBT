import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Package } from 'lucide-react';
import { FadeInSection, StaggerContainer, StaggerItem } from '../components/Animations';

const products = [
  {
    id: 'psyllium',
    name: 'Psyllium Husk',
    tagline: 'Nature\'s Premium Dietary Fiber',
    image: '/psyllium.png',
    badge: 'Export Grade',
    badgeColor: 'bg-amber-500',
    accentColor: 'border-amber-500',
    description: `Psyllium husk (isabgol) from Gujarat Bio Tech is processed from certified Plantago ovata seeds cultivated in the farms of North Gujarat. Our dedicated psyllium unit ensures each batch meets stringent international purity standards, making it suitable for pharmaceutical, nutraceutical, and food industry applications worldwide.`,
    useCases: 'Pharmaceutical formulations, dietary supplements, natural laxatives, food fiber enrichment, industrial thickeners.',
    specs: [
      { label: 'Purity', value: '99% min' },
      { label: 'Husk Content', value: '≥98.5%' },
      { label: 'Moisture', value: '≤14%' },
      { label: 'Ash Content', value: '≤4%' },
      { label: 'Swelling Factor', value: '≥40 mL/g' },
      { label: 'Mesh Sizes', value: '10, 30, 40, 60' },
      { label: 'Packaging', value: '25kg / 50kg bags' },
      { label: 'Origin', value: 'Unjha, Gujarat, India' },
    ],
    highlights: [
      'High swelling factor for superior fiber efficacy',
      'Multiple mesh sizes available',
      'Pharmaceutical and food grade',
      'Bulk and retail packaging',
      'Custom labeling for export',
    ],
  },
  {
    id: 'jeera',
    name: 'Cumin (Jeera)',
    tagline: 'Unjha\'s Signature Spice — High Aroma & Essential Oil',
    image: '/jeera.png',
    badge: 'Flagship Product',
    badgeColor: 'bg-green-500',
    accentColor: 'border-green-500',
    description: `Our flagship product — Cumin (Jeera) — is sourced directly from the Unjha mandi, the world's largest cumin trading hub. Gujarat Bio Tech's cumin is known for its superior essential oil content, deep aroma, and consistent coloration. Available as hand-cleaned whole seeds or machined-cleaned processed grades for export.`,
    brand: 'Retail brand: "Manpasand Jeera" — available for domestic and export retail.',
    useCases: 'Spice blends, food processing, essential oil extraction, seasoning mixes, restaurant bulk supply.',
    specs: [
      { label: 'Type', value: 'Whole / Processed / Cleaned' },
      { label: 'Essential Oil', value: '3-4%' },
      { label: 'Moisture', value: '≤11%' },
      { label: 'Purity', value: '98-99%' },
      { label: 'Foreign Matter', value: '≤1%' },
      { label: 'Color', value: 'Bright green-brown' },
      { label: 'Packaging', value: '25kg / 50kg bags, retail packs' },
      { label: 'Origin', value: 'Unjha, Mehsana, Gujarat' },
    ],
    highlights: [
      'Sourced from Unjha — world\'s largest cumin market',
      'High essential oil content (3-4%)',
      'Retail brand "Manpasand" available',
      'Machine-cleaned & hand-picked grades',
      'FSSAI compliant export documentation',
    ],
  },
  {
    id: 'cattle-feed',
    name: 'Cattle Feed',
    tagline: 'Optimum Nutrition for Maximum Livestock Productivity',
    image: '/cattle-feed.png',
    badge: 'Nutrient Rich',
    badgeColor: 'bg-emerald-600',
    accentColor: 'border-emerald-500',
    description: `Gujarat Bio Tech's cattle feed is scientifically formulated using a balanced combination of protein-rich ingredients, grains, and minerals. Manufactured at our dedicated cattle feed unit, this product is designed to enhance the productivity, health, and growth of dairy and farm animals.`,
    useCases: 'Dairy farms, poultry operations, livestock agriculture, animal husbandry units.',
    specs: [
      { label: 'Protein', value: '18-20%' },
      { label: 'Fat', value: '3-4%' },
      { label: 'Fiber (max)', value: '12%' },
      { label: 'Moisture', value: '≤12%' },
      { label: 'Form', value: 'Pellet / Mash' },
      { label: 'Packaging', value: '40kg / 50kg bags' },
      { label: 'Additives', value: 'Minerals, Vitamins' },
      { label: 'Origin', value: 'Unjha, Gujarat, India' },
    ],
    highlights: [
      'Balanced protein and energy formula',
      'Promotes dairy milk yield',
      'No harmful additives',
      'Available in pellet and mash form',
      'Bulk delivery across Gujarat',
    ],
  },
];

export default function Products() {
  const location = useLocation();

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
            <span className="eyebrow">Our Portfolio</span>
            <div className="rule-c" />
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mt-2 mb-5">
              Export-Quality Products
            </h1>
            <p className="text-slate-400 max-w-xl mx-auto text-lg">
              Three world-class product lines — processed, packed, and export-ready from Unjha, Gujarat.
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
                  <span className="text-slate-300 font-medium">Applications: </span>
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
                  Inquire Now <ArrowRight className="w-4 h-4" />
                </Link>
              </FadeInSection>
            </div>

            {/* Spec Table */}
            <FadeInSection delay={0.3} className="mt-10">
              <div className="glass overflow-hidden">
                <div className="px-6 py-4 border-b border-green-900/40">
                  <h3 className="font-display text-lg font-bold text-white">Technical Specifications</h3>
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
            <h2 className="font-display text-3xl font-bold text-white mb-4">Need Custom Quantities?</h2>
            <p className="text-slate-400 mb-7 max-w-md mx-auto">
              We offer custom bulk orders, private label packaging, and export documentation support.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-green">Request a Quote <ArrowRight className="w-4 h-4" /></Link>
              <a
                href="https://wa.me/918866428843?text=I'm interested in your products."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Chat on WhatsApp
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
