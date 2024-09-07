import React from 'react';
import UploadButton from '@/components/button/UploadButton';
import CreateButton from '@/components/button/CreateButton';

const DocumentsSection = () => {
    return (
        <div className="ax-w-screen-lg w-full mx-auto p-4">
            <div className="mb-4">
                <input 
                    type="text" 
                    placeholder="User_name" 
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400" 
                />
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="p-4 border border-gray-300 rounded">
                    <p className="text-gray-400">Available documents</p>
                </div>
                <div className="p-4 border border-gray-300 rounded">
                    <p className="text-gray-400">Uploaded documents</p>
                </div>
                <div className="p-4 border border-gray-300 rounded">
                </div>
            </div>
            <div className="container mx-auto px-5 py-10">
            <h1 class ="text-gray-400 ">Your recent documents</h1>
            <div className="container mx-auto px-10 py-10">
                <div className="relative z-10 text-center">
                    <UploadButton/>
                </div>
            </div>
            <h1 class ="text-gray-400 ">Your recent tests</h1>
            <div className="container mx-auto px-10 py-10">
                <div className="relative z-10 text-center">   
                    <CreateButton/>
                </div>
            </div>
            </div>
    </div>
    );
};

export default DocumentsSection;
