import activities from '../sample-data/sample-activities.js';
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
          <Button variant="primary" style={{backgroundColor: "green"}} onClick={() => props.handleShow(props.act.review, props.act.place)}>
            See Review
          </Button>
      </div>
    )
  }

  return (
    <HigherOrderList Card={CardComponent} title={'My Activities'}/>
  )
}
export default MyActivities;