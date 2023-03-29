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
        style={{backgroundColor: "#69B578", color: "black", borderColor: "#467850"}}
      >
        <div>
            <h5
                className="mb-1"
                style={{display: "inline"}}
            >{props.act.place}</h5>
            <h6
                style={{display: "inline", float: "right", fontWeight: "bold"}}
            >{props.act.rating}</h6>
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
        backgroundColor: '#467850',
        width: "100%",
        maxWidth: "90vw",
        margin: "0.5rem 0"
      }}
      showStyles={{
        backgroundColor: "#467850",
        border: "none",
        float: "left",
        marginLeft: "1rem",
        padding: "0.5rem 0"
      }}
      colStyles={{
        backgroundColor: "#467850",
        border: "none",
        float: "right",
        marginRight: "1rem",
        padding: "0.5rem 0"
      }}
    />
  )
}