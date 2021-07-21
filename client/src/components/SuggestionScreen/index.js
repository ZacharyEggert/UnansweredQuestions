import React from 'react';
import SuggestionReviewCard from '../SuggestionReviewCard';

const SuggestionScreen = ({ state }) => {
    // eslint-disable-next-line no-unused-vars
    const { dashboardState, setDashboardState, suggestions, setSuggestions } =
        state;

    const handleCheckBox = (e) => {
        setDashboardState({
            ...dashboardState,
            [e.target.name + 'Checked']: e.target.checked,
        });
    };

    const triggerReview = (id) => {
        setDashboardState({
            ...dashboardState,
            activeReview: true,
            activeReviewId: id,
            activeReviewType: 'suggestion',
            screen: 'review',
        });
    };

    return (
        <div>
            <div className="flex flex-1 flex-row justify-around py-2 md:my-2 md:mx-2 bg-[rgba(0,0,0,0.4)] text-sm md:text-lg">
                <label htmlFor="philosopher">
                    Philosophers
                    <input
                        type="checkbox"
                        name="philosopher"
                        className="ml-2"
                        checked={dashboardState.philosopherChecked}
                        onChange={handleCheckBox}
                    />
                </label>
                <label htmlFor="question">
                    Questions
                    <input
                        type="checkbox"
                        name="question"
                        className="ml-2"
                        checked={dashboardState.questionChecked}
                        onChange={handleCheckBox}
                    />
                </label>
                <label htmlFor="quote">
                    Quotes
                    <input
                        type="checkbox"
                        name="quote"
                        className="ml-2"
                        checked={dashboardState.quoteChecked}
                        onChange={handleCheckBox}
                    />
                </label>
            </div>

            <div className="flex flex-col justify-around h-full py-2 text-sm md:my-2 md:mx-2 md:text-base">
                {suggestions.map((suggestion, i) => (
                    <SuggestionReviewCard
                        key={i}
                        suggestion={suggestion}
                        isChecked={
                            dashboardState[suggestion.sugg_type + 'Checked']
                        }
                        triggerReview={triggerReview}
                    />
                ))}
            </div>
        </div>
    );
};

export default SuggestionScreen;
