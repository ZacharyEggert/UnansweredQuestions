import React, { useState } from 'react';
// import { useGlobalContext } from "../../util/GlobalState"

const PollCard = (props) => {
    const { poll } = props;

    const [state, setState] = useState({ clicked: false });

    const clickHandler = (yes) => {
        setState({ ...state, clicked: true });
    };

    const percent = (num1, num2) => {
        const res = Math.round((1000 * num1) / (num1 + num2)) / 10;
        return res ? res : 0;
    };

    return (
        <>
            <div class="flex-auto flex-shrink-0 w-full md:w-5/12 flex flex-row flex-wrap justify-center content-between my-3 md:mx-3 p-4 items-center bg-black bg-opacity-60 max-w-full">
                <div class="w-11/12 flex-initial" id="poll-question">
                    <h2 class="text-center text-3xl">{poll.pollName}</h2>
                    <p class="pt-4 text-justify">{poll.pollText}</p>
                </div>
                {!state.clicked ? (
                    <div
                        class="w-11/12 flex-initial flex-row h-12 my-4 flex"
                        id="poll-response"
                    >
                        <div class="flex-1 bg-blue-600 flex align-middle content-center items-center text-center yes-btn">
                            <p
                                class="flex-1"
                                onClick={() => {
                                    clickHandler(true);
                                }}
                            >
                                YES
                            </p>
                        </div>
                        <div class="flex-1 bg-red-600 flex align-middle content-center items-center text-center no-btn">
                            <p
                                class="flex-1"
                                onClick={() => {
                                    clickHandler(false);
                                }}
                            >
                                NO
                            </p>
                        </div>
                    </div>
                ) : (
                    <div
                        class="w-11/12 flex-initial flex-col h-12 my-4"
                        id="poll-results"
                    >
                        <div class="flex-1 flex content-start py-1 px-2 w-full">
                            <div
                                class="bg-blue-600 overflow-hidden whitespace-nowrap"
                                style={{
                                    width:
                                        percent(poll.vote_yes, poll.vote_no) +
                                        `%`,
                                }}
                            >
                                {percent(poll.vote_yes, poll.vote_no) + `%`} YES
                            </div>
                        </div>
                        <div class="flex-1 flex content-start py-1 px-2 w-full">
                            <div
                                class="bg-red-600 overflow-hidden whitespace-nowrap"
                                style={{
                                    width:
                                        percent(poll.vote_no, poll.vote_yes) +
                                        `%`,
                                }}
                            >
                                {percent(poll.vote_no, poll.vote_yes) + `%`} NO
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default PollCard;
