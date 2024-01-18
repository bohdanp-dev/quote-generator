import {useEffect, useState} from "react";
import {fetchRandomQuote} from "../api/quotesApi";
import {API_ADVICESLIP_URL_RANDOM, API_DICTUM_URL_RANDOM, API_QUOTEGARDEN_URL_RANDOM} from "../utils/baseApiUrls";
import normalizeQuoteData from "../utils/normalizeQuoteData";

function QuoteSection() {
    const [quote, setQuote] = useState({});
    const [isQuoteLoading, setIsQuoteLoading] = useState(false)
    const [quoteUrl, setQuoteUrl] = useState(API_ADVICESLIP_URL_RANDOM)

    const loadQuote = (url) =>{
        setIsQuoteLoading(true);

        fetchRandomQuote(url)
            .then( data =>{
                setTimeout(()=>{
                    setIsQuoteLoading(false);
                    setQuote(normalizeQuoteData(data, url));
                },400)

            })
            .catch(error => {
                setTimeout(()=>{
                    setIsQuoteLoading(false);
                    console.error('Failed to fetch quote:', error);
                },400)
            });
    }

    useEffect(()=>{
        loadQuote(quoteUrl)
    },[quoteUrl])

    return (
        <section>
            {/*make it a separate component as well*/}
            <div>
                <button
                    disabled={quoteUrl === API_QUOTEGARDEN_URL_RANDOM}
                    onClick={()=>setQuoteUrl(API_QUOTEGARDEN_URL_RANDOM)}
                >
                    QuoteGarden
                </button>
                <button
                    disabled={quoteUrl === API_ADVICESLIP_URL_RANDOM}
                    onClick={()=>setQuoteUrl(API_ADVICESLIP_URL_RANDOM)}
                >
                    AdviceSlip
                </button>
            </div>
            {/*make it a separate component*/}
            <div>
                {isQuoteLoading ? "LOADING" : (
                    <>
                        <div>{quote.quote}</div>
                        {quote.author && <div>- {quote.author}</div>}
                    </>
                )}
            </div>
            <button disabled={isQuoteLoading} onClick={()=>loadQuote(quoteUrl)}>Load new quote</button>
        </section>
    );
}

export default QuoteSection;