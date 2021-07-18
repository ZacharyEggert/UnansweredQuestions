import React from 'react';

const SuggestionReviewCard = (props) => {
    const {suggestion, isChecked} = props;

    const {id, name, question, quote, quotephilname, sugg_type} = suggestion;

    if(!isChecked){
        return(
            null)
    }
    return (
        <div className="py-1 px-1 bg-[#FFF2] my-1">
            <div className="">hello</div>
        </div>
    );
};

export default SuggestionReviewCard;
