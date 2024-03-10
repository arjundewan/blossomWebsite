import React from "react";
// import backgroundDiagram from "../images/backgroundDiagram.png";
import TabOverloadImage from "../images/tab-overload.png";

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
					<div className="flex flex-col items-center max-w-3xl mx-auto text-center pb-12 md:pb-20">
						{/* <h2 className="h2 mb-4">Background</h2> */}
						{/* Items */}
						{/* <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none"></div> */}
						<p className="text-xl font-medium">
							Today's web browsers are only designed around simple searches.
							Every try exploring a topic only to find a mess of tabs, quickly
							killing your creativity?
						</p>
						<div className="flex w-[70%] justify-center mt-8 rounded-2xl">
							<img src={TabOverloadImage} className="w-full"></img>
						</div>
						{/* <p className="text-xl text-gray-600 mt-4">
							On the other hand, research shows that people actually alternate
							between iterative and exploratory search, depending on how
							abstract their end goal of browsing is.
						</p> */}
						{/* <div className="flex w-[70%] justify-center p-4 mt-8 border-[#BDB9A4] border-4 rounded-2xl">
							<img src={backgroundDiagram} className="w-full"></img>
						</div>
						<p className="text-xs w-[70%] text-gray-600 mt-2">
							White, R.W., & Roth, R.A. (2009). Exploratory Search: Beyond the
							Query-Response Paradigm. Synthesis Lectures on Information
							Concepts, Retrieval, and Services, 1, 98.
						</p>
						<p className="text-xl text-gray-600 mt-12">
							This research led us to focus on the model called{" "}
							<a
								className="underline font-semibold"
								href="https://pages.gseis.ucla.edu/faculty/bates/berrypicking.html"
							>
								"berrypicking"
							</a>
							, coined by Marcia J. Bates, which is argued to be "much closer to
							the real behavior of information searchers" than traditional
							models of browsing.
						</p> */}
					</div>
				</div>
			</div>
		</section>
	);
}

export default FeaturesBlocks;
