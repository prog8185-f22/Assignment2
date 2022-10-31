import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { saveUserData } from "../../services/auth-service";
import { deleteCart } from "../../services/products-service";

import './Login.css';

function Login() {
	const navigate = useNavigate();

	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = data => {
		if (data.username === 'Admin' && data.password === 'Admin') {
			navigate("/pages/products");
			saveUserData({ name: "Admin" });
			deleteCart();
		} else {
			alert("Invalid username or password");
		}
	};
	return (
		<div className="Login">
			<form className="Login-form" onSubmit={handleSubmit(onSubmit)}>
				<h2>Login</h2>
				<div className="Form-control">
					<input placeholder="username" {...register("username", { required: true })} />
				</div>
				<div className="Form-control">
					<input type="password" placeholder="password" {...register("password", { required: true })} />
				</div>
				<div className="Form-error">
					{(errors.username || errors.password) && <span>Username and Password is required</span>}
				</div>
				<input className="Submit-button" type="submit" />
			</form>
		</div>
	);
}

export default Login;
