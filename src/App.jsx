import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";

import './App.css';
import Auth from "./auth/Auth";
import Pages from './pages/Pages';

export const App = () => {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/auth/*" element={<Auth />} />
					<Route path="/pages/*" element={<Pages />} />
					<Route path="/" element={<Auth />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
