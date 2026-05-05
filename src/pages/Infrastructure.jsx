import { Link } from 'react-router-dom';
import {
  Factory, Shield, Microscope, Settings, Truck, ArrowRight, CheckCircle2
} from 'lucide-react';
import { FadeInSection, StaggerContainer, StaggerItem } from '../components/Animations';
import { useTranslation } from 'react-i18next';

export default function Infrastructure() {
  const { t } = useTranslation();

  const facilities = [
    {
      icon: Factory,
      title: t('infra.units.jeera.title', 'Jeera Processing Unit'),
      desc: t('infra.units.jeera.desc'),
      features: [
        t('infra.features.cleaning', 'Multi-stage cleaning'),
        t('infra.features.sorting', 'Optical sorting'),
        t('infra.features.storage', 'Moisture-controlled storage'),
        t('infra.features.tracking', 'Batch tracking'),
      ],
    },
    {
      icon: Settings,
      title: t('infra.units.psyllium.title', 'Psyllium Husk Unit'),
      desc: t('infra.units.psyllium.desc'),
      features: [
        t('infra.features.extraction', 'Husk separation lines'),
        t('infra.features.sieving', 'Multi-mesh sieving'),
        t('infra.features.dustfree', 'Dust-free packaging'),
        t('infra.features.lab', 'Laboratory grade testing'),
      ],
    },
    {
      icon: Settings,
      title: t('infra.units.psylliumPowder.title', 'Psyllium Milling Unit'),
      desc: t('infra.units.psylliumPowder.desc'),
      features: [
        t('infra.features.milling', 'Precision milling machines'),
        t('infra.features.blending', 'High-speed blender units'),
        t('infra.features.dosing', 'Precision mineral dosing'),
        t('infra.features.auto', 'Automated vacuum bagging'),
      ],
    },
    {
      icon: Truck,
      title: t('infra.units.warehouse.title', 'Warehousing & Dispatch'),
      desc: t('infra.units.warehouse.desc'),
      features: [
        t('infra.features.temp', 'Temperature controlled'),
        t('infra.features.fifo', 'FIFO management'),
        t('infra.features.loading', 'Export container loading'),
        t('infra.features.support', '24/7 dispatch support'),
      ],
    },
  ];

  const qcSteps = [
    { step: '01', title: t('infra.qc.s1.title'), desc: t('infra.qc.s1.desc') },
    { step: '02', title: t('infra.qc.s2.title'), desc: t('infra.qc.s2.desc') },
    { step: '03', title: t('infra.qc.s3.title'), desc: t('infra.qc.s3.desc') },
    { step: '04', title: t('infra.qc.s4.title'), desc: t('infra.qc.s4.desc') },
    { step: '05', title: t('infra.qc.s5.title'), desc: t('infra.qc.s5.desc') },
  ];

  return (
    <div className="pt-20">
      {/* === PAGE HEADER === */}
      <section className="relative py-20 overflow-hidden bg-[#0a130a]">
        <div className="absolute inset-0 bg-[url('/factory.png')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a130a]/90 to-[#0a130a]" />
        <div className="wrap relative z-10 text-center">
          <FadeInSection>
            <span className="eyebrow">{t('infra.header.eyebrow')}</span>
            <div className="rule-c" />
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mt-2 mb-5">
              {t('infra.header.title')}
            </h1>
            <p className="text-slate-400 max-w-xl mx-auto text-lg">
              {t('infra.header.subtitle')}
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
              <span className="eyebrow">{t('infra.base.eyebrow')}</span>
              <div className="rule" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-5">
                {t('infra.base.title')}
              </h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                {t('infra.base.desc1')}
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                {t('infra.base.desc2')}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: t('infra.stats.units'), value: '3' },
                  { label: t('infra.stats.capacity'), value: t('infra.stats.capacityVal') },
                  { label: t('infra.stats.lab'), value: t('infra.stats.labVal') },
                  { label: t('infra.stats.dispatch'), value: t('infra.stats.dispatchVal') },
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
            <span className="eyebrow">{t('about.values.infrastructure')}</span>
            <div className="rule-c" />
            <h2 className="font-display text-3xl font-bold text-white mt-2">
              {t('infra.units.header')}
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
            <span className="eyebrow">{t('infra.qc.eyebrow')}</span>
            <div className="rule-c" />
            <h2 className="font-display text-4xl font-bold text-white mt-2">
              {t('infra.qc.titleLong')}
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto mt-3">
              {t('infra.qc.subtitle')}
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
              {t('infra.cta.title')}
            </h2>
            <p className="text-slate-400 mb-7 max-w-md mx-auto">
              {t('infra.cta.subtitle')}
            </p>
            <Link to="/contact" className="btn-green">
              {t('infra.cta.button')} <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
