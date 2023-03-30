import activities from '../sample-data/sample-activities.js';
import react, { useEffect, useState } from 'react';
import HigherOrderList from './higherOrderList.js';
import ReactStars from 'react-stars';
import React from 'react';

export default function completedActivites (props) {
  const CompletedCard = (props) => {
    return (
      <div
        className="list-group-item list-group-item-action active"
        aria-current="true"
        key={props.setKey}
        style={{backgroundColor: "#FAF7F7", color: "black", borderColor: "#DC706C", borderWidth: "0.12rem 0"}}
      >
        <div>
            <h5
                className="mb-1"
                style={{fontSize: "1.3rem", display: "inline", margin: "auto", position: "relative", top: "50%"}}
            >{props.act.place}</h5>
            <div style={{display: "inline", float: "right"}}>
              <h6 style={{margin: "0.1rem"}} className={props.ExtraLight.className}>ADDRESS CITY</h6>
            <h6
                  style={{float: 'right'}}
                ><ReactStars
                  count = {5}
                  value = {props.act.rating}
                  size={18}
                  edit={false}
                  color={'blue'}
                  className={'star'}/></h6>
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
        backgroundColor: '#BF0101',
        width: "100%",
        borderRadius: "0",
        margin: "0 0 1.5vw 0"
      }}
      showStyles={{
        backgroundColor: "#BF0101",
        border: "none",
        float: "left",
        marginLeft: "1rem",
        padding: "0.5rem 0"
      }}
      colStyles={{
        backgroundColor: "#BF0101",
        border: "none",
        float: "right",
        marginRight: "1rem",
        padding: "0.5rem 0"
      }}
    />
  )
}