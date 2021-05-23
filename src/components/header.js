import React from "react";
import logo from "../hra_logo.png";
import {AiOutlinePhone} from "react-icons/ai";

function header(props) {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-logo">
          <img src={logo} alt="our logo" />
        </div>
        <div className="header-text">
          <h4>About</h4>
          <h4>Services</h4>
          <h4>Contact</h4>
        </div>
        <div className="header-phone">
          <AiOutlinePhone />
          <h4>0274240224</h4>
        </div>
      </header>
    </div>
  );
}

export default header;
