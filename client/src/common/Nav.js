import React from "react";
import { Link } from "react-router-dom";
import FriendBtn from "../images/friend-btn.png";
import NiceBtn from "../images/nice-btn.png";
import Logo from "../images/logo-large.png";
import Blank from "../images/blankhex.png";

// React Bootstrap Components
import Image from "react-bootstrap/Image";

function Navbar() {
	return (
		<div>
			<Link to={`/Inspiration`}>
				<button id="left">
					<img
						src={Blank}
						alt="pictures with motivation quotes"
						onClick={"this toggles to hive"}
						id="img-btn"
					/>
				</button>
			</Link>
			<Link to={`/`}>
				<button id="right">
					<img
						src={Blank}
						alt="blank hex"
						onClick={"this toggles to hive"}
						id="img-btn"
					/>
				</button>
			</Link>
			<Link to={`/HivePublic`}>
				<button id="left">
					<Image src={Logo} alt="bhave logo" id="img-btn" />
				</button>
			</Link>
			<button id="right">
				<img
					src={Blank}
					alt="blank hex"
					onClick={"this toggles to hive"}
					id="img-btn"
				/>
			</button>
		</div>
	);
}

export default Navbar;
