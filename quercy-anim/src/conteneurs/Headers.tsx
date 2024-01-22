"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/images/Logo_Quercy_AnimRedim.png";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import badgeMariage from "../../public/images/badge_mariages.png";
import HamburgerMenu from "@/elements/HamburgerMenu";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
	const lienProps = {
		lienClassName: "decoration-2 m-auto pl-7 h-full flex items-center",
	};
	const boxLien = {
		boxClassName:
			"pl-3 pr-3 p-3 ring-2 ring-transparent border-t-4 border-transparent hover:border-gold-Solid-1 hover:text-gold-Secondary-text transition-all duration-300",
	};
	const [isMenuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	return (
		<header className="h-[80px] items-center relative ">
			<div className="flex justify-between items-center fixed z-40 bg-iris-Background-1 border-b-4 border-[#444039] max-w-[2000px] w-full p-4">
				<HamburgerMenu
					isOpen={isMenuOpen}
					onLinkClick={() => setMenuOpen(false)}
				/>
				<Image
					src={logo}
					height={45}
					alt="logo Quercy Anim"
					className="h-[45px]"
				/>
				<button onClick={toggleMenu} className="lg:hidden text-gold-Primary-text">
					<MenuIcon fontSize="large" />
				</button>
				<nav className="hidden lg:flex">
					<ul className="grid grid-cols-4 gap-5 text-lg text-white font-extrabold divide-x-2 divide-[#444039] border-transparent">
						<li className={lienProps.lienClassName}>
							<Link href="/" className={boxLien.boxClassName}>
								Accueil
							</Link>
						</li>
						<li className={lienProps.lienClassName}>
							<Link href="/#Prestations" className={boxLien.boxClassName}>
								Prestation
							</Link>
						</li>
						<li className={lienProps.lienClassName}>
							<Link href="/#Galerie" className={boxLien.boxClassName}>
								Galerie
							</Link>
						</li>
						<li className={lienProps.lienClassName}>
							<Link href="/#About" className={boxLien.boxClassName}>
								A propos
							</Link>
						</li>
					</ul>
				</nav>
				<nav className="hidden lg:flex">
					<ul className="flex gap-5 justify-center items-center">
						<li>
							<Link href="https://www.facebook.com/Quercyanim" replace>
								<FacebookIcon
									className="text-white hover:text-gold-Secondary-text transition-colors"
									fontSize="large"
								/>
							</Link>
						</li>
						<li>
							<Link href="https://www.instagram.com/quercyanim/">
								<InstagramIcon
									className="text-white hover:text-gold-Secondary-text transition-colors"
									fontSize="large"
								/>
							</Link>
						</li>
						<li>
							<Link
								href="https://www.mariages.net/musique-mariage/quercy-anim--e248285"
								replace>
								<Image
									src={badgeMariage}
									alt="badge mariage.net"
									width={35}
									height={35}
								/>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
