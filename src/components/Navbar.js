import React from 'react';
import Link from 'next/link';
const Navbar = () => {
  return (
    <nav className="w-full top-0 left-0 h-12 flex items-center justify-between px-10 fixed bg-white z-10">
      <div className="text-indigo-600 text-sm font-normal font-monumentGrotesk">
      <Link href="/">
          Victoria Martínez
        </Link>
      </div>
      <div className="text-indigo-600 text-sm font-normal font-monumentGrotesk">
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
