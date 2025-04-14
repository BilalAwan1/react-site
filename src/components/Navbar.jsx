import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileScreen, setMobileScreen] = useState(false);

  const toggleNavbar = () => {
    setMobileScreen(!mobileScreen);
  };

  return (
    <div>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img src={logo} alt="logo" className="h-10 w-10 mr-2" />
              <span className="text-xl tracking-tight">reactsite</span>
            </div>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex justify-center items-center space-x-4">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
              >
                Create An Account
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="lg:hidden md:flex">
              <button onClick={toggleNavbar}>
                {mobileScreen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Nav Dropdown */}
          {mobileScreen && (
            <div className="lg:hidden flex flex-col items-center absolute top-full left-0 w-full bg-black/90 backdrop-blur-md border-t border-neutral-700/80 py-6 space-y-6 text-center">
              <ul className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col space-y-4 pt-4 border-t border-neutral-700/80 w-full items-center">
                <a href="#" className="py-2 px-4 border rounded-md w-3/4">
                  Sign In
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-4 rounded-md w-3/4"
                >
                  Create An Account
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
