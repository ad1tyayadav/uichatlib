import React, { useState, useEffect, useCallback } from "react";
import { Github, Menu, X, Zap } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  const navItems = [
    { name: "Docs", path: "/docs" },
    { name: "Showcase", path: "/showcase" },
    { name: "Pricing", path: "/pricing" },
  ];

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    const scrollingDown = currentScrollPos > prevScrollPos;

    setVisible(
      (scrollingDown && currentScrollPos < 100) ||
      currentScrollPos < prevScrollPos //
    );
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{
        y: visible ? 0 : -100,
        transition: { type: "spring", damping: 20, stiffness: 200 }
      }}
      className="fixed w-full top-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50"
      style={{
        transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 group"
          >
            <div className="p-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
              aibotchat
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navItems.map(({ name, path }) => (
                <NavLink
                  key={name}
                  to={path}
                  className="text-gray-600 hover:text-purple-600 transition-colors relative group"
                  activeClassName="text-purple-600 active"
                >
                  {name}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-purple-600 transition-all 
                    ${location.pathname === path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </NavLink>
              ))}
            </div>

            <div className="h-6 w-[1px] bg-gray-200 mx-4" />

            <a
              href="https://github.com/milliondreamsblog/FOSSHACK"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-50 to-blue-50 hover:from-purple-100 hover:to-blue-100 transition-all"
            >
              <Github className="w-5 h-5 text-gray-700 group-hover:text-purple-600" />
              <span className="text-gray-700 group-hover:text-purple-600 font-medium">
                GitHub
              </span>
            </a>

            <Button href="https://www.npmjs.com/package/aibotchat" className="px-6">
              NPM Guide
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-sm"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navItems.map(({ name, path }) => (
                <NavLink
                  key={name}
                  to={path}
                  className={`block px-4 py-3 rounded-lg text-gray-700 hover:text-purple-600
                    ${location.pathname === path
                      ? 'bg-purple-50 text-purple-600 border-l-4 border-purple-600'
                      : 'hover:bg-purple-50'}`}
                  onClick={closeMenu}
                >
                  {name}
                </NavLink>
              ))}
              <a
                href="https://github.com/ad1tyayadav/uichatlib"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-purple-50"
              >
                <Github className="w-5 h-5 text-gray-700" />
                <span>GitHub</span>
              </a>
              <Button
                href="https://www.npmjs.com/package/aibotchat"
                className="w-full justify-center mt-4"
              >
                NPM Guide
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

export default Navbar;