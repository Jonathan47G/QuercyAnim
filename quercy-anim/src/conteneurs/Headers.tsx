"use client";

import Image from "next/image";
import logo from "../../public/images/Logo_Quercy_AnimRedim.png";
import Link from "next/link";

export default function Header() {
	const lienProps = {
		lienClassName:
			"hover:decoration-gold-Primary-text hover:underline decoration-2 underline-offset-8 m-auto pl-7 h-[70px] flex items-center",
	};
	const boxLien = {
		boxClassName:
			"pl-3 pr-3 p-2 rounded hover:bg-gold-Interactive-3 ring-2 ring-transparent hover:ring-gold-Border-ring-1",
	};
	return (
		<header className="flex justify-between p-5 h-[80px] items-center w-full bg-iris-Background-1 border-b-4 border-[#444039]">
			<Image src={logo} height={50} alt="logo Quercy Anim" />
			<nav>
				<ul className="grid grid-cols-4 gap-5 text-lg text-white font-extrabold divide-x-2 divide-[#444039] border-transparent">
					<li className={lienProps.lienClassName}>
						<Link href="/#Accueil" className={boxLien.boxClassName}>
							Accueil
						</Link>
					</li>
					<li className={lienProps.lienClassName}>
						<Link href="/#Agenda" className={boxLien.boxClassName}>
							{" "}
							Agenda
						</Link>
					</li>
					<li className={lienProps.lienClassName}>
						<Link href="/#A-propos" className={boxLien.boxClassName}>
							{" "}
							A propos
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
