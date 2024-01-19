import {API_ADVICESLIP_URL_RANDOM, API_QUOTEGARDEN_URL_RANDOM} from "../utils/baseApiUrls";
import './QuoteSource.css'
const QuoteSource = ({quoteUrl, setQuoteUrl, isQuoteLoading}) => {
    return (
        <div className="align-self-center margin-16">
            <button className={`quote-source-button ${(quoteUrl===API_QUOTEGARDEN_URL_RANDOM) && 'quote-source-button-active'}`}
                    disabled={quoteUrl === API_QUOTEGARDEN_URL_RANDOM || isQuoteLoading}
                    onClick={()=>setQuoteUrl(API_QUOTEGARDEN_URL_RANDOM)}
            >
                QuoteGarden
            </button>
            <button className={`quote-source-button ${(quoteUrl===API_ADVICESLIP_URL_RANDOM) && 'quote-source-button-active'}`}
                    disabled={quoteUrl === API_ADVICESLIP_URL_RANDOM || isQuoteLoading}
                    onClick={()=>setQuoteUrl(API_ADVICESLIP_URL_RANDOM)}
            >
                AdviceSlip
            </button>
        </div>
    )
}

export default QuoteSource;
