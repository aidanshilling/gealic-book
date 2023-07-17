import Navlink from "./Navlink";

const linkStyle = `text-center font-semibold text-lg`;

const Navbar = () => {
	return (
		<div className="fixed w-full">
			<div className="flex justify-center pt-5">
				<nav className="grid grid-cols-3 gap-20">
					<Navlink className={linkStyle} href={"#history"}>
						History
					</Navlink>
					<Navlink className={linkStyle} href={"#"}>
						About
					</Navlink>
					<Navlink className={linkStyle} href={"#"}>
						Journal
					</Navlink>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
