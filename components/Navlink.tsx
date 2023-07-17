import Link from "next/link";

interface NavlinkProps {
	href: string;
	className: string;
	children: JSX.Element | JSX.Element[] | string;
}

const Navlink = ({ href, className, children }: NavlinkProps) => {
	return (
		<div className="group text-center">
			<Link href={href} className={className}>
				{children}
			</Link>
			<div className="border-t-2 w-8 group-hover:w-full transition-all" />
		</div>
	);
};

export default Navlink;
