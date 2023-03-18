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
            New Activity Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
<form>
  <div className="row mb-4">
    <div className="col">
      <div className="form-outline">
        <input type="text" id="form6Example1" className="form-control" />
        <label className="form-label" htmlFor="form6Example1">Activity Name</label>
      </div>
    </div>
  </div>
  <div className="form-outline mb-4">
    <input type="text" id="form6Example3" className="form-control" />
    <label className="form-label" htmlFor="form6Example3">Address</label>
  </div>
  <div className="form-outline mb-4">
    <input type="text" id="form6Example4" className="form-control" />
    <label className="form-label" htmlFor="form6Example4">City</label>
  </div>
  <div className="form-outline mb-4">
    <input type="text" id="form6Example4" className="form-control" />
    <label className="form-label" htmlFor="form6Example4">Zip Code</label>
  </div>
  <div className="form-outline mb-4">
    <input type="text" id="form6Example4" className="form-control" />
    <label className="form-label" htmlFor="form6Example4">State</label>
  </div>
  <div className="form-outline mb-4">
    <input type="text" id="form6Example4" className="form-control" />
    <label className="form-label" htmlFor="form6Example4">Country</label>
  </div>

  <div className="form-outline mb-4">
    <input type="number" id="form6Example6" className="form-control" />
    <label className="form-label" htmlFor="form6Example6">Phone Number</label>
  </div>



  <button type="submit" className="btn btn-success">Create!</button>
</form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const [modalShow, setModalShow] = React.useState(false);
  return (
      <>
        <Button variant="primary"  className="btn btn-success" onClick={() => setModalShow(true)}>
          Add Activity Here!
        </Button>

  <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    )
}