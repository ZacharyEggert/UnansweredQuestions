import React from 'react';
import { Link } from 'react-router-dom';

const SuggestionCard = () => {
    return (
        <section>
            <div className="flex flex-col items-center px-8 sm:flex-row">
                <div className="flex flex-col items-center justify-center flex-1 text-center sm:text-xl sm:pl-8 sm:pr-12 sm:border-r-2 sm:border-white">
                    <h3 className="pb-4 sm:pb-0">
                        Don't see a philosopher, quote or daily question? Let us
                        know who or what we should add!
                    </h3>
                </div>
                <div className="flex flex-col items-center justify-center flex-1">
                    <Link
                        to="/suggestions"
                        className="text-white rounded-md p-3 sm:text-xl border-white border-2 border-solid whitespace-nowrap w-auto bg-[#4d83a3] items-center"
                    >
                        Make a suggestion
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SuggestionCard;
