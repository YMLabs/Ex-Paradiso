import React from 'react'
import "./CollectionCard.css"

function CollectionCard(props) {
  return (
    <div className='card'>
      <p>EX PARADISO</p>
      <p>COLLECTION 01</p>
      <img className='collection-img' src={props.imgSrc} alt="" height="500"/>
      <div style={{display: "flex"}}>
        <img src="./collection-shape1.png" alt="" />
        <p>{props.imgNumber}</p>
      </div>
    </div>
  )
}

export default CollectionCard