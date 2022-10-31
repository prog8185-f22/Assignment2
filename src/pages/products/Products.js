import { useNavigate } from "react-router-dom";

import './Products.css';
import { getCart, getProducts, saveCart } from './../../services/products-service';

export const Products = () => {
	const navigate = useNavigate();
	const products = getProducts();

	const onProductCountChange = (productIndex, productCount) => {
		products[productIndex].count = parseInt(productCount);
	}

	const addToCart = (product) => {
		const cartItems = getCart();
		let isProductAlreadyAdded = false;
		const addingCount = product.count || 1;
		for (let i = 0; i < cartItems.length; i++) {
			if (cartItems[i].id === product.id) {
				cartItems[i].count = (cartItems[i].count || 0) + addingCount;
				product.count = 0;
				isProductAlreadyAdded = true;
			}
		}
		if (!isProductAlreadyAdded) {
			cartItems.push({ ...product, count: addingCount });
		}
		saveCart(cartItems);
		navigate("/pages/cart");
	};

	return (
		<>
			<div className="Action-buttons">
				<button className="Products-button" onClick={() => navigate("/pages/cart")}>Go to cart</button>
				{/* <button className="Products-button" onClick={() => navigate("/pages/review")}>Go to review products</button> */}
			</div>
			<div className="Products">
				<div className="Product-container">
					{products.map((product, productIndex) => (
						<div key={`product-${product.id}`} className="Product">
							<div className="Product-img-container" onClick={() => navigate(`/pages/product/${product.id}`)}>
								<img src={product.images[0]} alt="product" />
							</div>
							<div className="Product-details">
								<h4>{product.name}</h4>
								<p>{product.description}</p>
								<b>$ {product.price}</b>
								<div className="Add-card">
									<input onChange={(e) => onProductCountChange(productIndex, e.target.value)} type="number" />
									<button onClick={() => addToCart(product)}>Add to cart</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default Products;
