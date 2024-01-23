"use client";

import Card from "@/elements/Card";
import Image from "next/image";
import imageAutres from "../../public/images/card/autres.jpg";
import waveLine from "../../public/waveLine.svg";
export default function Prestation() {
	const cardProps = {
		cardClassName:
			"flex flex-col bg-[#3636FE0E] border-2 border-gold-Border-sep-1 rounded-b-lg",
	};
	return (
		<section className="bg-iris-Background-2 text-gold-Primary-text lg:pt-[150px] flex flex-col relative items-center gap-10 "  id="Prestations">
			<div className="absolute w-full z-0 top top-[-75px]">
				<Image
					className="object-fill w-full lg:h-[500px] opacity-60 z-0"
					src={waveLine}
					alt="Fond en forme d'onde"
				/>
			</div>
			<h2 className="decoration-[#696256] decoration-2 underline underline-offset-[9px] lg:mb-[125px] text-center z-10">
				<strong>Nos prestations</strong>
			</h2>

			<div className="grid lg:grid-cols-4  gap-11 w-11/12 m-auto z-10">
				<Card
					style={cardProps.cardClassName}
					image="/images/card/animation_soiree.jpg"
					title="Animation de soirée"
					text1="Quercy'Anim met à votre disposition des DJ expérimentés et passionnés qui sauront créer une ambiance festive et entraînante pour tous vos événements."
					text2="Nous sommes spécialisés dans l'animation de soirées dansantes et nous nous adaptons à tous les styles musicaux."
				/>
				<Card
					style={cardProps.cardClassName}
					image="/images/card/eclairage.jpg"
					title="Éclairage"
					text1="Notre équipe maîtrise l'art de l'éclairage pour créer des ambiances visuelles captivantes."
					text2="Nous utilisons des jeux de lumières, des projecteurs et des effets spéciaux pour illuminer votre événement et créer une atmosphère unique."
				/>
				<Card
					style={cardProps.cardClassName}
					image="/images/card/sonorisation.jpg"
					title="Sonorisation"
					text1="Nous disposons d'un matériel professionnel de sonorisation qui garantit une qualité sonore exceptionnelle."
					text2="Que ce soit pour une petite salle ou un grand espace, nous ajustons notre système de sonorisation en fonction de vos besoins et de l'acoustique de l'endroit."
				/>
				<Card
					style={cardProps.cardClassName}
					image="/images/card/prestation_tech.jpg"
					title="Prestations techniques"
					text1="En plus de l'animation, de la sonorisation et de l'éclairage, Quercy'Anim propose une gamme de prestations techniques pour répondre à tous vos besoins.
                    "
					text2="Cela inclut la mise en place de scènes, la gestion des équipements audiovisuels, la coordination technique avec d'autres prestataires, etc."
				/>
			</div>
			<div className="bg-[#3636FE0E] flex flex-col-reverse lg:flex-row border-gold-Border-sep-1 border-2 w-11/12 lg:w-2/3 rounded mt-10">
				<div className=" text-gold-Secondary-txt p-5 text-lg flex flex-col justify-evenly">
					<p>
						Nous sommes flexibles et nous nous adaptons à vos demandes
						spécifiques.
					</p>
					<p>
						Que vous ayez besoin de notre expertise pour animer une soirée
						privée, un mariage, un anniversaire ou tout autre événement, nous
						sommes là pour rendre votre expérience inoubliable.
					</p>

					<p>
						N&apos;hésitez pas à nous contacter pour discuter de vos besoins et
						obtenir une proposition sur mesure pour votre événement.
					</p>
				</div>
				<div className="flex relative">
					<div className="bg-gradient-to-t from-gold-Border-sep-1 via-gold-Border-ring-1 to-gold-Primary-text w-full h-[2px] top-52 lg:top-0 lg:h-full lg:w-[2px] absolute"></div>
					<Image
						src={imageAutres}
						alt=""
						width={500}
						height={800}
						className="h-[208px] w-full object-cover lg:h-auto"
					/>
				</div>
			</div>
		</section>
	);
}
