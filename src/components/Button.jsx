import React from 'react';

function Button({ href, variant = 'primary', children, className = '', style }) {
  const baseStyles = 'glow px-8 py-3 rounded-lg text-sm font-medium transition-all duration-500 animate-in';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200'
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