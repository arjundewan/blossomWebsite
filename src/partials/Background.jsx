import React from "react";
import backgroundDiagram from "../images/backgroundDiagram.png";

function FeaturesBlocks() {
	return (
		<section id="background" className="relative">
			{/* Section background (needs .relative class on parent and next sibling elements) */}
			<div
				className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 pointer-events-none"
				aria-hidden="true"
			></div>
			<div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

			<div className="relative max-w-6xl mx-auto px-4 sm:px-6">
				<div className="py-12 md:py-20">
					{/* Section header */}
					<div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
						<h2 className="h2 mb-4">Background</h2>
						{/* Items */}
						{/* <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none"></div> */}
						<p className="text-xl text-gray-600">
							Today's web browsers are only focused on iterative search, with
							cluttered lists of tabs and convoluted history, resulting in tab
							overload and your ideas getting stuck quickly.
						</p>
						<div className="flex w-[70%] justify-center p-4 border-[#BDB9A4] border-4 rounded-2xl">
							<img src={backgroundDiagram} className="w-full"></img>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default FeaturesBlocks;
