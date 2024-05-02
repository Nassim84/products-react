import React, { useState } from "react";
import axios from "axios";
import "./css/CreateProduct.css";

const CreateProduct = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");
	const [category, setCategory] = useState("");
	const [image, setImage] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newProduct = { title, description, price, category, image };
		try {
			await axios.post("https://fakestoreapi.com/products", newProduct);
			// Réinitialiser les champs du formulaire après la soumission réussie
			setTitle("");
			setDescription("");
			setPrice("");
			setCategory("");
			setImage("");
		} catch (error) {
			console.error("Erreur lors de la création du produit :", error);
		}
	};

	return (
		<div>
			<h1>Créer un nouveau produit</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="title">Titre</label>
					<input
						type="text"
						id="title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				{/* Autres champs du formulaire */}
				<button type="submit">Créer</button>
			</form>
		</div>
	);
};

export default CreateProduct;
