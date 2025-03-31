import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous ajouteriez la logique pour envoyer l'email à votre service de newsletter
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
    setEmail('');
  };

  return (
    <footer className="bg-zinc-900">
      {/* Newsletter Section */}
      <div className="border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
              <h3 className="text-2xl font-bold mb-2">Restez informé</h3>
              <p className="text-gray-400">
                Inscrivez-vous à notre newsletter pour recevoir les dernières actualités sur Starlink et nos services.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="w-full md:w-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse email"
                  className="flex-1 md:w-80 px-4 py-3 bg-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center gap-2"
                >
                  <span>S'inscrire</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-8">
            <Link 
              to="/mentions-legales"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Confidentialité et mentions légales
            </Link>
            <Link 
              to="/cgv"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Conditions générales de vente
            </Link>
          </div>
          <p className="text-gray-500">
            © 2024 Yeleni - Distributeur Officiel Starlink. Tous droits réservés.
          </p>
        </div>
      </div>

      {/* Success Message */}
      <div
        className={`fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 transition-opacity duration-300 ${
          isSubscribed ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <CheckCircle2 className="w-5 h-5" />
        <span>Inscription réussie !</span>
      </div>
    </footer>
  );
}