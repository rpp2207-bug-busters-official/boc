import activities from '../sample-data/sample-activities.js';
import MyActivityReview from './MyActivityReview.js';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const MyActivities = () => {

  const [show, setShow] = useState(false);
  const [ reviewBody, setReviewBody ] = useState(null);
  const [ reviewTitle, setReviewTitle ] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (body, place, date) => {
    setShow(true);
    setReviewBody(body);
    setReviewTitle(place + ": " + date);
  }

  return (

    <div class="list-group" style={{backgroundColor: "#f2c329", width: "20rem"}} >
      <h3 style={{ textAlign: "center" }}>My Activities</h3>

      {activities.map((activity, key) => {
        return (
          <div class="list-group-item list-group-item-action active" aria-current="true" key={key} style={{backgroundColor: "#f2c329", color: "black", borderColor: "black"}} >
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">{activity.place}</h5>
              <small>Rating: {activity.rating}</small>
            </div>
            {/* <p class="mb-1">{activity.review}</p> */}
          <Button variant="primary" style={{backgroundColor: "green"}} onClick={() => handleShow(activity.review, activity.place, activity.date)}>
            See Review
          </Button>
            {/* <button class="mb-1">my review</button> */}

          </div>
        )
      })}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{reviewTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{reviewBody}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


    </div>

  );

  // return (

  //   <div class="list-group" style={{backgroundColor: "#f2c329", width: "20rem"}} >
  //     <h3 style={{ textAlign: "center" }}>My Activities</h3>

  //     {activities.map((activity, key) => {
  //       return (
  //         <div class="list-group-item list-group-item-action active" aria-current="true" key={key} style={{backgroundColor: "#f2c329", color: "black", borderColor: "black"}} >
  //           <div class="d-flex w-100 justify-content-between">
  //             <h5 class="mb-1">{activity.place}</h5>
  //             <small>{activity.date}</small>
  //           </div>
  //           <p class="mb-1">{activity.review}</p>
  //           <p onClick={() => console.log('clicled')} class="mb-1">my review</p>
  //           {/* <button class="mb-1">my review</button> */}
  //           <small>Rating: {activity.rating}</small>
  //         </div>
  //       )
  //     })}


  //   </div>

  // );

}

export default MyActivities;