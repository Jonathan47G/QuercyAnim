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
				height={500}
				width={500}
				priority={false}
			/>
      <div className="bg-red-500 w-1/2 h-1"></div>
			<h3>{title}</h3>
			<p>{text1}</p>
			<p>{text2}</p>
		</div>
	);
};

export default Card;
