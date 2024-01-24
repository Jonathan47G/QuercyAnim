"use client";

import Card from "@/elements/Card";
import Image from "next/image";
import staffData from "../../data/staff.json";
import fondEcran from "../../public/images/photo/bg-equipe.webp";

export default function Staff() {
	return (
		<section className="mt-[100px] bg-iris-Background-1 lg:h-[900px]" aria-label="Équipe Quercy Anim'">
			<div className="relative h-full">
			<div className="absolute h-full overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-b from-iris-Background-2 via-transparent to-iris-Background-2 h-full w-full z-10"></div>
			<Image
				src={fondEcran}
				alt="Équipe Quercy Anim'"
				className="opacity-1 object-cover h-full"
			/>
			</div>
			<div>
			</div>
				<div className="relative z-10 p-5">
			<h2 className="decoration-[#696256] decoration-2 underline underline-offset-[9px] backdrop-blur-sm mt-[50px] mb-[50px] text-center p-10">
				<strong>Notre équipe</strong>
			</h2>
			<div className="flex flex-col lg:flex-row lg:justify-around text-gold-Primary-text z-30 lg:gap-5 gap-11">
				{staffData.map((staff) => (
					<article
						key={staff.id}
						className=" lg:w-2/5 flex flex-col items-center gap-5 p-5 backdrop-blur-lg border border-gold-Border-sep-2 rounded-b-md hover:scale-105 transition-transform"
						aria-label={`Membre du personnel : ${staff.titre}`}>
						<Image
							src={staff.image}
							alt={`Image de ${staff.titre}`}
							height={100}
							width={100}
							className="rounded-full object-cover h-[150px] w-[150px] border-2 border-gold-Border-ring-1"
						/>
						<div className="bg-gradient-to-r from-gold-Border-sep-1 via-gold-Border-ring-1 to-gold-Primary-text w-1/2 h-[2px]"></div>
						<hgroup className="flex flex-col justify-center items-center gap-5  text-xl">
							<h3>{staff.titre}</h3>
							<p>{staff.fonction}</p>
							<p  className="whitespace-pre-wrap indent-8 text-base">{staff.description}</p>
						</hgroup>
						
					</article>
				))}
				</div>
			</div>
			</div>
			
		</section>
	);
}
