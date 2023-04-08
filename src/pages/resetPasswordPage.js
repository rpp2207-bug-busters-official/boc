import react, { useState } from 'react';
import { Button, Modal} from 'react-bootstrap';
import Link from 'next/link';
import resetPass from '../../helper_functions/resetPassword.js'
import {useRouter} from 'next/router';


export default function ResetPasswordPage() {
  let router = useRouter();
  const [resetPassMsg, setResetPassMsg] = useState('');
  const [displayCard, setDisplayCard] = useState(true);
  const resetPassword = () => {
    resetPass(document.getElementById('email').value)
      .then(succ => {
        setResetPassMsg('Your email has been send. Follow the instructions to reset your password.');
        setDisplayCard(false);
        setTimeout(() => {
          router.push('/');
        }, 5000)
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
          <div className="card text-center" style={{"width": "75%", "minWidth":"350px", "maxWidth":'600px'}}>
              <div className="card-header h5 text-white bg-success">Password Reset</div>
              <div className="card-body px-5">
                  <p className="card-text py-2">
                      Enter your email address and we&#39;ll send you an email with instructions to reset your password.
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
        <p>Your email has been sent. Check you inbox for an email. Click <Link href='/'>here</Link> to return back to the homepage or wait to be redirected.</p>
      }
    </>
  )
}