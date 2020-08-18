import React, { Component } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';




function CharityList(props) {
  return (
    // <div className="row">
    //   <div className="row text-center">
    //     <div className="card">
    //       <div className="charityList">
    <span className="charityCompanyList">
      <div className="charityList">
        {props.charities.map((charity) => (
          <div key={charity.name} className="charityContainer">
            <h4>Name: {charity.charityName}</h4>
            <h6>Category: {charity.category}</h6>
            <h6>City: {charity.city}</h6>

            <a target="_blank" href={charity.url}><button className="btn btn-primary">Charity Website</button> </a>

          </div>
        ))}
      </div>
    </span>
    //       </div>
    //     </div>
    //   </div>
    // </div>

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


