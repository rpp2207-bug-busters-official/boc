import Link from 'next/link';
import LoginButton from '../src/pages/Login/Login.js';
import Cookies from '../helper_functions/setCookie.js';
import Register from '../src/pages/Login/register.js';
import Logout from '../helper_functions/logOut.js';
import react, {useEffect, useState} from 'react';

import localFont from 'next/font/local';
const myFont = localFont({src:'../src/styles/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf'})

const Navbar = (props) => {
  let [cookie, setCookie] = useState(undefined);

  const updateCookie = () => {
    setCookie(Cookies.getCookie());
  }
  useEffect(() => {
    updateCookie();
  }, [cookie]);

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light' style={{padding:'10px', 'backgroundImage':'#FFCB6B'}}>
          <Link style={{color:'white'}} href="/" className={`navbar-brand ${myFont.className}`}>C&T</Link>
          <ul className='navbar-nav mr-auto'>

              {/* <li className='nav-item active'>
                <Link className="nav-link" href="/">Find Locations</Link>
              </li> */}
                {cookie !== undefined &&
                  <li className='nav-item active'>
                    <Link className="nav-link" href="/authenticated" style={{float:'left'}}>View Profile</Link>
                  </li>
                }

              {cookie === undefined &&
                  <>
                    <li className='nav-item active'>
                      <LoginButton updateCookie={updateCookie}/>
                    </li>
                    &nbsp;
                    <li className='nav-item active'>
                      <Register updateCookie={updateCookie} clasName='nav-link'/>
                    </li>
                  </>
                }
                {cookie !== undefined &&
                  <>
                    <li className='nav-item active'>
                      <Logout updateCookie={updateCookie} className='nav-link navbar-link-underline'/>
                    </li>
                  </>
                }
          </ul>
    </nav>
  );
}

export default Navbar;