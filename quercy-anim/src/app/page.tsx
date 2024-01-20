import Image from "next/image";
import React from "react";
import Header from "@/conteneurs/Headers";
import Banniere from "@/conteneurs/Banniere";
import Prestation from "@/conteneurs/Prestation";
import Staff from "@/conteneurs/Staff";
import RetourClient from "@/conteneurs/Retour";
import Gallery from "@/conteneurs/Gallery";
import Apropos from "@/conteneurs/Apropos";


export default function Home() {
	return (
		<>
			<Header />
			<Banniere />
			<Prestation />
			<Staff />
			<Gallery />
			<Apropos />
			<RetourClient />
			</>
	);
}
