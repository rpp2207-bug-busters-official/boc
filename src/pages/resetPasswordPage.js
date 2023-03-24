import react, { useEffect, useState } from 'react';
import { Button, Modal} from 'react-bootstrap';
import Link from 'next/link';
import resetPass from './Login/resetPassword.js'


export default function ResetPasswordPage() {
  const [resetPassMsg, setResetPassMsg] = useState('');
  const [displayCard, setDisplayCard] = useState(true);
  const resetPassword = () => {
    resetPass(document.getElementById('email').value)
      .then(succ => {
        setResetPassMsg('Your email has been send. Follow the instructions to reset your password.');
        setDisplayCard(false);
      })
      .catch(err => {
        setResetPassMsg('There was an error when trying to reset your password, please try again later.');
      });

  }

  return (
    <>
      {displayCard &&
      <>
        <div className='d-flex justify-content-center' style={{"marginTop":'1%'}}>
          <div className="card text-center" style={{"width": "25%"}}>
              <div className="card-header h5 text-white bg-success">Password Reset</div>
              <div className="card-body px-5">
                  <p className="card-text py-2">
                      Enter your email address and we'll send you an email with instructions to reset your password.
                  </p>
                  <div className="form-outline">
                      <input type="email" id="email" className="form-control my-3" />
                      <label className="form-label" htmlFor="typeEmail">Email input</label>
                  </div>
                  {resetPassMsg !== '' &&
                    <p className='error-message'>Something went wrong. Please re-enter your email and try again.</p>
                  }
                  <a href="#" className="btn btn-success w-100" onClick={resetPassword}>Reset password</a>
                  <div className="d-flex justify-content-between mt-4">
                      <Link className="" href="/" style={{color:'green'}}>Login</Link>
                      <Link className="" href="/" style={{color:'green'}}>Register</Link>
                  </div>
              </div>
          </div>
        </div>
      </>
      }
      {displayCard === false &&
        <p>Your email has been sent. Check you inbox for an email. Click <Link href='/'>here</Link> to return back to the homepage.</p>
      }
    </>
  )
}