import {
	Routes,
	Route,
} from "react-router-dom";

import './Auth.css';
import Login from "./login/Login";

export const Auth = () => {
	return (
		<div className="Auth">
			<Routes>
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/" element={<Login />} />
			</Routes>
		</div>
	);
}

export default Auth;
