import Starfield from '@components/Starfield';
import OwlCarousel from '@components/OwlCarousel';
import * as WordRotation from '@styles/WordRotation.module.css';

export default function Home() {
    return (
        <main className='w-full min-h-screen relative'>
            <section className='relative top-0 bg-radial-glow min-h-screen w-full grid place-items-center'>
                <Starfield className='absolute w-full h-full overflow-hidden' />
                <div className='text-center grid grid-cols-1 gap-20'>
                    <h1 className='text-6xl'>What is Philosophy?</h1>
                    <p className='text-3xl transition-all'>
                        Philosophy is a way of
                        <br className='sm:hidden' /> thinking
                        <br className='hidden sm:inline-block xl:hidden' />{' '}
                        about certain
                        <br className='sm:hidden' /> subjects such as{' '}
                        <span
                            className={`will-change-contents group ${WordRotation.wordRotation}`}>
                            <span className=''>ethics</span>
                            <span className=''>thought</span>
                            <span className=''>existence</span>
                            <span className=''>time</span>
                            <span className=''>meaning</span>
                            <span className=''>value</span>
                        </span>
                        <span className='opacity-0 not-sr-only'>meanin</span>
                    </p>
                </div>
            </section>
            <section className='min-h-screen w-full bg-stone-800'>
                <OwlCarousel />
            </section>
        </main>
    );
}
