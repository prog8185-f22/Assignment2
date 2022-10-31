import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import {
	getCart,
	saveCart,
	saveReviewItems
} from '../../services/products-service';
import './Cart.css';


export const Cart = () => {
	const navigate = useNavigate();
	const [cartProducts, setcartProducts] = useState(getCart());

	const updateCart = (items) => {
		saveCart(items);
		setcartProducts(items);
	}

	const onProductCountChange = (itemIndex, itemCount) => {
		const items = [...cartProducts];
		if (parseInt(itemCount) === 0) {
			items.splice(itemIndex, 1);
		} else {
			items[itemIndex].count = parseInt(itemCount);
		}
		updateCart(items);
	}

	const remove = (itemIndex) => {
		onProductCountChange(itemIndex, 0);
	}

	const checkout = () => {
		saveReviewItems(cartProducts);
		alert("Checkout Successfully !!");
		updateCart([]);
		navigate("/pages/review")
	}

	return (
		<div className="Cart">
			<div className="Action-buttons">
				<button className="Products-button" onClick={() => navigate("/pages/products")}>
					Go to products
				</button>
			</div>
			{cartProducts.length > 0 ? (
				<div className="Cart-details">
					<div className="Cart-products">
						{cartProducts.map((item, productIndex) => (
							<div key={`product-${item.id}`} className="Cart-product">
								<div className="Cart-product-img-container">
									<img src={item.images[0]} alt="product" />
								</div>
								<div className="Cart-product-details">
									<h4>{item.name}</h4>
									<p>{item.description}</p>
									<b>$ {item.price}</b>
									<div className="Add-card">
										<input value={item.count} onChange={(e) => onProductCountChange(productIndex, e.target.value)} type="number" />
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
									<tr>
										<th>Item</th>
										<th>Count</th>
										<th>Price</th>
									</tr>
								</thead>
								<tbody>
									{cartProducts.map((item) => (
										<tr key={`product-summary-${item.id}`}>
											<td>{item.name}</td>
											<td>{item.count}</td>
											<td>$ {item.count * item.price}</td>
										</tr>
									))}
									<tr>
										<td colSpan="2">Total</td>
										<td>$ {cartProducts.reduce((pVal, curVal) => pVal + (curVal.price * curVal.count), 0)}</td>
									</tr>
								</tbody>
							</table>
							<div className="Action-buttons">
								<button className="Products-button" onClick={checkout}>Checkout</button>
							</div>
						</div>
					</div>
				</div>
			) : (<>Cart is empty !!</>)}
		</div>
	);
}

export default Cart;
