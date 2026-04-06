import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, Factory, Truck } from 'lucide-react';
import { FadeInSection, StaggerContainer, StaggerItem } from '../components/Animations';

const milestones = [
  { year: '2005', event: 'Founded in Unjha with a focus on local Jeera processing' },
  { year: '2010', event: 'Expanded into Psyllium Husk production and processing' },
  { year: '2015', event: 'Established dedicated export packaging lines' },
  { year: '2020', event: 'Scaled operations to serve Middle East markets' },
  { year: '2024', event: 'Targeting European and North American export markets' },
];

const values = [
  {
    icon: Heart,
    title: 'Integrity',
    desc: 'We never compromise on purity or weight. Our buyers trust that what they order is exactly what they receive.',
  },
  {
    icon: Target,
    title: 'Precision',
    desc: 'From cleaning to grading and packaging — every process is controlled for maximum consistency.',
  },
  {
    icon: Factory,
    title: 'Infrastructure',
    desc: 'Own production units in Unjha give us end-to-end control over quality and delivery timelines.',
  },
  {
    icon: Truck,
    title: 'Reliability',
    desc: 'We honor our commitments. Export orders are fulfilled with documentation compliance and on-time shipment.',
  },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* === PAGE HEADER === */}
      <section className="relative py-20 overflow-hidden bg-[#0a130a]">
        <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a130a]/80 to-[#0a130a]" />
        <div className="wrap relative z-10 text-center">
          <FadeInSection>
            <span className="eyebrow">Our Story</span>
            <div className="rule-c" />
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mt-2 mb-5">
              About Gujarat Bio Tech
            </h1>
            <p className="text-slate-400 max-w-xl mx-auto text-lg">
              A legacy built on purity, crafted in Unjha — the Jeera Capital of the World.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* === OUR STORY === */}
      <section className="section-pad">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeInSection>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                  <img src="/factory.png" alt="Gujarat Bio Tech facility" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a0f]/60 to-transparent" />
                </div>
                {/* Stamp badge */}
                <div
                  className="absolute -top-5 -left-5 w-24 h-24 rounded-full flex flex-col items-center justify-center text-center border-4 border-green-600"
                  style={{ background: 'linear-gradient(135deg, #14532d, #16a34a)' }}
                >
                  <span className="text-white font-display font-bold text-xl leading-none">15+</span>
                  <span className="text-green-200 text-[9px] uppercase tracking-wider">Years</span>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <span className="eyebrow">Who We Are</span>
              <div className="rule" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-5">
                Rooted in Unjha, Reaching the World
              </h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Gujarat Bio Tech Pvt. Ltd. was established in Unjha, Mehsana, Gujarat — the undisputed Jeera capital of India and among the largest spice markets in the world. What started as a local processing unit has grown into a full-fledged export company trusted by international buyers.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                We operate dedicated production and cleaning units for Cumin (Jeera) and Psyllium Husk, along with a Cattle Feed manufacturing line. Every product passes through rigorous quality checks before packaging.
              </p>
              <p className="text-slate-400 leading-relaxed mb-7">
                Our strategic location in Unjha gives us direct access to the finest raw materials — ensuring exceptional flavor profiles, aroma, and purity in every lot.
              </p>
              <Link to="/infrastructure" className="btn-green">
                Explore Our Infrastructure <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* === MISSION & VISION === */}
      <section className="section-pad bg-[#0a130a]">
        <div className="wrap">
          <FadeInSection className="text-center mb-12">
            <span className="eyebrow">Our Direction</span>
            <div className="rule-c" />
            <h2 className="font-display text-4xl font-bold text-white mt-2">
              Mission &amp; Vision
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <FadeInSection delay={0.1}>
              <div className="glass p-8 h-full border-l-4 border-green-500">
                <div className="w-12 h-12 bg-green-500/15 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">Our Mission</h3>
                <p className="text-slate-400 leading-relaxed">
                  To deliver the purest, most consistent agricultural products from the heart of Gujarat to global buyers — by maintaining end-to-end control from sourcing to packaged export, never compromising on integrity, quality, or trust.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="glass p-8 h-full border-l-4 border-amber-500">
                <div className="w-12 h-12 bg-amber-500/15 rounded-xl flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">Our Vision</h3>
                <p className="text-slate-400 leading-relaxed">
                  To be the most trusted name in Indian agro-exports — synonymous with premium quality Psyllium Husk and Cumin in the Middle East, Europe, and North America. A company that global buyers choose first.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* === CORE VALUES === */}
      <section className="section-pad">
        <div className="wrap">
          <FadeInSection className="text-center mb-12">
            <span className="eyebrow">What We Stand For</span>
            <div className="rule-c" />
            <h2 className="font-display text-4xl font-bold text-white mt-2">Core Values</h2>
          </FadeInSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="glass p-6 text-center h-full hover:border-green-500/40 transition-colors duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-green-500/20 group-hover:scale-110">
                    <value.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* === TIMELINE === */}
      <section className="section-pad bg-[#0a130a]">
        <div className="wrap">
          <FadeInSection className="text-center mb-12">
            <span className="eyebrow">Our Journey</span>
            <div className="rule-c" />
            <h2 className="font-display text-4xl font-bold text-white mt-2">Growth Milestones</h2>
          </FadeInSection>
          <div className="max-w-2xl mx-auto">
            {milestones.map((m, i) => (
              <FadeInSection key={m.year} delay={i * 0.1}>
                <div className="flex gap-6 mb-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-400 font-bold text-sm shrink-0">
                      {m.year}
                    </div>
                    {i < milestones.length - 1 && (
                      <div className="w-0.5 bg-gradient-to-b from-green-600/40 to-transparent flex-1 mt-2" />
                    )}
                  </div>
                  <div className="pb-6 pt-2.5">
                    <p className="text-slate-300 leading-relaxed">{m.event}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA === */}
      <section className="py-16">
        <div className="wrap text-center">
          <FadeInSection>
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Partner with Us
            </h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto">
              Join global buyers who trust Gujarat Bio Tech for consistent, high-purity agricultural exports.
            </p>
            <Link to="/contact" className="btn-green">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
