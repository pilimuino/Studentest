import React from 'react';

const UploadButton = ({ onClick }) => {
    return (
        <div className=" flex justify-end items-center z-10">
        <button
            onClick={onClick}  
            className="bg-white text-[#a6a6a6] border border-[#a6a6a6] font-semibold py-2 px-2 rounded-full shadow-lg hover:text-[#068ca4] transition duration-300"
            style={{ width: '180px', height: '53px' }}
        >
            Select document
        </button>
        </div>
    );
};

export default UploadButton;

