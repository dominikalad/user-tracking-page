import axios from 'axios';


const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001',
});

const apiService = {
    fetchUserData: async () => {
        try {
            const response = await axios.get('https://random-data-api.com/api/v2/users');
            return response.data;
        } catch (error) {
            throw new Error(`Error fetching user data: ${error.message}`);
        }
    },

    storePageAccess: async ({ userId }) => {
        try {
            await apiClient.post('/api/storePageAccess', { userId });
        } catch (error) {
            throw new Error(`Error storing user data: ${error.message}`);
        }
    },

    recordScrollEvent: async ({ userId }) => {
        try {
            await apiClient.post('/api/recordScrollEvent', { userId });
        } catch (error) {
            throw new Error(`Error recording scroll event: ${error.message}`);
        }
    },
    fetchReportData: async () => {
        try {
            const response = await apiClient.get('/api/report');
            return response.data;
        } catch (error) {
            throw new Error(`Error fetching report data: ${error.message}`);
        }
    }
};

export default apiService;
