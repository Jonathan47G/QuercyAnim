import Image from "next/image";
import badgeMariage from "../../public/images/badge_mariages.png";
import Link from "next/link";

export default function RetourClient() {
	return (
		<section className="flex flex-col justify-center items-center bg-gold-Background-1">
			<h2 className=" mb-[50px] decoration-[#696256] decoration-2 underline underline-offset-[9px] mt-[100px] text-white p-10 font-extrabold ">
				Retour client
			</h2>
			<div
				className="elfsight-app-aeea9115-8db9-48fd-96af-b20601c7cdbf bg-iris-Background-1 p-10 rounded-xl border-2 border-gold-Border-sep-1"
				data-elfsight-app-lazy></div>
			<Link
				className="flex justify-center items-center gap-10 mt-[50px] "
				href="https://www.mariages.net/musique-mariage/quercy-anim--e248285">
				<p className="font-semibold p-5 rounded-xl transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-iris-Primary-text bg-gradient-to-r from-iris-Interactive-1 via-blue-500 to-iris-Interactive-1   hover:via-iris-Interactive-2 hover:to-blue-500">
					Ici pour pouvoir réserver{" "}
				</p>
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
