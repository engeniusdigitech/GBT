import { Link } from 'react-router-dom';
import { Leaf, MapPin, Phone, Mail, Globe, ArrowRight } from 'lucide-react';

const footerLinks = {
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Infrastructure', to: '/infrastructure' },
    { label: 'Contact', to: '/contact' },
  ],
  Products: [
    { label: 'Psyllium Husk', to: '/products#psyllium' },
    { label: 'Cumin (Jeera)', to: '/products#jeera' },
    { label: 'Cattle Feed', to: '/products#cattle-feed' },
  ],
  Exports: [
    { label: 'Middle East', to: '/contact' },
    { label: 'Europe', to: '/contact' },
    { label: 'North America', to: '/contact' },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#080f08] border-t border-green-950/60 pt-16 pb-8">
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-display font-bold text-white text-lg leading-tight">
                  Gujarat Bio Tech
                </div>
                <div className="text-[10px] text-green-400 tracking-widest uppercase font-medium -mt-0.5">
                  Pvt. Ltd.
                </div>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-xs">
              Purity from Unjha to the World. India's premier Psyllium Husk and Cumin exporter, trusted by global buyers.
            </p>

            {/* Contact Info */}
            <div className="space-y-2.5">
              <a href="tel:+918866428843" className="flex items-center gap-2.5 text-slate-400 hover:text-green-400 text-sm transition-colors group">
                <Phone className="w-4 h-4 text-green-600 group-hover:text-green-400" />
                +91 88664 28843
              </a>
              <a href="tel:+918469919203" className="flex items-center gap-2.5 text-slate-400 hover:text-green-400 text-sm transition-colors group">
                <Phone className="w-4 h-4 text-green-600 group-hover:text-green-400" />
                +91 84699 19203
              </a>
              <a href="mailto:Dharmik.dave@newberry.in" className="flex items-center gap-2.5 text-slate-400 hover:text-green-400 text-sm transition-colors group">
                <Mail className="w-4 h-4 text-green-600 group-hover:text-green-400" />
                Dharmik.dave@newberry.in
              </a>
              <div className="flex items-start gap-2.5 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Survey No. 1283, Unjha-Unava Hwy, Unjha, Mehsana, Gujarat - India</span>
              </div>
            </div>
          </div>

          {/* Navigation columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-slate-400 hover:text-green-400 text-sm transition-colors flex items-center gap-1 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 text-green-500" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="glass p-6 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Globe className="w-6 h-6 text-green-400 flex-shrink-0" />
            <div>
              <p className="text-white font-semibold text-sm">Ready to source globally?</p>
              <p className="text-slate-400 text-xs">Get competitive pricing on bulk exports.</p>
            </div>
          </div>
          <Link to="/contact" className="btn-green text-sm py-2.5 px-5 whitespace-nowrap">
            Get a Free Quote
          </Link>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-green-950/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            © {year} Gujarat Bio Tech Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Unjha, Mehsana, Gujarat, India — Jeera Capital of the World
          </p>
        </div>
      </div>
    </footer>
  );
}
