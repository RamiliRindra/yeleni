import React from 'react';
import { Navigation } from '../components/Navigation';
import { Wifi as WifiIcon, Zap, Timer, Cloud, Smartphone, CheckCircle2, Ruler, Box, Thermometer, Shield, Battery, Cpu, Globe2 } from 'lucide-react';

export function StarlinkMini() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1580981433573-c5804ced20ad?auto=format&fit=crop&q=80"
            alt="Starlink Mini"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <h1 className="text-5xl font-bold mb-4">Starlink Mini</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              La solution internet portable par satellite. Compact, léger et puissant,
              parfait pour vos aventures en plein air et vos déplacements.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Vue d'ensemble</h2>
              <p className="text-gray-400 mb-8">
                Le Starlink Mini est conçu pour la mobilité. Avec son format compact et son routeur WiFi intégré,
                il vous accompagne partout pour rester connecté. Idéal pour le camping, les road trips ou comme solution
                de secours, il offre une connexion internet fiable avec des vitesses allant jusqu'à 100 Mbps.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-black/30 p-4 rounded-lg">
                  <WifiIcon className="w-8 h-8 text-blue-500 mb-2" />
                  <h3 className="font-semibold mb-1">Vitesse</h3>
                  <p className="text-gray-400">Jusqu'à 100 Mbps</p>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <Timer className="w-8 h-8 text-blue-500 mb-2" />
                  <h3 className="font-semibold mb-1">Latence</h3>
                  <p className="text-gray-400">20-40ms</p>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <Box className="w-8 h-8 text-blue-500 mb-2" />
                  <h3 className="font-semibold mb-1">Poids</h3>
                  <p className="text-gray-400">3,2 kg</p>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <Cloud className="w-8 h-8 text-blue-500 mb-2" />
                  <h3 className="font-semibold mb-1">Data</h3>
                  <p className="text-gray-400">Illimitée</p>
                </div>
              </div>
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80" 
                alt="Starlink Mini en utilisation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center">Spécifications Techniques</h2>
          
          <div className="space-y-20">
            {/* Performance */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Performance Internet</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <WifiIcon className="w-8 h-8 mb-4 text-blue-500" />
                  <h4 className="text-lg font-semibold mb-2">Téléchargement</h4>
                  <p className="text-gray-400">50-100 Mb/s</p>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <Zap className="w-8 h-8 mb-4 text-blue-500" />
                  <h4 className="text-lg font-semibold mb-2">Envoi</h4>
                  <p className="text-gray-400">10-20 Mb/s</p>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <Timer className="w-8 h-8 mb-4 text-blue-500" />
                  <h4 className="text-lg font-semibold mb-2">Latence</h4>
                  <p className="text-gray-400">20-40 ms</p>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <Cloud className="w-8 h-8 mb-4 text-blue-500" />
                  <h4 className="text-lg font-semibold mb-2">Data</h4>
                  <p className="text-gray-400">Illimitée</p>
                </div>
              </div>
            </div>

            {/* Antenne */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Antenne Intégrée</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <Ruler className="w-8 h-8 mb-4 text-blue-500" />
                  <h4 className="text-lg font-semibold mb-2">Dimensions</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>Hauteur : 33 cm</li>
                    <li>Largeur : 33 cm</li>
                    <li>Profondeur : 3,2 cm</li>
                    <li>Poids : 3,2 kg</li>
                  </ul>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <Cpu className="w-8 h-8 mb-4 text-blue-500" />
                  <h4 className="text-lg font-semibold mb-2">Performances</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>Orientation auto</li>
                    <li>Suivi satellitaire</li>
                    <li>WiFi 5 intégré</li>
                    <li>Beam-forming</li>
                  </ul>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <Battery className="w-8 h-8 mb-4 text-blue-500" />
                  <h4 className="text-lg font-semibold mb-2">Alimentation</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>100-240V AC</li>
                    <li>Adaptateur inclus</li>
                    <li>Consommation : 75W</li>
                    <li>Protection intégrée</li>
                  </ul>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <Thermometer className="w-8 h-8 mb-4 text-blue-500" />
                  <h4 className="text-lg font-semibold mb-2">Environnement</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>-30°C à +50°C</li>
                    <li>IP54</li>
                    <li>Dégivrage auto</li>
                    <li>Résiste 160 km/h</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* WiFi Intégré */}
            <div>
              <h3 className="text-2xl font-bold mb-8">WiFi 5 Intégré</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <WifiIcon className="w-8 h-8 mb-4 text-blue-500" />
                  <h4 className="text-lg font-semibold mb-2">Connectivité</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>WiFi 5 (802.11ac)</li>
                    <li>2,4 GHz & 5 GHz</li>
                    <li>MIMO 2x2</li>
                    <li>Portée : 20m</li>
                  </ul>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <Box className="w-8 h-8 mb-4 text-blue-500" />
                  <h4 className="text-lg font-semibold mb-2">Ports</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>1x Ethernet Gigabit</li>
                    <li>1x Alimentation</li>
                    <li>Design compact</li>
                    <li>Tout intégré</li>
                  </ul>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <Shield className="w-8 h-8 mb-4 text-blue-500" />
                  <h4 className="text-lg font-semibold mb-2">Sécurité</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>WPA2</li>
                    <li>Firewall intégré</li>
                    <li>VPN passthrough</li>
                    <li>DHCP sécurisé</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portabilité Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center">Portabilité et Facilité d'Utilisation</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Design Portable</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Ultra Compact</h4>
                    <p className="text-gray-400">Format réduit pour un transport facile dans un sac à dos.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Installation Rapide</h4>
                    <p className="text-gray-400">Prêt à l'emploi en quelques minutes, sans outils nécessaires.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Tout-en-Un</h4>
                    <p className="text-gray-400">Antenne et routeur WiFi intégrés dans un seul appareil.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Application Mobile</h3>
              <div className="bg-black/30 p-6 rounded-lg">
                <Smartphone className="w-12 h-12 text-blue-500 mb-6" />
                <h4 className="text-xl font-semibold mb-4">Application Starlink</h4>
                <ul className="space-y-3 text-gray-400">
                  <li>• Configuration rapide</li>
                  <li>• Visualisation de la couverture</li>
                  <li>• Gestion du WiFi simplifiée</li>
                  <li>• Monitoring des performances</li>
                  <li>• Support en déplacement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StarlinkMini;