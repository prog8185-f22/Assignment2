import { useState } from 'react';

import './Rating.css';

export const Rating = ({ rating, setRating, readonly = false, ...props }) => {
	const [hover, setHover] = useState(rating);
	return (
		<div className="star-rating" {...props}>
			{[...Array(5)].map((star, index) => {
				index += 1;
				return (
					<button
						type="button"
						key={index}
						className={`Rating-button ${index <= (hover || rating) ? "Rating-on" : "Rating-off"}`}
						onClick={() => !readonly && setRating(index)}
						onMouseEnter={() => !readonly && setHover(index)}
						onMouseLeave={() => !readonly && setHover(rating)}
					>
						<span className="star">&#9733;</span>
					</button>
				);
			})}
		</div>
	);
};