import React, { useState } from 'react';
import SuggestionCard from '../../components/SuggestionCard';

const Quiz = () => {
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
                className="button"
                onClick={() => {
                    setQuizStageAnswered(true);
                }}
            >
                {quizState.answer}
            </button>
        );
        const incorrectButton_1 = (
            <button
                className="button"
                onClick={() => {
                    setQuizStageAnswered(false);
                }}
            >
                {quizState.falseAnswers[0]}
            </button>
        );
        const incorrectButton_2 = (
            <button
                className="button"
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

    const StartQuiz = () => {
        setQuizStageStarted();
    };

    const setQuizStageStarted = () => {
        setQuizState({ ...quizState, quizStage: QUIZSTAGES.STARTED });
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
            <section className="flex flex-col items-center justify-around w-full min-h-screen quiz-main">
                {quizState.quizStage === QUIZSTAGES.NOT_STARTED ? (
                    <div className="flex flex-col items-center px-6 py-4 bg-black bg-opacity-60 sm:mt-24 sm:w-9/12">
                        <h3 className="mb-2 text-3xl text-center">
                            Philosophy Quiz
                        </h3>
                        <p className="w-8/12 my-2 text-lg text-justify">
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
                    <div className="flex flex-col items-center px-6 py-4 bg-black bg-opacity-60 sm:mt-24 sm:w-9/12">
                        <div className="p-4 mb-6 max-w-none md:max-w-prose">
                            <q className="text-xl question">
                                {quizState.question}
                            </q>
                        </div>
                        <div className="flex flex-row justify-between w-full m-2 answers flex-nowrap min-w-min">
                            {renderAnswerButtons()}
                        </div>
                    </div>
                ) : null}

                {quizState.quizStage === QUIZSTAGES.ANSWERED ? (
                    <div className="flex flex-col items-center px-6 py-4 bg-black bg-opacity-60 sm:mt-24 sm:mx-12 sm:w-9/12">
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

                <div className="py-8 mx-auto my-2 bg-black sm:w-9/12 bg-opacity-60">
                    <SuggestionCard />
                </div>
            </section>
        </div>
    );
};

export default Quiz;
