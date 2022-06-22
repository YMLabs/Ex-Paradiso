import React from "react";
import "./Team.css";
import TeamCard from "./TeamCard.js/TeamCard";

function Team() {
  return (
    <section className="content"  style={{margin: "0 3rem"}}>
      <div className="header">
        <p className="font-andale">Section --- 02</p>
        <img src="./dotted-lines.png" alt="" />
        <h1 className="font-laviossa">TEAM</h1>
      </div>
      <div className="team-members">
        <TeamCard
          imgSrc="./team-avatar.png"
          name="MICHAEL PEAY"
          position="FOUNDER"
        />
        <TeamCard
          imgSrc="./team-avatar.png"
          name="MICHAEL PEAY"
          position="FOUNDER"
        />
        <TeamCard
          imgSrc="./team-avatar.png"
          name="MICHAEL PEAY"
          position="FOUNDER"
        />
        <TeamCard
          imgSrc="./team-avatar.png"
          name="MICHAEL PEAY"
          position="FOUNDER"
        />
      </div>
    </section>
  );
}

export default Team;
