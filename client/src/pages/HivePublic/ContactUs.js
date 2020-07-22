import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";


class ContactUs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            message: '',
            disabled: false,
            emailSent: null,
        }

    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            disabled: true,
        });
        axios.post('/contact', this.state)
            .then(res => {
                if (res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                }
            })
            .catch(err => {
                console.log(err);

                this.setState({
                    disabled: false,
                    emailSent: false
                });
            })

    }

    render() {
        return (
            <>
                <h1> Contact Us</h1>

                <Content>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Name</Form.Label>
                            <Form.Control id="name" name="name" type="text" value={this.state.name} onChange={this.handleChange} placeholder="Name" />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea" rows="3" value={this.state.message} onChange={this.handleChange} placeholder="Message" />
                        </Form.Group>

                        {/* <Form.Group controlId="formBasicCheckbox"></Form.Group> */}
                        <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                            Submit
						</Button>

                        {this.state.emailSent === true && <p className="d-inline success-msg"> Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg"> Email Not Sent</p>}

                    </Form>{" "}

                </Content>
            </>


        );
    }
}

export default ContactUs;
