import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

const SignUpComponent = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSaveSubmit = (e) => {
        e.preventDefault();
        console.log('Saved submit:', { firstName, lastName, email, password });
        alert('Submit saved successfully!');
    };

    const handleSignUp = async (e) => {
        e.preventDefault();

        console.log('User signed up:', { firstName, lastName, email, password });

        if (!first_name || !last_name || !email || !password || !rp || !school) {
            alert("Please. complete all fields.");
            return;
        }

        try {
            const response = await axios.post(`${API_BASE_URL}/api/users/create_user/`, {
                first_name,
                last_name,
                email,
                password,
            });  
            
            if (response.status === 201) {
                const data = response.data;
                localStorage.setItem('authToken', data.token);
                localStorage.setItem('userName', first_name);
                localStorage.setItem('userLastName', last_name);
                localStorage.setItem('userEmail', email);
                alert('Account created successfully!');
                navigate("/login");
            } else {
                alert("Error: " + response.data.message);
            }
        } catch (error) {
            console.error("Error during registration:", error.response.data);
            alert("An error occurred: " + error.response.data.error || "Please, try again later!");
        }    
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-xl min-h-[350px] p-10 border border-gray-400 rounded-md shadow-md flex-grow bg-white">
                <h2 className="text-lg text-[#a6a6a6] font-bold mb-4">Create an account</h2>
                <form className="grid grid-cols-1 gap-4" onSubmit={handleSignUp}>
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
                    <div className="grid grid-cols-1 gap-4">
                        <input 
                            type="email" 
                            placeholder="Email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-5 border border-gray-400 rounded focus:outline-none focus:border-gray-400"
                            style={{ height: '50px' }}
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <input 
                            type={showPassword ? "text" : "password"}
                            placeholder="Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="flex-grow p-5 border border-gray-400 rounded focus:outline-none focus:border-gray-400"
                            style={{ height: '50px' }}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="p-2 text-sm text-primary bg-white border border-gray400 hover:text-secondary rounded"
                        >
                            {showPassword ? 'Hide' : 'Show'} Password
                        </button>
                    </div>
                    <button
                        type="submit"
                        onClick={handleSaveSubmit} 
                        className="w-full p-4 mt-4 text-gray-400 bg-white border border-gray-400 rounded shadow-xl hover:bg-secondary hover:text-white focus:outline-none"
                        style={{ height: '50px' }}
                    >
                        Sign Up
                    </button>
                </form>
                <div className="mt-4 text-gray-400 text-center">
                    <span>Already have an account? </span>
                    <Link to="/login" className="text-gray-400 hover:text-secondary text-bold hover:underline">
                        Login
                    </Link>
                    </div>
            </div>
        </div>
    );
};

export default SignUpComponent;
