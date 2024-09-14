import React, { useState } from 'react';
import DocumentsSection from '@/components/document/DocumentSection';
import UploadModal from '@/components/uploadfilemodal/UploadModal';
import api from '@/api';

const Questiontest = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [documentId, setDocumentId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [tests, setTests] = useState([]);

    const handleUploadClick = () => {
        setIsModalOpen(true);
    };

    const handleFileSelect = (file) => {
        setSelectedFile(file);
        setIsModalOpen(false);
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
            const response = await api.post(`/documents/${documentId}/generate_test/`);
            if (response.data && response.data.questions) {
                setTests([...tests, response.data]);
                alert('Test created successfully');
            } else {
                throw new Error('Invalid response format');
            }
        } catch (error) {
            console.error('Error creating test', error);
            alert('Error creating test. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-white min-h-screen">
            <main>
                <DocumentsSection
                    onUploadClick={handleUploadClick}
                    onCreateTestClick={handleCreateTest}
                    isLoading={isLoading}
                    selectedFile={selectedFile}
                    tests={tests}
                />
                <UploadModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onFileSelect={handleFileSelect}
                    onUpload={handleUpload}
                />
            </main>
        </div>
    );
};

export default Questiontest;
