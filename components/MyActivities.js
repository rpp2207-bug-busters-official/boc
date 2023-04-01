import activities from '../sample-data/sample-activities.js';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import HigherOrderList from './higherOrderList.js';
import ReactStars from 'react-stars'
import React from 'react';

const MyActivities = () => {
  const CardComponent = (props) => {

    return (
      <div
          className="list-group-item list-group-item-action active"
          aria-current="true"
          key={props.setKey}
          style={{backgroundColor: "#FF5533", color: "white", border: "1px solid black"}}
      >
          <div>
            <div>

              <h5
                  className="mb-1"
                  style={{display: "inline", fontSize: "1.3rem", float:'left'}}
              >{props.act.activity_name}</h5>
                <h6
                  style={{display:'inline', float:'left', paddingLeft:'10px'}}
                ><ReactStars
                  count = {5}
                  value = {props.act.rating}
                  size={18}
                  edit={false}
                  color={'blue'}
                  className={'star'}/></h6>
            </div>
              <div style={{display: "inline-block", float: "right", marginLeft: ""}}>
                <Button id="my-rev-btn" variant="primary" style={{backgroundColor: "#E02500", borderColor: "#E02500", display: "inline", float: "right", marginLeft: "0.5rem", color: "white", borderWidth: "medium"}}
                onClick={() => props.handleShow({title: props.act.title, comment: props.act.comment, date: props.act.date, helpfulness: props.act.helpfulness})}>
                  See Review
                </Button>
              </div>
              <div style={{display: "inline", float:'right', paddingRight:'20%'}}>
                <h6 style={{margin: "0.1rem"}} className={props.ExtraLight.className}>{props.act.address}, {props.act.city}, {props.act.state}</h6>
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
        backgroundColor: 'white',
        width: "100%",
        borderRadius: "8px",
        margin: "0 0 1.5vw 0",
        border: "2px solid black"
      }}
      showStyles={{
        backgroundColor: "white",
        border: "none",
        float: "left",
        marginLeft: "1rem",
        padding: "0.5rem 0",
        color: "black"
      }}
      colStyles={{
        backgroundColor: "white",
        border: "none",
        float: "right",
        marginRight: "1rem",
        padding: "0.5rem 0",
        color: "black"
      }}
    />
  )
}
export default MyActivities;