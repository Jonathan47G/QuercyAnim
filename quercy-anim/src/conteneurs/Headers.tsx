"use client";

import Image from "next/image";
import logo from "../../public/images/Logo_Quercy_AnimRedim.png";
import Link from "next/link";

export default function Header() {
	const lienProps = {
		lienClassName: "decoration-2 m-auto pl-7 h-full flex items-center",
	};
	const boxLien = {
		boxClassName:
			"pl-3 pr-3 p-3 ring-2 ring-transparent border-t-4 border-transparent hover:border-gold-Solid-1 hover:text-gold-Secondary-text transition-all",
	};
	return (
		<header className="h-[80px] items-center relative ">
			<div className="flex justify-between fixed z-40 bg-iris-Background-1 border-b-4 border-[#444039] max-w-[2000px] w-full p-4">
				<Image src={logo} height={50} alt="logo Quercy Anim" />
				<nav>
					<ul className="grid grid-cols-4 gap-5 text-lg text-white font-extrabold divide-x-2 divide-[#444039] border-transparent">
						<li className={lienProps.lienClassName}>
							<Link href="/#Accueil" className={boxLien.boxClassName}>
								Accueil
							</Link>
						</li>
						<li className={lienProps.lienClassName}>
							<Link href="/#Prestations" className={boxLien.boxClassName}>
								Prestation
							</Link>
						</li>
						<li className={lienProps.lienClassName}>
							<Link href="/#A-propos" className={boxLien.boxClassName}>
								A propos
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
