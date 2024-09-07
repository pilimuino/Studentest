import React from 'react';
import { Link } from 'react-router-dom';

const Button = () => {
    return (
        <div>
            <div className=" z-10 text-center">
                <Link to="/questiontest">
                    <button className="bg-white text-[#a6a6a6] border border-[#a6a6a6] font-semibold py-4 px-8 rounded-full shadow-lg hover:text-[#068ca4] transition duration-300" style={{ width: '250px', height: '53px' }}>
                        Student Test
                    </button>
                </Link>
            </div>    
        </div>
        );
    }
    
export default Button;