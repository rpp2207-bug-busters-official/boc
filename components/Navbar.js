import Link from 'next/link';
import LoginButton from '../src/pages/Login/Login.js';
import Cookies from '../src/pages/Login/setCookie.js';
import Register from '../src/pages/Login/register.js';
import Logout from '../src/pages/Login/logOut.js';
import react, {useEffect, useState} from 'react';

const Navbar = (props) => {
  let [cookie, setCookie] = useState(undefined);

  const updateCookie = () => {
    setCookie(Cookies.getCookie());
    console.log('CurrentCookie:', Cookies.getCookie());
  }
  useEffect(() => {
    updateCookie();
    console.log('Cookie has changed:', cookie)
  }, [cookie]);

  return (
    <nav className="navbar bg-body-tertiary">
      <div className='d-flex'>
        <div className="mr-auto p-2">
          <form className="">
            <Link className="btn btn-outline-success me-2" href="/">Find Locations</Link>
            {cookie !== undefined &&
              <Link className="btn btn-sm btn-outline-secondary" href="/authenticated">View Profile</Link>
            }
          </form>
        </div>
        <div className='ml-auto p-2'>
        {cookie === undefined &&
            <>
              <LoginButton updateCookie={updateCookie}/>
              &nbsp;
              <Register updateCookie={updateCookie}/>
            </>
          }
          {cookie !== undefined &&
            <>
              <Logout updateCookie={updateCookie}/>
            </>
          }
        </div>
      </div>

    </nav>
  );
}

export default Navbar;