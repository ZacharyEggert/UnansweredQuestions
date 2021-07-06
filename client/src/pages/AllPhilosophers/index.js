import React from 'react';

import { useGlobalContext } from '../../util/GlobalState';

import PhilosopherCard from '../../components/PhilosopherCard';
import SuggestionCard from '../../components/SuggestionCard';

const AllPhilosophers = () => {
    // eslint-disable-next-line no-unused-vars
    const [globalState, dispatch] = useGlobalContext();

    const PHILOSOPHER_PERIODS = [
        'Ancient',
        'Medieval',
        'Modern',
        'Contemporary',
    ];

    return (
        <div className='min-h-full min-w-full bg-fixed bg-cover bg-driedflowers bg-fade flex flex-col items-center text-white'>
            <div className="py-14"></div>
            {PHILOSOPHER_PERIODS ? PHILOSOPHER_PERIODS.map((period) => {
                return (
                    <div className="philosophy-times w-11/12 justify-self-center" key={period}>
                        <h1 className="profile-h1  opacity-80">{period} Philosophers</h1>
                        <div className="box">
                            {/**<!-- cards for each philosopher  -->*/}

                            {globalState.philosophers?.length ? globalState.philosophers.map((philosopher) => {
                                if (philosopher.period === period) {
                                    return (
                                        <PhilosopherCard
                                            philosopher={philosopher}
                                            key={philosopher.id}
                                        />
                                    );
                                } else {
                                    return null;
                                }
                            }) : null}
                        </div>
                    </div>
                );
            }) : null}
            <div className="philosophy-times">
                <div className="py-8 bg-black bg-opacity-80 sm:m-14">
                    <SuggestionCard />
                </div>
            </div>
        </div>
    );
};

export default AllPhilosophers;
