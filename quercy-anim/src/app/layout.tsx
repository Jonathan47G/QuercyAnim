import type { Metadata } from "next";
import { Playfair, Josefin_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "@/conteneurs/Headers";
import Footer from "@/conteneurs/Footer";

const playfair = Playfair({ subsets: ["latin"], variable: "--font-playfair" });
const josefin = Josefin_Sans({
	subsets: ["latin"],
	weight: "400",
  variable: "--font-josefin"
});

export const metadata: Metadata = {
	title: "Quercy Anim' - Animation",
	description: "DJ, Discomobile, animation, fête, mariage, anniversaire, événement, musique",
	authors: {name:"Guestin"} ,
	keywords: "DJ, Discomobile, village, animation, fête, mariage, anniversaire, événement, musique, entreprise, lumière, animation, animateur",
	
	
	openGraph: {
		type: "website",
		url: "https://example.com",
		title: "Quercy Anim'",
		description: "DJ Animateur (Discomobile) spécialisé dans l'animation de fêtes de village, mariages, anniversaires, et autres événements. Apporte une ambiance dynamique et festive à toutes les occasions. Contactez-nous pour créer des moments mémorables avec une musique et une animation adaptées à vos besoins.",
		siteName: "Quercy Anim'",
		images: [{
		  url: "https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/406372072_17932014218789260_1701479443704410279_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=4lOHin_9RcUAX9D2M45&_nc_ht=scontent-cdg4-2.xx&oh=00_AfAXMbPWds2earcoX1-z4NDfN5VBvghwYQ9D06Xr6mLT1A&oe=65B749F3",
		}],
	  }
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			className={`max-w-[2000px] m-auto bg-iris-Background-1 ${playfair.variable} ${josefin.variable}`}
			lang="fr">
				<head><Script
          src="https://static.elfsight.com/platform/platform.js"
          data-use-service-core
          defer
        />
		<script type="application/ld+json" src="/djSchema.json"  defer/>
		</head>
			<body className="bg-iris-Background-2"><Header/> {children} <Footer /></body>
		</html>
	);
}
