import React from 'react';
import { Navigation } from '../components/Navigation';
import { Wifi as WifiIcon, Zap, Timer, Cloud, Smartphone, CheckCircle2, Ruler, Box, Thermometer, Shield, Battery, Cpu, Globe2 } from 'lucide-react';

export function StarlinkStandard() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&q=80"
            alt="Starlink Kit Standard"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <h1 className="text-5xl font-bold mb-4">Starlink Kit Standard</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              La solution internet haut débit par satellite pour votre domicile ou votre entreprise.
              Profitez d'une connexion stable et rapide, où que vous soyez.
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
                Le Kit Starlink Standard est conçu pour une utilisation fixe, offrant une connexion internet haut débit fiable pour les domiciles et les entreprises. Avec des vitesses de téléchargement allant jusqu'à 250 Mbps, profitez d'une expérience en ligne fluide pour le streaming, les jeux en ligne et le télétravail.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-black/30 p-4 rounded-lg">
                  <WifiIcon className="w-8 h-8 text-blue-500 mb-2" />
                  <h3 className="font-semibold mb-1">Vitesse</h3>
                  <p className="text-gray-400">Jusqu'à 250 Mbps</p>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <Timer className="w-8 h-8 text-blue-500 mb-2" />
                  <h3 className="font-semibold mb-1">Latence</h3>
                  <p className="text-gray-400">20-40ms</p>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <Globe2 className="w-8 h-8 text-blue-500 mb-2" />
                  <h3 className="font-semibold mb-1">Couverture</h3>
                  <p className="text-gray-400">Mondiale</p>
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
                src="https://images.unsplash.com/photo-1622676017526-6d59d4a1e4ab?auto=format&fit=crop&q=80" 
                alt="Starlink Kit Standard"
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
                  <p className="text-gray-400">150-250 Mb/s</p>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <Zap className="w-8 h-8 mb-4 text-blue-500" />
                  <h4 className="text-lg font-semibold mb-2">Envoi</h4>
                  <p className="text-gray-400">20-40 Mb/s</p>
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
              <h3 className="text-2xl font-bold mb-8">Antenne Starlink</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <Ruler className="w-8 h-8 mb-4 text-blue-500" />
                  <h4 className="text-lg font-semibold mb-2">Dimensions</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>Hauteur : 51 cm</li>
                    <li>Largeur : 51 cm</li>
                    <li>Profondeur : 3,8 cm</li>
                    <li>Poids : 4,2 kg</li>
                  </ul>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <Cpu className="w-8 h-8 mb-4 text-blue-500" />
                  <h4 className="text-lg font-semibold mb-2">Performances</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>Moteurs d'orientation</li>
                    <li>Suivi satellitaire</li>
                    <li>Calibration auto</li>
                    <li>Beam-forming actif</li>
                  </ul>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <Battery className="w-8 h-8 mb-4 text-blue-500" />
                  <h4 className="text-lg font-semibold mb-2">Alimentation</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>100-240V AC</li>
                    <li>Power over Ethernet</li>
                    <li>Consommation : 100W</li>
                    <li>Protection surtension</li>
                  </ul>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <Thermometer className="w-8 h-8 mb-4 text-blue-500" />
                  <h4 className="text-lg font-semibold mb-2">Environnement</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>-30°C à +50°C</li>
                    <li>IP54</li>
                    <li>Dégivrage auto</li>
                    <li>Résiste 174 km/h</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Routeur */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Routeur WiFi 6</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <WifiIcon className="w-8 h-8 mb-4 text-blue-500" />
                  <h4 className="text-lg font-semibold mb-2">Connectivité</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>WiFi 6 (802.11ax)</li>
                    <li>2,4 GHz & 5 GHz</li>
                    <li>MU-MIMO 2x2</li>
                    <li>Portée : 30m</li>
                  </ul>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <Box className="w-8 h-8 mb-4 text-blue-500" />
                  <h4 className="text-lg font-semibold mb-2">Ports</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>2x Ethernet Gigabit</li>
                    <li>1x Alimentation</li>
                    <li>1x Port antenne</li>
                    <li>Compatible PoE</li>
                  </ul>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <Shield className="w-8 h-8 mb-4 text-blue-500" />
                  <h4 className="text-lg font-semibold mb-2">Sécurité</h4>
                  <ul className="text-gray-400 space-y-2">
                    <li>WPA3</li>
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

      {/* Installation Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center">Installation et Configuration</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Installation Facile</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Orientation Automatique</h4>
                    <p className="text-gray-400">L'antenne s'oriente automatiquement pour une réception optimale des satellites Starlink.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Base de Montage Intégrée</h4>
                    <p className="text-gray-400">Installation au sol ou sur toit avec la base de montage incluse.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Câblage Simplifié</h4>
                    <p className="text-gray-400">Un seul câble de 15 mètres pour l'alimentation et les données.</p>
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
                  <li>• Guide d'installation en réalité augmentée</li>
                  <li>• Statistiques en temps réel</li>
                  <li>• Gestion du réseau WiFi</li>
                  <li>• Support technique intégré</li>
                  <li>• Notifications d'état du service</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StarlinkStandard;