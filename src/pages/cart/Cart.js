import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getCart, saveCart, saveReviewItems } from '../../services/products-service';

import './Cart.css';

export const Cart = () => {
	const navigate = useNavigate();
	const [cartItems, setCartItems] = useState(getCart());

	const updateCart = (products) => {
		saveCart(products);
		setCartItems(products);
	}

	const onProductCountChange = (productIndex, productCount) => {
		const products = [...cartItems];
		if (parseInt(productCount) === 0) {
			products.splice(productIndex, 1);
		} else {
			products[productIndex].count = parseInt(productCount);
		}
		updateCart(products);
	}

	const remove = (productIndex) => {
		onProductCountChange(productIndex, 0);
	}

	const checkout = () => {
		saveReviewItems(cartItems);
		alert("Checkout successfully !!");
		updateCart([]);
		navigate("/pages/review")
	}

	return (
		<div className="Cart">
			<div className="Action-buttons">
				<button className="Products-button" onClick={() => navigate("/pages/products")}>Go to products</button>
			</div>
			{cartItems.length > 0 ? (
				<div className="Cart-details">
					<div className="Cart-products">
						{cartItems.map((product, productIndex) => (
							<div key={`product-${product.id}`} className="Cart-product">
								<div className="Cart-product-img-container">
									<img src={product.images[0]} alt="product" />
								</div>
								<div className="Cart-product-details">
									<h4>{product.name}</h4>
									<p>{product.description}</p>
									<b>$ {product.price}</b>
									<div className="Add-card">
										<input value={product.count} onChange={(e) => onProductCountChange(productIndex, e.target.value)} type="number" />
										<button className="Products-button Products-remove-button" onClick={() => remove(productIndex)}>Remove</button>
									</div>
								</div>
							</div>
						))}
					</div>
					<div className="Cart-summary-container">
						<div className="Cart-summary">
							<h5>Cart Summary</h5>
							<table className="Cart-table">
								<thead>
									<tr><th>Item</th><th>Count</th><th>Price</th></tr>
								</thead>
								<tbody>
									{cartItems.map((product) => (
										<tr key={`product-summary-${product.id}`}>
											<td>{product.name}</td>
											<td>{product.count}</td>
											<td>$ {product.count * product.price}</td>
										</tr>
									))}
									<tr>
										<td colSpan="2">Total</td>
										<td>$ {cartItems.reduce((pVal, curVal) => pVal + (curVal.price * curVal.count), 0)}</td>
									</tr>
								</tbody>
							</table>
							<div className="Action-buttons">
								<button className="Products-button" onClick={checkout}>Checkout</button>
							</div>
						</div>
					</div>
				</div>
			) : (<>Cart is empty !</>)}
		</div>
	);
}

export default Cart;
