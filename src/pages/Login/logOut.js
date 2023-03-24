import React from 'react';
import {Button} from 'react-bootstrap';
import Cookies from './setCookie.js';

export default function logOut(props) {
  const logOut = () => {
    Cookies.logOut();
    props.updateCookie();
  }
  return (
    <>
      <Button variant='outline-secondary' onClick={logOut}>Logout</Button>
    </>
  )
}