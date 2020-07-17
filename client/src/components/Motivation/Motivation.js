import React from "react";
import { Dropdown } from "react-bootstrap";
import { Image } from "react-bootstrap";

export function Motivation() {
	return (
		<>
			<h1>Please select a motivational image</h1>
			<div className="dropdown">
				<Dropdown>
					<Dropdown.Toggle variant="secondary btn-sm" id="dropdown-basic">
						Type Of Motivation
					</Dropdown.Toggle>
					<Dropdown.Menu style={{ backgroundColor: "#73a47" }}>
						<Dropdown.Item href="#">Calming</Dropdown.Item>
						<Dropdown.Item href="#">Happy</Dropdown.Item>
						<Dropdown.Item href="#">Cute</Dropdown.Item>
						<Dropdown.Item href="#">Funny</Dropdown.Item>
						<Dropdown.Item href="#">Peaceful</Dropdown.Item>
						<Dropdown.Item href="#">Relaxing</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
			<Image src={} alt="motivational image" id="X" />
		</>
	);
}

export default Motivation;
