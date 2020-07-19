import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../../images/logo-large.png";
import FriendBtn from "../../images/friend-btn.png";
import NiceBtn from "../../images/nice-btn.png";
import { Link } from "react-router-dom";
import API from "../../utils/API";

class HivePublic extends Component {
  state = {
    inspiration: ""
  }

  // Pull the inspiration from the database using API from line 10
  // use this.setState() to change inspiration from "" to whatever you pulled from the database

  render() {
    return (
      <>
        <h1>Welcome to Hive Public!</h1>
        <p>Sarah said {this.state.inspiration} to Hannah!</p>
      </>
    );
  }
}

export default HivePublic;
