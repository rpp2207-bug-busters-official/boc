import Link from 'next/link';
import LoginButton from '../src/pages/Login/Login.js';
import Cookies from '../src/pages/Login/setCookie.js';
import Register from '../src/pages/Login/register.js';


const Navbar = () => {

  return (
    <nav className="navbar bg-body-tertiary">
      <div className='d-flex'>
        <form className="mr-auto p-2">
          <Link  className="btn btn-outline-success me-2" href="/">Find Locations</Link>
          <Link className="btn btn-sm btn-outline-secondary" href="/authenticated">View Profile</Link>
        </form>
        <div className='ml-auto p-2'>
        {Cookies.getCookie('userId') === undefined &&
            <>
              <LoginButton/>
              &nbsp;
              <Register/>
            </>
          }
        </div>
      </div>

    </nav>
  );
}

export default Navbar;