import {AiFillStar} from 'react-icons/ai';
import { useState, useEffect } from 'react';
import Reviews from '../Reviews/Reviews.js';
import { Button, Modal} from 'react-bootstrap';
import StarRating from './StarRating.js';

export default function AddedActivity(props) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [rating, setRating] = useState(null);

  const activityObj = props.action;

  function StarRating (props) {

    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
              <AiFillStar
              color={index <= props.rating ? "gold" : "grey"}
              size="36"
              id="rating-star"
              type="button"
              key={index}/>
          );
        })}
      </div>
    );
  }

  var changeReviewOpened = () => {
    console.log('hi');
    setIsReviewOpen(!isReviewOpen);
  }

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Reviews for {activityObj.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Reviews/>
        </Modal.Body>
        <Modal.Footer>
          <Button  variant="secondary" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const [modalShow, setModalShow] = useState(false);

    const getRatings = async (id) => {
        fetch('/api/getPostedRatings', {
            method: "POST",
            body: id
        })
        .then(data => data.json())
        .then((res) => {
            // Probably set the retrieved activities in a state
            setRating(res);
        })
        .catch((err) => {
            console.log('Failed to get user added nearby activities', err);
        })
    }

  useEffect(() => {
    getRatings(activityObj.activity_id)
        .then(data => data.json())
        .then((res) => {
            setRating(res.total / res.count);
            console.log(res.total/res.count);
        })
        .catch((err) => {console.log(err)})
  },[activityObj]);

  return (
    <div className={`activity-widget`}>
      {isFavorite ? <AiFillStar id="list-item-favorited" color="gold" size="36" onClick={() => setIsFavorite(!isFavorite)}/> : <AiFillStar color="white" size="36" onClick={() => setIsFavorite(!isFavorite)}/>}
        <h2 id="list-item-name">{activityObj.name}</h2>

      <div className="activity-body">
        <h4 id="list-item-location">{activityObj.address} {activityObj.city}, {activityObj.state} {activityObj.zip}</h4>
      </div>

      <div id="list-stars-container">
        <p id="list-item-stars"><StarRating rating={rating}/></p>
      </div>

      <>
        <button className="btn btn-success item-btn" id="a-btn-lnk" onClick={() => setModalShow(true)}>
          Show Reviews
        </button>

  <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>


      {isReviewOpen ? <Reviews/> : null}
    </div>
  );

}