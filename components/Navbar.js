import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <h1>NAVBAR</h1>
      <Link href="/Authenticated">Profile</Link>
      <Link href="/">Home</Link>
    </div>
  );
}

export default Navbar;