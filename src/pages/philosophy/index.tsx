import Card from '@components/Card';
import testPhilosophies from '@lib/testPhilosophies';
import { Philosophy } from '@lib/types';
import React from 'react';

interface Props {}

const Philosophies: React.FC<Props> = ({}) => {
    const [philosophies /**setPhilosophies*/] =
        React.useState<Philosophy[]>(testPhilosophies);

    return (
        <main className='bg-driedflowers w-full min-h-screen bg-cover grid place-items-center gap-4 bg-fixed bg-fade pt-20'>
            <section className='bg-stone-950 bg-opacity-60 w-11/12 sm:w-10/12 xl:w-3/4 min-h-[6rem]'>
                {' '}
                <h2 className='text-center text-3xl py-8'>Philosophies</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {philosophies.map((philosophy) => {
                        return (
                            <Card
                                key={philosophy.id}
                                image={philosophy.image}
                                name={philosophy.name}
                                url={`/philosophy/${philosophy.id}`}
                            />
                        );
                    })}
                </div>
            </section>
        </main>
    );
};

export default Philosophies;
