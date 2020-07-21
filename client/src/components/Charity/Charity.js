import React, { Component } from "react";
import "./Charity.css";
import "./CharityForm.js";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import API from "../../utils/API"

import Axios from "axios";



export default class Charity extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			zipCode: [],
			isLoaded: false,
		}
	};

	state = {
		zipCode: "",

	}
};



function handleInputPage(event) {
	const { zipcode, value } = event.target;
	this.setState({
		state.zipCode
	})

}

componentDidMount() {
	const charitySearch = CharityAPI;
	Axios.get("api/charity");
            .then(res =>
		res.json())
	const post = res.data.data.children.map(object => object.data)
		.then(
			(result) => ({
				isLoaded: true,
				zipCode: result.zipCode
			}),
			(error) => {
				this.setState({
					isLoaded: true,
					error
				});
			}
		)
}



getcharity = (event) => {
	const charitySearch = event.target.elements.charitySearchInput.value;

	ajax({
		url: charitySearch,
		method: "GET",
		dataType: "json",
		API.charitySearch()
			.then((res) => {
				console.log(res);
			}).catch((err) => console.log(err));

	};
};

// getcharity = (event) => {
//  event.preventDefault();
//  const charitySearch = event.target.elements.charitySearchInput.value;
//  API.charitySearch()
//      .then((res) => {
//          console.log(res);
//          //  this.setState({
//          //      console.log(res);
//          //      // image: res.data[0].media,
//          //  });
//      }).catch((err) => console.log(err));

// };


render() {
	return (
		<>
			<Form className="charityForm">
				<Form.Group controlId="charitySearchZip">
					<Form.Label>Would you like to find a charity near by?</Form.Label>
					<Form.Control
						onChange={handleInputPage}
						type="text"
						className="charitySearchInput"
						placeholder="Enter your zip code"
						name="userTwo"
					/>
				</Form.Group>
			</Form>
			<Button
				variant="warning"
				type="submit"
				className="charitySearchInput"
				onClick={() => this.getcharity}
				onClick={() => this.handleTextInput}
			>
				Search
    </Button>


			{/* <Form>
                    <Form.Group controlId="charitySearchWord">
                        <Form.Label>What types of charity are you looking for?</Form.Label>
                        <Form.Control
                            type="text"
                            className="charitySearchInput"
                            placeholder="Charity Name or Keyword. Example: humane society or cancer "
                        />
                    </Form.Group>
                </Form>
                <Button
                    variant="warning"
                    type="submit"
                    className="charitySearchInput"
                    onClick={this.getcharity}
                >
                    Random
                </Button> */}

		</>

	);
};
};
