// Contact.js

import React from "react";
import contactImage from "./assets/contact.avif"; // Assurez-vous d'importer votre propre image ici
import "./css/Contact.css";

function Contact() {
	return (
		<div className="contact-container">
			<img className="contact-image" src={contactImage} alt="Contact" />
			<h1>📧 Nous contacter</h1>
			<div className="contact-info">
				<p>
					Pour toute question ou demande, n'hésitez pas à nous contacter à
					l'adresse suivante :
				</p>
				<a href="mailto:contact@example.com">contact@example.com</a>
				<p>
					Vous pouvez également nous suivre sur nos réseaux sociaux pour être
					informé des dernières actualités :
				</p>
				<div>
					<a href="https://twitter.com/example">Twitter 🐦</a>
					<a href="https://www.facebook.com/example">Facebook 📱</a>
					<a href="https://www.instagram.com/example">Instagram 📸</a>
				</div>
			</div>
		</div>
	);
}

export default Contact;
