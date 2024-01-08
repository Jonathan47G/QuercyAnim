"use client";

import Card from "@/elements/Card";
import Image from "next/image";

export default function Prestation() {
	return (
		<section className="bg-Background-2 text-white w-11/12">
			<h2>Nos prestations</h2>
			<div className="grid grid-cols-4 gap-5">
				<Card
					style="flex flex-col justify-center items-center"
					image="/images/card/animation_soiree.jpg"
					title="Animation de soirée"
					text1="Quercy'Anim met à votre disposition des DJ expérimentés et passionnés qui sauront créer une ambiance festive et entraînante pour tous vos événements."
                    text2="Nous sommes spécialisés dans l'animation de soirées dansantes et nous nous adaptons à tous les styles musicaux."
				/>
				<Card
					style="bg-red"
					image="/images/card/eclairage.jpg"
					title="Éclairage"
					text1="Notre équipe maîtrise l'art de l'éclairage pour créer des ambiances visuelles captivantes."
                    text2="Nous utilisons des jeux de lumières, des projecteurs et des effets spéciaux pour illuminer votre événement et créer une atmosphère unique."
				/>
				<Card
					style="bg-red"
					image="/images/card/sonorisation.jpg"
					title="Sonorisation"
					text1="Nous disposons d'un matériel professionnel de sonorisation qui garantit une qualité sonore exceptionnelle."
					text2="Que ce soit pour une petite salle ou un grand espace, nous ajustons notre système de sonorisation en fonction de vos besoins et de l'acoustique de l'endroit."
				/>
				<Card
					style="bg-red"
					image="/images/card/prestation_tech.jpg"
					title="Prestations techniques"
					text1="Quercy'Anim met à votre disposition des DJ expérimentés et passionnés qui sauront créer une ambiance festive et entraînante pour tous vos événements."
                    text2="Nous sommes spécialisés dans l'animation de soirées dansantes et nous nous adaptons à tous les styles musicaux."
				/>
			</div>
		</section>
	);
}
