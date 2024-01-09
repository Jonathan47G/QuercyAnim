"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import data from "../../data/test.json";

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
		<section className="h-auto flex flex-col align-center relative overflow-hidden shadow-lg shadow-gold-Border-sep-1">
			<div className="conteneur_texte text-white text-center absolute inset-0 top-[50px] h-max z-10 ">
				<h1
					className={`text-7xl decoration-[#696256] decoration-4 underline underline-offset-[10px]`}>
					Quercy Anim&apos;
				</h1>
				<p className="text-3xl mt-10 bg-gradient-to-r from-[#978365] via-[#CBB99F] to-white text-transparent drop-shadow bg-clip-text">
					Votre événement, notre priorité
				</p>
			</div>

			<div className={`conteneur_slider max-h-[700px] aspect-auto ${animationClass}`}>
				<div
					className="h-full w-full  z-1 bg-gradient-to-b from-black to transparent absolute"></div>
					
				<Image
					className={`image_slider object-cover w-full h-[700px] flex overflow-hidden z-0
				`}
					src={data[currentIndex].image}
					alt={data[currentIndex].titre}
					priority={true}
					width={1000}
					height={800}
					
				/>
			</div>

			<div className="conteneur-fleche w-full h-full absolute flex justify-between align-center z-2">
				<button
					className="p-8 h-full hover:backdrop-blur-md"
					onClick={handlePrev}>
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
							d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
						/>
					</svg>
				</button>
				<button
					className="p-8 h-full hover:backdrop-blur-md"
					onClick={handleNext}>
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
					/>
				))}
			</div>
		</section>
	);
};

export default Slider;
