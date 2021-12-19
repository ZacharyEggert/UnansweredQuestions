import SuggestionForm from '@components/SuggestionForm';
import React from 'react';

interface Props {}

const Suggestions: React.FC<Props> = ({}) => {
    return (
        <main className='w-full min-h-screen bg-whiteflower bg-cover bg-fixed grid place-items-center bg-fade'>
            <div className='bg-stone-950 bg-opacity-60 w-11/12 sm:w-5/6 xl:w-1/2 xl:h-1/2 p-4 py-8 flex flex-col justify-between'>
                <h2 className='text-4xl text-center pb-4'>Suggestions</h2>
                <SuggestionForm className='mx-8 my-4 bg-stone-100 bg-opacity-30 flex-1' />
            </div>
        </main>
    );
};

export default Suggestions;
