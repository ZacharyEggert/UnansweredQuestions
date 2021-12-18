import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../util/GlobalState';

const PollCard = (props) => {
    const { poll } = props;

    // eslint-disable-next-line no-unused-vars
    const [globalState, dispatch] = useGlobalContext();

    const percent = (num1, num2) => {
        const res = Math.round((1000 * num1) / (num1 + num2)) / 10;
        return res ? res : 0;
    };

    const [state, setState] = useState({
        clicked: false,
        yesPercent: percent(poll.vote_yes, poll.vote_no),
        noPercent: percent(poll.vote_no, poll.vote_yes),
    });

    const clickHandler = (yes) => {
        // console.log(yes);
        if (yes) {
            // console.debug('yes');
            dispatch({ type: 'POLL_VOTE', data: { poll, yes: true } });
        } else {
            // console.debug('no');
            dispatch({ type: 'POLL_VOTE', data: { poll, yes: false } });
        }

        setState({ ...state, clicked: true });
    };

    useEffect(() => {
        setState({
            ...state,
            yesPercent: percent(poll.vote_yes, poll.vote_no),
            noPercent: percent(poll.vote_no, poll.vote_yes),
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [globalState.polls]);

    return (
        <>
            <div className="flex flex-row flex-wrap items-center content-between justify-center flex-auto flex-shrink-0 w-full max-w-full p-4 my-3 bg-black md:w-5/12 md:mx-3 bg-opacity-60">
                <div className="flex-initial w-11/12" id="poll-question">
                    <h2 className="text-3xl text-center">{poll.pollName}</h2>
                    <p className="pt-4 text-justify">{poll.pollText}</p>
                </div>
                {!state.clicked ? (
                    <div
                        className="flex flex-row flex-initial w-11/12 h-12 my-4"
                        id="poll-response"
                    >
                        <div className="flex items-center content-center flex-1 text-center align-middle bg-blue-600 yes-btn">
                            <p
                                className="flex-1"
                                onClick={() => {
                                    clickHandler(true);
                                }}
                            >
                                YES
                            </p>
                        </div>
                        <div className="flex items-center content-center flex-1 text-center align-middle bg-red-600 no-btn">
                            <p
                                className="flex-1"
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
                        className="flex-col flex-initial w-11/12 h-12 my-4"
                        id="poll-results"
                    >
                        <div className="flex content-start flex-1 w-full px-2 py-1">
                            <div
                                className="overflow-hidden bg-blue-600 whitespace-nowrap"
                                style={{
                                    width: state.yesPercent + '%',
                                }}
                            >
                                {state.yesPercent + `%`} YES
                            </div>
                        </div>
                        <div className="flex content-start flex-1 w-full px-2 py-1">
                            <div
                                className="overflow-hidden bg-red-600 whitespace-nowrap"
                                style={{
                                    width: state.noPercent + `%`,
                                }}
                            >
                                {state.noPercent + `%`} NO
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default PollCard;
