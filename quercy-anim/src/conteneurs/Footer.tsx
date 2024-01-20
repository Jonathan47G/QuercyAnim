import Image from "next/image";
import logo from "../../public/images/Logo_Quercy_AnimRedim.png";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import badgeMariage from "../../public/images/badge_mariages.png";

export default function Footer() {
	return (
		<footer className="grid grid-cols-3 justify-between bg-iris-Background-2 border-t-2 p-5 border-gold-Border-sep-1 text-gold-Primary-text">
			<hgroup className="flex flex-col justify-center items-center gap-5">
				<Image src={logo} alt="badge mariage.net" width={40} height={40} />

				<p className="text-lg">Des questions ? Contactez-nous !</p>
				<Link href="mailto:quercy.anim@gmail.com" className=" rounded-full p-2 bg-gold-Solid-1 hover:bg-gold-Solid-2 hover:scale-105">Contact</Link>
			</hgroup>

			<nav>
				<ul className="flex flex-col gap-3 justify-center items-center">
					<h3 className="text-xl">Nous suivre :</h3>
					<li>
						<Link href="https://www.facebook.com/Quercyanim" replace>
							<FacebookIcon
								className="text-gold-Secondary-text"
								fontSize="large"
							/>
						</Link>
					</li>
					<li>
						<Link href="https://www.instagram.com/quercyanim/">
							<InstagramIcon
								className="text-gold-Secondary-text"
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
								width={30}
								height={30}
							/>
						</Link>
					</li>
				</ul>
			</nav>

			<div className="">
            <h3 className="text-xl text-center mb-6">Adresse :</h3>
                <div className="flex justify-center items-center gap-5">
                
                
				<div className="flex flex-col gap-9">
                <HomeOutlinedIcon
						className="text-gold-Secondary-text"
						fontSize="large"
					/>
                    <LocalPhoneOutlinedIcon
						className="text-gold-Secondary-text"
						fontSize="large"
					/>
					
				</div>
				<div className="flex flex-col gap-10">
                    <Link href="https://maps.app.goo.gl/EX8T9ApbT6RAzCYr8" >
                <hgroup>
						<p>Les plaines de Fillol,</p>
						<p>82150 Montaigu-de-Quercy</p>
                        
					</hgroup>
                    </Link>
					<Link href="tel:+330664948493">Tél : 06 64 94 84 93</Link>
				</div>
			</div>
            </div>
		</footer>
	);
}
