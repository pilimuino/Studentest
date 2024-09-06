import React from 'react';

const DocumentsSection = () => {
    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="mb-4">
                <input 
                    type="text" 
                    placeholder="User_name" 
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400" 
                />
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="p-4 border border-gray-300 rounded">
                    <p className="text-gray-500">Available documents</p>
                </div>
                <div className="p-4 border border-gray-300 rounded">
                    <p className="text-gray-500">Uploaded documents</p>
                </div>
                <div className="p-4 border border-gray-300 rounded">
                </div>
            </div>
        </div>
    );
};

export default DocumentsSection;
