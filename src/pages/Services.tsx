import React from 'react';
import { Navigation } from '../components/Navigation';
import { 
  Lightbulb, 
  WrenchIcon, 
  UserPlus, 
  Headphones, 
  Building2, 
  Heart,
  Store,
  Users,
  GraduationCap,
  Settings,
  CreditCard,
  Power,
  Wrench,
  Clock,
  Building,
  School
} from 'lucide-react';

export function Services() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
            alt="YELENI Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <h1 className="text-5xl font-bold mb-6">Nos Services</h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Un accompagnement complet pour vous permettre de tirer le meilleur parti de votre connexion Starlink.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-20">
            {/* 1. Conseil et orientation */}
            <div>
              <div className="flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-blue-500" />
                <h2 className="text-3xl font-bold">Conseil et orientation</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div className="bg-black/30 p-8 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Store className="w-6 h-6 text-blue-500 flex-shrink-0" />
                    <h3 className="text-xl font-bold">Conseils en boutique et tests sur place</h3>
                  </div>
                  <p className="text-gray-400">
                    Dans nos magasins, bénéficiez d'un accompagnement expert et découvrez le fonctionnement de Starlink via des démonstrations en direct pour faire un choix éclairé.
                  </p>
                </div>
                <div className="bg-black/30 p-8 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-6 h-6 text-blue-500 flex-shrink-0" />
                    <h3 className="text-xl font-bold">Accompagnement personnalisé</h3>
                  </div>
                  <p className="text-gray-400">
                    Nous proposons des offres adaptées à votre budget, à votre contexte (entreprise, domicile, zone rurale ou urbaine) et à vos objectifs.
                  </p>
                </div>
                <div className="bg-black/30 p-8 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="w-6 h-6 text-blue-500 flex-shrink-0" />
                    <h3 className="text-xl font-bold">Formations utilisateurs</h3>
                  </div>
                  <p className="text-gray-400">
                    Ateliers pour comprendre le fonctionnement de Starlink, maîtriser la plateforme de gestion et les bonnes pratiques d'usage.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Installation et configuration */}
            <div>
              <div className="flex items-center gap-3">
                <WrenchIcon className="w-6 h-6 text-blue-500" />
                <h2 className="text-3xl font-bold">Installation et configuration</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-black/30 p-8 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Wrench className="w-6 h-6 text-blue-500 flex-shrink-0" />
                    <h3 className="text-xl font-bold">Installation professionnelle</h3>
                  </div>
                  <p className="text-gray-400">
                    Mise en place du kit Starlink (antenne, routeur, répéteurs WiFi, câblage, etc.) et intégration avec l'infrastructure existante.
                  </p>
                </div>
                <div className="bg-black/30 p-8 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Settings className="w-6 h-6 text-blue-500 flex-shrink-0" />
                    <h3 className="text-xl font-bold">Configuration sur site ou à distance</h3>
                  </div>
                  <p className="text-gray-400">
                    Paramétrage optimal pour garantir la meilleure performance.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Assistance abonnement Starlink */}
            <div>
              <div className="flex items-center gap-3">
                <UserPlus className="w-6 h-6 text-blue-500" />
                <h2 className="text-3xl font-bold">Assistance abonnement Starlink</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div className="bg-black/30 p-8 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <UserPlus className="w-6 h-6 text-blue-500 flex-shrink-0" />
                    <h3 className="text-xl font-bold">Création de compte</h3>
                  </div>
                  <p className="text-gray-400">
                    Accompagnement à la configuration de votre profil (coordonnées, facturation, choix d'offre) en boutique ou à distance.
                  </p>
                </div>
                <div className="bg-black/30 p-8 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <CreditCard className="w-6 h-6 text-blue-500 flex-shrink-0" />
                    <h3 className="text-xl font-bold">Solutions de paiement flexibles</h3>
                  </div>
                  <p className="text-gray-400">
                    Profitez de plusieurs options (mobile money, cartes bancaires, transferts) sécurisées par YELENI pour valider votre abonnement en toute simplicité.
                  </p>
                </div>
                <div className="bg-black/30 p-8 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Power className="w-6 h-6 text-blue-500 flex-shrink-0" />
                    <h3 className="text-xl font-bold">Activation et suivi</h3>
                  </div>
                  <p className="text-gray-400">
                    Une fois la commande validée, nous vous aidons à activer votre service et restons à votre écoute pour toute demande (renouvellement, mise à jour, suspension).
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Service Après-Vente (SAV) et maintenance */}
            <div>
              <div className="flex items-center gap-3">
                <Headphones className="w-6 h-6 text-blue-500" />
                <h2 className="text-3xl font-bold">Service Après-Vente (SAV) et maintenance</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-black/30 p-8 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Wrench className="w-6 h-6 text-blue-500 flex-shrink-0" />
                    <h3 className="text-xl font-bold">Support technique Niveau 2</h3>
                  </div>
                  <p className="text-gray-400">
                    Si incident non résolu par le support en ligne de Starlink. Assistance en cas de panne, de mise à jour ou de dysfonctionnement du matériel.
                  </p>
                </div>
                <div className="bg-black/30 p-8 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-blue-500 flex-shrink-0" />
                    <h3 className="text-xl font-bold">Contrats de maintenance</h3>
                  </div>
                  <p className="text-gray-400">
                    Forfaits de suivi pour les professionnels et les particuliers souhaitant une réactivité accrue et une prise en charge rapide (remplacement immédiat des kits défectueux).
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Projets sociaux */}
            <div>
              <div className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-blue-500" />
                <h2 className="text-3xl font-bold">Projets sociaux (RSE)</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-black/30 p-8 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <School className="w-6 h-6 text-blue-500 flex-shrink-0" />
                    <h3 className="text-xl font-bold">Participation à des programmes sociaux</h3>
                  </div>
                  <p className="text-gray-400">
                    Accompagnement de projets éducatifs, notamment pour l'accès Internet haut débit dans les écoles.
                  </p>
                </div>
                <div className="bg-black/30 p-8 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 className="w-6 h-6 text-blue-500 flex-shrink-0" />
                    <h3 className="text-xl font-bold">Collaboration institutionnelle</h3>
                  </div>
                  <p className="text-gray-400">
                    Mise en place de solutions spécifiques pour les administrations, les ONG et autres acteurs engagés dans le développement local.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;