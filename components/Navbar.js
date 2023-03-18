import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <form className="container-fluid justify-content-start">
      <Link  className="btn btn-outline-success me-2" href="/">Find Locations</Link>
      <Link className="btn btn-sm btn-outline-secondary" href="/authenticated">View Profile</Link>
      </form>
    </nav>
  );
}

export default Navbar;