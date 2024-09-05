import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/logo/Logo';

const Navbar = () => {
    console.log('Renderizando Navbar');
    return (
        <nav className="bg-white border-10 border-gray-300 shadow-lg rounded-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center">
                            <Logo alt="StudenTLogo" />
                        </Link>
                    </div>
                    <div className="flex-1 flex justify-center space-x-48">
                        <Link
                            to="/service"
                            className="border-transparent text-[#a6a6a6] hover:border-gray-300 hover:text-[#068ca4] inline-flex items-center px-1 pt-1 border-b-2 text-sl font-medium"
                        >
                            SERVICE
                        </Link>
                        <Link
                            to="/contact"
                            className="border-transparent text-[#a6a6a6] hover:border-gray-300 hover:text-[#068ca4] inline-flex items-center px-1 pt-1 border-b-2 text-sl font-medium"
                        >
                            CONTACT
                        </Link>
                    </div>
                    <div className="hidden sm:flex sm:items-center">
                        <Link
                            to="/login"
                            className="text-[#a6a6a6] hover:text-[#068ca4] px-3 py-2 rounded-md text-sl font-medium flex items-center"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 inline-block mr-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>
                            LOGIN
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;



