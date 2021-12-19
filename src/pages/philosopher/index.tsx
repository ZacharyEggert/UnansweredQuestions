import Card from '@components/Card';
import periods from '@lib/periods';
import testPhilosophers from '@lib/testPhilosophers';
import { Philosopher } from '@lib/types';
import React from 'react';

interface Props {}

const Philosophers: React.FC<Props> = ({}) => {
    const [philosophers /**setPhilosophers*/] =
        React.useState<Philosopher[]>(testPhilosophers);

    return (
        <main className='bg-driedflowers w-full min-h-screen bg-cover grid place-items-center gap-4 bg-fixed bg-fade pt-20'>
            {periods.map((period) => {
                return (
                    <section
                        className='bg-stone-950 bg-opacity-60 w-11/12 sm:w-10/12 xl:w-3/4 min-h-[6rem]'
                        key={period}>
                        <h2 className='text-center text-3xl py-8'>
                            {period} Philosophers
                        </h2>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                            {philosophers
                                .filter(
                                    (philosopher) =>
                                        philosopher.period === period
                                )
                                .map((philosopher) => {
                                    return (
                                        <Card
                                            key={philosopher.id}
                                            image={philosopher.image}
                                            name={philosopher.name}
                                            url={`/philosopher/${philosopher.id}`}
                                        />
                                    );
                                })}
                        </div>
                    </section>
                );
            })}
        </main>
    );
};

export default Philosophers;
