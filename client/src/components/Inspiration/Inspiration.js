import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


class Inspiration extends Component {
    state = {
        image: "",
        quote: "",
    };
    
    // When the component mounts, load the next dog to be displayed
    componentDidMount() {
    this.loadNextInspiration();
    }
    
    handleBtnClick = event => {
    // Get the data-value of the clicked button
    const btnType = event.target.attributes.getNamedItem("data-value").value;
    // Clone this.state to the newState object
    // We'll modify this object and use it to set our component's state
    const newState = { ...this.state };

    // Replace our component's state with newState, load the next dog image
    this.setState(newState);
    this.loadNextInspiration();
    };

    loadNextInspiration = () => {
    API.getRandomInspiration()
        .then(res =>
        this.setState({
            image: res.data.message
        })
        )
        .catch(err => console.log(err));
    };

    render() {
        return (
            <>
            <Form>
                <Form.Group controlId="friendName">
                    <Form.Label>Who is the person you are complimenting?</Form.Label>
                    <Form.Control type="text" placeholder="Joan Huffelpump" />
                    <Form.Text className="text-muted">
                        Make someones day with our automated inspiration generator.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={props.loadNextInspiration}>
                    Submit
                </Button>
            </Form>
            <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
            </>
        );
    }
}

export default Inspiration;

//build out component
//onClick event for Random button
//trigger axios request to Inspiration API route
//build axios request