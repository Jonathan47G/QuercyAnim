"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import data from "../../data/slider.json";

const Slider = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [animationClass, setAnimationClass] = useState("animate-slideRight");
	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
		setAnimationClass("");
    setTimeout(() => {
      setAnimationClass("animate-slideRight");
	}, 10);
	};

	const handlePrev = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
		setAnimationClass("");
    setTimeout(() => {
      setAnimationClass("animate-slideLeft");
	}, 10);
	};

	useEffect(() => {
		const intervalId = setInterval(() => {
			handleNext();
		}, 10000);

		return () => clearInterval(intervalId)
	}, [currentIndex]);

	return (
		<section className="h-auto flex flex-col align-center relative overflow-hidden shadow-lg shadow-gold-Border-sep-1 mb-16" aria-label="Slider Quercy Anim">
			<div className="conteneur_texte text-center absolute inset-0 top-[50px] h-max z-20 ">
				<hgroup><h1
					className={`decoration-[#696256] text-gold-Primary-text decoration-2 underline underline-offset-[10px] capitalize`}>
					<strong>Quercy anim&apos;</strong>
				</h1>
				<h2 className="mt-10 bg-gradient-to-r from-[#978365] via-[#CBB99F] to-white text-transparent drop-shadow bg-clip-text">
				Votre événement, notre priorité
				</h2>
				</hgroup>
			</div>

			<div className={`conteneur_slider max-h-[700px] aspect-video relative ${animationClass}`}>
				<div
					className="h-full w-full z-1 bg-gradient-to-b from-black to transparent absolute z-10"></div>
					
				<Image
					className={`image_slider object-cover w-full h-full flex overflow-hidden z-0 absolute
				`}
					src={data[currentIndex].image}
					alt={data[currentIndex].titre}
					priority={true}
					fill
					
				/>
			</div>

			<div className="conteneur-fleche w-full h-full absolute flex justify-between align-center z-20">
				<button
					className="p-8 h-full hover:backdrop-blur-md"
					onClick={handlePrev}
					aria-label="Image précédente du slider">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="white"
						className="w-10 h-10"
						>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
						/>
					</svg>
				</button>
				<button
					className="p-8 h-full hover:backdrop-blur-md"
					onClick={handleNext}
					aria-label="Image suivante du slider">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="white"
						className="w-10 h-10">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
						/>
					</svg>
				</button>
			</div>
			<div className="conteneur-bullet flex gap-2 justify-center absolute inset-x-0 bottom-[100px] z-2 ">
				{data.map((item, index) => (
					<span
						key={item.id}
						className={`bullet rounded-full h-5 w-5 ${
							index === currentIndex ? "active bg-[#A39073]" : "bg-white "
						} `}
						onClick={() => setCurrentIndex(index)}
						aria-label={`Aller à l'image ${index + 1} du slider`}
					/>
				))}
			</div>
		</section>
	);
};

export default Slider;
