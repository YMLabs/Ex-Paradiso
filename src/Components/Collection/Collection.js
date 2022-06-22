import React from "react";
import "./Collection.css"
import CollectionCard from "./CollectionCard/CollectionCard";

function Collection() {
  return (
    <section  style={{margin: "0 3rem"}}>
      <div className="header">
        <p className="font-andale">Section --- 03</p>
        <img src="./dotted-lines.png" alt="" />
        <h1 className="font-laviossa">COLLECTION</h1>
      </div>
      <div className="collections">
        <CollectionCard imgSrc="./collections.png" imgNumber="GNRT-006"/>
        <CollectionCard imgSrc="./collections.png" imgNumber="GNRT-007"/>
        <CollectionCard imgSrc="./collections.png" imgNumber="GNRT-008"/>
        <CollectionCard imgSrc="./collections.png" imgNumber="GNRT-009"/>
      </div>
    </section>
  );
}

export default Collection;
