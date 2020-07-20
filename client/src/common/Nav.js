import React from "react";
import { Link } from "react-router-dom";
import Inspire from "../images/Inspire-btn.png";
import Community from "../images/Community-btn.png";
import Hive from "../images/Hive.png";
import Logo from "../images/logo-large.png";

// React Bootstrap Components
import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";

function Navbar() {
	return (
		<div>
			<Link to={`/`}>
				<button id="left">
					<Image src={Logo} alt="bhave logo" id="img-btn" />
				</button>
			</Link>
			<Link to={`/HivePublic`}>
				<button id="right">
					<img
						src={Hive}
						alt="Hive Button"
						onClick={"this toggles to hive"}
						id="img-btn"
					/>
				</button>
			</Link>
			<Link to={`/Inspiration`}>
				<button id="left">
					<img
						src={Inspire}
						alt="pictures with motivation quotes"
						onClick={"this toggles to hive"}
						id="img-btn"
					/>
				</button>
			</Link>
			<Link to={`/Community`}>
				<button id="right">
					<img
						src={Community}
						alt="blank hex"
						onClick={"this toggles to hive"}
						id="img-btn"
					/>
				</button>
			</Link>
		</div>
	);
}

export default Navbar;
