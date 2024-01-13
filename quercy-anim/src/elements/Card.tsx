import Image from "next/image";
import React from "react";

interface ContentProps {
	image: string;
	title: string;
	text1: string;
	text2?: string;
	style: string;
}

const Card: React.FC<ContentProps> = ({
	image,
	title,
	text1,
	text2,
	style,
}) => {
	return (
		
		<div className={style}>
			<Image
				className="object-cover w-6/7 h-[200px]"
				src={image}
				alt={title}
				width={500}
				height={500}
				priority={true}
			/>
			<div className="bg-gradient-to-r from-gold-Border-sep-1 via-gold-Border-ring-1 to-gold-Primary-text w-full h-[2px]"></div>
			<div className="p-4">
			<hgroup><h3 className="text-3xl mb-5 mt-5">{title}</h3>
			<div className="bg-gradient-to-r from-gold-Border-sep-1 via-gold-Border-ring-1 to-gold-Primary-text w-1/2 h-1 mb-5"></div>
			<p>{text1}</p>
			<br />
			<p>{text2}</p>
			</hgroup>
			</div>
		</div>
	);
};

export default Card;
