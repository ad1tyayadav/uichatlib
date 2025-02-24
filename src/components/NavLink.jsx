import { Link } from "react-router-dom";
import React from "react";

function NavLink({ to, children, className, onClick }) {
  return (
    <Link
      to={to}
      className={`text-black hover:text-gray-700 px-3 ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

export default NavLink;
