import React, { useState, useRef } from 'react';
import UploadButton from '@/components/button/UploadButton';
import CreateButton from '@/components/button/CreateButton';
import api from '@/api';

const DocumentsSection = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [documentId, setDocumentId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        setDocumentId(null); 
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            alert('Please select a file to upload.');
            return;
        }

        setIsLoading(true);
        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await api.post('/documents/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setDocumentId(response.data.id);
            alert('File uploaded successfully');
        } catch (error) {
            console.error('Error uploading file', error);
            alert('Error uploading file. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleCreateTest = async () => {
        if (!documentId) {
            alert('Please upload a document first.');
            return;
        }
    
        setIsLoading(true);
        try {
            const testResponse = await api.post(`/documents/${documentId}/generate_test/`);
            console.log('Test response:', testResponse.data); 
            if (testResponse.data && testResponse.data.questions) {
                setQuestions(testResponse.data.questions);
            } else {
                throw new Error('Invalid response format');
            }
        } catch (error) {
            console.error('Error generating test', error);
            alert('Error generating test. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-screen-lg w-full mx-auto p-4">
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
                    <button
                        onClick={() => fileInputRef.current.click()}
                        className="bg-white text-[#a6a6a6] border border-[#a6a6a6] font-semibold py-4 px-8 rounded-full shadow-lg hover:text-[#068ca4] transition duration-300"
                        style={{ width: '180px', height: '53px' }}
                    >
                        Select File
                    </button>
                    <UploadButton onClick={handleUpload} disabled={isLoading || !selectedFile} />
                </div>
                    
                <h1 className="text-gray-400 mb-4">Your recent tests</h1>
                <div className="flex justify-end items-center z-10">
                    <CreateButton onClick={handleCreateTest} disabled={isLoading || !documentId} />
                </div>
                {isLoading && <p>Loading...</p>}
                {questions.length > 0 && (
                    <div className="mt-6">
                        <h2 className="text-lg font-bold mb-2">Generated Questions</h2>
                        {questions.map((question, index) => (
                            <div key={index} className="p-4 mb-4 border border-gray-200 rounded">
                                <p className="font-semibold">{question.text}</p>
                                {question.type === 'multiple_choice' ? (
                                    <ul className="list-disc pl-5 mt-2">
                                        {question.answers.map((answer, answerIndex) => (
                                            <li key={answerIndex} className={answer.is_correct ? "text-green-600" : ""}>
                                                {answer.text}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <div className="mt-2">
                                        <p className={question.answers[0].is_correct ? "text-green-600" : "text-red-600"}>
                                            Verdadero
                                        </p>
                                        <p className={question.answers[1].is_correct ? "text-green-600" : "text-red-600"}>
                                            Falso
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DocumentsSection;



