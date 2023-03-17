import React from 'react';
import { Button, Modal} from 'react-bootstrap';



import login from '../api/login.js';
import firebase from '../../../firebase/clientApp.js';
import facebookLogin from './facebookLogin.js';
import googleLogin from './googleLogin.js';

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
  <Button  variant="success">Login</Button>

</form>
        </Modal.Body>
        <Modal.Footer>
          <Button  variant="dark" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const [modalShow, setModalShow] = React.useState(false);
  return (
      <>
        <Button variant="primary" class="btn btn-success" onClick={() => setModalShow(true)}>
          Login!
        </Button>

  <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    )
}