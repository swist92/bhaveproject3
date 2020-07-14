import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Styles
import "./App.css";
import "./Media.css";

// Pages
import Home from "./pages/Home";
import HivePublic from "./pages/HivePublic";

function App() {
	return (
		<Router>
			<Route exact path="/" component={Home} />
			<Route exact path="/HivePublic" component={HivePublic} />
		</Router>
	);
}

export default App;
