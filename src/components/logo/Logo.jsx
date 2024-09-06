import React from 'react';
import  StudentLogo from '@/assets/logo/logo/1.png';




const Logo = ({ alt = 'StudenTLogo' }) => {
  return (
    <div className="max-w-sm mx-auto border-0 rounded-lg overflow-hidden shadow-none p-0">
      <img 
        src={StudentLogo} 
        alt={alt} 
        className="w-full h-auto object-cover rounded-lg border-0 shadow-none" 
        aria-labelledby="logo-description"
      />
      <p 
        id="logo-description" 
        className="sr-only" 
      >
        {alt}
      </p>
    </div>
  );
};

export default Logo;


