import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Rating } from "../../components/rating/Rating";
import { saveUserData } from "../../services/auth-service";
import { getProducts, saveProducts, getReviewItems, saveReviewItems } from "../../services/products-service";

import './ProductReview.css';

function ProductReview({ reviewProduct, onReviewComplete }) {
	const [rating, setRating] = useState(5);

	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = data => {
		const products = getProducts();

		saveProducts(products.map(product => {
			if (product.id === reviewProduct.id) {
				product.comments.push({
					id: product.comments.length,
					comment: data.comments,
					rating: rating
				});
			}
			return product;
		}));
		alert("Review updated successfully");
		onReviewComplete();
	};
	return (
		<div className="ProductReview">
			<form className="Review-form" onSubmit={handleSubmit(onSubmit)}>
				<div className="Cart-product">
					<div className="Cart-product-img-container">
						<img src={reviewProduct.images[0]} alt="product" />
					</div>
					<div className="Cart-product-details">
						<h4>{reviewProduct.name}</h4>
						<p>{reviewProduct.description}</p>
						<b>$ {reviewProduct.price}</b>
					</div>
				</div>
				<div>
					<div className="Form-control">
						<textarea className="Review-comments" rows="4" cols="50" placeholder="Comments" {...register("comments", { required: true })} />
					</div>
					<div className="Form-control">
						<Rating rating={rating} setRating={setRating} />
					</div>
					<div className="Form-error">
						{(errors.username || errors.password) && <span>Enter your comments</span>}
					</div>
					<input className="Submit-button" type="submit" />
				</div>
			</form>
		</div>
	);
}

export default ProductReview;
