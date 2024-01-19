import {API_ADVICESLIP_URL_RANDOM, API_QUOTEGARDEN_URL_RANDOM} from "./baseApiUrls";

function normalizeQuoteData(apiResponse, source) {
    // Depending on the source, extract and standardize the quote data
    switch (source) {
        case API_ADVICESLIP_URL_RANDOM:
            return {
                quote: apiResponse.slip.advice,
            };
        case API_QUOTEGARDEN_URL_RANDOM:
            return {
                quote: apiResponse.data[0].quoteText,
                author: apiResponse.data[0].quoteAuthor,
            };
        default:
            return null;
    }
}

export default normalizeQuoteData;