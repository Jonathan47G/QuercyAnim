import Link from "next/link";

export default function MentionLegales() {
	return (
		<section className=" *:text-gold-Primary-text *:w-11/12 flex flex-col justify-around p-5 md:h-screen w-full">
			<h2 className="text-gold-Secondary-text underline underline-offset-8 text-center mb-10">Mentions légales</h2>
			<hgroup className="text-lg">
				<h3 className="text-gold-Secondary-text underline underline-offset-8 mb-5">Objet du site</h3>
				<p className="">
					Ce site présente les services de Quercy Anim&apos;, une entreprise
					spécialisée dans l&apos;organisation de soirées et d&apos;événements
					exclusifs.
				</p>
			</hgroup>
			<hgroup className="text-lg">
				<h3 className="text-gold-Secondary-text underline underline-offset-8 mb-5">Éditeur du site</h3>
				<p>Nom : Kévin Guestin</p>
				<p>Téléphone : 06.64.94.84.93</p>
				<p>E-mail : quercy.anim@gmail.com</p>
			</hgroup>
			<hgroup className="text-lg">
				<h3 className="text-gold-Secondary-text underline underline-offset-8 mb-5">Mise en œuvre</h3>
				<p>
					Développé par Jonathan Guestin :{" "}
					<Link href="https://guestinjonathan.vercel.app/">
						Lien vers le portfolio
					</Link>
				</p>
				<p>Site créé avec Next.js et Tailwind CSS</p>
			</hgroup>
			<hgroup className="text-lg">
				<h3 className="text-gold-Secondary-text underline underline-offset-8 mb-5">Données personnelles</h3>
				<p>Aucune donnée personnelle n’est conservée par ce site web.</p>
			</hgroup>
			<hgroup className="text-lg">
				<h3 className="text-gold-Secondary-text underline underline-offset-8 mb-5">Propriété Intellectuelle</h3>
				<p>
					L’ensemble du contenu (images, vidéos, textes) de ce site est protégé
					par le droit d’auteur conformément à la législation française et
					internationale sur la propriété intellectuelle.
				</p>
				<p className="mt-5 mb-2 underline"><em>Tous droits réservés :</em></p>
				<p>
					Toute reproduction, représentation, publication, transmission ou
					exploitation non autorisée, même partielle, engage votre
					responsabilité et peut entraîner des poursuites judiciaires, notamment
					pour contrefaçon. En accédant à ce site, vous reconnaissez
					expressément que tous les éléments présents peuvent faire l’objet de
					droits de propriété intellectuelle au profit de Quercy Anim&apos;.
				</p>
			</hgroup>
			<hgroup className="text-lg">
				<h3 className="text-gold-Secondary-text underline underline-offset-8 mb-5">Hébergeur</h3>
				<p>
					Ce site est hébergé par Vercel Inc. à l&apos;adresse suivante : 440 N
					Barranca Ave #4133, Covina, CA 91723. <p>Contact : privacy@vercel.com</p>
				</p>
			</hgroup>
		</section>
	);
}
