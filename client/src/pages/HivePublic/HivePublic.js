import React, { Component } from "react";

class HivePublic extends Component {
	state = {
		inspiration: "",
	};

	// Pull the inspiration from the database using API from line 10
	// use this.setState() to change inspiration from "" to whatever you pulled from the database

	render() {
		return (
			<>
				<h1 id="hive-head">The Hive!</h1>
				<h5 className="centered">
					See what other busy bees are doing to lift hearts and build community.
				</h5>
				<p id="hive-text">Sarah said {this.state.inspiration} to Hannah!</p>
			</>
		);
	}
}

export default HivePublic;
