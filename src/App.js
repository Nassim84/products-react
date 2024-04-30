// App.js

import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Outlet,
} from "react-router-dom";
import Contact from "./Contact";
import Navigation from "./Navigation";
import Home from "./Home";
import ProductList from "./ProductList";
import CreateProduct from "./CreateProduct";
import ProductNavigation from "./ProductNavigation";

function App() {
	return (
		<Router>
			<div>
				<Navigation />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/products" element={<Outlet />}>
						<Route
							path=""
							element={
								<>
									<ProductNavigation />
									<ProductList />
								</>
							}
						/>
						<Route path="all" element={<ProductList />} />
						<Route
							path="create"
							element={
								<>
									<ProductNavigation />
									<CreateProduct />
								</>
							}
						/>
						<Route path="*" element={<div>Page non trouvée</div>} />
					</Route>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
