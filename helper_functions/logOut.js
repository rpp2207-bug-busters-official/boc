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
      <Link id="b-btn-lnk" onClick={logOut} style={{"marginLeft":"10px", paddingBottom: "0px"}} href='/' className={props.className}>Logout</Link>
    </>
  )
}