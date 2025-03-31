import React from 'react';
import { Wifi as WifiIcon, Zap, Timer, Cloud, Smartphone, CheckCircle2, Ruler, Box, Thermometer, Shield } from 'lucide-react';
import { Navigation } from '../components/Navigation';

export function Products() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <Navigation />
      
      <div className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-16">Spécifications Techniques</h1>
          
          <div className="space-y-24">
            {/* Contenu du Kit */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Contenu du Kit</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <CheckCircle2 className="w-8 h-8 mb-4 text-blue-500" />
                  <h3 className="text-lg font-semibold mb-2">Antenne Starlink</h3>
                  <p className="text-gray-400">Antenne à orientation automatique avec base de montage intégrée</p>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <CheckCircle2 className="w-8 h-8 mb-4 text-blue-500" />
                  <h3 className="text-lg font-semibold mb-2">Routeur WiFi</h3>
                  <p className="text-gray-400">Routeur WiFi 6 avec alimentation électrique</p>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <CheckCircle2 className="w-8 h-8 mb-4 text-blue-500" />
                  <h3 className="text-lg font-semibold mb-2">Câbles</h3>
                  <p className="text-gray-400">Câble de 15 mètres reliant l'antenne au routeur</p>
                </div>
              </div>
            </div>

            {/* Spécifications de l'Antenne */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Spécifications de l'Antenne</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <Ruler className="w-8 h-8 mb-4 text-blue-500" />
                  <h3 className="text-lg font-semibold mb-2">Dimensions</h3>
                  <ul className="text-gray-400 space-y-2">
                    <li>Hauteur : 51 cm</li>
                    <li>Largeur : 51 cm</li>
                    <li>Profondeur : 3,8 cm</li>
                    <li>Poids : 4,2 kg</li>
                  </ul>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <Box className="w-8 h-8 mb-4 text-blue-500" />
                  <h3 className="text-lg font-semibold mb-2">Installation</h3>
                  <ul className="text-gray-400 space-y-2">
                    <li>Base de montage intégrée</li>
                    <li>Orientation automatique</li>
                    <li>Montage au sol</li>
                    <li>Montage sur toit ou mur</li>
                  </ul>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <Thermometer className="w-8 h-8 mb-4 text-blue-500" />
                  <h3 className="text-lg font-semibold mb-2">Environnement</h3>
                  <ul className="text-gray-400 space-y-2">
                    <li>Température : -30°C à +50°C</li>
                    <li>Résistance à la pluie et neige</li>
                    <li>Dégivrage automatique</li>
                    <li>Résistance au vent : 174 km/h</li>
                  </ul>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <Shield className="w-8 h-8 mb-4 text-blue-500" />
                  <h3 className="text-lg font-semibold mb-2">Certifications</h3>
                  <ul className="text-gray-400 space-y-2">
                    <li>CE</li>
                    <li>IP54</li>
                    <li>UL 60950-1/-22</li>
                    <li>Conformité RoHS</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Spécifications du Routeur */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Spécifications du Routeur</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <WifiIcon className="w-8 h-8 mb-4 text-blue-500" />
                  <h3 className="text-lg font-semibold mb-2">WiFi</h3>
                  <ul className="text-gray-400 space-y-2">
                    <li>WiFi 6 (802.11ax)</li>
                    <li>Double bande 2,4/5 GHz</li>
                    <li>MU-MIMO 2x2</li>
                    <li>Portée jusqu'à 30m</li>
                  </ul>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <Ruler className="w-8 h-8 mb-4 text-blue-500" />
                  <h3 className="text-lg font-semibold mb-2">Dimensions</h3>
                  <ul className="text-gray-400 space-y-2">
                    <li>Hauteur : 11,9 cm</li>
                    <li>Largeur : 17,8 cm</li>
                    <li>Profondeur : 5,1 cm</li>
                    <li>Poids : 0,5 kg</li>
                  </ul>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <Box className="w-8 h-8 mb-4 text-blue-500" />
                  <h3 className="text-lg font-semibold mb-2">Ports</h3>
                  <ul className="text-gray-400 space-y-2">
                    <li>2x ports Ethernet Gigabit</li>
                    <li>1x port d'alimentation</li>
                    <li>1x port antenne</li>
                    <li>Compatible PoE</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Performance */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Performance</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <WifiIcon className="w-8 h-8 mb-4 text-blue-500" />
                  <h3 className="text-lg font-semibold mb-2">Téléchargement</h3>
                  <p className="text-gray-400">20-220 Mb/s</p>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <Zap className="w-8 h-8 mb-4 text-blue-500" />
                  <h3 className="text-lg font-semibold mb-2">Envoi</h3>
                  <p className="text-gray-400">10-25 Mb/s</p>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <Timer className="w-8 h-8 mb-4 text-blue-500" />
                  <h3 className="text-lg font-semibold mb-2">Latence</h3>
                  <p className="text-gray-400">20-40 ms</p>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <Cloud className="w-8 h-8 mb-4 text-blue-500" />
                  <h3 className="text-lg font-semibold mb-2">Sans limite</h3>
                  <p className="text-gray-400">Data illimitée</p>
                </div>
              </div>
            </div>

            {/* Application Mobile */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Application Mobile</h2>
              <div className="bg-zinc-900 p-8 rounded-lg">
                <div className="flex items-start space-x-6">
                  <Smartphone className="w-12 h-12 text-blue-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Application Starlink</h3>
                    <div className="space-y-4 text-gray-400">
                      <p>L'application Starlink vous guide tout au long du processus d'installation et vous permet de gérer votre service :</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Assistant d'installation pas à pas avec visualisation en réalité augmentée</li>
                        <li>Statistiques en temps réel (débit, latence, temps de connexion)</li>
                        <li>Gestion du réseau WiFi (nom, mot de passe, appareils connectés)</li>
                        <li>Support technique intégré</li>
                        <li>Notifications sur l'état du service</li>
                      </ul>
                      <p>Disponible gratuitement sur iOS et Android.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}