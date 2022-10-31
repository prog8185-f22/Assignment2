import {
	Routes,
	Route,
	Link
} from "react-router-dom";
import { useNavigate } from "react-router-dom";

import './Pages.css';
import Cart from "./cart/Cart";
import Review from "./review/Review";
import Product from "./product/Product";
import Products from "./products/Products";
import { deleteUserData, getUserData } from "../services/auth-service";

export const Pages = () => {
	const navigate = useNavigate();

	const logout = () => {
		deleteUserData();
		navigate("/auth/login");
	};

	return (
		<div className="Pages">
			<header className="App-header">
				<span className="App-name" onClick={() => navigate("/pages/products")}>Furniture Store</span>
				{getUserData() ? (
					<div>
						Hi {getUserData()?.name}
						<button className="Auth-button" onClick={logout}>Logout</button>
					</div>
				) : <button className="Auth-button" onClick={() => navigate("/auth/login")}>Login</button>}
			</header>
			<Routes>
				<Route path="/products" element={<Products />} />
				<Route path="/product/:id" element={<Product />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/review" element={<Review />} />
				<Route path="/" element={<Products />} />
			</Routes>
		</div>
	);
}

export default Pages;
