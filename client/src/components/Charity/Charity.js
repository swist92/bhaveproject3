import React, { Component } from "react";
import "./Charity.css";
import CharityList from "./CharityList.js";
import CharityArray from "./CharityArray.js";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import API from "../../utils/API";


import Axios from "axios";



export default class Charity extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			zipCode: [],
			isLoaded: false,
			charityArray: [

			],
		}


	};

	// state = {
	// 	zipCode: [],

	// }



	charitySearchInput(event) {
		this.setState({ zipCode: event.target.value });
	};

	// const postedCharity = res.data.map((post) =>
	// )






	// getcharity = (event) => {
	// 	const charitySearch = event.target.elements.charitySearchInput.value;

	// 	ajax({
	// 		url: charitySearch,
	// 		method: "GET",
	// 		dataType: "json",
	// 		API.charitySearch()
	// 			.then((res) => {
	// 				console.log(res);
	// 			}).catch((err) => console.log(err));

	// 	};
	// // };

	addCharity = (charityInfo) => {
		this.setState(prevState => ({
			charityArray: [...prevState.charityArray, charityInfo]
		}));
	};

	getcharity = async (event, charityInfo) => {
		console.log("sf");
		event.preventDefault();
		this.setState({ zipCode: event.target.value });
		API.charitySearch()
			.then((res) => {
				console.log(res.data);
				this.setState(prevState => ({
					res.data.data[0]
					charityArray: [...prevState.charityArray, charityInfo]
				}));
			}).catch((err) => console.log(err));

		Axios
			.get("api/charity")
			.then(response =>
				response.data.res.map(user => ({
					charityName: `${response.data.data.charityName}`,
					zipCode: `${response.data.data.zipCode}`,
					city: `${response.data.data.city}`,
					url: `${response.data.data.url}`,
					donationUrl: `${response.data.data.donationUrl}`
				}))
			).catch(error => this.setState({ error, isLoading: false }));
	}




	render() {
		// console.log(this);
		return (
			<>
				<Form className="charityForm" onSubmit={this.addCharity}>
					<Form.Group controlId="charitySearchZip">
						<Form.Label>Would you like to find a charity near by?</Form.Label>
						<Form.Control
							onChange={(event) => this.charitySearchInput(event)}
							type="text"
							// className="charitySearchInput"
							placeholder="Enter your zip code"
							name="userTwo"
						/>

					</Form.Group>
				</Form>

				<Button
					variant="warning"
					type="submit"
					className="charitySearchInput"
					onClick={this.getcharity}
				>

				</Button>

				// {/* Pass the array in CharityList component */}
				<CharityList charityArray={this.state.charityArray}></CharityList>

			</>
		);
	};
}


