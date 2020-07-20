import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Style
import "./App.css";
import "./Media.css";
import bee2 from "./images/bee2.png";
import Image from "react-bootstrap/Image";

//Authorization
import Amplify from "aws-amplify";
import { Auth } from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import awsconfig from "./aws-exports";

// Common Components
import Nav from "./common/Nav";

// React Bootstrap Components
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Pages
import Home from "./pages/Home";
import HivePublic from "./pages/HivePublic";
import ContactModal from "../src/components/Modal/ContactModal";
import Inspiration from "./pages/Inspiration/Inspiration";
import Community from "./pages/Community/Community";

// Utils
import API from "./utils/API";

function App() {
	Auth.currentAuthenticatedUser({
		bypassCache: true, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
	})
		.then((user) => {
			console.log(user);
			const userObj = {
				username: user.username,
				email: user.attributes.email,
				sub: user.attributes.sub,
			};
			API.createUser(userObj);
		})
		.catch((err) => console.log(err));

	return (
		<AmplifyAuthenticator>
			<Router>
				<Container fluid id="main-box">
					<Row>
						<Col fluid md={2} sm={3} id="btn-cont">
							<Nav />
						</Col>
						<Col fluid md={9} sm={9} id="content-cont">
							<h1 id="dash">.</h1>
							<Container fluid md-9 id="dash-content">
								<Route exact path="/" component={Home} />
								<Route path="/HivePublic" component={HivePublic} />
								<Route path="/Inspiration" component={Inspiration} />
								<Route path="/Community" component={Community} />
							</Container>
						</Col>
					</Row>
				</Container>
			</Router>
			<AmplifySignOut />
			<ContactModal />
			<Navbar bg="dark" id="navb">
				<Navbar.Brand href="#home">Bhave Newsletter</Navbar.Brand>
				<div id="mc_embed_signup">
					<Form
						flex
						action="https://gmail.us10.list-manage.com/subscribe/post?u=61def9bff33162874e3fac869&amp;id=a4062c575d"
						method="post"
						id="mc-embedded-subscribe-form"
						name="mc-embedded-subscribe-form"
						className="validate"
						target="_blank"
						novalidate
					>
						<div id="mc_embed_signup_scroll">
							<label for="mce-EMAIL"></label>
							<input
								type="email"
								value=""
								name="EMAIL"
								className="email"
								id="mce-EMAIL"
								placeholder="email address"
								required
							></input>
							<div aria-hidden="true" id="i2">
								<input
									type="text"
									name="b_61def9bff33162874e3fac869_a4062c575d"
									tabindex="-1"
									value=""
								></input>
							</div>
							<div className="clear">
								<input
									type="submit"
									value="Subscribe"
									name="subscribe"
									id="mc-embedded-subscribe"
									className="button"
								></input>
							</div>
						</div>
					</Form>
				</div>
			</Navbar>
		</AmplifyAuthenticator>
	);
}

export default App;
