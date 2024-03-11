import React from "react";

import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import Features from "../partials/Features";
import Background from "../partials/Background";
import Roadmap from "../partials/Roadmap";
import Footer from "../partials/Footer";

function Home() {
	return (
		<div className="flex flex-col min-h-screen overflow-hidden">
			<Header />

			<main className="flex-grow">
				{/*  Page sections */}
				<HeroHome />
				<Background />
				<Features />
				<Roadmap />
				{/* <Testimonials /> */}
				{/* <Newsletter /> */}
			</main>

			{/* <Footer /> */}
			<Footer />
		</div>
	);
}

export default Home;
