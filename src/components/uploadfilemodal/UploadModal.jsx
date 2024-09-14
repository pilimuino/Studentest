import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { toast } from 'react-toastify';

const UploadModal = ({ isOpen, onClose, onFileSelect, onUpload }) => {
    const [questionTypes, setQuestionTypes] = useState({
        multipleChoice: 5,
        trueFalse: 5,
        shortAnswer: 0
    });

    const onDrop = useCallback((acceptedFiles) => {
        if (acceptedFiles && acceptedFiles.length > 0) {
            const file = acceptedFiles[0];
            if (file.size > 10 * 1024 * 1024) { // 10MB limit
                toast.error('File size should not exceed 10MB');
                return;
            }
            onFileSelect(file);
            toast.success(`File "${file.name}" selected successfully`);
        }
    }, [onFileSelect]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
        onDrop,
        accept: {
            'application/pdf': ['.pdf'],
            'application/msword': ['.doc'],
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
        },
        maxFiles: 1
    });

    const handleQuestionTypeChange = (type, value) => {
        const newValue = Math.max(0, parseInt(value) || 0);
        setQuestionTypes(prev => {
            const updated = { ...prev, [type]: newValue };
            const total = Object.values(updated).reduce((sum, val) => sum + val, 0);
            if (total > 10) {
                const excess = total - 10;
                updated[type] = Math.max(0, newValue - excess);
            }
            return updated;
        });
    };

    const handleUpload = useCallback(() => {
        const total = Object.values(questionTypes).reduce((sum, val) => sum + val, 0);
        if (total !== 10) {
            toast.error('Total number of questions must be 10');
            return;
        }
        onUpload(questionTypes);
    }, [onUpload, questionTypes]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-400 bg-opacity-30  flex justify-center items-center z-50">
            <div
                style={{
                width: '37.50rem', 
                borderRadius: '0.625rem',  
                }}
                className="bg-white p-6 border border-gray-400 rounded-xl shadow-lg ">
                    <h2 className="text-lg font-semibold mb-4 text-gray-500">Upload Document and Set Questions</h2>
                    <div {...getRootProps()} className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center mb-4">
                        <input {...getInputProps()} />
                        {
                            isDragActive ?
                                <p className="text-gray-500">Drop the file here ...</p> :
                                <p className="text-gray-500">Drop your file here or click to browse</p>
                        }
                    </div>
                    <div className="mb-4">
                        <h3 className="font-medium mb-2 text-gray-500">Question Types (Total: 10)</h3>
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-sm text-gray-400">Multiple Choice:</label>
                            <input 
                                type="number" 
                                value={questionTypes.multipleChoice}
                                onChange={(e) => handleQuestionTypeChange('multipleChoice', e.target.value)}
                                className="w-16 p-1 text-gray-400 border border-gray-300 rounded"
                                min="0"
                                max="10"
                            />
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-sm text-gray-400">True/False:</label>
                            <input 
                                type="number" 
                                value={questionTypes.trueFalse}
                                onChange={(e) => handleQuestionTypeChange('trueFalse', e.target.value)}
                                className="w-16 p-1 text-gray-400 border border-gray-300 rounded"
                                min="0"
                                max="10"
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            <label className="text-sm text-gray-400">Short Answer:</label>
                            <input 
                                type="number" 
                                value={questionTypes.shortAnswer}
                                onChange={(e) => handleQuestionTypeChange('shortAnswer', e.target.value)}
                                className="w-16 p-1 text-gray-400 border border-gray-300 rounded"
                                min="0"
                                max="10"
                            />
                        </div>
                    </div>
                        <button
                            onClick={handleUpload}
                            className="w-full bg-white text-gray-500 py-2 px-4 rounded-md hover:bg-secondary hover:text-white transition duration-300 mb-2 border border-gray-300"
                        >
                            Upload
                        </button>
                        <button
                            onClick={onClose}
                            className="w-full bg-white text-gray-500 py-2 px-4 rounded-md hover:bg-gray-100 transition duration-300 border border-gray-300"
                        >
                            Close
                        </button>
            </div>       
        </div>
    );
};

export default UploadModal;;