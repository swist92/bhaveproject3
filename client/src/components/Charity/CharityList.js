import React, { Component } from "react";

function CharityList(props) {
  return (
    <div className="charityList">
      <span className="charityCompanyList">
        <div className="charityList">
          {props.charities.map((charity) => (
            <div key={charity.name} className="charityContainer">
              <h1>Name: {charity.name}</h1>
              <h3>City: {charity.city}</h3>
              <a>Website: {charity.url}</a>
              <h3>Donation URL: {charity.donationUrl}</h3>
            </div>
          ))}
        </div>
      </span>
    </div>
  );
}

export default CharityList;

// const CharityForm = props => (
//     <>
//         <Form>
//             <Form.Group controlId="charitySearchZip">
//                 <Form.Label>Would you like to find a charity near by?</Form.Label>
//                 <Form.Control
//                     type="text"
//                     className="charitySearchInput"
//                     placeholder="Enter your zip code"
//                 />
//             </Form.Group>
//         </Form>
//         <Button
//             variant="warning"
//             type="submit"
//             className="charitySearchInput"
//             onClick={this.getcharity}
//         >
//             Random
// </Button>
//         <Form>
//             <Form.Group controlId="charitySearchWord">
//                 <Form.Label>What types of charity are you looking for?</Form.Label>
//                 <Form.Control
//                     type="text"
//                     className="charitySearchInput"
//                     placeholder="Charity Name or Keyword. Example: " humane society" or "cancer" "
//             />
//         </Form.Group>
//         </Form>
//         <Button
//             variant="warning"
//             type="submit"
//             className="charitySearchInput"
//             onClick={this.getcharity}
//         >
//             Random
//             </Button>

//     </>

// );

// export default CharityForm;
