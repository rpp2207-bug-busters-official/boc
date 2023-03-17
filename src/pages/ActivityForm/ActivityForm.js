import React from 'react';
import { Button, Modal} from 'react-bootstrap';



export default function ActivityForm(props) {

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
            Activity Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Add a new activity here</h4>
          <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <label>
    Address:
    <input type="text" name="address" />
  </label>
  <label>
    City:
    <input type="text" name="city" />
  </label>
  <label>
    Zip Code:
    <input type="text" name="zipCode" />
  </label>
  <label>
    State:
    <input type="text" name="state" />
  </label>
  <label>
    Country:
    <input type="text" name="country" />
  </label>
  <label>
    Phone Number:
    <input type="text" name="phoneNumber" />
  </label>

  <Button  variant="success">Create</Button>
</form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const [modalShow, setModalShow] = React.useState(false);
  return (
      <>
        <Button variant="primary"  class="btn btn-success" onClick={() => setModalShow(true)}>
          Add Activity Here!
        </Button>

  <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    )
}