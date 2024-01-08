'use client'

import Image from "next/image";
import logo from "../../public/images/Logo_Quercy_AnimRedim.png";
import '../app/globals.css'
import Link from "next/link";

export default function Header() {
	
  	return (
		<header className="flex justify-around h-16 items-center w-full bg-iris-Background-1 border-b-4 border-[#444039] pb-5 mt-5">
			<Image src={logo} height={50} alt="logo Quercy Anim" />
            <nav>
				<ul className="flex gap-5 text-white uppercase font-extrabold">
					<li className="hover:decoration-[#696256] hover:underline decoration-4 underline-offset-8"><Link  href="/#Accueil" >Accueil</Link></li>
					<li><Link href="/#Event">Événement</Link></li>
					<li><Link href="/#Agenda">Agenda</Link></li>
					<li><Link href="/#A-propos">A propos</Link></li>
				</ul>
			</nav>
		</header>
	);
}
