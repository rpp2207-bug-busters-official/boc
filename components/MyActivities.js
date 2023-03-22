import activities from '../sample-data/sample-activities.js';
import MyActivityReview from './MyActivityReview.js';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import HigherOrderList from './higherOrderList.js';

const MyActivities = () => {
  const CardComponent = (props) => {
    return (
        <Modal show={props.show} handleClose={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.reviewTitle}</Modal.Title>
            </Modal.Header>
        <Modal.Body>{props.reviewBody}</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
            Close
            </Button>
        </Modal.Footer>
        </Modal>
    )
  }

  return (
    <HigherOrderList Card={CardComponent} title='My Acitivties'/>
  )
}

export default MyActivities;