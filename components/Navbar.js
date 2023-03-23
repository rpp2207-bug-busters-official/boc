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
  }
  useEffect(() => {
    updateCookie();
  }, [cookie]);

  return (
    <nav className="navbar bg-body-tertiary justify-content-between">
          <form>
            <Link className="btn btn-outline-success me-2" href="/">Find Locations</Link>
            {cookie !== undefined &&
              <Link className="btn btn-sm btn-outline-secondary" href="/authenticated">View Profile</Link>
            }
          </form>
        {cookie === undefined &&
            <div>
              <LoginButton updateCookie={updateCookie}/>
              &nbsp;
              <Register updateCookie={updateCookie}/>
            </div>
          }
          {cookie !== undefined &&
            <div>
              <Logout updateCookie={updateCookie}/>
            </div>
          }

    </nav>
  );
}

export default Navbar;