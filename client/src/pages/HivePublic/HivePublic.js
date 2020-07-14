import React from "react";
// import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../../images/logo-large.png";
import FriendBtn from "../../images/friend-btn.png";
import NiceBtn from "../../images/nice-btn.png";
import { NavLink } from "react-router-dom";

function HivePublic() {
	return (
		<Container fluid id="main-box">
			<Row>
				<Col fluid md={2} sm={6} id="btn-cont">
					<button id="right">
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
					<NavLink to="/" activeClassName="selected">
						<button id="left">
							<img src={Logo} alt="bhave logo" id="img-btn" />
						</button>
					</NavLink>
					<button id="right">
						<img src={FriendBtn} alt="blank hex" onClick={""} id="img-btn" />
					</button>
					<button id="right">
						<img src={NiceBtn} alt="blank hex" onClick={""} id="img-btn" />
					</button>
				</Col>
				<Col fluid md={10} sm={6}>
					<h1 id="hive">.</h1>
					<Container fluid md-9 id="hive-content"></Container>
				</Col>
			</Row>
		</Container>
	);
}

export default HivePublic;
