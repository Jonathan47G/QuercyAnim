import React, { useState } from "react";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import badgeMariage from "../../public/images/badge_mariages.webp";
import Image from "next/image";

interface HamburgerMenuProps {
	isOpen: boolean;
	onLinkClick: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
	isOpen,
	onLinkClick,
}) => {
	return (
		<nav className="w-full absolute z-40 left-0 ">
					<ul className={`flex flex-col top-[42px] transition-all duration-300 gap-5 text-lg text-white font-extrabold lg:hidden  overflow-hidden max-h-0 w-full absolute bg-iris-Background-1 gap-5 *:p-4 ${
					isOpen ? "max-h-[600px]" : ""
				}`}>
						<li className="hover:bg-gold-Interactive-3 border-4 border-transparent hover:border-b-gold-Border-ring-1 text-center hover:text-gold-Secondary-text">
							<Link href="/" className={""}>
								Accueil
							</Link>
						</li>
						<li className="hover:bg-gold-Interactive-3 border-4 border-transparent hover:border-b-gold-Border-ring-1 text-center hover:text-gold-Secondary-text">
							<Link href="/#Prestations" className={""}>
								Prestation
							</Link>
						</li>
						<li className="hover:bg-gold-Interactive-3 border-4 border-transparent hover:border-b-gold-Border-ring-1 text-center hover:text-gold-Secondary-text">
							<Link href="/#Galerie" className={""}>
								Galerie
							</Link>
						</li>
						<li className="hover:bg-gold-Interactive-3 border-4 border-transparent hover:border-b-gold-Border-ring-1 text-center hover:text-gold-Secondary-text">
							<Link href="/#About" className={"boxLien.boxClassName"}>
								A propos
							</Link>
						</li>
                        <li className="flex justify-center gap-10">
							<Link href="https://www.facebook.com/Quercyanim" replace>
								<FacebookIcon className="text-white hover:text-gold-Secondary-text transition-colors" fontSize="large"/>
							</Link>
                            <Link href="https://www.instagram.com/quercyanim/">
								<InstagramIcon className="text-white hover:text-gold-Secondary-text transition-colors" fontSize="large" />
							</Link>
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
	);
};

export default HamburgerMenu;
