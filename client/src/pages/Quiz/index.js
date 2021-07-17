import React, { useState } from 'react';
import SuggestionCard from '../../components/SuggestionCard';
import { getQuotes } from '../../util/API';

const Quiz = ({ philosophers }) => {
    const QUIZSTAGES = {
        NOT_STARTED: 0,
        STARTED: 1,
        ANSWERED: 2,
    };

    const initialState = {
        quizStage: QUIZSTAGES.NOT_STARTED,
        question: 'When is a door not a door?',
        answer: 'When it is ajar.',
        falseAnswers: [
            'When you are uncertain.',
            '8:37 PM Pacific Daylight Time',
        ],
        answeredCorrect: true,
    };

    const renderAnswerButtons = () => {
        let optionButtons = [];
        let randomNumber = Math.random();
        const correctButton = (
            <button
                key={`correct-${randomNumber}`}
                className="my-1 capitalize sm:my-0 button sm:text-sm md:text-base"
                onClick={() => {
                    setQuizStageAnswered(true);
                }}
            >
                {quizState.answer}
            </button>
        );
        const incorrectButton_1 = (
            <button
                key={`incorrect-1-${randomNumber}`}
                className="my-1 capitalize button sm:my-0 sm:text-sm md:text-base"
                onClick={() => {
                    setQuizStageAnswered(false);
                }}
            >
                {quizState.falseAnswers[0]}
            </button>
        );
        const incorrectButton_2 = (
            <button
                key={`incorrect-2-${randomNumber}`}
                className="my-1 capitalize button sm:my-0 sm:text-sm md:text-base"
                onClick={() => {
                    setQuizStageAnswered(false);
                }}
            >
                {quizState.falseAnswers[1]}
            </button>
        );
        if (randomNumber < 1 / 3) {
            optionButtons.push(
                correctButton,
                incorrectButton_1,
                incorrectButton_2
            );
        } else if (randomNumber < 2 / 3) {
            optionButtons.push(
                incorrectButton_1,
                correctButton,
                incorrectButton_2
            );
        } else {
            optionButtons.push(
                incorrectButton_1,
                incorrectButton_2,
                correctButton
            );
        }
        return optionButtons;
    };

    const getRandomPhilosophers = (count = 2) => {
        let randomPhilosophers = [];
        while (randomPhilosophers.length < count) {
            const randomNumber = Math.floor(Math.random() * Object.keys(philosophers).length);
            const randomPhilosopher = Object.values(philosophers)[randomNumber];
            randomPhilosophers.push(randomPhilosopher.name);
        }
        return randomPhilosophers;
    };


    const StartQuiz = () => {
        getQuotes()
        .then(response => {
            const randomNumber = Math.random();
            const quote = response.data[Math.floor(randomNumber * response.data.length)];
            const falseAnswers = getRandomPhilosophers(2);
            // console.log({quote:quote.quote, falseAnswers});
            setQuizState({
                ...quizState,
                quizStage: QUIZSTAGES.STARTED,
                question:quote.quote,
                answer:quote.author,
                falseAnswers,
            });
        });

    };

    const setQuizStageAnswered = (answerChosen) => {
        if (answerChosen) {
            setQuizState({
                ...quizState,
                quizStage: QUIZSTAGES.ANSWERED,
                answeredCorrect: true,
            });
        } else {
            setQuizState({
                ...quizState,
                quizStage: QUIZSTAGES.ANSWERED,
                answeredCorrect: false,
            });
        }
    };

    // eslint-disable-next-line no-unused-vars
    const [quizState, setQuizState] = useState(initialState);

    return (
        <div className="min-h-full text-white bg-fixed bg-cover bg-orangeleaves bg-fade">
            <div className='w-full h-14'></div>
            <section className="flex flex-col items-center justify-around w-full min-h-screen quiz-main">
                {quizState.quizStage === QUIZSTAGES.NOT_STARTED ? (
                    <div className="flex flex-col items-center w-11/12 px-6 py-4 bg-black bg-opacity-60 sm:mt-24 sm:w-9/12">
                        <h3 className="mb-2 text-3xl text-center">
                            Philosophy Quiz
                        </h3>
                        <p className="w-8/12 my-2 text-lg text-center">
                            How much of philosophy do you know? Are you able to
                            recognize which famous Philosopher said what? Give
                            it a try!
                        </p>
                        <div>
                            <button
                                className="px-4 min-w-max"
                                id="start-quiz"
                                onClick={StartQuiz}
                            >
                                START QUIZ
                            </button>
                        </div>
                    </div>
                ) : null}

                {quizState.quizStage === QUIZSTAGES.STARTED ? (
                    <div className="flex flex-col items-center w-11/12 px-6 py-4 bg-black bg-opacity-60 sm:mt-24 sm:w-9/12">
                        <div className="max-w-full p-4 mb-6 md:max-w-prose">
                            <q className="text-xl question">
                                {quizState.question}
                            </q>
                        </div>
                        <div className="flex flex-col justify-between w-full max-w-full m-2 overflow-x-hidden sm:flex-row answers flex-nowrap min-w-min">
                            {renderAnswerButtons()}
                        </div>
                    </div>
                ) : null}

                {quizState.quizStage === QUIZSTAGES.ANSWERED ? (
                    <div className="flex flex-col items-center w-11/12 px-6 py-4 bg-black bg-opacity-60 sm:mt-24 sm:mx-12 sm:w-9/12">
                        <div className="p-4 mb-6 max-w-none md:max-w-prose">
                            <h2>
                                <span className="block mb-4 text-xl text-center true-false">
                                    {quizState.answeredCorrect
                                        ? 'Correct'
                                        : 'Incorrect'}
                                    !
                                </span>
                                <q className="text-xl results-quote">
                                    {quizState.question}
                                </q>
                            </h2>
                        </div>
                        <h2 className="pb-4 text-2xl results-author">
                            {quizState.answer}
                        </h2>
                        <button className="" onClick={StartQuiz}>
                            Try Another...
                        </button>
                    </div>
                ) : null}

                <SuggestionCard />
            </section>
        </div>
    );
};

export default Quiz;
