import React from "react";
import { Link } from "react-router-dom";
import FriendBtn from "../images/friend-btn.png";
import NiceBtn from "../images/nice-btn.png";
import Logo from "../images/logo-large.png";

// React Bootstrap Components
import Image from "react-bootstrap/Image";

function Navbar() {
  return (
    <div>
      <button id="left">
        <img
          src={NiceBtn}
          alt="blank hex"
          onClick={"this toggles to hive"}
          id="img-btn"
        />
      </button>
      <button id="right">
        <img
          src={FriendBtn}
          alt="blank hex"
          onClick={"this toggles to hive"}
          id="img-btn"
        />
      </button>
      <Link to={`/HivePublic`}>
        <button id="left">
          <Image src={Logo} alt="bhave logo" id="img-btn" />
        </button>
      </Link>
      <button id="right">
        <img
          src={FriendBtn}
          alt="blank hex"
          onClick={"this toggles to hive"}
          id="img-btn"
        />
      </button>
      <button id="left">
        <img
          src={NiceBtn}
          alt="blank hex"
          onClick={"this toggles to hive"}
          id="img-btn"
        />
      </button>
    </div>
  );
}

export default Navbar;
