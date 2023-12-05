import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import blossomLogo from "../images/blossomLogo-v1.png";

function Header() {
	const [top, setTop] = useState(true);

	// detect whether user has scrolled the page down by 10px
	useEffect(() => {
		const scrollHandler = () => {
			window.pageYOffset > 10 ? setTop(false) : setTop(true);
		};
		window.addEventListener("scroll", scrollHandler);
		return () => window.removeEventListener("scroll", scrollHandler);
	}, [top]);

	return (
		<header
			className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
				!top && "bg-white backdrop-blur-sm shadow-lg"
			}`}
		>
			<div className="max-w-6xl mx-auto px-5 sm:px-6">
				<div className="flex items-center justify-between h-16 md:h-20">
					{/* Site branding */}
					<div className="flex flex-shrink-0 mr-4 items-center gap-4">
						{/* Logo */}
						{/* <Link to="/" className="block" aria-label="Blossom"> */}
						<img src={blossomLogo} className="w-[5%]"></img>
						<h1 className="font-bold text-3xl">Blossom</h1>
						{/* </Link> */}
					</div>

					{/* Site navigation */}
					<nav className="flex flex-grow">
						<ul className="flex flex-grow justify-end flex-wrap items-center">
							<li>Documentation</li>
							<li></li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}

export default Header;
