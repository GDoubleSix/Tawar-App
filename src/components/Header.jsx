"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import Container from "./Container";
import NavLinks from "./Navlinks";
import Button from "./Button";
import Link from "next/link";
import { IoIosArrowUp } from "react-icons/io";
import { TbMenu2 } from "react-icons/tb";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative bg-white shadow-md">
      <nav>
        <Container className="relative z-50 flex justify-between items-center py-4">
          <div className="relative z-10">
            <Logo />
          </div>
          <div className="hidden lg:flex lg:gap-10">
            <NavLinks />
          </div>
          <div className="hidden lg:flex items-center gap-6">
            <Button className="px-4 py-2 rounded-full bg-green-700 text-white hover:bg-green-800">
              <Link href="#contact">Join Us</Link>
            </Button>
          </div>
          <div className="lg:hidden flex items-center">
            <Button
              className="flex items-center justify-center p-2 text-gray-700"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <IoIosArrowUp className="text-2xl" />
              ) : (
                <TbMenu2 className="text-2xl" />
              )}
            </Button>
          </div>
        </Container>
        {isMenuOpen && (
          <div className="lg:hidden absolute inset-x-0 top-16 p-4 bg-white shadow-md z-40">
            <div className="flex flex-col items-start gap-4">
              <NavLinks />
              <Button
                href="#contact"
                className="px-4 py-2 rounded-full bg-green-700 text-white hover:bg-green-800"
              >
                Join Us
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
