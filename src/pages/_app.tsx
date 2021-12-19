import type { AppProps } from 'next/app';
import '../styles/global.css';
import '@styles/owl.carousel.css';
import Navigation from '@components/Navigation';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <div className='flex flex-col w-full min-h-screen bg-stone-950 text-stone-100'>
            <header className='absolute flex-0 z-10 w-full'>
                <Navigation />
            </header>
            <div className='flex-1'>
                <Component {...pageProps} />
            </div>
        </div>
    );
};

export default MyApp;
