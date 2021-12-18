import Starfield from '@components/Starfield';

export default function Home() {
    return (
        <main className='w-full min-h-screen relative'>
            <section className='relative top-0 bg-radial-glow min-h-screen w-full'>
                <Starfield className='absolute w-full h-full overflow-hidden' />
            </section>
            <section className='min-h-screen w-full bg-butterfly-3'>
                {/** CAROUSEL */}
            </section>
        </main>
    );
}
