import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Styles
import "./App.css";
import "./Media.css";

//Authorization
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

// Pages
import Home from "./pages/Home";
import HivePublic from "./pages/HivePublic";

Amplify.configure(awsconfig);

function App() {
	return (
		<AmplifyAuthenticator>
			<Router>
				<div>
					<Route exact path="/" component={Home} />
					<Route path="/HivePublic" component={HivePublic} />
				</div>
			</Router>
			<AmplifySignOut />
		</AmplifyAuthenticator>
	);
}

export default App;
