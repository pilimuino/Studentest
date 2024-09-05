import React from 'react';
import  { ReactComponent as StudenTLogo} from './assets/logo/logo/StudenTLogo.svg';




const Logo = ({ alt = 'StudenTLogo' }) => {
  return (
    <div className="max-w-sm mx-auto border-0 rounded-lg overflow-hidden shadow-none p-0">
      <StudenTLogo 
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


