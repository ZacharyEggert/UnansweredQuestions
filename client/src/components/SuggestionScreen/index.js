import React, { useEffect, useState } from 'react';
import { getSuggestions } from '../../util/API';
import SuggestionReviewCard from '../SuggestionReviewCard';

const SuggestionScreen = ({ state }) => {
    // eslint-disable-next-line no-unused-vars
    const { dashboardState, setDashboardState } = state;
    const [suggestions, setSuggestions] = useState([]);

    const handleCheckBox = (e) => {
        setDashboardState({
            ...dashboardState,
            [e.target.name + 'Checked']: e.target.checked,
        });
    };

    useEffect(() => {
        getSuggestions()
            .then((response) => {
                setSuggestions(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <div className="flex flex-row justify-around py-2 md:my-2 md:mx-2 bg-[rgba(0,0,0,0.4)] text-sm md:text-lg">
                <label htmlFor="philosopher">
                    Philosophers
                    <input
                        type="checkbox"
                        name="philosopher"
                        className='ml-2'
                        checked={dashboardState.philosopherChecked}
                        onChange={handleCheckBox}
                    />
                </label>
                <label htmlFor="question">
                    Questions
                    <input
                        type="checkbox"
                        name="question"
                        className='ml-2'
                        checked={dashboardState.questionChecked}
                        onChange={handleCheckBox}
                    />
                </label>
                <label htmlFor="quote">
                    Quotes
                    <input
                        type="checkbox"
                        name="quote"
                        className='ml-2'
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
                        isChecked={dashboardState[suggestion.sugg_type + 'Checked']}
                    />
                ))}
                    
            </div>
        </div>
    );
};

export default SuggestionScreen;
