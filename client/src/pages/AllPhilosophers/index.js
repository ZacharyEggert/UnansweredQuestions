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
        <div className="flex flex-col items-center justify-center min-w-full min-h-full text-white bg-fixed bg-cover bg-driedflowers bg-fade">
            <div className="py-14"></div>
            {PHILOSOPHER_PERIODS
                ? PHILOSOPHER_PERIODS.map((period) => {
                      return (
                          <div className="flex-initial w-full bg-[rgba(0,0,0,0.6)]" key={period}>
                              <h1 className="py-2 mx-auto mt-4 mb-0 text-5xl text-center sm:w-9/12 ">
                                  {period} Philosophers
                              </h1>
                              <div className="box">
                                  {/**<!-- cards for each philosopher  -->*/}

                                  {globalState.philosophers
                                      ? Object.keys(
                                            globalState.philosophers
                                        ).map((key) => {
                                            const philosopher =
                                                globalState.philosophers[key];
                                            if (philosopher.period === period) {
                                                return (
                                                    <PhilosopherCard
                                                        philosopher={
                                                            philosopher
                                                        }
                                                        key={philosopher.id}
                                                    />
                                                );
                                            } else {
                                                return null;
                                            }
                                        })
                                      : null}
                              </div>
                          </div>
                      );
                  })
                : null}
            <SuggestionCard />
        </div>
    );
};

export default AllPhilosophers;
