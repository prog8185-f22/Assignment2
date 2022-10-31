export function saveProducts(products) {
	localStorage.setItem("products", JSON.stringify(products));
}

export function getProducts() {
	const productsString = localStorage.getItem("products");
	let products = [
		{
			id: '1',
			name: 'Coffe Table',
			description: 'Small wooden coffe table ',
			rating: 4.4,
			totalRatings: 607,
			reviews: 66,
			category: 1,
			price: 150,
			offer: 12,
			images: [
				'https://image.shutterstock.com/shutterstock/photos/419765434/display_1500/stock-photo-small-wooden-coffe-table-isolated-on-a-white-background-front-view-419765434.jpg',
			],
			comments: []
		},
		{
			id: '2',
			name: 'Big disk shape stand',
			description: 'Big disk shape pale grey stylish 3d padded board and pews stand on one shiny foot on light background. Club rest trendy retro design.',
			rating: 4.2,
			totalRatings: 628,
			reviews: 80,
			category: 1,
			price: 99,
			offer: 8,
			images: [
				'https://image.shutterstock.com/shutterstock/photos/490261585/display_1500/stock-vector-disk-shape-grey-color-stylish-d-board-pedestal-stand-on-one-solid-shiny-foot-club-concept-object-490261585.jpg',
			],
			comments: []
		},
		{
			id: '3',
			name: 'Retro armchair',
			description: 'Retro armchair and small round table',
			rating: 4.5,
			totalRatings: 13837,
			reviews: 720,
			category: 1,
			price: 199,
			offer: 5,
			images: [
				'https://image.shutterstock.com/shutterstock/photos/1015894033/display_1500/stock-photo-retro-armchair-and-small-round-table-with-white-roses-in-glass-vase-against-beige-wall-1015894033.jpg',
			],
			comments: []
		},
		{
			id: '4',
			name: 'Square Table',
			description: 'Square wenge wood table isolated on white',
			rating: 4.1,
			totalRatings: 3449,
			reviews: 520,
			category: 1,
			price: 549,
			offer: 10,
			images: [
				'https://image.shutterstock.com/shutterstock/photos/64985092/display_1500/stock-photo-square-wenge-wood-table-isolated-on-white-64985092.jpg',
			],
			comments: []
		},
		{
			id: '5',
			name: 'Television table',
			description: 'Small wooden Television table ',
			rating: 4.6,
			totalRatings: 1237,
			reviews: 90,
			category: 1,
			price: 199,
			offer: 10,
			images: [
				'https://image.shutterstock.com/shutterstock/photos/419764855/display_1500/stock-photo-small-wooden-television-table-isolated-on-a-white-background-front-view-dark-brown-419764855.jpg',
			],
			comments: []
		},
		{
			id: '6',
			name: 'Table',
			description: 'Wooden round table',
			rating: 4.1,
			totalRatings: 1937,
			reviews: 500,
			category: 1,
			price: 600,
			offer: 10,
			images: [
				'https://media.istockphoto.com/photos/wooden-round-table-picture-id900257448',
			],
			comments: []
		}
		,
		{
			id: '7',
			name: 'Armchair',
			description: 'Dark blue navy sapphire color armchair. Modern designer chair ',
			rating: 4.1,
			totalRatings: 1937,
			reviews: 500,
			category: 1,
			price: 670,
			offer: 10,
			images: [
				'https://image.shutterstock.com/shutterstock/photos/1687941274/display_1500/stock-photo-dark-blue-navy-sapphire-color-armchair-modern-designer-chair-on-white-background-textile-chair-1687941274.jpg',
			],
			comments: []
		}
		,
		{
			id: '8',
			name: 'Leather Chair',
			description: 'Scandinavian leather chair. Black leather upholstery armchair with pillows.',
			rating: 4.1,
			totalRatings: 1937,
			reviews: 500,
			category: 1,
			price: 800,
			offer: 10,
			images: [
				'https://image.shutterstock.com/shutterstock/photos/1905773131/display_1500/stock-photo-scandinavian-leather-chair-black-leather-upholstery-armchair-with-pillows-on-white-background-mid-1905773131.jpg',
			],
			comments: []
		}
	];
	if (productsString) {
		products = JSON.parse(productsString);
	} else {
		saveProducts(products);
	}
	return products;
}

export function saveCart(cartProducts) {
	localStorage.setItem("cartItems", JSON.stringify(cartProducts));
}

export function getCart() {
	return localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];
}

export function deleteCart() {
	localStorage.removeItem("cartItems");
}

export function saveReviewItems(reviewProducts) {
	localStorage.setItem("reviewItems", JSON.stringify(reviewProducts));
}

export function getReviewItems() {
	return localStorage.getItem("reviewItems") ? JSON.parse(localStorage.getItem("reviewItems")) : [];
}

export function deleteReviewItems() {
	localStorage.removeItem("reviewItems");
}
