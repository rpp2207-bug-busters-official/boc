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
        style={{backgroundColor: "#FAF7F7", color: "black", borderColor: "#706B71", borderWidth: "0.12rem 0"}}
      >
        <div>
          <div style={{display:'inline'}}>
            <h5
                className="mb-1"
                style={{fontSize: "1.3rem", display: "inline", margin: "auto", position: "relative", top: "50%"}}
            >{props.act.name}</h5>
            <p style={{display:'inline', paddingLeft:'5px', color:'gray', fontSize:'14px'}} className={props.ExtraLight.className}>{`${props.act.date}`}</p>

          </div>
            <div style={{display: "inline", float: "right"}}>
              <h6 style={{margin: "0.1rem"}} className={`${props.ExtraLight.className} text-uppercase`}>{`${props.act.city}, ${props.act.state}`}</h6>
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
        <p className="mb-1">{`${props.act.review} (${props.act.helpfulness})`}</p>

      </div>
    )
  }

  return (
    <HigherOrderList
      Card = {CompletedCard}
      title = 'Completed Activities'
      mainStyles={{
        background: 'linear-gradient(0.25turn, #E23B4B, 10%, #E66B4B, #E23B4B)',
        width: "100%",
        borderRadius: "1%",
        margin: "0 0 1.5vw 0"
      }}
      showStyles={{
        backgroundColor: "#E34B4B",
        border: "none",
        float: "left",
        marginLeft: "1rem",
        padding: "0.25rem 0"
      }}
      colStyles={{
        backgroundColor: "#E23B4B",
        border: "none",
        float: "right",
        marginRight: "1rem",
        padding: "0.5rem 0"
      }}
    />
  )
}