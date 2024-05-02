import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./css/ProductNavigation.css";

function ProductNavigation() {
	const location = useLocation();

	const isActive = (path) => {
		return location.pathname === path;
	};
	return (
		<div className="product-navigation">
			<Link
				to="/products"
				className={isActive("/products") ? "active" : ""} // Ajoutez la classe "active" si le lien est actif
			>
				Tous les produits
			</Link>
			<Link
				to="/products/create"
				className={isActive("/products/create") ? "active" : ""} // Ajoutez la classe "active" si le lien est actif
			>
				Créer un produit
			</Link>
		</div>
	);
}

export default ProductNavigation;
