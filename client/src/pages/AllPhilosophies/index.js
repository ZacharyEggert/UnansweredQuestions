import React from 'react';

import { useGlobalContext } from '../../util/GlobalState';

import PhilosophyCard from '../../components/PhilosophyCard';
import SuggestionCard from '../../components/SuggestionCard';

const AllPhilosophies = () => {
    // eslint-disable-next-line no-unused-vars
    const [globalState, dispatch] = useGlobalContext();



    return (
        <div className="flex flex-col items-center justify-center min-w-full min-h-full text-white bg-fixed bg-cover bg-driedflowers bg-fade">
            <h1 className=" text-white my-3">Philosophies</h1>
            <div className="py-14"></div>
            <div className="box">
                {/**<!-- cards for each philosophy  -->*/}
                {Object.values(globalState.philosophies).map((philosophy) => {
                    return <PhilosophyCard philosophy={philosophy} key={philosophy.id} />;
                })}

            </div>
            <SuggestionCard />
        </div>
    );
};

export default AllPhilosophies;
