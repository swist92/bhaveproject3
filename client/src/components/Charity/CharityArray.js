import React, { Component } from 'react';


class CharityArray extends Component {
    render() {

        const p = this.props;

        return (
            <div className="charityList">
                <span className="charityCompanyList"> Charity List </span>
                <div className="charityContainer">
                    <h1>Name: {p.charityName}</h1>
                    <h3>City: {p.city}</h3>
                    <a>Website: {p.url}</a>
                    <h3>Donation URL: {p.donationUrl}</h3>


                </div>

            </div>
        )
    }
}

export default CharityArray;

