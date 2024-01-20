import Image from "next/image";
import Link from "next/link";
import kevinNico from "@/../../public/images/kevin_nico.jpg";
import backgroundTexture from "@/../../public/images/polygon_luminary.svg";

export default function Apropos() {
	return (
		<section className="flex flex-col justify-center items-center relative pb-[80px] pt-[80px]" id="About">
			<Image
				src={backgroundTexture}
				alt="Background"
				className="absolute opacity-15 h-full"
			/>
			<h2 className="mb-[50px] mt-[50px] decoration-[#696256] decoration-2 underline underline-offset-[9px] text-white font-extrabold  ">
				Qui somme nous
			</h2>
			<div className="flex p-5 gap-10 items-center justify-evenly w-10/12">
				<hgroup className="p-5 text-gold-Secondary-text text-lg w-3/5 backdrop-blur-sm">
					<p>
						Nous sommes une <strong>discomobile</strong> passionnée par{" "}
						<strong>l&apos;animation d&apos;événements</strong>. Que ce soit
						pour un mariage, une soirée d&apos;entreprise, un anniversaire ou
						toute autre occasion spéciale, nous mettons notre expertise et notre
						énergie au service de votre divertissement.
					</p>
					<br />
					<p>
						Avec plus de 10 ans d&apos;expérience, nous sommes fiers
						d&apos;avoir animé de nombreux événements mémorables. Notre équipe
						de DJ professionnels est spécialisée dans la création d&apos;une
						ambiance festive et dynamique. Nous sommes attentifs à vos goûts
						musicaux et nous savons comment faire danser vos invités
						jusqu&apos;au bout de la nuit.
					</p>
					<br />
					<p>
						En plus de notre expertise en animation, nous offrons des services
						de sonorisation et d&apos;éclairage de qualité pour créer une
						atmosphère unique lors de votre événement. Notre matériel de pointe
						garantit une qualité sonore exceptionnelle et des effets lumineux
						époustouflants.
					</p>
					<br />
					<p>
						Nous comprenons l&apos;importance de chaque événement et nous nous
						engageons à vous offrir une expérience inoubliable. Notre équipe
						professionnelle et dynamique est à votre écoute pour personnaliser
						chaque détail de votre soirée, en veillant à ce que vos attentes
						soient dépassées. Explorez notre site pour en savoir plus sur nos
						services, consultez nos témoignages clients et contactez-nous pour
						réserver votre date.
					</p>
					<br />
					<p>
						Nous sommes impatients de faire de votre <em>événement</em> un
						moment magique et rempli de souvenirs merveilleux. Faites confiance
						à <strong>Quercy&apos;Anim</strong> pour animer vos moments les plus
						précieux et offrez-vous une soirée exceptionnelle dont vous vous
						souviendrez longtemps !
					</p>
				</hgroup>
				<Image
					src={kevinNico}
					alt="Kevin et Nicolas"
					width={500}
					height={375}
					className="rounded-lg scale-125 opacity-80"
				/>
			</div>
		</section>
	);
}
