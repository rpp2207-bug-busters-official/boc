import React, {useState} from 'react';
import { Button, Modal} from 'react-bootstrap';
import facebookLogin from '../../../helper_functions/facebookLogin.js';
import googleLogin from '../../../helper_functions/googleLogin.js';
import LoginUser from '../../../helper_functions/loginUser.js';
import Link from 'next/link';

export default function Login(props1) {

function MyVerticallyCenteredModal(props) {
  const [loginError, setLoginError] = useState('');
  const [resetPassMsg, setResetPassMsg] = useState('');
  const handleLoginClick = async (loginFunction) => {
    loginFunction(
      document.getElementById('email').value,
      document.getElementById('password').value,
      document.getElementById('rememberMe').checked
    )
      .then(result => {
        setLoginError('');
        setModalShow(false);
        props1.updateCookie();
      })
      .catch(err => {
        setLoginError('There was an error when trying to log into your account. Please try again.')
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
            Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>

            <div className="form-outline mb-4">
              <input type="email" id="email" className="form-control" />
              <label className="form-label" htmlFor="form2Example1">Email address</label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="password" className="form-control" />
              <label className="form-label" htmlFor="form2Example2">Password</label>
            </div>
            <div className="row mb-4">
              <div className="col d-flex justify-content-center">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="rememberMe" />
                  <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                </div>
              </div>
              <div className="col">
                <Link href="/resetPasswordPage" style={{color:'green'}} onClick={() => {setModalShow(false)}}>Forgot password?</Link>
              </div>
            </div>

            {loginError !== '' &&
              <p className='error-message'>{loginError}</p>
            }
            {resetPassMsg !== '' &&
              <p style={{color:'green'}}>{resetPassMsg}</p>
            }
            <button type="button" className="btn btn-success" onClick={() => {handleLoginClick(LoginUser)}}>Sign in</button>

            <div className="text-center">
              <p>or sign in with:</p>
              <Button onClick={() => {googleLogin(props1.updateCookie)}} variant='success'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                </svg>
                &nbsp;&nbsp;Google
              </Button>
              &nbsp;
              <Button onClick={() => {facebookLogin(props1.updateCookie)}} variant='success'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
                &nbsp;&nbsp;Facebook
              </Button>
            </div>
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
        {props1.footer !== undefined &&
          <p onClick={()=>{setModalShow(true)}} className='clickable-link'><u>{props1.footer}</u></p>
        }
        {props1.footer === undefined &&
        <>
          <button id="b-btn-lnk" className="btn btn-success" onClick={() => setModalShow(true)}>
            Login!
          </button>
        </>
        }

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    )
}