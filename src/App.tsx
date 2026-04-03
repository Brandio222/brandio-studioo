import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Instagram, 
  Linkedin, 
  Facebook,
  Mail, 
  ArrowRight, 
  Palette,
  Globe,
  Presentation,
  TrendingUp,
  CheckCircle2,
  MapPin,
  Menu,
  X,
  Cpu,
  Users,
  LineChart,
  MessageSquare,
  Share2
} from 'lucide-react';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

// Translations
const translations = {
  fr: {
    nav: { services: 'Services', business: 'Business', pricing: 'Packs', contact: 'Contact' },
    hero: {
      tag: 'Brandio Studio',
      title1: "De l'idée",
      title2: "à l'identité",
      subtitle: 'Identité visuelle, web design et accompagnement business pour faire grandir votre marque.',
      location: 'Basé à Bruxelles · FR/EN/NL',
      cta1: 'Démarrer un projet',
      cta2: 'Nos services'
    },
    stats: {
      title: "Votre image, c'est votre première impression",
      subtitle: 'Une identité visuelle forte établit la confiance dès le premier regard.',
      statText: 'des consommateurs jugent la crédibilité par le design'
    },
    services: {
      tag: 'Nos Services',
      title: 'Ce que nous créons pour vous',
      items: [
        { title: 'Identité visuelle', desc: 'Logo, charte graphique, palette couleurs et typographie.', features: ['Logo design', 'Charte graphique', 'Palette couleurs', 'Typographie'] },
        { title: 'Sites web', desc: 'Sites vitrines responsives, optimisés SEO.', features: ['Design sur mesure', 'Mobile-first', 'SEO intégré', 'Performance'] },
        { title: 'Présentations', desc: 'Pitch decks et supports commerciaux professionnels.', features: ['Pitch decks', 'Présentations', 'Supports de vente', 'Templates'] },
        { title: 'Réseaux sociaux', desc: 'Gestion, stratégie et croissance de votre présence sociale.', features: ['Stratégie social media', 'Création de contenu', 'Suivi & analyse', 'Augmentation engagement'] },
        { title: 'Conseil Business', desc: 'Accompagnement stratégique pour augmenter vos ventes.', features: ['Stratégie de croissance', 'Augmentation des ventes', 'Conseil personnalisé', 'Positionnement'] },
        { title: 'Accompagnement IA', desc: 'Intégrez l\'intelligence artificielle dans votre business.', features: ['Automatisation IA', 'Chatbots', 'Analyse de données', 'Productivité IA'] }
      ]
    },
    business: {
      tag: 'Accompagnement Business',
      title: 'On pense résultats',
      subtitle: 'Au-delà du design, nous vous aidons à atteindre vos objectifs business.',
      items: [
        { title: 'Accompagnement Business', desc: 'Stratégies de croissance adaptées à vos objectifs.' },
        { title: 'Augmentation des Ventes', desc: 'Optimisation pour convertir plus de visiteurs en clients.' },
        { title: 'Stratégie & Conseil', desc: 'Conseil sur votre positionnement et présence digitale.' }
      ]
    },
    process: {
      tag: 'Notre Processus',
      title: 'Du brief à la livraison',
      steps: [
        { title: 'Découverte', desc: 'Brief et vision du projet. On comprend qui vous êtes.' },
        { title: 'Conception', desc: 'Propositions créatives basées sur vos objectifs.' },
        { title: 'Révisions', desc: 'Ajustements sur mesure. Deux tours de révision inclus.' },
        { title: 'Livraison', desc: 'Fichiers finaux et guide de marque complet.' }
      ]
    },
    pricing: {
      tag: 'Nos Packs',
      title: 'Des solutions pour chaque besoin',
      subtitle: 'Contactez-nous pour plus d\'informations et un devis personnalisé.',
      packs: [
        { 
          name: 'Essentiel', 
          price: 'Sur devis', 
          features: ['Logo (2 propositions)', 'Charte graphique', 'Palette couleurs', 'Typographie', 'Fichiers livrables'] 
        },
        { 
          name: 'Business', 
          price: 'Sur devis', 
          features: ['Tout du Pack Essentiel', 'Site vitrine', 'Templates réseaux', 'Guide de marque', 'Support prioritaire'] 
        },
        { 
          name: 'Premium', 
          price: 'Sur devis', 
          features: ['Tout du Pack Business', 'Accompagnement IA', 'Stratégie business', 'Social media management', 'Support dédié'] 
        }
      ],
      cta: 'Contactez-nous',
      custom: 'Besoin d\'un projet sur mesure ?'
    },
    whyus: {
      tag: 'Pourquoi Nous',
      title: 'Ce qui nous différencie',
      items: [
        { title: 'Approche personnalisée', desc: 'Chaque projet est unique. Nous comprenons votre vision.' },
        { title: 'Design premium accessible', desc: 'Qualité studio haut de gamme à des tarifs adaptés.' },
        { title: 'Basé à Bruxelles', desc: 'Collaboration fluide en français, anglais et néerlandais.' },
        { title: 'Livrables prêts à l\'emploi', desc: 'Tous les fichiers et formats dont vous avez besoin.' },
        { title: 'Suivi post-projet', desc: 'Nous restons disponibles après la livraison.' }
      ]
    },
    contact: {
      tag: 'Contact',
      title: 'Prêt à démarrer',
      subtitle: 'On répond sous 48h avec une proposition personnalisée.',
      form: { name: 'Nom', email: 'Email', project: 'Type de projet', message: 'Message', send: 'Envoyer' },
      email: 'contact@brandio-studio.com',
      location: 'Bruxelles'
    },
    footer: `© ${new Date().getFullYear()} Brandio Studio`
  },
  en: {
    nav: { services: 'Services', business: 'Business', pricing: 'Packs', contact: 'Contact' },
    hero: {
      tag: 'Brandio Studio',
      title1: 'From idea',
      title2: 'to identity',
      subtitle: 'Visual identity, web design and business support to grow your brand.',
      location: 'Based in Brussels · FR/EN/NL',
      cta1: 'Start a project',
      cta2: 'Our services'
    },
    stats: {
      title: 'Your image is your first impression',
      subtitle: 'A strong visual identity builds trust at first sight.',
      statText: 'of consumers judge credibility by design'
    },
    services: {
      tag: 'Our Services',
      title: 'What we create for you',
      items: [
        { title: 'Visual Identity', desc: 'Logo, brand guidelines, color palette and typography.', features: ['Logo design', 'Brand guidelines', 'Color palette', 'Typography'] },
        { title: 'Websites', desc: 'Responsive showcase websites, SEO optimized.', features: ['Custom design', 'Mobile-first', 'SEO integrated', 'Performance'] },
        { title: 'Presentations', desc: 'Professional pitch decks and sales materials.', features: ['Pitch decks', 'Presentations', 'Sales materials', 'Templates'] },
        { title: 'Social Media', desc: 'Management, strategy and growth of your social presence.', features: ['Social media strategy', 'Content creation', 'Tracking & analytics', 'Engagement growth'] },
        { title: 'Business Consulting', desc: 'Strategic support to increase your sales.', features: ['Growth strategy', 'Sales increase', 'Personalized advice', 'Positioning'] },
        { title: 'AI Support', desc: 'Integrate artificial intelligence into your business.', features: ['AI Automation', 'Chatbots', 'Data analysis', 'AI Productivity'] }
      ]
    },
    business: {
      tag: 'Business Support',
      title: 'We think results',
      subtitle: 'Beyond design, we help you achieve your business goals.',
      items: [
        { title: 'Business Support', desc: 'Growth strategies tailored to your objectives.' },
        { title: 'Sales Increase', desc: 'Optimization to convert more visitors into customers.' },
        { title: 'Strategy & Consulting', desc: 'Advice on your positioning and digital presence.' }
      ]
    },
    process: {
      tag: 'Our Process',
      title: 'From brief to delivery',
      steps: [
        { title: 'Discovery', desc: 'Brief and project vision. We understand who you are.' },
        { title: 'Design', desc: 'Creative proposals based on your objectives.' },
        { title: 'Revisions', desc: 'Tailored adjustments. Two revision rounds included.' },
        { title: 'Delivery', desc: 'Final files and complete brand guide.' }
      ]
    },
    pricing: {
      tag: 'Our Packs',
      title: 'Solutions for every need',
      subtitle: 'Contact us for more information and a personalized quote.',
      packs: [
        { 
          name: 'Essential', 
          price: 'Quote', 
          features: ['Logo (2 proposals)', 'Brand guidelines', 'Color palette', 'Typography', 'Deliverable files'] 
        },
        { 
          name: 'Business', 
          price: 'Quote', 
          features: ['Everything in Essential', 'Showcase website', 'Social templates', 'Brand guide', 'Priority support'] 
        },
        { 
          name: 'Premium', 
          price: 'Quote', 
          features: ['Everything in Business', 'AI support', 'Business strategy', 'Social media management', 'Dedicated support'] 
        }
      ],
      cta: 'Contact us',
      custom: 'Need a custom project?'
    },
    whyus: {
      tag: 'Why Us',
      title: 'What sets us apart',
      items: [
        { title: 'Personalized approach', desc: 'Every project is unique. We understand your vision.' },
        { title: 'Premium yet accessible', desc: 'High-end studio quality at adapted prices.' },
        { title: 'Based in Brussels', desc: 'Smooth collaboration in French, English and Dutch.' },
        { title: 'Ready-to-use deliverables', desc: 'All the files and formats you need.' },
        { title: 'Post-project follow-up', desc: 'We remain available after delivery.' }
      ]
    },
    contact: {
      tag: 'Contact',
      title: 'Ready to start',
      subtitle: 'We respond within 48h with a personalized proposal.',
      form: { name: 'Name', email: 'Email', project: 'Project type', message: 'Message', send: 'Send' },
      email: 'contact@brandio-studio.com',
      location: 'Brussels'
    },
    footer: `© ${new Date().getFullYear()} Brandio Studio`
  },
  nl: {
    nav: { services: 'Diensten', business: 'Business', pricing: 'Pakketten', contact: 'Contact' },
    hero: {
      tag: 'Brandio Studio',
      title1: 'Van idee',
      title2: 'naar identiteit',
      subtitle: 'Visuele identiteit, webdesign en business ondersteuning om uw merk te laten groeien.',
      location: 'Gevestigd in Brussel · FR/EN/NL',
      cta1: 'Start een project',
      cta2: 'Onze diensten'
    },
    stats: {
      title: 'Uw imago is uw eerste indruk',
      subtitle: 'Een sterke visuele identiteit bouwt vertrouwen op het eerste gezicht.',
      statText: 'van consumenten beoordeelt geloofwaardigheid op design'
    },
    services: {
      tag: 'Onze Diensten',
      title: 'Wat wij voor u creëren',
      items: [
        { title: 'Visuele Identiteit', desc: 'Logo, huisstijl, kleurenpalet en typografie.', features: ['Logo ontwerp', 'Huisstijl', 'Kleurenpalet', 'Typografie'] },
        { title: 'Websites', desc: 'Responsieve showcase websites, SEO geoptimaliseerd.', features: ['Custom design', 'Mobile-first', 'SEO geïntegreerd', 'Prestatie'] },
        { title: 'Presentaties', desc: 'Professionele pitch decks en verkoopmaterialen.', features: ['Pitch decks', 'Presentaties', 'Verkoopmaterialen', 'Templates'] },
        { title: 'Social Media', desc: 'Beheer, strategie en groei van uw sociale aanwezigheid.', features: ['Social media strategie', 'Content creatie', 'Tracking & analyse', 'Engagement groei'] },
        { title: 'Business Advies', desc: 'Strategische ondersteuning om uw verkopen te verhogen.', features: ['Groestrategie', 'Verkoopverhoging', 'Gepersonaliseerd advies', 'Positionering'] },
        { title: 'AI Ondersteuning', desc: 'Integreer kunstmatige intelligentie in uw business.', features: ['AI Automatisering', 'Chatbots', 'Data analyse', 'AI Productiviteit'] }
      ]
    },
    business: {
      tag: 'Business Ondersteuning',
      title: 'Wij denken resultaten',
      subtitle: 'Naast design helpen wij u uw businessdoelen te bereiken.',
      items: [
        { title: 'Business Ondersteuning', desc: 'Groestrategieën afgestemd op uw doelen.' },
        { title: 'Verkoopverhoging', desc: 'Optimalisatie om meer bezoekers om te zetten in klanten.' },
        { title: 'Strategie & Advies', desc: 'Advies over uw positionering en digitale aanwezigheid.' }
      ]
    },
    process: {
      tag: 'Ons Proces',
      title: 'Van brief tot oplevering',
      steps: [
        { title: 'Ontdekking', desc: 'Brief en projectvisie. We begrijpen wie u bent.' },
        { title: 'Ontwerp', desc: 'Creatieve voorstellen gebaseerd op uw doelen.' },
        { title: 'Revisies', desc: 'Op maat gemaakte aanpassingen. Twee revisierondes inbegrepen.' },
        { title: 'Oplevering', desc: 'Definitieve bestanden en complete brand guide.' }
      ]
    },
    pricing: {
      tag: 'Onze Pakketten',
      title: 'Oplossingen voor elke behoefte',
      subtitle: 'Neem contact op voor meer informatie en een gepersonaliseerde offerte.',
      packs: [
        { 
          name: 'Essentieel', 
          price: 'Offerte', 
          features: ['Logo (2 voorstellen)', 'Huisstijl', 'Kleurenpalet', 'Typografie', 'Leverbare bestanden'] 
        },
        { 
          name: 'Business', 
          price: 'Offerte', 
          features: ['Alles in Essentieel', 'Showcase website', 'Social templates', 'Brand guide', 'Prioriteit support'] 
        },
        { 
          name: 'Premium', 
          price: 'Offerte', 
          features: ['Alles in Business', 'AI ondersteuning', 'Business strategie', 'Social media beheer', 'Toegewijde support'] 
        }
      ],
      cta: 'Neem contact op',
      custom: 'Behoefte aan een maatwerk project?'
    },
    whyus: {
      tag: 'Waarom Wij',
      title: 'Wat ons onderscheidt',
      items: [
        { title: 'Gepersonaliseerde aanpak', desc: 'Elk project is uniek. We begrijpen uw visie.' },
        { title: 'Premium maar toegankelijk', desc: 'High-end studio kwaliteit tegen aangepaste prijzen.' },
        { title: 'Gevestigd in Brussel', desc: 'Vlotte samenwerking in Frans, Engels en Nederlands.' },
        { title: 'Klaar voor gebruik', desc: 'Alle bestanden en formaten die u nodig heeft.' },
        { title: 'Nazorg', desc: 'We blijven beschikbaar na oplevering.' }
      ]
    },
    contact: {
      tag: 'Contact',
      title: 'Klaar om te starten',
      subtitle: 'We reageren binnen 48u met een gepersonaliseerd voorstel.',
      form: { name: 'Naam', email: 'Email', project: 'Project type', message: 'Bericht', send: 'Versturen' },
      email: 'contact@brandio-studio.com',
      location: 'Brussel'
    },
    footer: `© ${new Date().getFullYear()} Brandio Studio`
  }
};

