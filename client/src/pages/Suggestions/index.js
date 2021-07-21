import React from 'react';
import SuggestionForm from '../../components/SuggestionForm';

const Suggestions = ({ user }) => {
    return (
        <div className="min-h-full bg-fixed bg-cover bg-whiteflower bg-fade">
            <main
                className="flex items-center justify-center min-w-full min-h-screen px-4 py-12 opacity-80 sm:px-6 lg:px-8"
                /* style="background-image: url(/img/background-whiteflower.jpg);"*/
            >
                <div className="py-8"></div>
                <div className="flex flex-row flex-wrap w-full bg-black sm:w-auto m-14 p-7 bg-opacity-80">
                    <div className="flex-1 flex-shrink-0 w-6/12 pr-1 text-white sm:min-w-max">
                        <header className="">
                            <h1 className="p-0 pb-4 text-3xl text-center sm:text-4xl sm:pb-8">
                                Suggestion Submissions
                            </h1>
                        </header>
                        <section className="w-auto p-8 py-8 bg-white form bg-opacity-20">
                            <SuggestionForm user={user} />
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Suggestions;
