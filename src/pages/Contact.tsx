import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80"
            alt="Contactez YELENI"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <h1 className="text-5xl font-bold mb-6">Contactez-nous</h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Notre équipe est à votre disposition pour répondre à toutes vos questions sur Starlink et vous accompagner dans votre projet.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Nos coordonnées</h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Téléphone</h3>
                    <p className="text-gray-400">+33 1 23 45 67 89</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-400">contact@yeleni.fr</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Adresse</h3>
                    <p className="text-gray-400">123 Avenue des Champs-Élysées<br />75008 Paris</p>
                  </div>
                </div>
              </div>

              <div className="bg-black/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Horaires d'ouverture</h3>
                <div className="space-y-2 text-gray-400">
                  <p>Lundi - Vendredi : 9h00 - 19h00</p>
                  <p>Samedi : 10h00 - 18h00</p>
                  <p>Dimanche : Fermé</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Envoyez-nous un message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-black/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-black/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 bg-black/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                >
                  Envoyer le message
                </button>

                {/* Success Message */}
                <div
                  className={`fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 transition-opacity duration-300 ${
                    isSubmitted ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Message envoyé avec succès !</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;