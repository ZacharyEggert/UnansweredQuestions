import Starfield from '@components/Starfield';

export default function Home() {
    return (
        <main className='w-full min-h-screen relative'>
            <section className='static top-0 bg-radial-glow min-h-screen w-full'>
                <Starfield />
            </section>
        </main>
    );
}
