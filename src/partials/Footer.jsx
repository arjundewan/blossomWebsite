import React from "react";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 mt-10">
				{/* Top area: Blocks */}
				<div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">
					{/* 1st block */}
					<div className="col-span-12">
						<div className="text-sm text-gray-600 mr-4">
							Created by{" "}
							<a
								className="underline"
								href="https://arjundewan.me"
								target="_blank"
								rel="noopener noreferrer"
							>
								Arjun Dewan
							</a>{" "}
							&{" "}
							<a
								className="underline"
								href="https://avaye.netlify.app"
								target="_blank"
								rel="noopener noreferrer"
							>
								Avaye Dawadi
							</a>
							. All rights reserved.
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
