import type { Metadata } from "next";
import { Playfair, Josefin_Sans } from "next/font/google";
import { LocalBusiness, WithContext } from "schema-dts";
import "./globals.css";
import Header from "@/conteneurs/Headers";
import Footer from "@/conteneurs/Footer";

const playfair = Playfair({ subsets: ["latin"], variable: "--font-playfair" });
const josefin = Josefin_Sans({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-josefin",
});

export const metadata: Metadata = {
	metadataBase: new URL('https://quercy-anim.vercel.app/'),
	alternates: {
		canonical:'https://quercy-anim.vercel.app/'
	},
	title: "Quercy Anim",
	description:
		"DJ, Disc-jockey, Discomobile, animation, fête, mariage, anniversaire, événement, musique",
	authors: { name: "Guestin" },
	keywords:
		"DJ, Discomobile, village, animation, fête, mariage, anniversaire, événement, musique, entreprise, lumière, animation, animateur",

	openGraph: {
		title: "Quercy Anim'",
		description:
			"DJ Animateur (Discomobile) spécialisé dans l'animation de fêtes de village, mariages, anniversaires, et autres événements. Apporte une ambiance dynamique et festive à toutes les occasions. Contactez-nous pour créer des moments mémorables avec une musique et une animation adaptées à vos besoins.",
		siteName: "Quercy Anim'",
		url: "https://quercy-anim.vercel.app/",
		images: [
			{
				url: "/images/card/animation_soiree.webp",
				width: 800,
        height: 600,
        alt: 'Kévin Guestin',
			},
		],
		locale: 'fr_FR',
		type: 'website',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const jsonLd: WithContext<LocalBusiness> = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		name: "Quercy Anim",
		image: "/images/kevin_nico.webp",
		address: {
			"@type": "PostalAddress",
			streetAddress: "Les plaines de, Fillol,  ",
			addressLocality: "Montaigu-de-Quercy",
			addressRegion: "Tarn et Garonne",
			postalCode: "82150",
		},
		telephone: "06 64 94 84 93",
		priceRange: "$$",
		description:
			"DJ Animateur (Discomobile) spécialisé dans l'animation de fêtes de village, mariages, anniversaires, et autres événements. Apporte une ambiance dynamique et festive à toutes les occasions. Contactez-nous pour créer des moments mémorables avec une musique et une animation adaptées à vos besoins.",
	};
	return (
		<html
			className={`max-w-[2000px] m-auto bg-iris-Background-1 ${playfair.variable} ${josefin.variable}`}
			lang="fr">
			<head>
				<script
					src="https://static.elfsight.com/platform/platform.js"
					data-use-service-core
					defer
				/>
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
			</head>
			<body className="bg-iris-Background-2">
				<Header /> {children} <Footer />
			</body>
		</html>
	);
}
