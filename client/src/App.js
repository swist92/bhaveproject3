import React from "react";
import { SocialIcon } from "react-social-icons";

import { BrowserRouter as Router, Route } from "react-router-dom";
import MailchimpSubscribe from "react-mailchimp-subscribe";

// Style
import "./App.css";
import "./Media.css";
import bee2 from "./images/bee2.png";
import Image from "react-bootstrap/Image";

//Authorization
// import Amplify from "aws-amplify";
import { Auth } from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
// import awsconfig from "./aws-exports";

// Common Components
import Nav from "./common/Nav";

// React Bootstrap Components
import Navbar from "react-bootstrap/Navbar";
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
						<Col md={2} sm={3} id="btn-cont">
							<Nav />
						</Col>
						<Col md={9} sm={9} id="content-cont">
							<h1 id="dash">.</h1>
							<Container id="dash-content">
								<Route exact path="/" component={Home} />
								<Route path="/HivePublic" component={HivePublic} />
								<Route path="/Inspiration" component={Inspiration} />
								<Route path="/Community" component={Community} />
							</Container>
						</Col>
					</Row>
				</Container>
			</Router>
			<Navbar bg="dark" id="navb">
				<Image src={bee2} id="bee2" />
				<Row>
					<Col md={6} sm={4} id="mailchimp">
						<Container fluid>
							<div id="newsletter-head">Behave Newsletter</div>
							<MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />
						</Container>
					</Col>
					<Col md={6} sm={6} id="social-media">
						<Container>
							<SocialIcon url="https://www.facebook.com/B-Have-115388016920669" />
							<SocialIcon url="https://twitter.com/bhavebkind" />
							<SocialIcon url="https://www.linkedin.com/company/b-have-b-kind/?viewAsMember=true" />
							<SocialIcon url="https://www.instagram.com/bhavebkind/" />
						</Container>
					</Col>
				</Row>
				<Image src={bee2} id="bee2" />
			</Navbar>
			<ContactModal />
			<AmplifySignOut id="sign-out" />
		</AmplifyAuthenticator>
	);
}

export default App;
