import React from 'react';
import CreateButton from '@/components/button/CreateButton';
import UploadButton from '@/components/button/UploadButton';

const DocumentsSection = ({ onUploadClick, onCreateTestClick, isLoading, selectedFile, tests }) => {
    return (
        <div className="max-w-screen-xl mx-auto p-4">
            <div className="mb-8">
                <input
                    type="text"
                    placeholder="User_name"
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div className="grid grid-cols-3 gap-4 mb-8">
                <div className=" text-gray-400 border border-gray-300 rounded p-2">
                    Available documents
                </div>
                <div className=" text-gray-400 border border-gray-300 rounded p-2">
                    Uploaded documents: {selectedFile ? 1 : 0}
                </div>
                <div className=" text-gray-400 border border-gray-300 rounded p-2">
                    Tests created: {tests.length}
                </div>
            </div>
            <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4 text-gray-400">Your recent documents</h2>
                <UploadButton
                    onClick={onUploadClick}
                />
                {selectedFile && <p className="mt-2 text-sm text-gray-500">Selected: {selectedFile.name}</p>}
            </div>
            <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4 text-gray-400">Your recent tests</h2>
                <CreateButton
                    onClick={onCreateTestClick}
                />
                {tests.length > 0 && (
                    <ul className="mt-4">
                        {tests.map((test, index) => (
                            <li key={index} className="text-sm text-gray-400">Test {index + 1}: {test.questions.length} questions</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default DocumentsSection;



