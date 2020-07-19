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
  render() {
    return (
      <>
        <h1>Welcome to hive public!</h1>
        <p>Sarah said {this.state.inspiration} to Hannah!</p>
      </>
    );
  }
}

export default HivePublic;
