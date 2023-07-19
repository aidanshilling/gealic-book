import Link from "next/link";

interface NavlinkProps {
	href: string;
	className: string;
	children: JSX.Element | JSX.Element[] | string;
}

const Navlink = ({ href, className, children }: NavlinkProps) => {
	return (
		<div className="group flex flex-col">
			<Link href={href} className={`${className} w-full`}>
				{children}
			</Link>
			<div className="hidden group-hover:inline border border-t w-0 group-hover:w-full transition-all"></div>
		</div>
	);
};

export default Navlink;
