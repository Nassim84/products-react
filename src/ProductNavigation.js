import React from "react";
import { Link } from "react-router-dom";
import "./css/ProductNavigation.css";

function ProductNavigation() {
	return (
		<div className="product-navigation">
			<Link to="/products">Tous les produits</Link>
			<Link to="/products/create">Créer un produit</Link>
		</div>
	);
}

export default ProductNavigation;
