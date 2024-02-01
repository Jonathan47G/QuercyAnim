import Link from "next/link";

export default function PolitiqueConfidentialite() {
	return (
		<section className=" *:text-gold-Primary-text *:w-11/12 *:mb-5 flex flex-col justify-around p-5 md-h-screen w-full">
			<h2 className="text-gold-Secondary-text underline underline-offset-8 text-center mb-10">
				Politique de confidentialité
			</h2>
			<hgroup className="text-lg">
				<h3 className="text-gold-Secondary-text underline underline-offset-8 mb-5">
					Éditeur du site
				</h3>
				<p>Nom : Kévin Guestin</p>
				<p>Téléphone : 06.64.94.84.93</p>
				<p>E-mail : quercy.anim@gmail.com</p>

				<p>
					<strong>Quercy Anim&apos;</strong>
					<br />
					Les plaines de Fillol, 82150 Montaigu-de-Quercy
					<br />
					SIRET : 799 448 36000021
					<br />
					Responsable de publication : Kévin Guestin
				</p>

				<p>
					Quercy Anim&apos;, en tant que gardien vigilant de vos données,
					accorde une signification particulière à la préservation de votre
					sphère privée. Cette politique vise à vous informer sur la cueillette,
					l&apos;exploitation et la diffusion des informations fournies via
					notre site internet :
					<Link href="https://quercy-anim.vercel.app/">
						quercy-anim.vercel.app
					</Link>
				</p>
			</hgroup>
			<hgroup className="text-lg">
				<h3 className="text-gold-Secondary-text underline underline-offset-8 mb-5">
					Données collectées
				</h3>
				<p>
					En parcourant le site, vous êtes susceptible de transmettre des
					données à caractère personnel, notamment à travers des commentaires.
					Ces informations englobent diverses données, telles que :
				</p>
				<ul>
					<li>
						Commentaires : données issues du formulaire de commentaire, adresse
						IP.
					</li>
					<li>Médias : images sans données EXIF de coordonnées GPS.</li>
					<li>
						Cookies : Aucun cookie n&apos;est utilisé pour stocker des
						informations.
					</li>
					<li>
						Données rendues publiques : informations affichées volontairement
						sur le site.
					</li>
					<li>
						Données relatives à la navigation : date, heure, type de navigateur,
						adresse IP.
					</li>
				</ul>
			</hgroup>
			<hgroup className="text-lg">
				<h3 className="text-gold-Secondary-text underline underline-offset-8 mb-5">
					Utilisation des données
				</h3>
				<p>
					Les données récoltées servent aux commentaires, au formulaire de
					contact, à l&apos;envoi de newsletters et à l&apos;établissement de
					statistiques de fréquentation.
				</p>
			</hgroup>
			<hgroup className="text-lg">
				<h3 className="text-gold-Secondary-text underline underline-offset-8 mb-5">Destinataires des données</h3>
				<p>
					Les données collectées sont destinées à Quercy Anim&apos;, en qualité
					de protecteur des données. Elles peuvent être partagées avec des
					autorités et/ou organismes publics, conformément à la réglementation
					en vigueur, ainsi qu&apos;avec des tiers tels que des sous-traitants
					et partenaires commerciaux.
				</p>
			</hgroup>
			<hgroup className="text-lg">
				<h3 className="text-gold-Secondary-text underline underline-offset-8 mb-5">
					Conservation des données
				</h3>
				<p>
					Les données sont conservées pour la durée nécessaire aux finalités
					poursuivies et en conformité avec les lois applicables. Au-delà, elles
					pourraient être archivées pour des raisons légales.
				</p>
			</hgroup>
			<hgroup className="text-lg">
				<h3 className="text-gold-Secondary-text underline underline-offset-8 mb-5">
					Protection des données
				</h3>
				<p>
					Nous mettons en œuvre des mesures techniques et organisationnelles
					pour assurer la sécurité de vos données et éviter tout accès non
					autorisé.
				</p>
			</hgroup>
			<hgroup className="text-lg">
				<h3 className="text-gold-Secondary-text underline underline-offset-8 mb-5">
					Vos droits
				</h3>
				<p>
					Vous disposez de droits sur vos données, comprenant l&apos;accès, la
					rectification, l&apos;effacement, la limitation du traitement, la
					portabilité et le droit d&apos;opposition. Pour exercer ces droits,
					contactez-nous à l&apos;adresse indiquée ci-dessous.
				</p>

				<p>
					Quercy Anim&apos;
					<br />
					Les plaines de Fillol, 82150 Montaigu-de-Quercy
					<br />
					Téléphone : 06.64.94.84.93
					<br />
					E-mail : quercy.anim@gmail.com
				</p>
			</hgroup>
		</section>
	);
}
