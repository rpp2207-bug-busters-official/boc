import React from 'react';
import {Button} from 'react-bootstrap';
import Cookies from './setCookie.js';

export default function logOut() {
  const logOut = () => {
    Cookies.logOut();
  }
  return (
    <>
      <Button variant='outline-secondary' onClick={logOut}>Logout</Button>
    </>
  )
}