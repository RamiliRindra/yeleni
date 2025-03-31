import React from 'react';
import { Navigation } from '../components/Navigation';
import { Globe2, Users, Shield, Award, Rocket, Heart, CheckCircle2, Wifi, Home, Headphones, GraduationCap } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="YELENI - À propos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <h1 className="text-5xl font-bold mb-6">À propos de YELENI</h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              YELENI est un groupe panafricain né d'une volonté simple : permettre aux familles, aux étudiants, aux entreprises africaines d'accéder aux immenses opportunités offertes par Starlink – pour transformer notre manière de vivre, de travailler, de jouer et d'apprendre.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre Mission</h2>
              <p className="text-gray-400 mb-8">
                YELENI est aujourd'hui le seul « Starlink Authorized Retailer », implantée dans plusieurs pays en Afrique et dont la mission principale est exclusivement dédiée à la promotion, fourniture et mise en service des solutions Starlink.
              </p>
              <p className="text-gray-400">
                Accessoirement, nous proposons aux utilisateurs un assortiment d'articles Hi-Tech couvrant les écosystèmes de maisons et entreprises connectées (smart devices & IoT) afin de vous accompagner vers une expérience numérique complète.
              </p>
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112c37f11f?auto=format&fit=crop&q=80" 
                alt="YELENI Mission"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center">Nos Valeurs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900 p-8 rounded-lg">
              <Award className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-400">
                Proposer des produits et services de haute qualité, en partenariat avec des leaders mondiaux comme Starlink.
              </p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-lg">
              <Users className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">Proximité</h3>
              <p className="text-gray-400">
                Être à l'écoute de nos clients et partenaires pour leur offrir des solutions adaptées à leurs besoins réels.
              </p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-lg">
              <Rocket className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-400">
                Anticiper les évolutions technologiques et proposer les nouveautés qui simplifient et enrichissent la vie numérique.
              </p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-lg">
              <Shield className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">Responsabilité</h3>
              <p className="text-gray-400">
                Encourager un usage responsable et durable de la technologie pour accompagner la croissance des communautés de manière éthique et inclusive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center">Nos Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/30 p-8 rounded-lg">
              <Wifi className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">Kits Starlink</h3>
              <p className="text-gray-400">
                Une connectivité Internet haut débit par satellite, accessible dans les zones mal desservies ou reculées.
              </p>
            </div>
            <div className="bg-black/30 p-8 rounded-lg">
              <Home className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">Smart Home & IoT</h3>
              <p className="text-gray-400">
                Gestion complète de la maison, caméras intélligentes, enceintes connectées, appareils de visioconférence… Tout ce qu'il faut pour améliorer votre quotidien à la maison ou au bureau.
              </p>
            </div>
            <div className="bg-black/30 p-8 rounded-lg">
              <Headphones className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">Accompagnement & Service</h3>
              <p className="text-gray-400">
                Des conseils personnalisés, un suivi technique et un service après-vente de qualité pour vous aider à profiter pleinement de vos équipements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why YELENI Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center">Pourquoi YELENI ?</h2>
          <div className="space-y-8">
            <div className="bg-zinc-900 p-8 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <CheckCircle2 className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Expertise spécialisée Starlink</h3>
                  <p className="text-gray-400">
                    Afin de garantir la meilleure qualité de service, notre cœur de métier est exclusivement centré sur l'univers Starlink.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 p-8 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <Shield className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Un partenariat Starlink officiel et privilégié</h3>
                  <p className="text-gray-400">
                    En tant que revendeur officiel agrée des kits Starlink dans plusieurs pays Afrique, nous bénéficions d'une relation directe avec SpaceX. Cela vous garantit un approvisionnement prioritaire, des conditions commerciales avantageuses et une mise à jour continue des dernières innovations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 p-8 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <Users className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Présence locale et accompagnement dédié</h3>
                  <p className="text-gray-400">
                    Des boutiques de proximité et des équipes formées pour répondre à vos questions et anticiper vos besoins.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 p-8 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <Home className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Expérience connectée complète</h3>
                  <p className="text-gray-400">
                    Un large choix d'accessoires Hi-Tech pour maximiser l'impact d'une connexion haut débit et créer un environnement global connecté.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 p-8 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Un engagement social concret</h3>
                  <p className="text-gray-400">
                    Dans le cadre de notre démarche RSE, nous investissons dans des projets solidaires pour subventionner l'accès à l'Internet haut débit dans les écoles. En offrant aux élèves et enseignants des ressources pédagogiques en ligne, nous contribuons à réduire la fracture numérique et à bâtir un avenir plus équitable pour tous.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Ensemble, vivons pleinement l'expérience connectée et réinventons notre manière de vivre, de travailler, de jouer et d'apprendre. Rejoignez la communauté YELENI et faites partie du changement !
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;