import Review from './Review.js';
import { Button, Modal} from 'react-bootstrap';
import {useState} from 'react';
import StarRating from '../ActivityList/StarRating.js'



export default function Reviews (props) {
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
    <input type="text" id="form2Example0" className="form-control" />
    <label className="form-label" htmlFor="form2Example0">Username</label>
  </div>

  <div className="form-outline mb-4">
    <StarRating/>
    <label className="form-label" htmlFor="form2Example1">Rating</label>
  </div>

  <div className="form-outline mb-4">
    <textarea id="form2Example2" className="form-control" rows="3" cols="20"></textarea>
    <label className="form-label" htmlFor="form2Example2">Comments on location</label>
  </div>

  <button type="button" className="btn btn-success">Send</button>

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