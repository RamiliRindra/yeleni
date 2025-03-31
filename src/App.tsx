import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Products } from './pages/Products';
import { Services } from './pages/Services';
import { StarlinkStandard } from './pages/StarlinkStandard';
import { StarlinkMini } from './pages/StarlinkMini';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { LegalNotice } from './pages/LegalNotice';
import { TermsOfSale } from './pages/TermsOfSale';
import { Satellite, Globe2, Wifi as WifiIcon, CreditCard, Wrench, Clock, CheckCircle2, X, Ruler, Box, Thermometer, Shield, Zap, Timer, Cloud, Smartphone, ArrowRight } from 'lucide-react';

function Home() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [selectedAdvantage, setSelectedAdvantage] = useState(null);
  const servicesRef = useRef(null);

  const banners = [
    {
      title: "YELENI : Votre expert dédié à l'univers Starlink",
      subtitle: "Vous offrir pleinement l'expérience connectée pour transformer votre quotidien, votre travail et vos loisirs.",
      image: "https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?auto=format&fit=crop&q=80",
      button: {
        text: "À propos de YELENI",
        link: "/a-propos"
      }
    },
    {
      title: "Starlink disponible de suite",
      subtitle: "Plus rapide : Disponibilité immédiate en magasin, tests & formation, assistance activation rapide.",
      image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&q=80",
      button: {
        text: "Découvrir nos avantages",
        action: () => {
          servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
          setSelectedAdvantage(advantages[0]); // Sélectionne le premier avantage (Plus rapide)
        }
      }
    },
    {
      title: "Moins cher, et plus sûr",
      subtitle: "Moins cher que sur le site Starlink.com : Prix réduit, sans frais d'expédition internationale mais avec toutes les garanties officielles de Starlink.",
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80",
      button: {
        text: "Découvrir nos avantages",
        action: () => {
          servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
          setSelectedAdvantage(advantages[1]); // Sélectionne l'avantage "Moins cher"
        }
      }
    },
    {
      title: "Accompagnement sur mesure",
      subtitle: "Conseils avant-vente, études - installations - et support technique après vente.",
      image: "https://images.unsplash.com/photo-1470472304068-4398a9daab00?auto=format&fit=crop&q=80",
      button: {
        text: "Découvrir nos services",
        link: "/services"
      }
    }
  ];

  const advantages = [
    {
      icon: Clock,
      title: "Plus rapide",
      shortDesc: "Disponibilité immédiate en magasin, activation rapide.",
      longDesc: `Ne perdez plus de temps à attendre des semaines ! Chez YELENI, votre Kit Starlink est disponible immédiatement en magasin. Plus besoin de suivre un long processus de commande en ligne. Vous repartez avec votre équipement prêt à être installé et activé en un temps record.

Pas sûr que Starlink soit la bonne solution pour vous ? 
Testez-le avant d'acheter ! Avec YELENI, profitez d'une démonstration en magasin, essayez l'équipement et bénéficiez d'une formation express sur son installation et son utilisation. Une vraie tranquillité d'esprit avant de passer à l'achat !`
    },
    {
      icon: CheckCircle2,
      title: "Moins cher que sur site Starlink.com",
      shortDesc: "Prix réduit, sans frais d'expédition internationale.",
      longDesc: "Économisez sur votre achat ! En commandant sur Starlink.com, vous devez payer des frais d'expédition internationaux élevés. Avec YELENI, vous obtenez votre kit au meilleur prix sans surcoût lié à l'importation. Faites le bon choix et gardez votre budget sous contrôle !"
    },
    {
      icon: CreditCard,
      title: "Paiement flexible",
      shortDesc: "Espèces, mobile money, carte bancaire ou crédit (selon éligibilité).",
      longDesc: "Achetez votre Kit Starlink sans contrainte ! Chez YELENI, nous proposons plusieurs modes de paiement adaptés à tous : espèces, mobile money, carte bancaire et même achat à crédit pour les clients éligibles. La flexibilité à votre service !"
    },
    {
      icon: Wrench,
      title: "Conseils avant-vente",
      shortDesc: "Le bon kit et abonnement adaptés à vos besoins.",
      longDesc: "Quel Kit Starlink choisir ? Quel abonnement convient le mieux à votre utilisation ? Nos experts vous accompagnent pour faire le bon choix. Que vous soyez un particulier, une entreprise ou une organisation, nous trouvons la solution la plus adaptée à vos besoins et votre budget."
    },
    {
      icon: CreditCard,
      title: "Solution de financement",
      shortDesc: "À crédit, paiement en plusieurs fois (selon éligibilité).",
      longDesc: "Besoin d'un coup de pouce pour financer votre Kit Starlink ? YELENI vous propose des solutions de paiement échelonné ou à crédit, selon votre éligibilité. Ne laissez pas votre budget freiner votre accès à une connexion rapide et fiable !"
    },
    {
      icon: Wrench,
      title: "Accompagnement sur mesure",
      shortDesc: "Assistance, activation, facturation et gestion d'abonnement.",
      longDesc: "Ne vous souciez plus des démarches compliquées ! YELENI vous assiste dans l'activation de votre abonnement Starlink, la facturation et la gestion de votre compte. Profitez d'un service client réactif et accessible en magasin ou en ligne."
    },
    {
      icon: Wrench,
      title: "Installation et support technique",
      shortDesc: "Études, installation et assistance locale.",
      longDesc: "Vous avez besoin d'une installation professionnelle ? Nos techniciens qualifiés vous accompagnent pour une mise en place optimale de votre Kit Starlink. Nous réalisons des études techniques sur site et assurons un support local rapide et efficace en cas de besoin."
    },
    {
      icon: Satellite,
      title: "Garantie Starlink appliquée",
      shortDesc: "Remplacement rapide en cas de panne validée par le support Starlink.",
      longDesc: "En achetant chez YELENI, vous bénéficiez de la garantie officielle Starlink. En cas de panne validée par le support technique, nous assurons un remplacement rapide de votre matériel. Achetez en toute confiance avec un service après-vente fiable et efficace."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const Modal = ({ advantage, onClose }) => {
    if (!advantage) return null;

    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-zinc-900 max-w-2xl w-full rounded-lg p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-blue-500/10 p-3 rounded-lg">
              <advantage.icon className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold">{advantage.title}</h3>
          </div>
          
          <p className="text-gray-300 mb-4">{advantage.shortDesc}</p>
          
          <div className="text-gray-400 whitespace-pre-line">
            {advantage.longDesc}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section with Sliding Banners */}
      <section id="accueil" className="relative h-screen">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentBanner ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="absolute inset-0">
              <img 
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="max-w-3xl">
                  <div className="avec-yeleni">Avec YELENI</div>
                  <h1 className="text-5xl font-bold mb-6">{banner.title}</h1>
                  <p className="text-xl mb-8 text-gray-200">{banner.subtitle}</p>
                  {banner.button && (
                    banner.button.link ? (
                      <Link 
                        to={banner.button.link}
                        className="inline-block bg-white text-black px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-200 transition-colors duration-300 active:bg-gray-300"
                      >
                        {banner.button.text}
                      </Link>
                    ) : (
                      <button
                        onClick={banner.button.action}
                        className="inline-block bg-white text-black px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-200 transition-colors duration-300 active:bg-gray-300"
                      >
                        {banner.button.text}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Banner Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentBanner ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} id="services" className="py-20 bg-zinc-900 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Pourquoi acheter auprès d'YELENI (Revendeur Officiel Agréé Starlink)</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedAdvantage(advantage)}
                  className="bg-black/50 p-6 rounded-lg backdrop-blur-sm hover:bg-black/70 transition-all duration-300 transform hover:-translate-y-1 text-left"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-500/10 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                      <p className="text-gray-400 text-sm">{advantage.shortDesc}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Overview Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Nos Produits Starlink</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Starlink Standard */}
            <div className="bg-zinc-900 rounded-xl overflow-hidden">
              <div className="aspect-video relative">
                <img 
                  src="https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&q=80" 
                  alt="Starlink Kit Standard"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Starlink Kit Standard</h3>
                <p className="text-gray-400 mb-6">
                  Idéal pour les utilisateurs résidentiels et bureautiques, les applications internet quotidiennes comme le streaming, les appels vidéo, les jeux en ligne et bien plus encore.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3" />
                    Internet Très haut débit de plus de 250 Mbps
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3" />
                    Routeur WiFi 6 séparé de l'antenne
                  </li>
                </ul>
                <Link 
                  to="/produits/standard" 
                  className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors"
                >
                  Voir les spécifications
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Starlink Mini */}
            <div className="bg-zinc-900 rounded-xl overflow-hidden">
              <div className="aspect-video relative">
                <img 
                  src="https://images.unsplash.com/photo-1580981433573-c5804ced20ad?auto=format&fit=crop&q=80" 
                  alt="Starlink Mini"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Starlink Mini</h3>
                <p className="text-gray-400 mb-6">
                  Starlink Mini est un kit compact et portable qui se range facilement dans un sac à dos. Il est conçu pour fournir une connexion internet haut débit à faible latence en voyage.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3" />
                    Internet haut débit environ 100 Mbps
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3" />
                    Routeur WiFi 5 intégré à l'antenne
                  </li>
                </ul>
                <Link 
                  to="/produits/mini" 
                  className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors"
                >
                  Voir les spécifications
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Modal */}
      <Modal
        advantage={selectedAdvantage}
        onClose={() => setSelectedAdvantage(null)}
      />
    </div>
  );
}

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produits" element={<Products />} />
      <Route path="/produits/standard" element={<StarlinkStandard />} />
      <Route path="/produits/mini" element={<StarlinkMini />} />
      <Route path="/services" element={<Services />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/mentions-legales" element={<LegalNotice />} />
      <Route path="/cgv" element={<TermsOfSale />} />
    </Routes>
  );
}

export default App;