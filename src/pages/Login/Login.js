import login from '../api/login.js';
import React from 'react';
import firebase from '../../../firebase/clientApp.js';
import facebookLogin from './facebookLogin.js';
import googleLogin from './googleLogin.js';
import CreateUser from './newUser.js';
import LoginUser from './loginUser.js';

export default function Login(props) {
  return (
    <>
      <p onClick={googleLogin} className='authentication'>Google</p>
      <p onClick = {facebookLogin} className='authentication'>Facebook</p>
      <p onClick= {() => {CreateUser('jnstrendara@hotmail.com', 'asdfasdfasdf', 'justin8912');}}>Create new account</p>
      <p onClick = {() => {LoginUser('jnstrendara@hotmail.com', 'asdfasdfasdf')}}>Login</p>
    </>
  )
}