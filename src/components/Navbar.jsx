import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf, Mail, Phone, MapPin, Globe, ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Infrastructure', to: '/infrastructure' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const currentLang = i18n.language?.toUpperCase() || 'EN';
  const langDropdownRef = useRef(null);
  const location = useLocation();

  const navLinks = [
    { label: t('nav.home'), to: '/' },
    { label: t('nav.about'), to: '/about' },
    { label: t('nav.products'), to: '/products' },
    { label: t('nav.infrastructure'), to: '/infrastructure' },
    { label: t('nav.contact'), to: '/contact' },
  ];

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'ES', name: 'Español' },
    { code: 'AR', name: 'العربية' },
    { code: 'HI', name: 'हिन्दी' },
    { code: 'ZH', name: '中文' },
    { code: 'FR', name: 'Français' },
    { code: 'DE', name: 'Deutsch' },
    { code: 'RU', name: 'Русский' },
    { code: 'JA', name: '日本語' },
    { code: 'KO', name: '한국어' },
    { code: 'VI', name: 'Tiếng Việt' },
    { code: 'TH', name: 'ไทย' }
  ];

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    setLangOpen(false);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isActive = (to) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
        {/* === TOP BAR (Info Strip) === */}
        <div 
          className={`transition-all duration-500 overflow-hidden ${
            scrolled ? 'h-0 opacity-0' : 'h-10 opacity-100 bg-[#1a2e1a] border-b border-green-900/50'
          }`}
        >
          <div className="wrap h-full flex items-center justify-between text-xs text-slate-300 font-medium">
            <div className="flex items-center gap-6">
              <a href="mailto:marketing@gujaratbiotech.com" className="flex items-center gap-2 hover:text-green-400 transition-colors">
                <Mail className="w-3.5 h-3.5" />
                <span>marketing@gujaratbiotech.com</span>
              </a>
              <a href="mailto:info@gujaratbiotech.com" className="hidden sm:flex items-center gap-2 hover:text-green-400 transition-colors border-l border-green-900/50 pl-6">
                <Mail className="w-3.5 h-3.5" />
                <span>info@gujaratbiotech.com</span>
              </a>
            </div>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>Unjha, Gujarat</span>
              </div>
              <a href="tel:+918866428843" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors md:border-l md:border-green-900/50 md:pl-6">
                <Phone className="w-3.5 h-3.5" />
                <span>+91 88664 28843</span>
              </a>
            </div>
          </div>
        </div>

        {/* === MAIN NAVBAR === */}
        <div
          className={`transition-all duration-500 ${
            scrolled
              ? 'bg-[#0f1a0f]/90 backdrop-blur-xl border-b border-green-900/40 shadow-xl shadow-black/40 py-2'
              : 'bg-gradient-to-b from-[#0f1a0f]/80 to-transparent py-4'
          }`}
        >
          <nav className="wrap flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 xl:gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center shadow-lg shadow-green-900/50 transition-transform duration-300 group-hover:scale-110">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-display font-bold text-white text-lg xl:text-xl leading-tight tracking-wide">
                  Gujarat Bio Tech
                </div>
                <div className="text-[10px] xl:text-[11px] text-green-400 tracking-[0.25em] uppercase font-bold -mt-0.5">
                  Pvt. Ltd.
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`px-4 xl:px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 relative group overflow-hidden ${
                      isActive(link.to)
                        ? 'text-white'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {isActive(link.to) && (
                      <motion.div
                        layoutId="nav-bg"
                        className="absolute inset-0 bg-green-500/15 border border-green-500/20 rounded-lg z-0"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex items-center gap-3 xl:gap-4">
              {/* Language Dropdown (Desktop & Mobile) */}
              <div className="relative" ref={langDropdownRef}>
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors duration-200 px-2 py-2"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-semibold">{currentLang}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-full mt-2 w-40 bg-[#1a2e1a] border border-green-900/50 rounded-xl shadow-xl overflow-hidden z-50 max-h-[60vh] overflow-y-auto scrollbar-hide"
                    >
                      <div className="flex flex-col py-1">
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className={`flex items-center justify-between px-4 py-2.5 text-sm transition-colors duration-200 ${
                              currentLang.startsWith(lang.code)
                                ? 'bg-green-500/10 text-green-400'
                                : 'text-slate-300 hover:bg-white/5 hover:text-white'
                            }`}
                          >
                            <span>{lang.name}</span>
                            {currentLang.startsWith(lang.code) && <Check className="w-4 h-4" />}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Desktop-only CTAs */}
              <div className="hidden lg:flex items-center gap-3 xl:gap-4">
                <a 
                  href="mailto:marketing@gujaratbiotech.com" 
                  className="btn-ghost !px-4 !py-2.5 !text-sm border-white/20 text-white hover:border-green-500 hover:text-green-400"
                >
                  <Mail className="w-4 h-4" /> {t('nav.emailUs')}
                </a>
                <Link
                  to="/contact"
                  className="btn-green !text-sm !py-2.5 !px-5 shadow-lg shadow-green-600/20"
                >
                  {t('nav.requestQuote')}
                </Link>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-green-500/50"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-[#0f1a0f]/80 backdrop-blur-md"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="absolute top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[#1a2e1a] border-l border-green-900/50 shadow-2xl flex flex-col"
            >
              <div className="p-6 pb-4 border-b border-green-900/40 flex items-center justify-between">
                <div className="font-display font-bold text-white text-lg">Menu</div>
                <button 
                  onClick={() => setMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <ul className="flex flex-col gap-3">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.to}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.1 }}
                    >
                      <Link
                        to={link.to}
                        className={`block px-5 py-3.5 rounded-xl text-base font-semibold transition-all duration-200 border ${
                          isActive(link.to)
                            ? 'text-green-400 bg-green-500/10 border-green-500/30'
                            : 'text-slate-300 border-transparent hover:text-white hover:bg-white/5 hover:border-white/10'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 space-y-4"
                >
                  <div className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-4">Connect Directly</div>
                  <a href="mailto:marketing@gujaratbiotech.com" className="btn-ghost w-full justify-center !py-3 !text-sm flex items-center gap-2">
                    <Mail className="w-4 h-4" /> {t('nav.emailUs')}
                  </a>
                  <Link to="/contact" className="btn-green w-full justify-center !py-3 !text-sm">
                    {t('nav.requestQuote')}
                  </Link>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-10 pt-6 border-t border-green-900/40 text-sm text-slate-400 text-center"
                >
                  <p>Unjha, Gujarat, India</p>
                  <a href="tel:+918866428843" className="block text-green-400 mt-2 font-medium">+91 88664 28843</a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
