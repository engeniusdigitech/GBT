import { Link } from 'react-router-dom';
import {
  Factory, Shield, Microscope, Settings, Truck, ArrowRight, CheckCircle2
} from 'lucide-react';
import { FadeInSection, StaggerContainer, StaggerItem } from '../components/Animations';

const facilities = [
  {
    icon: Factory,
    title: 'Jeera Processing Unit',
    desc: 'Dedicated facility equipped with industrial cleaning and grading machines. Handles thousands of kilograms daily with full traceability from raw to packed.',
    features: ['Multi-stage cleaning', 'Optical sorting available', 'Moisture-controlled storage', 'Batch tracking'],
  },
  {
    icon: Settings,
    title: 'Psyllium Husk Unit',
    desc: 'Specialized processing line for psyllium husk extraction and grading. Capable of producing multiple mesh sizes in pharmaceutical and food grades.',
    features: ['Husk separation lines', 'Multi-mesh sieving', 'Dust-free packaging area', 'Laboratory grade testing'],
  },
  {
    icon: Factory,
    title: 'Cattle Feed Plant',
    desc: 'Fully equipped feed manufacturing unit producing pellets and mash feed. Scientifically formulated for optimal livestock nutrition.',
    features: ['Pelleting machines', 'Mixer and blender units', 'Mineral supplement dosing', 'Automated bagging'],
  },
  {
    icon: Truck,
    title: 'Warehousing & Dispatch',
    desc: 'Dry, pest-controlled warehouse for finished goods storage. Capable of handling bulk and palletized export shipments.',
    features: ['Temperature controlled storage', 'FIFO inventory management', 'Export container loading', '24/7 dispatch support'],
  },
];

const qcSteps = [
  { step: '01', title: 'Raw Material Inspection', desc: 'Each incoming batch is inspected for moisture, foreign matter, and physical quality before acceptance.' },
  { step: '02', title: 'In-Process Monitoring', desc: 'Continuous monitoring during cleaning, grading, and processing to ensure consistency at every stage.' },
  { step: '03', title: 'Lab Analysis', desc: 'Samples from every production batch are tested for purity, moisture, essential oil content, and microbial count.' },
  { step: '04', title: 'Packaging Check', desc: 'Final packed lots are weighed, sealed, and labeled with batch codes before clearance for dispatch.' },
  { step: '05', title: 'Export Documentation', desc: 'Complete export documentation including Certificate of Analysis, phytosanitary, and origin certificates.' },
];

export default function Infrastructure() {
  return (
    <div className="pt-20">
      {/* === PAGE HEADER === */}
      <section className="relative py-20 overflow-hidden bg-[#0a130a]">
        <div className="absolute inset-0 bg-[url('/factory.png')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a130a]/90 to-[#0a130a]" />
        <div className="wrap relative z-10 text-center">
          <FadeInSection>
            <span className="eyebrow">Our Facilities</span>
            <div className="rule-c" />
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mt-2 mb-5">
              World-Class Infrastructure
            </h1>
            <p className="text-slate-400 max-w-xl mx-auto text-lg">
              Owned production units in Unjha, Gujarat — built for scale, consistency, and export compliance.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* === FACTORY SHOWCASE === */}
      <section className="section-pad">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <FadeInSection>
              <div className="rounded-2xl overflow-hidden aspect-video relative">
                <img
                  src="/factory.png"
                  alt="Gujarat Bio Tech processing plant"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a0f]/60 to-transparent" />
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <span className="eyebrow">Our Unjha Base</span>
              <div className="rule" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-5">
                Fully Owned, Fully Controlled
              </h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Gujarat Bio Tech owns and operates all its production facilities in Unjha, Mehsana. This means no outsourcing, no dependency on third parties, and complete control over quality, timelines, and packaging standards.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                Our facilities are strategically located at Survey Number 1283, Unjha-Unava Highway — close to the Unjha APMC Mandi for direct, uninterrupted raw material access.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Production Units', value: '3' },
                  { label: 'Processing Capacity', value: 'High Volume Daily' },
                  { label: 'QC Lab', value: 'In-House' },
                  { label: 'Dispatch', value: 'Direct Export' },
                ].map((item) => (
                  <div key={item.label} className="glass p-4">
                    <p className="text-green-400 font-bold text-lg">{item.value}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{item.label}</p>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>

          {/* Facility Cards */}
          <FadeInSection className="text-center mb-10">
            <span className="eyebrow">Production Units</span>
            <div className="rule-c" />
            <h2 className="font-display text-3xl font-bold text-white mt-2">
              Our Dedicated Processing Lines
            </h2>
          </FadeInSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {facilities.map((facility) => (
              <StaggerItem key={facility.title}>
                <div className="glass p-6 h-full hover:border-green-500/40 transition-colors duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-all duration-300">
                    <facility.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">{facility.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{facility.desc}</p>
                  <ul className="space-y-1.5">
                    {facility.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* === QUALITY CONTROL === */}
      <section className="section-pad bg-[#0a130a]">
        <div className="wrap">
          <FadeInSection className="text-center mb-12">
            <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-7 h-7 text-green-400" />
            </div>
            <span className="eyebrow">Quality First</span>
            <div className="rule-c" />
            <h2 className="font-display text-4xl font-bold text-white mt-2">
              5-Stage Quality Control
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto mt-3">
              Every lot passes through a rigorous 5-step quality control process before it's cleared for export.
            </p>
          </FadeInSection>

          <div className="max-w-3xl mx-auto">
            {qcSteps.map((step, i) => (
              <FadeInSection key={step.step} delay={i * 0.1}>
                <div className="flex gap-6 mb-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl border-2 border-green-600/40 bg-green-500/10 flex items-center justify-center text-green-400 font-bold font-display text-sm shrink-0 group-hover:border-green-500 group-hover:bg-green-500/20 transition-all duration-300">
                      {step.step}
                    </div>
                    {i < qcSteps.length - 1 && (
                      <div className="w-0.5 bg-gradient-to-b from-green-700/50 to-transparent flex-1 mt-2" />
                    )}
                  </div>
                  <div className="glass p-5 flex-1 mb-3 group-hover:border-green-500/30 transition-colors duration-300">
                    <h3 className="text-white font-semibold mb-1">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA === */}
      <section className="py-14">
        <div className="wrap text-center">
          <FadeInSection>
            <Microscope className="w-10 h-10 text-green-400 mx-auto mb-4" />
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Interested in a Product Sample?
            </h2>
            <p className="text-slate-400 mb-7 max-w-md mx-auto">
              We offer lab-tested product samples with Certificate of Analysis for serious buyers.
            </p>
            <Link to="/contact" className="btn-green">
              Request a Sample <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
