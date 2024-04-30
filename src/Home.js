import React from "react";
import { Link } from "react-router-dom";

import "./css/Home.css";

function Home() {
	return (
		<div className="home-container">
			<h1 className="home-title">Bienvenue sur notre site 🌟</h1>
			<p className="home-description">
				Découvrez notre large gamme de produits de qualité et bénéficiez de nos
				offres exclusives. N'hésitez pas à nous contacter pour toute question ou
				demande d'information.
			</p>
			<Link to="/products" className="home-cta">
				Explorer les produits
			</Link>
		</div>
	);
}

export default Home;
