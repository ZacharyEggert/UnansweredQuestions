import React from 'react';

const SuggestionReviewCard = (props) => {
    const { suggestion, isChecked } = props;

    const { id, name, question, quote, quotephilname, sugg_type } = suggestion;

    const triggerReview = () => {
        props.triggerReview(id);
    };

    if (!isChecked) {
        return null;
    }
    return (
        <div className="py-1 px-1 bg-[#FFF2] my-1 ">
            <div className="flex flex-row justify-between">
                <div>
                    {sugg_type === 'quote' ? quote : null}
                    {sugg_type === 'quote' && quotephilname ? (
                        <span>&nbsp;&mdash; {quotephilname}</span>
                    ) : null}

                    {sugg_type === 'question' ? question : null}

                    {sugg_type === 'philosopher' ? name : null}
                </div>
                <span
                    className="pt-0 pb-0 text-base text-black bg-[#FFFA] hover:bg-[#FFFD] border-black button"
                    onClick={triggerReview}
                >
                    Review
                </span>
            </div>
        </div>
    );
};

export default SuggestionReviewCard;
