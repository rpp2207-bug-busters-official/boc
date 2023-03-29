import activities from '../sample-data/sample-activities.js';
import MyActivityReview from './MyActivityReview.js';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import HigherOrderList from './higherOrderList.js';

const MyActivities = () => {
  const CardComponent = (props) => {
    return (
      <div
          className="list-group-item list-group-item-action active"
          aria-current="true"
          key={props.setKey}
          style={{backgroundColor: "#E86C4A", color: "black", borderColor: "#BF4B2C"}}
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
          <Button variant="primary" style={{backgroundColor: "#BF4B2C", borderColor: "#BF4B2C"}} onClick={() => props.handleShow(props.act.review, props.act.place)}>
            See Reviews
          </Button>
      </div>
    )
  }

  return (
    <HigherOrderList
      Card={CardComponent}
      title={'My Activities'}
      mainStyles={{
        backgroundColor: '#BF4B2C',
        width: "100%",
        maxWidth: "90vw",
        margin: "0.5rem 0"
      }}
      showStyles={{
        backgroundColor: "#BF4B2C",
        border: "none",
        float: "left",
        marginLeft: "1rem",
        padding: "0.5rem 0"
      }}
      colStyles={{
        backgroundColor: "#BF4B2C",
        border: "none",
        float: "right",
        marginRight: "1rem",
        padding: "0.5rem 0"
      }}
    />
  )
}
export default MyActivities;