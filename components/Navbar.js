import Link from 'next/link';

const Navbar = () => {
  return (
    <nav class="navbar bg-body-tertiary">
      <form class="container-fluid justify-content-start">
      <Link  class="btn btn-outline-success me-2" href="/">Find Locations</Link>
      <Link class="btn btn-sm btn-outline-secondary" href="/authenticated">View Profile</Link>
      </form>
    </nav>
  );
}

export default Navbar;