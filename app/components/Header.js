
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Use next/image for optimized images
// import logo from '/public/images/logo.png'; // Adjust path for Next.js public folder

export default function Header() {
  const [color, setColor] = useState(false);

  // Handle scroll event with useEffect
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 50) {
        setColor(true);
      } else {
        setColor(false);
      }
    };

    window.addEventListener('scroll', changeColor);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('scroll', changeColor);
  }, []); // Empty dependency array to run once on mount

  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <nav className="navbar navbar-expand-lg">
        <div className="container suresh">
          <Link href="/" className="navbar-brand">
           <Image src="/images/logo.png" alt="" height={100} width={100}/>
          </Link>
          <h3>SURESH ROKAYA</h3>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon bg-light text-light" />
          </button>
          <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/" className="nav-link" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/service" className="nav-link">
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/portfolio" className="nav-link">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/team" className="nav-link">
                  Our Teams
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}