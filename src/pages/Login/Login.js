import React from 'react';
import { Button, Modal} from 'react-bootstrap';



export default function Login(props) {
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
            Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
  <label>
    Username:
    <input type="text" name="userName" />
  </label>

  <label>
    Password:
    <input type="text" name="password" />
  </label>
  <input type="submit" value="Login" />

</form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const [modalShow, setModalShow] = React.useState(false);
  return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Login!
        </Button>

  <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    )
}