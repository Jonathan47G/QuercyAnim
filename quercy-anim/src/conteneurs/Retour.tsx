import Image from "next/image";
import badgeMariage from "../../public/images/badge_mariages.webp";
import Link from "next/link";

export default function RetourClient() {
	return (
		<section className="flex flex-col justify-center items-center bg-iris-Background-1 pb-[50px]">
			<h2 className=" md:mb-[50px] decoration-[#696256] decoration-2 underline underline-offset-[9px] text-white p-10 font-extrabold ">
				Retour client
			</h2>
			<div
				className="elfsight-app-aeea9115-8db9-48fd-96af-b20601c7cdbf bg-iris-Background-1 p-10 rounded-xl border-2 border-gold-Border-sep-1"
				data-elfsight-app-lazy></div>
			<Link
				className="flex justify-center items-center gap-10 mt-[50px] "
				href="https://www.mariages.net/musique-mariage/quercy-anim--e248285">
				<p className="font-semibold p-3 transition duration-300 ease-in-out text-gold-Primary-text bg-gold-Solid-1 border-2 border-gold-Border-sep-1 hover:bg-gold-Solid-2 hover:border-gold-Border-sep-2 hover:-translate-y-1 hover:scale-105 ">
					Ici pour pouvoir réserver
				</p>
				<Image
					src={badgeMariage}
					alt="badge mariage.net"
					width={80}
					height={80}
				/>
			</Link>
		</section>
	);
}
