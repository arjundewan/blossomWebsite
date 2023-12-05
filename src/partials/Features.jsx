import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition";

import featuresElement1 from "../images/featuresElement-1.png";
import featuresElement2 from "../images/featuresElement-2.png";
import featuresElement3 from "../images/featuresElement-3.png";
import featuresElement4 from "../images/featuresElement-4.png";

import { Anchor, BrainCircuit, Sparkles, ScanSearch } from "lucide-react";

function Features() {
	const [tab, setTab] = useState(1);

	const tabs = useRef(null);

	const heightFix = () => {
		if (tabs.current.children[tab]) {
			tabs.current.style.height =
				tabs.current.children[tab - 1].offsetHeight + "px";
		}
	};

	useEffect(() => {
		heightFix();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [tab]);

	return (
		<section className="relative">
			{/* Section background (needs .relative class on parent and next sibling elements) */}
			<div
				className="absolute inset-0 bg-gray-100 pointer-events-none"
				aria-hidden="true"
			></div>
			<div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>
			<div className="relative max-w-6xl mx-auto px-4 sm:px-6">
				<div className="pt-12 md:pt-20">
					{/* Section header */}
					<div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
						<h1 className="h2 mb-4">Discover the Features</h1>
						{/* <p className="text-xl text-gray-600">
							Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
							cupidatat.
						</p> */}
					</div>

					{/* Section content */}
					<div className="md:grid md:grid-cols-12 md:gap-6">
						{/* Content */}
						<div
							className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
							data-aos="fade-right"
						>
							<div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
								<h3 className="h3 mb-3">
									Built to help you explore the past and the future.
								</h3>
								<p className="text-xl text-gray-600">
									Blossom's powerful mapping creates an intuitive map to trace
									your history, ensuring you never lose your tabs. It also
									suggests content to discover next, in case you find yourself
									stuck.
								</p>
							</div>
							{/* Tabs buttons */}
							<div className="mb-8 md:mb-0">
								<a
									className={`flex justify-between items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
										tab !== 1
											? "bg-white shadow-md border-gray-200 hover:shadow-lg"
											: "bg-gray-200 border-transparent"
									}`}
									href="#0"
									onClick={(e) => {
										e.preventDefault();
										setTab(1);
									}}
								>
									<div>
										<div className="font-bold leading-snug tracking-tight mb-1">
											Intuitive Data Structure
										</div>
										<div className="text-gray-600">
											Radial tree mimics mental model of opening new tabs.
										</div>
									</div>
									<div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
										<BrainCircuit size={20} />
									</div>
								</a>
								<a
									className={`flex justify-between items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
										tab !== 2
											? "bg-white shadow-md border-gray-200 hover:shadow-lg"
											: "bg-gray-200 border-transparent"
									}`}
									href="#0"
									onClick={(e) => {
										e.preventDefault();
										setTab(2);
									}}
								>
									<div>
										<div className="font-bold leading-snug tracking-tight mb-1">
											Anchor Pages
										</div>
										<div className="text-gray-600">
											Pin your most important tabs for easy access.
										</div>
									</div>
									<div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
										<Anchor size={20} />
									</div>
								</a>
								<a
									className={`flex items-center justify-between text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
										tab !== 3
											? "bg-white shadow-md border-gray-200 hover:shadow-lg"
											: "bg-gray-200 border-transparent"
									}`}
									href="#0"
									onClick={(e) => {
										e.preventDefault();
										setTab(3);
									}}
								>
									<div>
										<div className="font-bold leading-snug tracking-tight mb-1">
											Explore Button
										</div>
										<div className="text-gray-600">
											Automatically suggests content to help you keep exploring.
										</div>
									</div>
									<div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
										<Sparkles size={20} />
									</div>
								</a>
								<a
									className={`flex items-center justify-between text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
										tab !== 4
											? "bg-white shadow-md border-gray-200 hover:shadow-lg"
											: "bg-gray-200 border-transparent"
									}`}
									href="#0"
									onClick={(e) => {
										e.preventDefault();
										setTab(4);
									}}
								>
									<div>
										<div className="font-bold leading-snug tracking-tight mb-1">
											Search Lens
										</div>
										<div className="text-gray-600">
											Customize AI suggestions to fit your research.
										</div>
									</div>
									<div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
										<ScanSearch size={20} />
									</div>
								</a>
							</div>
						</div>

						{/* Tabs items */}
						<div
							className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
							data-aos="zoom-y-out"
							ref={tabs}
						>
							<div className="relative flex flex-col text-center lg:text-right">
								{/* Item 1 */}
								<Transition
									show={tab === 1}
									appear={true}
									className="w-full"
									enter="transition ease-in-out duration-700 transform order-first"
									enterStart="opacity-0 translate-y-16"
									enterEnd="opacity-100 translate-y-0"
									leave="transition ease-in-out duration-300 transform absolute"
									leaveStart="opacity-100 translate-y-0"
									leaveEnd="opacity-0 -translate-y-16"
								>
									<div className="relative inline-flex flex-col">
										<img
											className="md:max-w-none mx-auto rounded"
											src={featuresElement1}
											width="500"
											height="462"
											alt="Features bg"
										/>
										{/* <img
											className="md:max-w-none absolute w-full left-0 transform animate-float"
											src={FeaturesElement}
											width="500"
											height="44"
											alt="Element"
											style={{ top: "30%" }}
										/> */}
									</div>
								</Transition>
								{/* Item 2 */}
								<Transition
									show={tab === 2}
									appear={true}
									className="w-full"
									enter="transition ease-in-out duration-700 transform order-first"
									enterStart="opacity-0 translate-y-16"
									enterEnd="opacity-100 translate-y-0"
									leave="transition ease-in-out duration-300 transform absolute"
									leaveStart="opacity-100 translate-y-0"
									leaveEnd="opacity-0 -translate-y-16"
								>
									<div className="relative inline-flex flex-col">
										<img
											className="md:max-w-none mx-auto rounded"
											src={featuresElement2}
											width="500"
											height="462"
											alt="Features bg"
										/>
										{/* <img
											className="md:max-w-none absolute w-full left-0 transform animate-float"
											src={FeaturesElement}
											width="500"
											height="44"
											alt="Element"
											style={{ top: "30%" }}
										/> */}
									</div>
								</Transition>
								{/* Item 3 */}
								<Transition
									show={tab === 3}
									appear={true}
									className="w-full"
									enter="transition ease-in-out duration-700 transform order-first"
									enterStart="opacity-0 translate-y-16"
									enterEnd="opacity-100 translate-y-0"
									leave="transition ease-in-out duration-300 transform absolute"
									leaveStart="opacity-100 translate-y-0"
									leaveEnd="opacity-0 -translate-y-16"
								>
									<div className="relative inline-flex flex-col">
										<img
											className="md:max-w-none mx-auto rounded"
											src={featuresElement3}
											width="500"
											height="462"
											alt="Features bg"
										/>
										{/* <img
											className="md:max-w-none absolute w-full left-0 transform animate-float"
											src={FeaturesElement}
											width="500"
											height="44"
											alt="Element"
											style={{ top: "30%" }}
										/> */}
									</div>
								</Transition>
								<Transition
									show={tab === 4}
									appear={true}
									className="w-full"
									enter="transition ease-in-out duration-700 transform order-first"
									enterStart="opacity-0 translate-y-16"
									enterEnd="opacity-100 translate-y-0"
									leave="transition ease-in-out duration-300 transform absolute"
									leaveStart="opacity-100 translate-y-0"
									leaveEnd="opacity-0 -translate-y-16"
								>
									<div className="relative inline-flex flex-col">
										<img
											className="md:max-w-none mx-auto rounded"
											src={featuresElement4}
											width="500"
											height="462"
											alt="Features bg"
										/>
										{/* <img
											className="md:max-w-none absolute w-full left-0 transform animate-float"
											src={FeaturesElement}
											width="500"
											height="44"
											alt="Element"
											style={{ top: "30%" }}
										/> */}
									</div>
								</Transition>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Features;
