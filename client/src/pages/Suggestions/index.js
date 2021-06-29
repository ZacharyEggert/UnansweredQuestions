import React from 'react';
import SuggestionForm from '../../components/SuggestionForm';

const Suggestions = () => {
    return (
        <div>
            <main
                className="min-w-full opacity-80 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
                /* style="background-image: url(/img/background-whiteflower.jpg);"*/
            >
                <div className="py-8"></div>
                <div className="w-full sm:w-auto m-14 p-7 bg-black bg-opacity-80 flex flex-row flex-wrap">
                    <div className="w-6/12 pr-1 sm:min-w-max flex-1 flex-shrink-0">
                        <header className="">
                            <h1 className="sm:text-4xl p-0 sm:text-center">
                                Suggestion Submissions
                            </h1>
                        </header>
                        <section className="form bg-white bg-opacity-20 p-8 py-8 w-auto">
                            <SuggestionForm />
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Suggestions;
