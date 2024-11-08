import api from '@/api';

export const uploadDocument = async (file, questionTypes) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('multiple_choice_count', questionTypes.multipleChoice);
    formData.append('true_false_count', questionTypes.trueFalse);
    formData.append('short_answer_count', questionTypes.shortAnswer);

    try {
        const response = await api.post('/documents/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error uploading document:', error);
        throw error;
    }
};

export const generateTest = async (documentId) => {
    try {
        const response = await api.post(`/documents/${documentId}/generate_test/`);
        return response.data;
    } catch (error) {
        console.error('Error generating test:', error);
        throw error;
    }
};

export const getDocuments = async () => {
    try {
        const response = await api.get('/documents/');
        return response.data;
    } catch (error) {
        console.error('Error fetching documents:', error);
        throw error;
    }
};

export const getTests = async () => {
    try {
        const response = await api.get('/tests/');
        return response.data;
    } catch (error) {
        console.error('Error fetching tests:', error);
        throw error;
    }
};