import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export function TermsOfSale() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">CONDITIONS GÉNÉRALES DE VENTE - YELENI</h1>
          <p className="text-gray-400 mb-8">- Mis à jour le 31 mars 2025 -</p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">PRÉAMBULE</h2>
              <p className="text-gray-400">
                Les présentes conditions générales de vente s'appliquent exclusivement à toutes les ventes conclues avec la société YELENI, en sa qualité de Revendeur Officiel Agréé STARLINK et d'autres produits technologiques sur le territoire africain. Elles peuvent être modifiées à tout moment sans préavis ; seules les conditions en vigueur à la date de la commande font foi.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Art 1. PRIX</h2>
              <p className="text-gray-400">
                Tous les prix sont exprimés en monnaie locale (FCFA, Franc Guinéen, Ariary, etc.) selon le pays d'opération. Ils s'entendent hors frais supplémentaires éventuels (livraison, installation, configuration, etc.), lesquels sont précisés avant validation de la commande. YELENI se réserve le droit de modifier ses tarifs à tout moment, mais les produits sont facturés sur la base des prix en vigueur au moment de la validation de la commande.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Art 2. DEVIS</h2>
              <p className="text-gray-400">
                Des devis gratuits peuvent être établis à la demande. Sauf mention contraire, la validité du devis est de 15 jours. Le devis n'assure pas la disponibilité des articles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Art 3. COMMANDES</h2>
              <p className="text-gray-400">
                Les commandes peuvent être passées en agence YELENI, par téléphone, par email ou sur les sites et canaux numériques de YELENI. Elles concernent des produits disponibles immédiatement ou à court terme (délai annoncé). Les produits non disponibles font l'objet d'une commande spéciale ou d'une précommande.
              </p>
              <p className="text-gray-400 mt-4">
                Sont assimilés à une commande :
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-400">
                <li>Réservations : produits disponibles en agence mis de côté pour un règlement différé.</li>
                <li>Commandes spéciales : produits non disponibles localement mais en stock chez nos fournisseurs internationaux.</li>
                <li>Précommandes : produits non encore disponibles chez les fournisseurs (nouveautés).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Art 4. VALIDATION DE COMMANDE</h2>
              <p className="text-gray-400">
                La validation de commande vaut acceptation des produits, prix, quantités et des présentes CGV. Une commande validée est ferme et définitive. En cas de réservation, commande spéciale ou précommande, un acompte de 30% non remboursable est exigé. En cas de non-retrait à la date convenue, des pénalités de 2,5% par semaine de retard peuvent être appliquées. Passé 12 semaines, YELENI se réserve le droit de conserver l'objet de la commande et l'acompte.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Art 5. RÈGLEMENT</h2>
              <p className="text-gray-400">
                Le règlement est exigible comptant, sauf accord spécifique. Modes acceptés : espèces, carte bancaire, mobile money, virement bancaire. La livraison est conditionnée à la réception effective des fonds. Tout retard de paiement sur règlement différé entraîne des pénalités de 1% par semaine entamée.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Art 6. CONFORMITÉ DES PRODUITS</h2>
              <p className="text-gray-400">
                Le client ou son représentant est tenu de vérifier la conformité des produits à la livraison. En cas d'anomalie visible, des réserves doivent être mentionnées sur le bon de livraison. L'acceptation sans réserve vaut confirmation de conformité. Les anomalies techniques relèvent de la garantie (voir ci-après).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Art 7. RÉTRACTATION</h2>
              <p className="text-gray-400">
                Aucune rétractation ne sera acceptée après validation de la commande ou versement d'un acompte. Les produits livrés ne sont ni repris ni échangés, sauf accord exceptionnel ou cas de non-conformité dûment constatée.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">CONDITIONS DE GARANTIE</h2>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Art 8. CADRE DE LA GARANTIE</h3>
              <p className="text-gray-400">
                La garantie s'applique aux produits vendus par YELENI pour une durée précisée à l'achat. Elle couvre les défauts techniques rendant le produit inutilisable, à l'exclusion des dommages liés à une mauvaise utilisation ou à des facteurs extérieurs.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">Art 9. PRISE EN CHARGE</h3>
              <p className="text-gray-400">
                YELENI ou le fabricant peut choisir de réparer, remplacer ou rembourser partiellement le produit selon sa politique de garantie, en tenant compte de la vétusté (2,5% par mois). Les pièces remplacées deviennent propriété de YELENI.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">Art 10. EXCLUSION DE GARANTIE</h3>
              <p className="text-gray-400">
                La garantie ne couvre pas : surtensions électriques, mauvaise utilisation, installation non conforme, détérioration extérieure, usure normale, logiciel, accessoires tiers, données personnelles. Toute modification non autorisée entraîne l'annulation de la garantie.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">Art 11. MISE EN OEUVRE</h3>
              <p className="text-gray-400">
                Pour faire valoir la garantie, le produit doit être retourné en agence YELENI avec son emballage, ses accessoires et la preuve d'achat. Le diagnostic de YELENI ou du fabricant fait foi. La durée de prise en charge dépend de la nature de la réparation et des délais d'approvisionnement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">CONDITIONS DE LIVRAISON</h2>

              <h3 className="text-xl font-bold mt-6 mb-3">Art 12. CADRE DE LA LIVRAISON</h3>
              <p className="text-gray-400">
                YELENI peut organiser la livraison des produits commandés. Ce service est proposé selon les modalités définies ci-après et acceptées lors de la commande.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">Art 13. CALENDRIER DE LIVRAISON</h3>
              <p className="text-gray-400">
                Les livraisons sont effectuées du lundi au samedi de 9h à 17h, dans un délai de 24 à 72h après mise à disposition du produit. Un accord préalable est requis sur la date, l'heure, le lieu et le tarif éventuel de la livraison.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">Art 14. LIEU DE LIVRAISON</h3>
              <p className="text-gray-400">
                L'adresse de livraison doit être précise, accessible et sécurisée. En cas d'inaccessibilité, la livraison sera redirigée vers un point de retrait plus approprié.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">Art 15. ZONES DE LIVRAISON ET TARIFS</h3>
              <p className="text-gray-400">
                Chaque agence YELENI publie ses propres zones de livraison et barèmes tarifaires. En cas de livraison en province, le produit est remis à un transporteur tiers choisi par le client, à ses frais.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">Art 16. ORGANISATION DE LA LIVRAISON</h3>
              <p className="text-gray-400">
                Une fois le créneau fixé, il ne peut être modifié. En cas d'absence ou d'indisponibilité, la commande est retournée à l'agence et pourra être retirée sur place ou relivrée avec frais supplémentaires.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">Art 17. LIMITES DE LA LIVRAISON</h3>
              <p className="text-gray-400">
                La livraison s'arrête au seuil accessible du domicile. Aucune manutention, installation ou configuration n'est incluse, sauf service complémentaire facturé et convenu à l'avance.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">Art 18. RÉCEPTION DE LA LIVRAISON</h3>
              <p className="text-gray-400">
                Le client ou un mandataire doit contrôler le colis et signaler toute anomalie sur le bon de livraison. En cas de non-conformité grave, il est conseillé de refuser la livraison.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">DISPOSITIONS FINALES</h2>

              <h3 className="text-xl font-bold mt-6 mb-3">Art 19. LITIGES</h3>
              <p className="text-gray-400">
                Le présent contrat est régi par les lois du pays de l'agence YELENI concernée. En cas de litige, les tribunaux locaux sont seuls compétents.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">Art 20. CLAUSE LIMITATIVE DE RESPONSABILITÉ</h3>
              <p className="text-gray-400">
                Dans le cadre d'articles vendus par YELENI mais dont le service affilié est fourni par un tiers (notamment Starlink, Playstation Store, Microsoft Store, Nintendo Store), YELENI ne pourra en aucun cas être tenu responsable de l'indisponibilité, de la suspension, du dysfonctionnement ou de la suppression du service. Il appartient au client de s'informer, de s'abonner et de se désabonner, de contacter le support du service pour résoudre d'éventuels incidents. La responsabilité de YELENI se limite à la vente de l'équipement et à la mise en relation avec le fabricant en cas d'incident sur le matériel.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">Art 21. SUPPORT STARLINK</h3>
              <p className="text-gray-400">
                Pour tout produit Starlink, l'intégralité des demandes de support technique, réclamations ou problèmes d'utilisation doivent être adressées directement par le client via le portail officiel de support en ligne Starlink. Le traitement des incidents techniques, les décisions de remplacement ou de remboursement relèvent exclusivement de Starlink.
              </p>
              <p className="text-gray-400 mt-4">
                YELENI agit uniquement en exécution des décisions prises par Starlink. Toute intervention (remplacement d'un kit, retour de matériel, etc.) sera effectuée conformément aux instructions transmises par le support Starlink. YELENI ne peut être tenu responsable d'un retard, d'un refus de prise en charge ou d'un arbitrage défavorable décidé par Starlink dans le cadre de leur politique mondiale d'assistance.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default TermsOfSale;