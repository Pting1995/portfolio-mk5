import React from "react";
import AboutMe from "../components/aboutMe"

function Home(props) {
	return (
		<div className="overview-container">
			<div className="App has-two-col-1-3">
				<AboutMe />
				<main className="project-overview">
					Page not found
				</main>
			</div>
		</div>
	);
}

export default Home;