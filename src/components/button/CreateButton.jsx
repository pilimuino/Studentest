import React from 'react'
import {Link} from 'react-router-dom'


const CreateButton = () => {
        return (
            <div>
                <div className=" flex justify-end items-center z-10">
                    <Link to="/createtest">
                        <button className="bg-white text-[#a6a6a6] border border-[#a6a6a6] font-semibold py-2 px-2 rounded-full shadow-lg hover:text-[#068ca4] transition duration-300" style={{ width: '180px', height: '53px' }}>
                            Create test
                        </button>
                    </Link>
                </div>    
            </div>
            );
        }

export default CreateButton;
