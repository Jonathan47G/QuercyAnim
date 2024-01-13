"use client";

import Card from "@/elements/Card";
import Image from "next/image";
import staffData from "../../data/staff.json";
import fondEcran from "../../public/images/photo/bg-equipe.jpg";

export default function Staff() {
	return (
		<section className="mt-[100px] relative bg-iris-Background-1">
			<div className="absolute h-[800px] overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-b from-iris-Background-2 via-transparent to-iris-Background-2 h-full w-full z-10"></div>
			<Image
				src={fondEcran}
				alt="Équipe Quercy Anim'"
				className="opacity-1 object-cover"
			/>

			</div>
			<div>
				<div className="relative z-10">
			<h2 className="decoration-[#696256] decoration-2 underline underline-offset-[9px] backdrop-blur-sm mt-[50px] mb-[50px] text-center text-white p-10">
				<strong>Notre équipe</strong>
			</h2>
			<div className="flex justify-around text-gold-Primary-text z-30 gap-5">
				{staffData.map((staff) => (
					<article
						key={staff.id}
						className=" w-2/5 flex flex-col items-center gap-5 p-5 bg-[#564BF916] border-2 border-[#FFEDCD48] rounded-b-lg">
						<Image
							src={staff.image}
							alt={`Image de ${staff.titre}`}
							height={100}
							width={100}
							className="rounded-full object-cover h-[150px] w-[150px] border-2 border-gold-Border-ring-1"
						/>
						<div className="bg-gradient-to-r from-gold-Border-sep-1 via-gold-Border-ring-1 to-gold-Primary-text w-1/2 h-[2px]"></div>
						<hgroup className="flex flex-col justify-center items-center gap-5">
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
