"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import "./nav-bar.css";

import { MdMenuOpen } from "react-icons/md";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((prev) => !prev);
  };

  return (
    <nav className={toggle ? "active" : "inactive"}>
      <div className="logo-container">
        <Image alt="Dream CreationZ logo" src="/images/Logo.jpg" fill />
      </div>
      <button className="menu-button" onClick={handleClick}>
        <MdMenuOpen />
      </button>
      <ul className="links-container">
        <Link href="/" className="active">
          Home
        </Link>
        <Link href="/gallery" className="inactive">
          Gallery
        </Link>
        <Link href="/about" className="inactive">
          About
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
