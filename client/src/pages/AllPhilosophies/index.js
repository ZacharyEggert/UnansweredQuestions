import React from 'react';

import { useGlobalContext } from '../../util/GlobalState';

import PhilosophyCard from '../../components/PhilosophyCard';
import SuggestionCard from '../../components/SuggestionCard';

const AllPhilosophies = () => {
    // eslint-disable-next-line no-unused-vars
    const [globalState, dispatch] = useGlobalContext();



    return (
        <div className="flex flex-col items-center justify-center min-w-full min-h-full text-white bg-fixed bg-cover bg-driedflowers bg-fade">


            <div className="py-14"></div>
            <div className="flex-initial pb-10 mb-10 w-9/12 bg-[rgba(0,0,0,0.6)]">
                <h1 className="py-2 mx-auto my-8 text-5xl text-center sm:w-9/12 ">
                    Philosophies
                </h1>
                <div className="box flex justify-center flex-wrap">
                    {/**<!-- cards for each philosophy  -->*/}
                    {Object.values(globalState.philosophies).map((philosophy) => {
                        return <PhilosophyCard philosophy={philosophy} key={philosophy.id} />;
                    })}

                </div>
            </div>
            <SuggestionCard />
        </div>
    );
};

export default AllPhilosophies;
