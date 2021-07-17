import React from 'react';
import { Link } from 'react-router-dom';

const SuggestionCard = () => {
    return (
        <div className="flex flex-row items-center flex-initial w-full mb-10">
            <div className="w-10/12 py-4 mx-auto mt-6 mb-8 bg-black bg-opacity-60 sm:mt-12 md:w-9/12">
                <section>
                    <div className="flex flex-col items-center px-4 sm:flex-row">
                        <div className="flex flex-col items-center justify-center flex-1 text-center sm:text-xl sm:pl-8 sm:pr-12 sm:border-r-2 sm:border-white">
                            <h3 className="pb-4 sm:pb-0">
                                Don't see a philosopher, quote or daily
                                question? Let us know who or what we should add!
                            </h3>
                        </div>
                        <div className="flex flex-col items-center justify-center flex-1 w-full sm:pl-4">
                            <Link
                                to="/suggestions"
                                className="w-8/12 mx-auto text-center sm:w-full button"
                            >
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
