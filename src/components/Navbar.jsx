import React, { useState } from "react";
import { Github, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Docs", path: "/docs" },
    { name: "Showcase", path: "/showcase" },
    { name: "Pricing", path: "/pricing" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed w-full xl:top-1 xl:left-10 xl:w-[95%] justify-center bg-gray-100 border border-gray-300 xl:rounded-lg shadow-md p-2 px-4 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo with Redirect */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-lg font-semibold flex items-center hover:text-gray-700 transition">
            aibotchat
          </Link>
          <div className="hidden md:flex space-x-6">
            {navItems.map(({ name, path }) => (
              <NavLink key={name} to={path} className="text-gray-700 hover:text-black">
                {name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* GitHub Link and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/ad1tyayadav/uichatlib"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition"
          >
            <Github className="w-6 h-6" />
          </a>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border border-gray-300 rounded-b-lg shadow-md py-2">
          {navItems.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={closeMenu}
            >
              {name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
