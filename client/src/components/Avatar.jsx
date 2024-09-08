import React from 'react';

export const Avatar = ({ className, children }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      {children}
    </div>
  );
};

export const AvatarImage = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-full object-cover rounded-full ${className}`}
    />
  );
};

export const AvatarFallback = ({ className, children }) => {
  return (
    <div className={`flex items-center justify-center w-full h-full bg-gray-600 text-white rounded-full ${className}`}>
      {children}
    </div>
  );
};