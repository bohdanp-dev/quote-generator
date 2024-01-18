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
/*
export const fetchQuotesByAuthor = async (author) => {
    try {
        const response = await axios.get(`${URL}/author/${author}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching quotes by ${author}:`, error);
        throw error;
    }
};*/
