export function saveUserData(userData) {
	localStorage.setItem("user", JSON.stringify(userData));
}

export function getUserData() {
	return localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : undefined;
}

export function deleteUserData() {
	localStorage.removeItem("user");
}