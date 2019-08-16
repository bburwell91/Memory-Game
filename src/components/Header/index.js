import React from "react";
import "./style.css";

const Header = props => (
  <div className="header">
    <div className="title">{props.children}</div>
    <div className="scores">
      <strong>Score:</strong> {props.score} <strong>Highscore:</strong> {props.highscore}
    </div>
  </div>
)

export default Header;
