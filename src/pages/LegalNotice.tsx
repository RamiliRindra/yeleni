import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export function LegalNotice() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Mentions légales</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Informations légales</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">NIGER</h3>
                  <p className="text-gray-400">Adresse : Koubia Secteur CUN I, 90200 Niamey, Niger</p>
                  <p className="text-gray-400">Téléphone : +227 86 99 00 00</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3">MALI</h3>
                  <p className="text-gray-400">Adresse : Quartier Sotuba ACI, Route du 3eme pont, BP 3057, Bamako, Mali</p>
                  <p className="text-gray-400">Téléphone : +223 74 54 54 54</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Protection des données personnelles</h2>
              <p className="text-gray-400">
                YELENI s'engage à protéger vos données personnelles conformément aux réglementations en vigueur dans chacun des pays où nous opérons. Vous disposez de droits concernant vos données personnelles, notamment les droits d'accès, de rectification et de suppression.
              </p>
              <p className="text-gray-400 mt-4">
                Pour exercer ces droits ou pour toute question relative à la protection de vos données, vous pouvez nous contacter à l'adresse : contact@yeleni.net
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Propriété intellectuelle</h2>
              <p className="text-gray-400">
                L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est protégé par le droit d'auteur. Toute reproduction ou représentation, totale ou partielle, est interdite sans autorisation préalable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Cookies</h2>
              <p className="text-gray-400">
                Le site utilise des cookies pour améliorer l'expérience utilisateur. En naviguant sur ce site, vous acceptez l'utilisation de cookies conformément à notre politique de confidentialité.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default LegalNotice;