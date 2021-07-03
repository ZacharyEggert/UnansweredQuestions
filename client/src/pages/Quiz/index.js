import React from 'react';
import SuggestionCard from '../../components/SuggestionCard';

const Quiz = () => {
    return (
        <div>
            <section
                className='flex flex-col items-center justify-around w-screen min-h-screen quiz-main'>
                
                <div className='flex flex-col items-center px-6 py-4 bg-black rounded-md welcome bg-opacity-60 sm:mt-24'>
                    <h3 className='mb-2 text-3xl text-center'>Philosophy Quiz</h3>
                    <p className='w-8/12 my-2 text-lg text-justify'>
                        How much of philosophy do you know? Are you able to recognize which famous Philosopher said what? Give it a try!
                    </p>
                    <div>
                        <button className='px-4 min-w-max' id="start-quiz">START QUIZ</button>
                    </div>
                </div>
                <div className='flex flex-col items-center px-6 py-4 bg-black rounded-md welcome quiz-container bg-opacity-60 sm:mt-24' >
                    <div className="p-4 mb-6 max-w-none md:max-w-prose">
                        <q className='text-xl question'>Question</q>
                    </div>
                    <div className='flex flex-row justify-between w-full m-2 answers flex-nowrap min-w-min'>
                        <button className='answer'>A</button>
                        <button className='answer'>B</button>
                        <button className='answer'>C</button>
                    </div>
                </div>

                <div className='flex flex-col items-center px-6 py-4 bg-black rounded-md welcome results results-container bg-opacity-60 sm:mt-24 sm:mx-12'>
                    <div className="p-4 mb-6 max-w-none md:max-w-prose">
                        <h2>
                            <span className='block mb-4 text-xl text-center true-false'>Correct!</span>
                            <q className='text-xl results-quote'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus odit saepe cum</q>
                        </h2>
                    </div>
                    <h2 className='pb-4 text-2xl results-author'>{null}</h2>
                    <button className='rerun'>Try Another...</button>
                </div>

                <div className="py-8 my-2 bg-black rounded-md welcome suggestions bg-opacity-60">
                    <SuggestionCard />
                </div>
            </section>
        </div>
    );
};

export default Quiz;