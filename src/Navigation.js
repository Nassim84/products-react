import { Link } from "react-router-dom";
import React from "react";
import "./css/Navigation.css";

function Navigation() {
	return (
		<nav className="navigation">
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/products">Produits</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
		</nav>
	);
}
export default Navigation;
