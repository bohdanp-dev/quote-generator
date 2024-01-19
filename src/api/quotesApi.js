import axios from 'axios';

export const fetchRandomQuote = async (URL) => {
    try {
        const response = await axios.get(URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching random quote:', error);
        throw error;
    }
};
