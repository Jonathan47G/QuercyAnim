'use client'

import Image from "next/image";
import logo from "../../public/images/Logo_Quercy_AnimRedim.png";
import Link from "next/link";

export default function Header() {
	
  	return (
		<header className="flex justify-around h-[80px] items-center w-full bg-iris-Background-1 border-b-4 border-[#444039]">
			<Image src={logo} height={50} alt="logo Quercy Anim" />
            <nav>
				<ul className="grid grid-cols-4 gap-5 text-lg text-white font-extrabold divide-x-2 divide-[#444039] *:m-auto *:pl-7 *:h-[70px] *:flex *:items-center ">
					<li className="hover:decoration-[#696256] hover:underline decoration-4 underline-offset-8"><Link href="/#Accueil" >Accueil</Link></li>
					<li className="hover:decoration-[#696256] hover:underline decoration-4 underline-offset-8"><Link href="/#Event">Événement</Link></li>
					<li className="hover:decoration-[#696256] hover:underline decoration-4 underline-offset-8"><Link href="/#Agenda">Agenda</Link></li>
					<li className="hover:decoration-[#696256] hover:underline decoration-4 underline-offset-8"><Link href="/#A-propos">A propos</Link></li>
				</ul>
			</nav>
		</header>
	);
}
