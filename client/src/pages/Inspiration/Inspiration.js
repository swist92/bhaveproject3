import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import API from "../../utils/API";
import Gift from "../../components/Gifts/Gift";

class Inspiration extends Component {
	state = {
		image: "",
	};

	//   handleBtnClick = (event) => {
	//     // Get the data-value of the clicked button
	//     const btnType = event.target.attributes.getNamedItem("data-value").value;
	//     // Clone this.state to the newState object
	//     // We'll modify this object and use it to set our component's state
	//     const newState = { ...this.state };

	//     // Replace our component's state with newState, load the next dog image
	//     this.setState(newState);
	//     this.loadNextInspiration();
	//   };

	loadNextInspiration = (event) => {
		event.preventDefault();
		API.getRandomInspiration()
			.then((res) => {
				this.setState({
					image: res.data[0].media,
				});
			})
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<>
				<Form>
					<Form.Group controlId="friendName">
						<Form.Label>Who would you like to send some love to?</Form.Label>
						<Form.Control
							type="text"
							placeholder="Write the name of someone you care about..."
						/>
					</Form.Group>
				</Form>
				<Button
					variant="warning"
					type="submit"
					onClick={this.loadNextInspiration}
				>
					Random
				</Button>
				<Form.Text className="text-muted">
					Make someone's day with our automated inspiration generator.
				</Form.Text>
				<Form.Group controlId="exampleForm.ControlTextarea1">
					<Form.Label>Write Compliment</Form.Label>
					<Form.Control as="textarea" rows="3" />
				</Form.Group>
				<Button variant="primary" type="submit" onClick={this.saveHive}>
					Submit
				</Button>
				<Card onClick={this.loadNextInspiration} id="inspire-card">
					<Card.Img variant="bottom" src={this.state.image} id="card-img" />
				</Card>
				<Gift></Gift>
			</>
		);
	}
}

export default Inspiration;

//build out component
//onClick event for Random button
//trigger axios request to Inspiration API route
//build axios request
