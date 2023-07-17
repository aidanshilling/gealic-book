import Link from "next/link";

interface NavlinkProps {
	href: string;
	className: string;
	children: JSX.Element | JSX.Element[] | string;
}

const Navlink = ({ href, className, children }: NavlinkProps) => {
	return (
		<div className="group text-center flex flex-col items-center">
			<Link href={href} className={`${className} w-full`}>
				{children}
			</Link>
		</div>
	);
};

export default Navlink;
