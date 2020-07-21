import React, { Component } from 'react';



const CharityForm = props => (
    <>
        <Form>
            <Form.Group controlId="charitySearchZip">
                <Form.Label>Would you like to find a charity near by?</Form.Label>
                <Form.Control
                    type="text"
                    className="charitySearchInput"
                    placeholder="Enter your zip code"
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
</Button>
        <Form>
            <Form.Group controlId="charitySearchWord">
                <Form.Label>What types of charity are you looking for?</Form.Label>
                <Form.Control
                    type="text"
                    className="charitySearchInput"
                    placeholder="Charity Name or Keyword. Example: " humane society" or "cancer" "
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
            </Button>

    </>

);

export default CharityForm;