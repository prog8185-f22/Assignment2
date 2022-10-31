import { useParams, useNavigate } from "react-router-dom";

import './Product.css';
import { Rating } from "../../components/rating/Rating";
import { getCart, getProducts, saveCart } from './../../services/products-service';

export const Product = () => {
	const navigate = useNavigate();
	let { id } = useParams();
	const products = getProducts();
	const product = products.find(item => item.id === id)
	const onProductCountChange = (product, productCount) => {
		product.count = parseInt(productCount);
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

	return product ? (
		<>
			<div className="Action-buttons">
				<button className="Products-button" onClick={() => navigate("/pages/products")}>Go to products</button>
				<button className="Products-button" onClick={() => navigate("/pages/cart")}>Go to cart</button>
				{/* <button className="Products-button" onClick={() => navigate("/pages/review")}>Go to review products</button> */}
			</div>
			<div className="Product-one">
				<div className="Product-one-img-container" onClick={() => navigate(`/pages/product/${product.id}`)}>
					<img src={product.images[0]} alt="product" />
				</div>
				<div className="Product-one-details">
					<h4>{product.name}</h4>
					<p>{product.description}</p>
					<b>$ {product.price}</b>
					<div className="Add-card">
						<input onChange={(e) => onProductCountChange(product, e.target.value)} type="number" />
						<button onClick={() => addToCart(product)}>Add to cart</button>
					</div>
					<h5>Comments & Ratings</h5>
					{product.comments.length ? (
						<ul className="Product-one-comments">
							{product.comments.map((comment, index) => (
								<li key={`comment${index}`}>
									{comment.comment}
									<Rating className="Product-rating" rating={comment.rating} readonly setRating={() => console.log('setRating')} />
								</li>
							))}
						</ul>
					) : (<i>Not available</i>)}
				</div>
			</div>
		</>
	) : <>Product not available</>;
}

export default Product;
