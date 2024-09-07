import React, { useState, useRef } from 'react';
import UploadButton from '@/components/button/UploadButton';
import CreateButton from '@/components/button/CreateButton';
import axios from 'axios';

const DocumentsSection = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            alert('Please select a file to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await axios.post('/upload/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('File uploaded successfully');
        } catch (error) {
            console.error('Error uploading file', error);
            alert('Error uploading file. Please try again.');
        }
    };

    return (
        <div className="max-w-screen-lg w-full mx-auto p-4">
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
                <h1 className="text-gray-400 mb-4">Your recent documents</h1>
                {selectedFile && (
                        <p className="text-gray-400">Selected: {selectedFile.name}</p>
                    )}
                <div className="flex justify-between items-center mb-4">
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                        ref={fileInputRef}
                    />
                    {selectedFile && (
                    <div className="mb-4 p-2 bg-gray-100 rounded">
                        <p className="text-sm text-gray-400">Selected file: {selectedFile.name}</p>
                    </div>
                )}
                    <button
                        onClick={() => fileInputRef.current.click()}
                        className="bg-white text-[#a6a6a6] border border-[#a6a6a6] font-semibold py-4 px-8 rounded-full shadow-lg hover:text-[#068ca4] transition duration-300" style={{ width: '180px', height: '53px' }}
                    >
                        Select File
                    </button>
                    <UploadButton onClick={handleUpload} />
                    
                </div>
                    
                <h1 className="text-gray-400 mb-4">Your recent tests</h1>
                <div className="flex justify-end items-center z-10">
                    <CreateButton />
                </div>
            </div>
        </div>
    );
};

export default DocumentsSection;



