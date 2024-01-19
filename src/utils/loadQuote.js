import {fetchRandomQuote} from "../api/quotesApi";
import normalizeQuoteData from "./normalizeQuoteData";

export async function loadQuote(url) {
    return new Promise((resolve, reject) => {
        fetchRandomQuote(url)
            .then(data => {
                setTimeout(() => {
                    resolve({ quoteData: normalizeQuoteData(data, url), error: null });
                }, 1000);
            })
            .catch(error => {
                setTimeout(() => {
                    console.error('Failed to fetch quote:', error);
                    reject({ quoteData: null, error: error });
                }, 1000);
            });
    });
}