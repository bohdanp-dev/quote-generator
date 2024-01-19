import {useEffect, useState} from "react";
import {API_ADVICESLIP_URL_RANDOM} from "../utils/baseApiUrls";
import { IoReload } from "react-icons/io5";
import './QuoteSection.css'
import QuoteDisplay from "./QuoteDisplay";
import QuoteSource from "./QuoteSource";
import {loadQuote} from "../utils/loadQuote";
import SocialShare from "./SocialShare";

function QuoteSection() {
    const [quote, setQuote] = useState({});
    const [isQuoteLoading, setIsQuoteLoading] = useState(false)
    const [quoteUrl, setQuoteUrl] = useState(API_ADVICESLIP_URL_RANDOM)

    useEffect(() => {
        const fetchQuote = async () => {
            setIsQuoteLoading(true);
            const { quoteData, error } = await loadQuote(quoteUrl);
            if (error) {
                console.error("ERROR LOADING QUOTE" + error)
            } else {
                setQuote(quoteData);
            }
            setIsQuoteLoading(false);
        };

        fetchQuote();
    }, [quoteUrl]);

    const reloadQuote = async() =>{
        setIsQuoteLoading(true);
        const { quoteData, error } = await loadQuote(quoteUrl);
        if (error) {
            console.error('Error reloading quote:', error);
        } else {
            setQuote(quoteData);
        }
        setIsQuoteLoading(false);
    }

    return (
        <section className="card-container">
            <QuoteSource quoteUrl={quoteUrl} isQuoteLoading={isQuoteLoading} setQuoteUrl={setQuoteUrl}/>
            <QuoteDisplay isQuoteLoading={isQuoteLoading} quote={quote}/>

            <div className="social-reload-bar align-self-center">
                <SocialShare url={quote.quote + (quote.author ? ` \n- ${quote.author}` : '')} />
                <div className={`margin-16 border-16 reload-icon-outer-div icon-size-48 ${isQuoteLoading ? 'disabled' : ''}`}>
                    <IoReload
                        className="reload-icon icon-size-48 hover-pointer"
                        onClick={()=>reloadQuote()}
                    />
                </div>
            </div>
        </section>
    );
}

export default QuoteSection;