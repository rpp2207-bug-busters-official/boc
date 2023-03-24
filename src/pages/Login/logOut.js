import React from 'react';
import {Button} from 'react-bootstrap';
import Cookies from './setCookie.js';
import Link from 'next/link';

export default function logOut(props) {
  const logOut = () => {
    Cookies.logOut();
    props.updateCookie();
  }
  return (
    <>
      <Link  onClick={logOut} style={{"margin-left":"10px"}} href='/' className={props.className}>Logout</Link>
    </>
  )
}