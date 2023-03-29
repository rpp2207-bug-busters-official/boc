import activities from '../sample-data/sample-activities.js';
import react, { useEffect, useState } from 'react';
import HigherOrderList from './higherOrderList.js';

export default function completedActivites (props) {
  const CompletedCard = (props) => {
    return (
      <div
        className="list-group-item list-group-item-action active"
        aria-current="true"
        key={props.setKey}
        style={{backgroundColor: "#E9E9E9", color: "black", borderColor: "#008AB8", borderWidth: "0.12rem 0"}}
      >
        <div>
            <h5
                className="mb-1"
                style={{fontSize: "1.3rem", display: "inline", margin: "auto", position: "relative", top: "50%"}}
            >{props.act.place}</h5>
            <h6
                style={{display: "inline", float: "right", fontWeight: "bold", marginLeft: "20%"}}
            >{props.act.rating}</h6>
            <div style={{display: "inline", float: "right"}}>
              <h6 style={{margin: "0.1rem"}}>ADDRESS CITY</h6>
            </div>
        </div>
        <p className="mb-1">{props.act.review}</p>
      </div>
    )
  }

  return (
    <HigherOrderList
      Card = {CompletedCard}
      title = 'Completed Activities'
      mainStyles={{
        backgroundColor: '#008AB8',
        width: "100%",
        borderRadius: "0",
        margin: "0 0 1.5vw 0"
      }}
      showStyles={{
        backgroundColor: "#008AB8",
        border: "none",
        float: "left",
        marginLeft: "1rem",
        padding: "0.5rem 0"
      }}
      colStyles={{
        backgroundColor: "#008AB8",
        border: "none",
        float: "right",
        marginRight: "1rem",
        padding: "0.5rem 0"
      }}
    />
  )
}