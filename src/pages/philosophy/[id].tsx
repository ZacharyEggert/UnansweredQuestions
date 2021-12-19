import { useRouter } from 'next/router';
import React from 'react';
import testPhilosophies from '@lib/testPhilosophies';
import * as decorationBinding from '@styles/binding.module.css';
import Image from 'next/image';

interface Props {}

const Philosopher: React.FC<Props> = ({}) => {
    const router = useRouter();
    const { id } = router.query as { id: string };

    const philosophy = testPhilosophies.filter(
        (phil) => phil.id === parseInt(id)
    )[0];

    return (
        <main className='bg-whiteflower-2 min-h-screen w-full bg-fixed bg-cover bg-fade grid place-items-center py-20'>
            {philosophy ? (
                <section className='bg-stone-950 bg-opacity-60 w-11/12 sm:w-10/12 xl:w-3/4 min-h-[6rem] py-8'>
                    <h2 className='text-center text-6xl font-bold'>
                        {philosophy.name}
                    </h2>
                    <div className='py-16'>
                        <iframe
                            className='mx-auto'
                            title='Youtube Video'
                            src={`https://www.youtube.com/embed/${philosophy.videoUri}`}
                            width={560}
                            height={315}
                            frameBorder={0}
                        />
                    </div>
                    <div className='grid place-items-center'>
                        <h3
                            className={`mt-4 text-2xl text-center sm:text-4xl ${decorationBinding.binding} w-full`}>
                            About
                        </h3>
                        <div className='w-48 h-56 xl:w-80 xl:h-96 relative my-8'>
                            <Image
                                className='absolute object-cover mx-auto top-0'
                                src={philosophy.image}
                                layout='fill'
                            />
                        </div>
                        <p className='max-w-2xl text-xl'>{philosophy.about}</p>
                    </div>
                    <div className='w-full'>
                        <div className='max-w-2xl mx-auto flex flex-row justify-end'>
                            <button className='text-xl px-3 py-2 border-[1px] mt-4 rounded-md'>
                                Learn More
                            </button>
                        </div>
                    </div>
                </section>
            ) : (
                <section className='bg-stone-950 bg-opacity-60 w-11/12 sm:w-10/12 xl:w-3/4 min-h-[6rem] pt-4'>
                    <h2 className='text-center text-6xl font-bold'>
                        Loading...
                    </h2>
                </section>
            )}
        </main>
    );
};

export default Philosopher;
