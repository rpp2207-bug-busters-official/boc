import Link from 'next/link';
import LoginButton from '../src/pages/Login/Login.js';
import Cookies from '../src/pages/Login/setCookie.js';
import Register from '../src/pages/Login/register.js';
import Logout from '../src/pages/Login/logOut.js';
import react, {useEffect, useState} from 'react';

const Navbar = (props) => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className='d-flex'>
        <div className="mr-auto p-2">
          <form className="">
            <Link className="btn btn-outline-success me-2" href="/">Find Locations</Link>
            {props.Cookies.cookie !== undefined &&
              <Link className="btn btn-sm btn-outline-secondary" href="/authenticated">View Profile</Link>
            }
          </form>
        </div>
        <div className='ml-auto p-2'>
        {props.Cookies.cookie === undefined &&
            <>
              <LoginButton updateCookie={props.Cookies.updateCookie}/>
              &nbsp;
              <Register updateCookie={props.Cookies.updateCookie}/>
            </>
          }
          {props.Cookies.cookie !== undefined &&
            <>
              <Logout props={props.Cookies.updateCookie}/>
            </>
          }
        </div>
      </div>

    </nav>
  );
}

export default Navbar;