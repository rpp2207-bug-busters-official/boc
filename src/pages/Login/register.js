import React, {useState} from 'react';
import { Button, Modal} from 'react-bootstrap';
import login from '../api/login.js';
import firebase from '../../../firebase/clientApp.js';
import facebookLogin from './facebookLogin.js';
import googleLogin from './googleLogin.js';
import CreateUser from './newUser.js';
import validation from './registrationValidation.js';

export default function Register(props1) {
  const [regErr, setRegError] = useState('');
function MyVerticallyCenteredModal(props) {
  const handleLoginClick = (loginFunction) => {
    let username = document.getElementById('username').value;
    let password = {password: document.getElementById('password').value, rePassword: document.getElementById('rePassword').value}
    let email = document.getElementById('email').value
    let validate = validation({username: username, password: password, email: email});

    if (Object.keys(validate).length !== 0) {
      setRegError(Object.values(validate).join(' '));
      return;
    }
    loginFunction(
      document.getElementById('email').value,
      document.getElementById('password').value,
      document.getElementById('username').value
    )
      .then(result => {
        setRegError('');
        setModalShow(false);
        props1.updateCookie();
      })
      .catch(err => {
        setRegError('There was an error when trying to create your account. Please try again later.');
      });
  }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Register
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
<form>
  <div className="form-outline mb-4">
    <input type="userName" id="username" className="form-control" />
    <label className="form-label" htmlFor="form2Example0">Username</label>
  </div>

  <div className="form-outline mb-4">
    <input type="email" id="email" className="form-control" />
    <label className="form-label" htmlFor="form2Example1">Email address</label>
  </div>

  <div className="form-outline mb-4">
    <input type="password" id="password" className="form-control" />
    <label className="form-label" htmlFor="form2Example2">Password</label>
  </div>
  <div className="form-outline mb-4">
    <input type="password" id="rePassword" className="form-control" />
    <label className="form-label" htmlFor="form2Example3">Re-Enter Password</label>
  </div>
  {regErr !== '' &&
    <p className='error-message'>{regErr}</p>
  }
  <button type="button" className="btn btn-success" onClick={(e) => {handleLoginClick(CreateUser)}}>Create Account!</button>

</form>
        </Modal.Body>
        <Modal.Footer>
          <Button  variant="secondary" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const [modalShow, setModalShow] = React.useState(false);
  return (
      <>
        <Button className="btn btn-success" onClick={() => setModalShow(true)}>
          Register!
        </Button>

  <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    )
}