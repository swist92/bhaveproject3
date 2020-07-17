import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Inspiration() {
	return (
		<Form>
			<Form.Group controlId="friendName">
				<Form.Label>Who is the person you are complimenting?</Form.Label>
				<Form.Control type="text" placeholder="Joan Huffelpump" />
				<Form.Text className="text-muted">
					Make someones day with our automated inspiration generator.
				</Form.Text>
			</Form.Group>
			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
}

export default Inspiration;
