import {AiFillStar} from 'react-icons/ai';
import {useState} from 'react';
import Reviews from '../Reviews/Reviews.js';
import { Button, Modal} from 'react-bootstrap';
import StarRating from './StarRating.js';

export default function Activity(props) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  var activityObj = props.action;

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

  let formatPhoneNumber = (str) => {
    //Filter only numbers from the input
    let cleaned = ('' + str).replace(/\D/g, '');

    //Check if the input is of correct
    let match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);

    if (match) {
      //Remove the matched extension code
      //Change this to format for any country code.
      let intlCode = (match[1] ? '+1 ' : '')
      return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('')
    }

    return null;
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

  return (
    <div className="activity-widget">
      {isFavorite ? <AiFillStar color="gold" size="36" onClick={() => setIsFavorite(!isFavorite)}/> : <AiFillStar color="white" size="36" onClick={() => setIsFavorite(!isFavorite)}/>}

      <div className="activity-body">
        <p>{activityObj.name}</p>
        <p>{activityObj.location.address1} {activityObj.location.city}, {activityObj.location.state} {activityObj.location.zip_code}</p>
        <p>{formatPhoneNumber(activityObj.phone)}</p>
      </div>

      <div>
        <p>Rating: <StarRating rating={activityObj.rating}/></p>
      </div>

      <>
        <Button className="btn btn-success" onClick={() => setModalShow(true)}>
          Show Reviews
        </Button>

  <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>


      {isReviewOpen ? <Reviews/> : null}
    </div>
  );

}