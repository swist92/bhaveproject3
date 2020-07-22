import React, { Component } from "react";
import "./Charity.css";
import CharityList from "./CharityList.js";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";

export default class Charity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      zipCode: [],
      isLoaded: false,
      charities: [],
    };
  }

  charitySearchInput(event) {
    this.setState({ zipCode: event.target.value });
  }

  getCharity = async (event, charityInfo) => {
    event.preventDefault();
    Axios.get("/api/charity")
      .then(({ data }) => {
        const charities = data.map((charity) => ({
          charityName: charity.name,
          zipCode: charity.zipCode,
          city: charity.city,
          url: charity.url,
          donationUrl: charity.donationUrl,
        }));
        this.setState({ charities });
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  };

  render() {
    return (
      <>
        <Form className="charityForm" onSubmit={this.getCharity}>
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
          onClick={this.getCharity}
        >
          Get Charity
        </Button>
        <CharityList charities={this.state.charities} />
      </>
    );
  }
}
