import { Link } from "react-router-dom";
import React from "react";

function NavLink({ to, children, className }) {
  return (
    <Link
      to={to}
      className={`text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 ${className}`}
    >
      {children}
    </Link>
  );
}

export default NavLink;
