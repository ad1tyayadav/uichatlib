import React from 'react';

function Button({ href, variant = 'primary', children, className = '', style }) {
  const baseStyles = 'glow px-8 py-3 rounded-lg text-lg font-medium transition-all duration-500 animate-in';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
  };

  return (
    <a
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      style={style}
    >
      {children}
    </a>
  );
}

export default Button;