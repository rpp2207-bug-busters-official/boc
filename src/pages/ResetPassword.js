import { getAuth, confirmPasswordReset } from "firebase/auth";
import react, {useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';
import Link from 'next/link';
import {useRouter} from 'next/router';

export default function ResetPasswordPage () {
  let router = useRouter();
  const [error, setError] = useState('');
  const [succ, setSucc] = useState('');
  function setPass(password) {
    let params = new URLSearchParams();
    let authenticationCode = window.location.search.split('&')[1].split('=')[1];
    let auth = getAuth();
    confirmPasswordReset(auth, authenticationCode)
      .then(succ => {
        setError('');
        // router.redirect('/');
        setSucc('Congrats, you password has been reset. You can now log in.');
        setTimeout(()=>{
          router.push('/');
        }, 2500);
      })
      .catch(err => {
        setError('Something went wrong. Please try again later.');
        setSucc('')
      })
  }

  const validate = () => {
    let pass = document.getElementById('password').value;
    let rePass = document.getElementById('rePassword').value;

    if (pass.length < 6 ) {
      setError('Password must be at least 6 characters long.');
      return;
    } else if (pass !== rePass) {
      setError('Passwords must match');
      return;
    }

    setPass(pass);
  }

  return (
    <div className='d-flex justify-content-center' style={{"marginTop":'1%'}}>
          <div className="card text-center" style={{"width": "25%"}}>
              <div className="card-header h5 text-white bg-success">Password Reset</div>
              <small>You password must be at least 6 characters long.</small>
              <div className="card-body px-5">
                  <div className="form-outline">
                      <input type="password" id="password" className="form-control my-3" />
                      <label className="form-label" htmlFor="typeEmail">Password</label>
                  </div>
                  <div className="form-outline">
                      <input type="password" id="rePassword" className="form-control my-3" />
                      <label className="form-label" htmlFor="typeEmail">Re-enter password</label>
                  </div>
                  {error !== '' &&
                    <p className='error-message'>{error}</p>
                  }
                  {succ !== '' &&
                    <p style={{color:'green'}}>{succ} Click <Link href='/'>here</Link> to go back to the homepage, or wait to be redirected.</p>
                  }
                  <Button variant='success' onClick={validate}>Reset Password</Button>
              </div>
          </div>
        </div>
  )
}