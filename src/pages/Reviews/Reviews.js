import Review from './Review.js';
import { Button, Modal} from 'react-bootstrap';
import {useState, useEffect, useRef} from 'react';
import StarRating from '../ActivityList/StarRating.js';
import Cookies from '../Login/setCookie.js';
import {stringify} from 'flatted/esm';



export default function Reviews (props) {

  let [cookie, setCookie] = useState(undefined);
  const commentsRef = useRef(null);
  const titleRef = useRef(null);
  const [rating, setRating] = useState(0);

  const updateCookie = () => {
    setCookie(Cookies.getCookie());
  }
  useEffect(() => {
    updateCookie();
  }, [cookie]);

  var newRating = (rating) => {
    setRating(rating);
  }

  var handleReview = (event) => {
    var formObj = {
      username: 'Mango',
      comment: commentsRef.current.value,
      helpfulness: 0,
      reported: false,
      date: new Date(),
      rating: rating,
      title: titleRef
    }

    fetch('/api/reviewsToDatabase',
    {method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: stringify(formObj)
  })
  .then(res => {
    return res.status;
  })
  .catch(err => {
    console.log(err);
    return err;
  })
  }

  const reviews = [
    {
      'username': 'Mango',
      'comment': 'Place smells weird, but the food was amazing',
      'helpfulness': 235,
      'reported': false,
      'date': '2022-08-23T16:50:22-07:00',
      'rating': 2,
      'title': 'Nasty inside but good food'
    },
    {
      'username': 'Mango',
      'comment': 'Place smells weird, but the food was amazing',
      'helpfulness': 235,
      'reported': false,
      'date': '2022-08-23T16:50:22-07:00',
      'rating': 2,
      'title': 'Nasty inside but good food'
    },
    {
      'username': 'Mango',
      'comment': 'Place smells weird, but the food was amazing',
      'helpfulness': 235,
      'reported': false,
      'date': '2022-08-23T16:50:22-07:00',
      'rating': 2,
      'title': 'Nasty inside but good food'
    },
    {
      'username': 'Mango',
      'comment': 'Place smells weird, but the food was amazing',
      'helpfulness': 235,
      'reported': false,
      'date': '2022-08-23T16:50:22-07:00',
      'rating': 2,
      'title': 'Nasty inside but good food'
    }
  ]

  function MyVerticallyCenteredModal(props) {
    const [modalShow, setModalShow] = useState(false);

    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create a New Review
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
<form>
  <div className="form-outline mb-4">
    <h4>{Cookies.getUsername()}</h4><br></br>
  </div>

  <div className="form-outline mb-4">
    <StarRating currRating={newRating}/>
    <label className="form-label" htmlFor="form2Example1">Rating</label>
  </div>

  <div className="form-outline mb-4">
    <input ref={titleRef} type="text" id="form2Example2" name="title" className="form-control"/>
    <label className="form-label" htmlFor="form2Example2">Title</label>
  </div>

  <div className="form-outline mb-4">
    <textarea ref={commentsRef} id="form2Example2" name="comments" className="form-control" rows="3" cols="20"></textarea>
    <label className="form-label" htmlFor="form2Example2">Comments on location</label>
  </div>

  <button type="button" className="btn btn-success" onClick={handleReview}>Send</button>

</form>
        </Modal.Body>
        <Modal.Footer>
          <Button  variant="secondary" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      {reviews.map((action) => {
        return (
          <Review data={action} key='mei'/>
        )
      })}
{ cookie !== undefined &&
<>
        <Button className="btn btn-success" onClick={() => setModalShow(true)}>
          Add Your Review
        </Button>

  <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
}
<>
        <Button className="btn btn-success" onClick={() => setModalShow(true)}>
          Add Your Review
        </Button>

  <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    </div>
  );
}