import login from '../api/login.js';
import firebase from '../../../firebase/clientApp.js';
import facebookLogin from './facebookLogin.js';
import googleLogin from './googleLogin.js';

export default function Login(props) {
  return (
    <>
      <p onClick={googleLogin}>Google</p>
      <p onClick = {facebookLogin}>Facebook</p>
    </>
  )
}