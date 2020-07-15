import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ContactUs() {
	return (
		<>
			<h1>Contact Page</h1>
			<Form>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Message</Form.Label>
					<Form.Control type="text" placeholder="Message" />
				</Form.Group>
				<Form.Group controlId="formBasicCheckbox"></Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>{" "}
		</>
	);
}

export default ContactUs;
