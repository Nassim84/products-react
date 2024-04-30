import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/ProductList.css";
import Loader from "./Loader";

const ProductList = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.get("https://fakestoreapi.com/products");
				setProducts(response.data);
			} catch (error) {
				console.error("Error fetching products:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchProducts();
	}, []);

	const handleAddToCart = (productId) => {
		console.log(`Product ${productId} added to cart.`);
	};

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<div className="product-list">
					<h1>Liste des produits</h1>
					{products.map((product) => (
						<div key={product.id} className="product-card">
							<h2>{product.title}</h2>
							<p>{product.description}</p>
							<p className="price">Prix : {product.price} $</p>
							<img src={product.image} alt={product.title} />
							<button onClick={() => handleAddToCart(product.id)}>
								Ajouter au panier 🛒
							</button>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default ProductList;
