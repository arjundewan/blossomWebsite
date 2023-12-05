import React from "react";

import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import FeaturesHome from "../partials/Features";
import FeaturesBlocks from "../partials/FeaturesBlocks";
import Testimonials from "../partials/Testimonials";
import Newsletter from "../partials/Newsletter";
import Footer from "../partials/Footer";

function Home() {
	return (
		<div className="flex flex-col min-h-screen overflow-hidden">
			<Header />

			<main className="flex-grow">
				{/*  Page sections */}
				<HeroHome />
				<FeaturesHome />
				{/* <FeaturesBlocks /> */}
				{/* <Testimonials /> */}
				{/* <Newsletter /> */}
			</main>

			{/* <Footer /> */}
			<footer>
				<div className="max-w-6xl mx-auto px-4 sm:px-6 mt-10">
					{/* Top area: Blocks */}
					<div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">
						{/* 1st block */}
						<div className="sm:col-span-12 lg:col-span-6">
							<div className="text-sm text-gray-600 mr-4">
								Created by{" "}
								<a className="underline" href="https://arjundewan.me">
									Arjun Dewan
								</a>{" "}
								&{" "}
								<a className="underline" href="mailto:adawadi6@gatech.edu">
									Avaye Dawadi
								</a>
								. All rights reserved.
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Home;
