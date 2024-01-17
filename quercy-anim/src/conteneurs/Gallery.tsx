"use client";
import { useState } from "react";
import Image from "next/image";
import galleryData from "@/../../data/galerie.json";
import Masonry from "@mui/lab/Masonry";

import useLightbox from "@/elements/useLightBox";
import "yet-another-react-lightbox/styles.css";

export default function Gallery() {
	
	const { openLightbox, renderLightbox } = useLightbox();
	const imagesForLightbox = galleryData.map((item) => ({ src: item.image}));


	return (
		<section className="w-full mt-10 overflow-hidden p-5 " aria-label="Quercy Anim en images">
			<h2 className="mt-5 text-center decoration-[#696256] decoration-2 underline underline-offset-[9px] font-extrabold">Notre Galerie de Photos</h2>
			<Masonry
				columns={4}
				spacing={2}
				defaultHeight={900}
				defaultColumns={2}
				defaultSpacing={1}
				className="content-center box-border mt-[100px]">
				{galleryData.map((item, index) => {
					return (
						<div
							key={item.id}
							className="aspect-auto w-[24%] h-auto max-w-full cursor-pointer"
							onClick = {openLightbox}>
							<Image
							onClick={openLightbox}
								src={item.image}
								alt={item.titre}
								width={600}
								height={1000}
								className="object-cover h-full w-full border-2 border-gold-Border-ring-1 rounded-sm  "
								sizes="100vw"
								loading="eager"
								aria-label={item.titre}
							/>
						</div>
					);
				})}
			</Masonry>
			{renderLightbox({slides: imagesForLightbox})}

		</section>
	);
}
