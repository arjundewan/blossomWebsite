import React from "react";
import { CheckSquare, Square } from "lucide-react";

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
					<div className="grid grid-cols-3 items-start mx-auto text-center pb-12 md:pb-20 leading-snug tracking-tight">
						<div className="w-full text-left text-lg">
							<p className="font-bold mb-2">Done</p>
							<ul className="flex flex-col gap-1">
								<div className="flex gap-2 text-gray-600 items-center">
									<CheckSquare size={20} />
									Core Browsing Processes (Chromium)
								</div>
								<div className="flex gap-2 text-gray-600 items-center">
									<CheckSquare size={20} />
									Command Palette with Autocomplete
								</div>
								<div className="flex gap-2 text-gray-600 items-center">
									<CheckSquare size={20} />
									Auto-Updating Map Structure
								</div>
								<div className="flex gap-2 text-gray-600 items-center">
									<CheckSquare size={20} />
									Map Branching & Stacking
								</div>
								<div className="flex gap-2 text-gray-600 items-center">
									<CheckSquare size={20} />
									Intelligent Explore
								</div>
								<div className="flex gap-2 text-gray-600 items-center">
									<CheckSquare size={20} />
									Search Lens
								</div>
								<div className="flex gap-2 text-gray-600 items-center">
									<CheckSquare size={20} />
									Saved History
								</div>
								<div className="flex gap-2 text-gray-600 items-center">
									<CheckSquare size={20} />
									MacOS Support
								</div>
							</ul>
						</div>
						<div className="w-full text-left text-lg">
							<p className="font-bold mb-2">In Progress</p>
							<ul className="flex flex-col gap-1">
								<div className="flex gap-2 text-gray-600 items-center">
									<Square size={20} />
									Inline Page Annotations
								</div>
								<div className="flex gap-2 text-gray-600 items-center">
									<Square size={20} />
									Map Collisions and Edge Cases
								</div>
								<div className="flex gap-2 text-gray-600 items-center">
									<Square size={20} />
									Minimap
								</div>
								<div className="flex gap-2 text-gray-600 items-center">
									<Square size={20} />
									Pinned Tabs
								</div>
								<div className="flex gap-2 text-gray-600 items-center">
									<Square size={20} />
									Keyboard Shortcuts
								</div>
							</ul>
						</div>
						<div className="w-full text-left text-lg">
							<p className="font-bold mb-2">Future</p>
							<ul className="flex flex-col gap-1">
								<div className="flex gap-2 text-gray-600 items-center">
									<Square size={20} />
									Universal History Search
								</div>
								<div className="flex gap-2 text-gray-600 items-center">
									<Square size={20} />
									Tab Renaming
								</div>
								<div className="flex gap-2 text-gray-600 items-center">
									<Square size={20} />
									Downloads Manager
								</div>
								<div className="flex gap-2 text-gray-600 items-center">
									<Square size={20} />
									Password Manager
								</div>
								<div className="flex gap-2 text-gray-600 items-center">
									<Square size={20} />
									Split Tabs
								</div>
								<div className="flex gap-2 text-gray-600 items-center">
									<Square size={20} />
									Windows Support
								</div>
								<div className="flex gap-2 text-gray-600 items-center">
									<Square size={20} />
									Linux Support
								</div>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default RoadmapBlocks;
