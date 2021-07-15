import React from 'react';
import { Link } from 'react-router-dom';

const SuggestionCard = () => {
    return (
        <div className="flex flex-row items-center flex-initial w-full mb-10">
            <div className="py-4 mx-auto mt-6 bg-black bg-opacity-60 sm:mt-12 sm:w-9/12">
                <section>
                    <div className="flex flex-col items-center px-8 sm:flex-row">
                        <div className="flex flex-col items-center justify-center flex-1 text-center sm:text-xl sm:pl-8 sm:pr-12 sm:border-r-2 sm:border-white">
                            <h3 className="pb-4 sm:pb-0">
                                Don't see a philosopher, quote or daily
                                question? Let us know who or what we should add!
                            </h3>
                        </div>
                        <div className="flex flex-col items-center justify-center flex-1">
                            <Link to="/suggestions" className="button">
                                Make a suggestion
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SuggestionCard;
