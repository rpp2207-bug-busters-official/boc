import Navbar from './Navbar.js';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar Cookies={children.props}/>
      { children }
    </div>
  );
}

export default Layout;