import './QuoteDisplay.css';

const QuoteDisplay = ({isQuoteLoading, quote}) =>
{
    return (
        <div className="quote-container align-self-center">
            {isQuoteLoading ?
                (
                    <div className="loading-flip">Loading...</div>
                ) :
                (
                    <>
                        <div>{quote.quote}</div>
                        {quote.author && <div className={"align-self-end"}>- {quote.author}</div>}
                    </>
                )
            }
        </div>
    );
}
export default QuoteDisplay;