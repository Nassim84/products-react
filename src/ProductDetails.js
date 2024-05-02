import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./css/ProductDetails.css";
import Loader from "./Loader";

const ProductDetails = () => {
	const [product, setProduct] = useState({});
	const [loading, setLoading] = useState(true);
	const { id } = useParams();

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const response = await axios.get(
					`https://fakestoreapi.com/products/${id}`
				);
				setProduct(response.data);
			} catch (error) {
				console.error("Error fetching product:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchProduct();
	}, [id]);

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<div className="product-details">
					<h1>{product.title}</h1>
					<p>{product.description}</p>
					<p className="price">Prix : {product.price} $</p>
					<img src={product.image} alt={product.title} />
				</div>
			)}
		</>
	);
};

export default ProductDetails;
