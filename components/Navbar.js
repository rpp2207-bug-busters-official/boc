import Link from 'next/link';
import LoginButton from '../src/pages/Login/Login.js';
import Cookies from '../helper_functions/setCookie.js';
import Register from '../src/pages/Login/register.js';
import Logout from '../helper_functions/logOut.js';
import react, {useEffect, useState} from 'react';
import Image from 'next/image';

const Navbar = (props) => {
  let [cookie, setCookie] = useState(undefined);
  let [onProf, setOnProf] = useState(false);

  const updateCookie = () => {
    setCookie(Cookies.getCookie());
  }
  useEffect(() => {
    updateCookie();
  }, [cookie]);

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light' style={{padding:'10px', 'backgroundImage':'#FFCB6B', width: "100vw", height: "12vh"}}>
          <Link style={{color:'white'}} href="/" className={`navbar-brand`}>
            <Image
                src="/cnt-logo.png"
                alt="Charge and Tarry Logo"
                style={{width: "100%", minWidth: "4rem"}}
                width='80'
                height='60'
            />
          </Link>
          <ul className='navbar-nav mr-auto' id="navbar-list">
                  <li className='nav-item active' style={{marginRight: "10px"}}>
                    <Link className="nav-link" href="/" id="a-btn-lnk">Home</Link>
                  </li>
              {/* <li className='nav-item active'>
                <Link className="nav-link" href="/">Find Locations</Link>
              </li> */}
                {cookie !== undefined &&
                  <li className='nav-item active' style={{marginRight: "6px"}}>
                    <Link className="nav-link" href="/authenticated" id="a-btn-lnk">View Profile</Link>
                  </li>
                }

              {cookie === undefined &&
                  <>
                    <li className='nav-item active'>
                      <LoginButton updateCookie={updateCookie} id="b-btn-lnk"/>
                    </li>
                    &nbsp;
                    <li className='nav-item active'>
                      <Register updateCookie={updateCookie} clasName='nav-link'/>
                    </li>
                  </>
                }
                {cookie !== undefined &&
                  <>
                    <li className='nav-item active' style={{float: "right"}}>
                      <Logout updateCookie={updateCookie} className='nav-link logout'/>
                    </li>
                  </>
                }
          </ul>
    </nav>
  );
}

export default Navbar;