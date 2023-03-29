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
                  style={{display: "inline", fontSize: "1.3rem"}}
              >{props.act.place}</h5>
              <div style={{display: "inline-block", float: "right", marginLeft: "20%"}}>
                <h6
                  style={{fontWeight: "bold", display: "inline"}}
                >{props.act.rating}</h6>
                <Button variant="primary" style={{backgroundColor: "#BF4B2C", borderColor: "#BF4B2C", display: "inline", float: "right", marginLeft: "0.5rem"}} onClick={() => props.handleShow(props.act.review, props.act.place)}>
                  See Reviews
                </Button>
              </div>
              <div style={{display: "inline", float: "right"}}>
                <h6 style={{margin: "0.1rem"}}>ADDRESS CITY</h6>
              </div>
          </div>
          <div>
          </div>
      </div>
    )
  }

  return (
    <HigherOrderList
      Card={CardComponent}
      title={'Your Activities'}
      mainStyles={{
        backgroundColor: '#BF4B2C',
        width: "100%",
        borderRadius: "0",
        margin: "0 0 1.5vw 0"
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