type Language = 'fr' | 'en' | 'nl';

function App() {
  const [lang, setLang] = useState<Language>('fr');
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', project: '', message: '' });
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const statNumberRef = useRef<HTMLSpanElement>(null);

  const t = translations[lang];

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'bottom top+=100',
        onEnter: () => setIsNavVisible(true),
        onLeaveBack: () => setIsNavVisible(false),
      });

      gsap.fromTo('.hero-content', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 }
      );

      gsap.fromTo('.hero-image',
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power3.out', delay: 0.4 }
      );

      if (statNumberRef.current) {
        const counter = { value: 0 };
        gsap.to(counter, {
          value: 75,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          onUpdate: () => {
            if (statNumberRef.current) {
              statNumberRef.current.textContent = Math.floor(counter.value).toString();
            }
          }
        });
      }

      const sections = document.querySelectorAll('.reveal-section');
      sections.forEach((section) => {
        gsap.fromTo(section,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              once: true
            }
          }
        );
      });

      gsap.fromTo('.service-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 80%',
            once: true
          }
        }
      );

      gsap.fromTo('.pricing-card-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.pricing-grid',
            start: 'top 80%',
            once: true
          }
        }
      );
    });

    return () => ctx.revert();
  }, [lang]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Nouveau projet - ${formData.project} - ${formData.name}`;
    const body = `Nom: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AProjet: ${formData.project}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:contact@brandio-studio.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  const ServiceIcon = ({ index }: { index: number }) => {
    const icons = [Palette, Globe, Presentation, Share2, TrendingUp, Cpu];
    const Icon = icons[index];
    return <Icon className="text-[#F97316]" size={24} />;
  };

  const BusinessIcon = ({ index }: { index: number }) => {
    const icons = [Users, LineChart, MessageSquare];
    const Icon = icons[index];
    return <Icon className="text-[#F97316]" size={20} />;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isNavVisible 
            ? 'bg-white/95 nav-blur shadow-sm py-3' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container-padding flex items-center justify-between">
          <a href="#" className="flex items-center gap-2" aria-label="Brandio Studio - Accueil">
            <img 
              src="/brandio_icon_transparent.png" 
              alt="Logo Brandio Studio Bruxelles" 
              className="w-9 h-9"
              loading="eager"
              width="36"
              height="36"
            />
            <span className="font-bold text-lg text-[#111827]">Brandio</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-[#111827] transition-colors text-sm font-medium">
              {t.nav.services}
            </button>
            <button onClick={() => scrollToSection('business')} className="text-gray-600 hover:text-[#111827] transition-colors text-sm font-medium">
              {t.nav.business}
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-600 hover:text-[#111827] transition-colors text-sm font-medium">
              {t.nav.pricing}
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn-primary text-sm py-2 px-4">
              {t.nav.contact}
            </button>
            <div className="flex gap-1 bg-gray-100 rounded-lg p-1 ml-2">
              {(['fr', 'en', 'nl'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-1 text-xs font-medium rounded transition-all ${
                    lang === l 
                      ? 'bg-white text-[#111827] shadow-sm' 
                      : 'text-gray-500 hover:text-[#111827]'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <button 
            className="md:hidden p-2 text-[#111827]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-6 px-5 flex flex-col gap-4 border-t">
            <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 py-2 font-medium">{t.nav.services}</button>
            <button onClick={() => scrollToSection('business')} className="text-left text-gray-700 py-2 font-medium">{t.nav.business}</button>
            <button onClick={() => scrollToSection('pricing')} className="text-left text-gray-700 py-2 font-medium">{t.nav.pricing}</button>
            <button onClick={() => scrollToSection('contact')} className="btn-primary text-center justify-center mt-2">{t.nav.contact}</button>
            <div className="flex gap-2 justify-center mt-4 pt-4 border-t">
              {(['fr', 'en', 'nl'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    lang === l 
                      ? 'bg-[#F97316] text-white' 
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center pt-20 pb-12 bg-gradient-to-b from-white to-gray-50/50">
        <div className="container-padding w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="hero-content text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-2 h-2 bg-[#F97316] rounded-full"></span>
                <span className="text-sm font-medium text-[#111827]">{t.hero.tag}</span>
              </div>
              
              <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl mb-6">
                {t.hero.title1}
                <br />
                {t.hero.title2}<span className="hero-title-dot"></span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-600 mb-3 max-w-md mx-auto lg:mx-0">
                {t.hero.subtitle}
              </p>

              <p className="text-sm text-[#F97316] font-medium mb-8">
                {t.hero.location}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <button onClick={() => scrollToSection('contact')} className="btn-primary justify-center">
                  {t.hero.cta1}
                  <ArrowRight size={18} />
                </button>
                <button onClick={() => scrollToSection('services')} className="btn-secondary justify-center">
                  {t.hero.cta2}
                </button>
              </div>
            </div>

            <div className="hero-image relative order-1 lg:order-2">
              <div className="img-rounded img-shadow">
                <img 
                  src="/images/hero_workspace.jpg" 
                  alt="Studio de branding Brandio à Bruxelles - Création d'identité visuelle et logo" 
                  className="w-full h-auto object-cover aspect-[4/3]"
                  loading="lazy"
                  width="800"
                  height="600"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="section-padding bg-white">
        <div className="container-padding">
          <div className="reveal-section text-center max-w-2xl mx-auto mb-12">
            <h2 className="hero-title text-2xl sm:text-3xl md:text-4xl text-[#111827] mb-4">
              {t.stats.title}
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              {t.stats.subtitle}
            </p>
          </div>

          <div className="reveal-section text-center">
            <div className="flex items-center justify-center">
              <span ref={statNumberRef} className="stat-number">0</span>
              <span className="stat-percent">%</span>
            </div>
            <p className="text-gray-600 text-sm md:text-base max-w-xs mx-auto mt-4">
              {t.stats.statText}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gray-50/50">
        <div className="container-padding">
          <div className="reveal-section text-center max-w-2xl mx-auto mb-12">
            <span className="tag mb-4 inline-flex">
              <span className="tag-dot"></span>
              {t.services.tag}
            </span>
            <h2 className="hero-title text-2xl sm:text-3xl md:text-4xl text-[#111827] mb-4">
              {t.services.title}
            </h2>
          </div>

          <div className="services-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.services.items.map((service, index) => (
              <div 
                key={index}
                className="service-card bg-white rounded-xl p-6 border border-gray-100 card-hover"
              >
                <div className="w-12 h-12 bg-[#F97316]/10 rounded-lg flex items-center justify-center mb-5">
                  <ServiceIcon index={index} />
                </div>
                
                <h3 className="font-bold text-lg text-[#111827] mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {service.desc}
                </p>
                
                <ul className="feature-list text-sm text-gray-600">
                  {service.features.map((feature, i) => (
                    <li key={i} className="py-1">{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Services Section */}
      <section id="business" className="section-padding bg-white">
        <div className="container-padding">
          <div className="reveal-section grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="img-rounded img-shadow">
                <img 
                  src="/images/business_strategy.jpg" 
                  alt="Stratégie business et accompagnement croissance par Brandio Studio" 
                  className="w-full h-auto object-cover aspect-[4/3]"
                  loading="lazy"
                  width="800"
                  height="600"
                />
              </div>
            </div>

            <div className="text-center lg:text-left">
              <span className="tag mb-4 inline-flex">
                <span className="tag-dot"></span>
                {t.business.tag}
              </span>
              <h2 className="hero-title text-2xl sm:text-3xl md:text-4xl text-[#111827] mb-4">
                {t.business.title}<span className="hero-title-dot"></span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base mb-8">
                {t.business.subtitle}
              </p>

              <div className="space-y-4">
                {t.business.items.map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-xl bg-gray-50 text-center lg:text-left">
                    <div className="w-10 h-10 bg-[#F97316]/10 rounded-lg flex items-center justify-center flex-shrink-0 mx-auto lg:mx-0">
                      <BusinessIcon index={index} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#111827] mb-1 text-sm">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="section-padding bg-gray-50/50">
        <div className="container-padding">
          <div className="reveal-section text-center max-w-2xl mx-auto mb-12">
            <span className="tag mb-4 inline-flex">
              <span className="tag-dot"></span>
              {t.process.tag}
            </span>
            <h2 className="hero-title text-2xl sm:text-3xl md:text-4xl text-[#111827] mb-4">
              {t.process.title}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {t.process.steps.map((step, index) => (
              <div key={index} className="reveal-section bg-white rounded-xl p-6 border border-gray-100 text-center">
                <div className="w-10 h-10 bg-[#F97316] rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-sm">0{index + 1}</span>
                </div>
                <h3 className="font-bold text-[#111827] mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-padding bg-white">
        <div className="container-padding">
          <div className="reveal-section text-center max-w-2xl mx-auto mb-12">
            <span className="tag mb-4 inline-flex">
              <span className="tag-dot"></span>
              {t.pricing.tag}
            </span>
            <h2 className="hero-title text-2xl sm:text-3xl md:text-4xl text-[#111827] mb-4">
              {t.pricing.title}
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              {t.pricing.subtitle}
            </p>
          </div>

          <div className="pricing-grid grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {t.pricing.packs.map((pack, index) => (
              <div 
                key={index}
                className={`pricing-card-item pricing-card ${index === 1 ? 'featured' : ''}`}
              >
                {index === 1 && (
                  <div className="inline-block bg-[#F97316] text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    Popular
                  </div>
                )}
                
                <h3 className="font-bold text-lg text-[#111827] mb-2">{pack.name}</h3>
                
                <div className="mb-4">
                  <span className="text-sm text-[#F97316] font-medium bg-[#F97316]/10 px-3 py-1 rounded-full">
                    {pack.price}
                  </span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {pack.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={14} className="text-[#F97316] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="mailto:contact@brandio-studio.com?subject=Demande%20de%20devis%20-%20Pack%20${pack.name}"
                  className={`w-full py-3 rounded-lg font-semibold text-sm transition-all block text-center ${
                    index === 1
                      ? 'bg-[#F97316] text-white hover:brightness-110' 
                      : 'border-2 border-[#111827] text-[#111827] hover:bg-[#111827] hover:text-white'
                  }`}
                >
                  {t.pricing.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="reveal-section text-center mt-10">
            <p className="text-gray-500 text-sm mb-3">{t.pricing.custom}</p>
            <a 
              href="mailto:contact@brandio-studio.com"
              className="text-[#F97316] font-semibold inline-flex items-center gap-2 hover:underline text-sm"
            >
              contact@brandio-studio.com
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="section-padding bg-gray-50/50">
        <div className="container-padding">
          <div className="reveal-section text-center max-w-2xl mx-auto mb-12">
            <span className="tag mb-4 inline-flex">
              <span className="tag-dot"></span>
              {t.whyus.tag}
            </span>
            <h2 className="hero-title text-2xl sm:text-3xl md:text-4xl text-[#111827] mb-4">
              {t.whyus.title}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {t.whyus.items.map((item, index) => (
              <div 
                key={index}
                className="reveal-section bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all text-center"
              >
                <div className="divider mb-4 mx-auto"></div>
                <h3 className="font-bold text-[#111827] mb-2 text-sm">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-[#111827]">
        <div className="container-padding">
          <div className="reveal-section text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-[#F97316] rounded-full"></span>
              <span className="text-sm font-medium text-white/70">{t.contact.tag}</span>
            </span>
            <h2 className="hero-title text-2xl sm:text-3xl md:text-4xl text-white mb-4">
              {t.contact.title}
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <form className="space-y-4" onSubmit={handleFormSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input 
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#F97316] transition-all text-sm"
                  placeholder={t.contact.form.name}
                />
                <input 
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#F97316] transition-all text-sm"
                  placeholder={t.contact.form.email}
                />
              </div>
              
              <select 
                required
                value={formData.project}
                onChange={(e) => setFormData({...formData, project: e.target.value})}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-[#F97316] transition-all text-sm appearance-none"
              >
                <option value="" className="text-[#111827]">{t.contact.form.project}</option>
                <option value="identity" className="text-[#111827]">Visual Identity</option>
                <option value="website" className="text-[#111827]">Website</option>
                <option value="presentation" className="text-[#111827]">Presentation</option>
                <option value="social" className="text-[#111827]">Social Media</option>
                <option value="business" className="text-[#111827]">Business Support</option>
                <option value="ai" className="text-[#111827]">AI Support</option>
              </select>
              
              <textarea 
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#F97316] transition-all resize-none text-sm"
                placeholder={t.contact.form.message}
              ></textarea>
              
              <button type="submit" className="w-full btn-primary justify-center py-4">
                {t.contact.form.send}
                <ArrowRight size={18} />
              </button>
            </form>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
              <a 
                href="mailto:contact@brandio-studio.com"
                className="flex items-center gap-2 text-white/70 hover:text-[#F97316] transition-colors"
              >
                <Mail size={16} />
                {t.contact.email}
              </a>
              <div className="flex items-center gap-2 text-white/70">
                <MapPin size={16} />
                {t.contact.location}
              </div>
            </div>

            <div className="mt-6 flex justify-center gap-4">
              <a 
                href="https://www.instagram.com/brandio.studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#F97316] transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/ermal-ibraj-97379b337/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#F97316] transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61574321065084"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#F97316] transition-colors"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111827] border-t border-white/10 py-6">
        <div className="container-padding">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <img 
                src="/brandio_icon_transparent.png" 
                alt="Logo Brandio Studio" 
                className="w-7 h-7"
                loading="lazy"
                width="28"
                height="28"
              />
              <span className="font-bold text-white text-sm">Brandio</span>
            </div>
            
            <p className="text-white/50 text-xs">
              {t.footer}
            </p>
            
            <div className="flex items-center gap-3">
              <a 
                href="https://www.instagram.com/brandio.studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a 
                href="https://www.linkedin.com/in/ermal-ibraj-97379b337/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61574321065084"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
