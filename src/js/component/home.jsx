import React from "react";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";

const Home = () => {
	return (
	<div>	
		<Navbar />
		<div className="container">
			<Jumbotron />
			<div className="row">
				<div className="col-md">
					<Card />
				</div>
				<div className="col-md">
					<Card />
				</div>
				<div className="col-md">
					<Card />
				</div>
				<div className="col-md">
					<Card />
				</div>
			</div>
		</div>
		<Footer />
	</div>

	)
}

export default Home;