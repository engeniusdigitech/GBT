import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, Factory, Truck } from 'lucide-react';
import { FadeInSection, StaggerContainer, StaggerItem } from '../components/Animations';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  const milestones = [
    { year: '2005', event: t('about.milestones.2005', 'Founded in Unjha with a focus on local Jeera processing') },
    { year: '2010', event: t('about.milestones.2010', 'Expanded into Psyllium Husk production and processing') },
    { year: '2015', event: t('about.milestones.2015', 'Established dedicated export packaging lines') },
    { year: '2020', event: t('about.milestones.2020', 'Scaled operations to serve Middle East markets') },
    { year: '2024', event: t('about.milestones.2024', 'Targeting European and North American export markets') },
  ];

  const values = [
    {
      icon: Heart,
      title: t('about.values.integrity'),
      desc: t('about.values.integrityDesc'),
    },
    {
      icon: Target,
      title: t('about.values.precision'),
      desc: t('about.values.precisionDesc'),
    },
    {
      icon: Factory,
      title: t('about.values.infrastructure'),
      desc: t('about.values.infrastructureDesc'),
    },
    {
      icon: Truck,
      title: t('about.values.reliability'),
      desc: t('about.values.reliabilityDesc'),
    },
  ];

  return (
    <div className="pt-20">
      {/* === PAGE HEADER === */}
      <section className="relative py-20 overflow-hidden bg-[#0a130a]">
        <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a130a]/80 to-[#0a130a]" />
        <div className="wrap relative z-10 text-center">
          <FadeInSection>
            <span className="eyebrow">{t('about.header.eyebrow')}</span>
            <div className="rule-c" />
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mt-2 mb-5">
              {t('about.header.title')}
            </h1>
            <p className="text-slate-400 max-w-xl mx-auto text-lg">
              {t('about.header.subtitle')}
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
                  <span className="text-green-200 text-[9px] uppercase tracking-wider">{t('home.whyUs.years')}</span>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <span className="eyebrow">{t('about.story.eyebrow')}</span>
              <div className="rule" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-5">
                {t('about.story.title')}
              </h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                {t('about.story.desc1')}
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                {t('about.story.desc2')}
              </p>
              <p className="text-slate-400 leading-relaxed mb-7">
                {t('about.story.desc3')}
              </p>
              <Link to="/infrastructure" className="btn-green">
                {t('about.story.infrastructureCta')} <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* === MISSION & VISION === */}
      <section className="section-pad bg-[#0a130a]">
        <div className="wrap">
          <FadeInSection className="text-center mb-12">
            <span className="eyebrow">{t('about.mission.eyebrow')}</span>
            <div className="rule-c" />
            <h2 className="font-display text-4xl font-bold text-white mt-2">
              {t('about.mission.title')}
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <FadeInSection delay={0.1}>
              <div className="glass p-8 h-full border-l-4 border-green-500">
                <div className="w-12 h-12 bg-green-500/15 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">{t('about.mission.missionTitle')}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {t('about.mission.missionDesc')}
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="glass p-8 h-full border-l-4 border-amber-500">
                <div className="w-12 h-12 bg-amber-500/15 rounded-xl flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">{t('about.mission.visionTitle')}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {t('about.mission.visionDesc')}
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
            <span className="eyebrow">{t('about.values.eyebrow')}</span>
            <div className="rule-c" />
            <h2 className="font-display text-4xl font-bold text-white mt-2">{t('about.values.title')}</h2>
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
            <span className="eyebrow">{t('about.story.eyebrow')}</span>
            <div className="rule-c" />
            <h2 className="font-display text-4xl font-bold text-white mt-2">{t('about.mission.title')}</h2>
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
              {t('home.cta.title')}
            </h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto">
              {t('home.cta.subtitle')}
            </p>
            <Link to="/contact" className="btn-green">
              {t('nav.contact')} <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
