import React from 'react';


const SavePassword = ({ showPassword, setShowPassword }) => {
    return (
        <button
            type="button" 
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="p-3 mt-4 text-gray-400 border border-gray-400 rounded shadow-xl hover:bg-secondary hover:text-white focus:outline-none"style={{ width: '240px', height: '50px' }}
        >
            {showPassword ? "Hide Password" : "Show Password"}
        </button>
    );
};

export default SavePassword;



