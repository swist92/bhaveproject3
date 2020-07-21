import React, { Component } from "react";


export default class Comp extends Component {

    function Comp {
        return
        //returning the comp component
    }
   
    constructor(props) {
		super(props);
		this.state = {
		  username: [],
		  userTwo: [],
		};
		
	sendName() 
	  console.log('sendName');
	//   if (this.state.isFormFilledProfile) {
        console.log('sendName');
		const data = {
            username: this.state.username,
            userTwo: this.state.userTwo,
		};
    }
}



//     getcharity = (event) => {
//         event.preventDefault();
//         const charitySearch = event.target.elements.charitySearchInput.value;
//         API.charitySearch()
//             .then((res) => {
//                 console.log(res);
//                 //  this.setState({
//                 //      console.log(res);
//                 //      // image: res.data[0].media,
//                 //  });
//             }).catch((err) => console.log(err));
//     };
//     //class of... render
//     render() {
//         return (
//             <>
//                 <Form>
//                     <Form.Group controlId="charitySearchZip">
//                         <Form.Label>Would you like to find a charity near by?</Form.Label>
//                         <Form.Control
//                             type="text"
//                             className="charitySearchInput"
//                             placeholder="Enter your zip code"
//                         />
//                     </Form.Group>
//                 </Form>
//                 <Button
//                     variant="warning"
//                     type="submit"
//                     className="charitySearchInput"
//                     onClick={() => this.getcharity()}
//                 >
//                     Random
//     </Button>
//                 {/* <Form>
//                     <Form.Group controlId="charitySearchWord">
//                         <Form.Label>What types of charity are you looking for?</Form.Label>
//                         <Form.Control
//                             type="text"
//                             className="charitySearchInput"
//                             placeholder="Charity Name or Keyword. Example: humane society or cancer "
//                         />
//                     </Form.Group>
//                 </Form>
//                 <Button
//                     variant="warning"
//                     type="submit"
//                     className="charitySearchInput"
//                     onClick={this.getcharity}
//                 >
//                     Random
//                 </Button> */}
//             </>
//         );
//     };
// };

