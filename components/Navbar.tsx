import Navlink from "./Navlink";

const linkStyle = `text-center text-lg`;

const Navbar = () => {
	return (
		<nav className="fixed w-full flex justify-end space-x-8 px-8 py-4">
			<Navlink className={linkStyle} href={"#history"}>
				History
			</Navlink>
			<Navlink className={linkStyle} href={"#"}>
				Interviews
			</Navlink>
			<Navlink className={linkStyle} href={"#"}>
				Journal
			</Navlink>
		</nav>
	);
};

export default Navbar;
