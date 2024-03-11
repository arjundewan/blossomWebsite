import React from "react";

function RoadmapBlocks() {
	return (
		<section id="roadmap" className="relative mt-20">
			{/* Section background (needs .relative class on parent and next sibling elements) */}
			<div
				className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 pointer-events-none"
				aria-hidden="true"
			></div>
			<div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

			<div className="relative max-w-6xl mx-auto px-4 sm:px-6">
				<div className="max-w-3xl mx-auto text-center">
					<h1 className="h2 mb-4">Progress</h1>
					{/* <p className="text-xl text-gray-600">
							Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
							cupidatat.
						</p> */}
				</div>
				<div className="py-12 md:py-16">
					{/* Section header */}
					<div className="flex flex-col items-center gap-10 max-w-3xl mx-auto text-center pb-12 md:pb-20">
						<p className="text-xl font-medium">
							Today's web browsers are only designed around simple searches.
							Every try exploring a topic only to find a mess of tabs, quickly
							killing your creativity?
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default RoadmapBlocks;
