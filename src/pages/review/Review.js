import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ProductReview from "../../components/product-review/ProductReview";
import { getReviewItems, saveReviewItems } from "../../services/products-service";

import './Review.css';

function Review() {
	const navigate = useNavigate();
	const items = getReviewItems();
	const [reviewItems, setReviewItems] = useState(items);
	const onReviewComplete = (completedProdId) => {
		const newItems = [...reviewItems];
		newItems.splice(reviewItems.indexOf(reviewItems.find(rItem => rItem.id === completedProdId)), 1);
		setReviewItems(newItems);
		saveReviewItems(newItems);
	};
	return (
		<div className="Review">
			<div className="Action-buttons">
				<button className="Products-button" onClick={() => navigate("/pages/products")}>Go to products</button>
				<button className="Products-button" onClick={() => navigate("/pages/cart")}>Go to cart</button>
			</div>
			{reviewItems.length ? reviewItems.map(item => (
				<ProductReview key={item.id} reviewProduct={item} onReviewComplete={() => onReviewComplete(item.id)} />
			)) : (
				<>Review added successfully!</>
			)}
		</div>
	);
}

export default Review;
