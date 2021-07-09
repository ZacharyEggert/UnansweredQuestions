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
                          <div className="flex-initial w-full " key={period}>
                              <h1 className="mx-auto sm:w-9/12 text-5xl mt-4 py-2 mb-0 text-center bg-[rgba(0,0,0,0.6)] ">
                                  {period} Philosophers
                              </h1>
                              <div className="box">
                                  {/**<!-- cards for each philosopher  -->*/}

                                  {globalState.philosophers?.length
                                      ? globalState.philosophers.map(
                                            (philosopher) => {
                                                if (
                                                    philosopher.period ===
                                                    period
                                                ) {
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
                                            }
                                        )
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
