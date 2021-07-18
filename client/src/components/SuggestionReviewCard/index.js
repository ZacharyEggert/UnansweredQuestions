import React from 'react';

const SuggestionReviewQuestion = ({props}) => {
    const {suggestion} = props;

    const {id, name, question, quote, quotephilname, } = suggestion;

    return (
        <div className="py-1 px-1 bg-[#FFF2] my-1 text-center">
            {question}
        </div>
    );
};


const SuggestionReviewQuote = ({props}) => {
    const {suggestion} = props;

    const {id, name, question, quote, quotephilname, } = suggestion;

    return (
        <div className="py-1 px-1 bg-[#FFF2] my-1 text-center">
            {quote}
        </div>
    );
};


const SuggestionReviewPhilosopher = ({props}) => {
    const {suggestion} = props;

    const {id, name, question, quote, quotephilname, } = suggestion;

    return (
        <div className="py-1 px-1 bg-[#FFF2] my-1 text-center">
            {name}
        </div>
    );
};


const SuggestionReviewCard = (props) => {
    const {suggestion, isChecked} = props;

    const {sugg_type} = suggestion;

    if(!isChecked){
        return(
            null)
    }
    switch(sugg_type){
        case 'question':
            return(
                <SuggestionReviewQuestion props={props}/>
            )
        case 'quote':
            return(
                <SuggestionReviewQuote props={props}/>
            )
        case 'philosopher':
            return(
                <SuggestionReviewPhilosopher props={props}/>
            )
        default:
            return (
                <div className="py-1 px-1 bg-[#FFF2] my-1 text-center">
                    ERROR
                </div>
            );
    }
};

export default SuggestionReviewCard;
