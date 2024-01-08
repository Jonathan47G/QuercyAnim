import Image from "next/image";
import React from "react";
import fetchFacebookData from "@/conteneurs/test";
import Header from "@/conteneurs/Headers";
import Banniere from "@/conteneurs/Banniere";

export default function Home() {
	return (
		<>
			<Header />
			<Banniere />
		</>
	);
}
