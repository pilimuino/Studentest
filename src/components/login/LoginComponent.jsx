import React, { useState } from 'react';
import SavePassword from '@/components/button/SavePassword';
import { Link } from 'react-router-dom';

const LoginComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSaveChanges = (e) => {
        e.preventDefault();
        console.log('Saved changes:', { firstName, lastName, email, password });
        alert('Changes saved successfully!');
    };
    
    const handleDeleteAccount = () => {
        console.log('Account deleted');
        alert('Account deleted');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-xl min-h-[350px] md:mt-10 md:mb-10 p-10 border border-gray-400 rounded-md shadow-md flex-grow bg-white">
                <h2 className="text-lg text-[#a6a6a6] font-bold mb-4">Your profile</h2>
                <h3 className='text-l text-[#a6a6a6] font-semibold mb-3'>Personal data</h3>
                <form className="grid grid-cols-1 gap-4">
                    <div className="grid grid-cols-1 gap-4">
                        <input 
                            type="text" 
                            placeholder="First name" 
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="w-full p-5 border border-gray-400 rounded focus:outline-none focus:border-gray-400" 
                            style={{ height: '50px' }}
                        />
                        <input 
                            type="text" 
                            placeholder="Last name" 
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="w-full p-5 border border-gray-400 rounded focus:outline-none focus:border-gray-400" 
                            style={{ height: '50px' }}
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <input 
                            type="email" 
                            placeholder="Email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-5 border border-gray-400 rounded focus:outline-none focus:border-gray-400" 
                            style={{ height: '50px' }}
                        />
                    </div>   
                    <div className="grid grid-cols-2 gap-4">   
                        <input 
                            type={showPassword ? "text" : "password"}
                            placeholder="Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="p-4 md:mt-4 border border-gray-400 rounded focus:outline-none focus:border-gray-400"
                            style={{ width: '240px', height: '50px'  }}
                        />
                        <SavePassword 
                            showPassword={showPassword} 
                            setShowPassword={setShowPassword} 
                        />
                    </div> 
                    <button
                        type="submit"
                        className="w-full p-4 mt-4 text-gray-400 border border-gray-400 rounded shadow-xl hover:bg-secondary hover:text-white focus:outline-none"
                        style={{ height: '50px' }}
                    >
                        Save Changes
                    </button>
                    <button
                        type="button"
                        onClick={handleDeleteAccount}
                        className="w-full p-4 mt-4 text-gray-400 border border-gray-400 rounded shadow-xl hover:bg-red-500 hover:text-white focus:outline-none"
                        style={{ height: '50px' }}
                    >
                        Delete account
                    </button>
                </form>
                <div className="mt-4 text-center text-gray-400">
                    <span>Don't have an account? </span>
                    <Link to="/signup" className="text-gray-400 hover:text-secondary text-bold hover:underline">
                        Sign Up
                    </Link>
                    </div>
            </div>
        </div>
    );
};

export default LoginComponent;

