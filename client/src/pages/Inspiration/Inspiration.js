import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import API from "../../utils/API";
import Gift from "../../components/Gifts/Gift";

class Inspiration extends Component {
  state = {
    image: "",
    compliment: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.compliment);
  };

  handleCompliment = (event) => {
    this.setState({ compliment: event.target.value });
  };

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

          <Form.Control
            name="compliment"
            placeholder="EX. You look fly."
            value={this.state.compliment}
            onChange={this.handleCompliment}
            as="textarea"
            rows="3"
          />
        </Form.Group>

        <Button onClick={this.handleSubmit} variant="primary">
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
