import React from "react";
import "./style.css";

const CharacterCard = props => (
    <div onClick={() => props.clickTracker(props.id)} className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
);

export default CharacterCard;