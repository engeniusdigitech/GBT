import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'EN',
    resources: {
      EN: {
        translation: {
          nav: {
            home: 'Home',
            about: 'About',
            products: 'Products',
            infrastructure: 'Infrastructure',
            contact: 'Contact',
            requestQuote: 'Request Quote',
            emailUs: 'Email Us'
          },
          home: {
            hero: {
              tag: 'Premium Agro-Exports from India',
              title: 'Purity from Unjha',
              titleAccent: 'to the World',
              subtitle: 'Gujarat Bio Tech Pvt. Ltd. — a premier processor and exporter of Psyllium Husk, Psyllium Husk Powder, and Cumin (Jeera). Serving international markets with uncompromising quality.',
              ctaPrimary: 'Request a Quote',
              ctaSecondary: 'View Products',
              exportingTo: 'Exporting to'
            },
            stats: {
              purity: 'Purity Grade',
              markets: 'Export Markets',
              tested: 'Quality Tested',
              experience: 'Years Experience'
            },
            products: {
              eyebrow: 'Our Products',
              title: 'Export-Quality Agricultural Goods',
              subtitle: 'Processed at our own facilities in Unjha with stringent quality checks at every step.',
              viewDetails: 'View Details',
              exploreAll: 'Explore All Products',
              psyllium: { tagline: "Nature's Premium Fiber", desc: 'Export-grade psyllium husk with very high fiber content.', badge: 'High Fiber' },
              psylliumPowder: { tagline: 'Pure Fiber Power', desc: 'Fine-mesh psyllium powder for easy mixing and rapid efficacy.', badge: 'Pure Powder' },
              jeera: { tagline: "Unjha's Signature Spice", desc: 'Flagship product with exceptional aroma and essential oil.', badge: 'Flagship' }
            },
            whyUs: {
              eyebrow: 'Why Choose Us',
              title: 'Trusted by Global Buyers for Unmatched Purity',
              desc: 'From farm sourcing in Unjha to international packaging — we control every link in the supply chain to deliver consistent, high-purity products.',
              years: 'Years',
              excellence: 'Processing Excellence',
              learnMore: 'Learn About Us',
              highlights: {
                supply: 'End-to-end supply chain from farm to packaging',
                unjha: 'Own processing units in Unjha, Gujarat',
                quality: 'Strict quality control at every stage',
                bulk: 'Bulk export packaging available',
                certified: 'Certified high-purity standards'
              }
            },
            cta: {
              title: "Ready to Source from India's Best?",
              subtitle: 'Contact us for competitive bulk pricing, product samples, and export documentation.',
              quote: 'Get a Free Quote',
              whatsapp: 'WhatsApp Us'
            }
          },
          about: {
            header: {
              eyebrow: 'Our Story',
              title: 'About Gujarat Bio Tech',
              subtitle: 'A legacy built on purity, crafted in Unjha, the hub of premium Indian spices.'
            },
            story: {
              eyebrow: 'Who We Are',
              title: 'Rooted in Unjha, Reaching the World',
              desc1: 'Gujarat Bio Tech Pvt. Ltd. was established in Unjha, Mehsana, Gujarat — the undisputed Jeera capital of India.',
              desc2: 'We operate dedicated production and cleaning units for Cumin (Jeera), Psyllium Husk, and Psyllium Husk Powder.',
              desc3: 'Our strategic location in Unjha gives us direct access to the finest raw materials.',
              infrastructureCta: 'Explore Our Infrastructure'
            },
            mission: {
              eyebrow: 'Our Direction',
              title: 'Mission & Vision',
              missionTitle: 'Our Mission',
              missionDesc: 'To deliver the purest, most consistent agricultural products from the heart of Gujarat to global buyers.',
              visionTitle: 'Our Vision',
              visionDesc: 'To be the most trusted name in Indian agro-exports worldwide.'
            },
            values: {
              eyebrow: 'Our Values',
              title: 'Core Values',
              integrity: 'Integrity',
              integrityDesc: 'We never compromise on purity or weight.',
              precision: 'Precision',
              precisionDesc: 'Every process is controlled for maximum consistency.',
              infrastructure: 'Infrastructure',
              infrastructureDesc: 'Own production units give us end-to-end control.',
              reliability: 'Reliability',
              reliabilityDesc: 'We honor our commitments and documentation compliance.'
            }
          },
          products: {
            header: {
              eyebrow: 'Our Portfolio',
              title: 'Export-Quality Products',
              subtitle: 'Three world-class product lines from the heart of Gujarat.'
            },
            psyllium: {
              desc: 'Psyllium husk from Gujarat Bio Tech is processed from certified Plantago ovata seeds.',
              useCases: 'Pharmaceutical formulations, dietary supplements, food fiber enrichment.',
              h1: 'High swelling factor for superior fiber efficacy',
              h2: 'Multiple mesh sizes available',
              h3: 'Pharmaceutical and food grade'
            },
            jeera: {
              desc: 'Our flagship product — Cumin (Jeera) — is sourced directly from the Unjha mandi.',
              brand: 'Retail brand: "Manpasand Jeera" — available for domestic and export retail.',
              useCases: 'Spice blends, food processing, seasoning mixes.',
              h1: "Sourced from Unjha — world's largest cumin market",
              h2: 'High essential oil content (3-4%)',
              h3: 'Machine-cleaned & hand-picked grades'
            },
            psylliumPowder: {
              desc: 'Our Psyllium Husk Powder is milled to perfection, offering high purity and rapid dissolution.',
              useCases: 'Health drinks, baking applications, dietary fiber supplements.',
              h1: 'Ultra-fine mesh for smooth texture',
              h2: 'Rapid hydration and swelling',
              h3: 'Available in various purity grades (85% to 99%)'
            },
            labels: {
              purity: 'Purity',
              moisture: 'Moisture',
              packaging: 'Packaging',
              origin: 'Origin',
              type: 'Type',
              oil: 'Essential Oil',
              protein: 'Protein',
              fat: 'Fat',
              form: 'Form',
              applications: 'Applications'
            },
            specs: 'Technical Specifications',
            inquire: 'Inquire Now',
            custom: {
              title: 'Need Custom Quantities?',
              desc: 'We offer custom bulk orders, private label packaging, and support.',
              quote: 'Request a Quote',
              whatsapp: 'Chat on WhatsApp'
            }
          },
          infra: {
            header: { eyebrow: 'Our Facilities', title: 'World-Class Infrastructure', subtitle: 'Owned production units in Unjha, Gujarat.' },
            base: { eyebrow: 'Our Unjha Base', title: 'Fully Owned, Fully Controlled', desc1: 'We own and operate all production facilities in Unjha.', desc2: 'Strategically located for direct APMC Mandi access.' },
            stats: { units: 'Production Units', capacity: 'Processing Capacity', capacityVal: 'High Volume', lab: 'QC Lab', labVal: 'In-House', dispatch: 'Dispatch', dispatchVal: 'Direct Export' },
            units: {
              header: 'Our Dedicated Processing Lines',
              jeera: { title: 'Jeera Processing Unit', desc: 'Equipped with industrial cleaning and grading machines.' },
              psyllium: { title: 'Psyllium Husk Unit', desc: 'Extraction and grading for multiple mesh sizes.' },
              psylliumPowder: { title: 'Psyllium Milling Unit', desc: 'Advanced milling for consistent particle size and purity.' },
              warehouse: { title: 'Warehousing & Dispatch', desc: 'Pest-controlled warehouse for bulk export shipments.' }
            },
            features: { cleaning: 'Multi-stage cleaning', sorting: 'Optical sorting', storage: 'Moisture-controlled', tracking: 'Batch tracking', extraction: 'Husk separation', sieving: 'Multi-mesh sieving', dustfree: 'Dust-free area', lab: 'Grade testing', milling: 'Precision milling', blending: 'Mixer units', dosing: 'Precision dosing', auto: 'Automated bagging', temp: 'Temperature controlled', fifo: 'FIFO management', loading: 'Export loading', support: '24/7 support' },
            qc: {
              eyebrow: 'Quality First',
              titleLong: '5-Stage Quality Control',
              subtitle: 'Every lot passes through a rigorous 5-step process.',
              s1: { title: 'Raw Material Selection', desc: 'Direct sourcing of premium quality seeds.' },
              s2: { title: 'Pre-Processing', desc: 'Initial cleaning and sorting.' },
              s3: { title: 'Core Processing', desc: 'Advanced grading and milling.' },
              s4: { title: 'Lab Analysis', desc: 'Testing for purity and aroma.' },
              s5: { title: 'Final Review', desc: 'Packaging and documentation check.' }
            },
            cta: { title: 'Interested in a Product Sample?', subtitle: 'We offer lab-tested samples for serious buyers.', button: 'Request a Sample' }
          },
          contact: {
            header: { eyebrow: 'Get In Touch', title: 'Connect with Our Export Team', subtitle: "Have questions? We're here to help you source from India." },
            info: { call: 'Call Us', email: 'Email Us', location: 'Our Location', available: '24/7 Support', response: 'Fast Response', hours: 'Operating Hours', findUs: 'Find Us on Map' },
            form: {
              title: 'Send us a Message',
              name: 'Full Name',
              email: 'Email Address',
              subject: 'Subject',
              subjectPlace: 'e.g. Bulk Order Inquiry',
              message: 'Message',
              messagePlace: 'Tell us about your requirements...',
              sending: 'Sending...',
              send: 'Send Message',
              success: 'Message sent successfully!'
            }
          },
          footer: {
            brand: "Purity from Unjha to the World. India's premier Psyllium Husk and Cumin exporter.",
            company: 'Company',
            productCol: 'Products',
            exports: 'Exports',
            ready: 'Ready to source globally?',
            pricing: 'Get competitive pricing on bulk exports.',
            rights: 'All rights reserved.',
            capital: 'Premium Agro Exporters'
          }
        }
      },
      ES: {
        translation: {
          nav: { home: 'Inicio', about: 'Nosotros', products: 'Productos', infrastructure: 'Infraestructura', contact: 'Contacto', requestQuote: 'Pedir Cotización', emailUs: 'Escríbenos' },
          home: {
            hero: { tag: 'Exportaciones Agropecuarias Premium de la India', title: 'Pureza de Unjha', titleAccent: 'al Mundo', subtitle: 'Gujarat Bio Tech Pvt. Ltd. — procesador y exportador líder de Cáscara de Psyllium, Polvo de Psyllium y Comino (Jeera).', ctaPrimary: 'Pedir Cotización', ctaSecondary: 'Ver Productos', exportingTo: 'Exportando a' },
            stats: { purity: 'Grado de Pureza', markets: 'Mercados de Exportación', tested: 'Calidad Probada', experience: 'Años de Experiencia' },
            products: { eyebrow: 'Productos', title: 'Calidad de Exportación', viewDetails: 'Ver detalles', exploreAll: 'Explorar todo', psyllium: { tagline: 'Fibra Premium', desc: 'Cáscara de psyllium con alto contenido de fibra.', badge: 'Alta Fibra' }, psylliumPowder: { tagline: 'Poder de Fibra', desc: 'Polvo de psyllium fino para una mezcla rápida.', badge: 'Puro Polvo' }, jeera: { tagline: 'Especia de Unjha', desc: 'Comino con aroma y aceites esenciales excepcionales.', badge: 'Insignia' } }
          },
          footer: { brand: 'Pureza de Unjha al Mundo. Exportador líder de la India.', company: 'Empresa', productCol: 'Productos', exports: 'Exportaciones', ready: '¿Listo para comprar?', pricing: 'Precios competitivos.', rights: 'Reservados todos los derechos.' }
        }
      },
      AR: {
        translation: {
          nav: { home: 'الرئيسية', about: 'حولنا', products: 'المنتجات', infrastructure: 'البنية التحتية', contact: 'اتصل بنا', requestQuote: 'طلب عرض سعر', emailUs: 'ارسل بريداً' },
          home: {
            hero: { tag: 'صادرات زراعية فاخرة من الهند', title: 'نقاء من أونجا', titleAccent: 'إلى العالم', subtitle: 'شركة غوجارات بيو تيك الخاصة المحدودة — شركة رائدة في معالجة وتصدير قشور الإسباغولا ومسحوق الإسباغولا والكمون.', ctaPrimary: 'طلب عرض سعر', ctaSecondary: 'عرض المنتجات', exportingTo: 'التصدير إلى' },
            stats: { purity: 'درجة النقاء', markets: 'أسواق التصدير', tested: 'جودة مختبرة', experience: 'سنوات الخبرة' },
            products: { eyebrow: 'منتجاتنا', title: 'منتجات بجودة التصدير', viewDetails: 'عرض التفاصيل', exploreAll: 'استكشاف الجميع', psyllium: { tagline: 'ألياف ممتازة', desc: 'قشور إسباغولا بجودة التصدير.', badge: 'ألياف عالية' }, psylliumPowder: { tagline: 'مسحوق ألياف نقي', desc: 'مسحوق إسباغولا ناعم لسهولة الخلط.', badge: 'مسحوق نقي' }, jeera: { tagline: 'بهارات أونجا', desc: 'كمون برائحة وزيوت عطرية ممتازة.', badge: 'المنتج الأهم' } }
          },
          footer: { brand: 'نقاء من أونجا إلى العالم. المصدر الأول في الهند.', company: 'الشركة', productCol: 'المنتجات', exports: 'الصادرات', ready: 'مستعد للاستيراد؟', pricing: 'أسعار تنافسية للجملة.', rights: 'جميع الحقوق محفوظة.', capital: 'عاصمة الكمون في العالم' }
        }
      },
      HI: {
        translation: {
          nav: { home: 'मुख्य पृष्ठ', about: 'हमारे बारे में', products: 'उत्पाद', infrastructure: 'बुनियादी ढांचा', contact: 'संपर्क करें', requestQuote: 'कोटेशन मांगें', emailUs: 'हमें ईमेल करें' },
          home: {
            hero: { tag: 'भारत से प्रीमियम कृषि-निर्यात', title: 'ऊंझा से शुद्धता', titleAccent: 'विश्व तक', subtitle: 'गुजरात बायो टेक प्राइवेट लिमिटेड — इसबगोल की भूसी, इसबगोल पाउडर और जीरा का एक प्रमुख प्रोसेसर और निर्यातक।', ctaPrimary: 'कोटेशन मांगें', ctaSecondary: 'उत्पाद देखें', exportingTo: 'निर्यात' }
          }
        }
      },
      ZH: {
        translation: {
          nav: { home: '首页', about: '关于我们', products: '产品', infrastructure: '基础设施', contact: '联系我们', requestQuote: '索取报价', emailUs: '电邮我们' },
          home: {
            hero: { tag: '印度优质农产品出口', title: '源自温贾的纯净', titleAccent: '走向世界', subtitle: '古吉拉特生物科技私人有限公司 — 车前子壳、车前子粉和孜然（Jeera）的主要加工商和出口商。', ctaPrimary: '索取报价', ctaSecondary: '查看产品', exportingTo: '出口到' }
          }
        }
      }
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;