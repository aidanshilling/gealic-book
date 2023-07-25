import Image from "next/image";
import Navlink from "./Navlink";
import logo from "../public/white-triskel.png";
import Link from "next/link";

const linkStyle = `text-center text-lg drop-shadow-sm`;

const Navbar = () => {
	return (
		<div className="fixed w-full flex justify-between">
			<Link className={`${linkStyle} px-4 py-2`} href="#">
				<Image src={logo} width={40} alt="logo" />
			</Link>
			<nav className="w-full flex justify-end space-x-8 px-8 py-4">
				<Navlink className={linkStyle} href={"#history"}>
					History
				</Navlink>
				<Navlink className={linkStyle} href={"#interviews"}>
					People
				</Navlink>
				<Navlink className={linkStyle} href={"#journal"}>
					Journal
				</Navlink>
			</nav>
		</div>
	);
};

export default Navbar;
