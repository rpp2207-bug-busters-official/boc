import login from '../api/login.js';
import React from 'react';
import firebase from '../../../firebase/clientApp.js';
import facebookLogin from './facebookLogin.js';
import googleLogin from './googleLogin.js';

export default function Login(props) {
  return (
    <>
      <p onClick={googleLogin} className='authentication'>Google</p>
      <p onClick = {facebookLogin} className='authentication'>Facebook</p>
    </>
  )
}