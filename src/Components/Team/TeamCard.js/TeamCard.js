import React from "react";
import "./TeamCard.css";

function TeamCard(props) {
  return (
    <div className="member-card">
      <span className="vertical-position">MBR 1/4</span>
      <div className="team-img">
        <img src={props.imgSrc} alt="" />
      </div>
      <div className="name-position">
        <p>{props.name}</p>
        <p>{props.position}</p>
      </div>
      <div className="social-btn-group">
        <button>IG</button>
        <button>| TW |</button>
        <button>DISC</button>
      </div>
    </div>
  );
}

export default TeamCard;
