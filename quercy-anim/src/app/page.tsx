import Image from "next/image";
import React from "react";
import fetchFacebookData from "@/conteneurs/test";
import Header from "@/conteneurs/Headers";
import Banniere from "@/conteneurs/Banniere";
import Prestation from "@/conteneurs/Prestation";
import Staff from "@/conteneurs/Staff";

export default function Home() {
	return (
		<>
			<Header />
			<Banniere />
			<Prestation />
			<Staff />
		</>
	);
}
