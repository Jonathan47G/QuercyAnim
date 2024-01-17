import Image from "next/image";
import badgeMariage from "../../public/images/badge_mariages.png";
import Link from "next/link";

export default function RetourClient() {
	return (
		<section className="flex flex-col mt-[150px] justify-center items-center bg-gold-Background-1" >
			<h2 className=" mb-[50px] decoration-[#696256] decoration-2 underline underline-offset-[9px] mt-[50px] text-white p-10 font-extrabold">
				Retour client
			</h2>
			<div 
				className="elfsight-app-aeea9115-8db9-48fd-96af-b20601c7cdbf bg-iris-Background-1 p-10 rounded-xl border-2 border-gold-Border-sep-1"
				data-elfsight-app-lazy></div>
			<Link className="flex justify-center items-center gap-10 mt-[50px] " href="https://www.mariages.net/musique-mariage/quercy-anim--e248285">
                <p className="text-iris-Primary-text bg-iris-Solid-1 p-5 rounded-full border-2 border-iris-Border-sep-2 hover:bg-iris-Solid-2 hover:border-iris-Border-ring-1 hover:text-iris-Secondary-text ">Ici pour pouvoir réserver </p>
				<Image
					src={badgeMariage}
					alt="badge mariage.net"
					width={100}
					height={100}
				/>
			</Link>
		</section>
	);
}
