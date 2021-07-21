import React from 'react';
import { useGlobalContext } from '../../util/GlobalState';
import PollCard from '../../components/PollCard';
import SuggestionCard from '../../components/SuggestionCard';

const Polls = () => {
    // eslint-disable-next-line no-unused-vars
    const [globalState, dispatch] = useGlobalContext();

    return (
        <main className="min-h-full pb-4 text-white bg-fixed bg-cover bg-blue-petals bg-opacity-80">
            <div className="py-14"></div>
            <div className="flex flex-row flex-wrap px-6">
                {globalState.polls.map((poll) => {
                    return (
                        <PollCard
                            poll={poll}
                            key={poll.id}
                            dispatch={dispatch}
                        />
                    );
                })}
            </div>
            <SuggestionCard />
        </main>
    );
};

export default Polls;
