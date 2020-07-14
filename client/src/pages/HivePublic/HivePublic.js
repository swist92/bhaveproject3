import React from "react";
// import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../../images/logo-large.png";
import FriendBtn from "../../images/friend-btn.png";
import NiceBtn from "../../images/nice-btn.png";

// import FriendBtn from "../../images/friend.png";

function HivePublic() {
	// const [kittens, setKittens] = useState([]);

	// // ComponentDidMount
	// useEffect(() => {
	//   getKittens();
	// }, []);

	// const getKittens = () => {
	//   axios.get("/api/kittens").then(({ data }) => {
	//     setKittens(data);
	//   });
	// };

	// const handleClick = (kitten) => {
	//   axios
	//     .put("/api/kittens/" + kitten._id, { sleepy: !kitten.sleepy })
	//     .then(function ({ data }) {
	//       getKittens();
	//     });
	// };

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
					<button id="left">
						<img src={Logo} alt="bhave logo" id="img-btn" />
					</button>
					<button id="right">
						<img
							src={FriendBtn}
							alt="blank hex"
							onClick={"this toggles to hive"}
							id="img-btn"
						/>
					</button>
					<button id="right">
						<img
							src={NiceBtn}
							alt="blank hex"
							onClick={"this toggles to hive"}
							id="img-btn"
						/>
					</button>
				</Col>
				<Col fluid md={10} sm={6}>
					<h1 id="dash">.</h1>
					<Container fluid md-9 id="dash-content"></Container>
				</Col>
			</Row>
		</Container>
	);
}

export default HivePublic;
