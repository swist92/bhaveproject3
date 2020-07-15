import React from "react";
// import axios from "axios";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../../images/logo-large.png";
import FriendBtn from "../../images/friend-btn.png";
import NiceBtn from "../../images/nice-btn.png";
import { Link } from "react-router-dom";

function Home() {
	return (
		<Container fluid id="main-box">
			<Row>
				<Col fluid md={3} sm={3} id="btn-cont">
					<button id="left">
						<img
							src={NiceBtn}
							alt="blank hex"
							onClick={"this toggles to hive"}
							id="img-btn"
						/>
					</button>
					<button id="right">
						<img
							src={FriendBtn}
							alt="blank hex"
							onClick={"this toggles to hive"}
							id="img-btn"
						/>
					</button>
					<Link to={`/HivePublic`}>
						<button id="left">
							<Image src={Logo} alt="bhave logo" id="img-btn" />
						</button>
					</Link>
					<button id="right">
						<img
							src={FriendBtn}
							alt="blank hex"
							onClick={"this toggles to hive"}
							id="img-btn"
						/>
					</button>
					<button id="left">
						<img
							src={NiceBtn}
							alt="blank hex"
							onClick={"this toggles to hive"}
							id="img-btn"
						/>
					</button>
				</Col>
				<Col fluid md={9} sm={9} id="content-cont">
					<h1 id="dash">.</h1>
					<Container fluid md-9 id="dash-content"></Container>
				</Col>
			</Row>
		</Container>
	);
}

export default Home;
