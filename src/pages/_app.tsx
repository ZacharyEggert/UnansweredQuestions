import type { AppProps } from 'next/app';
import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <div className='flex flex-col w-full min-h-screen bg-stone-900 text-stone-100'>
            <header className='flex-0'></header>
            <div className='flex-1'>
                <Component {...pageProps} />
            </div>
            <footer className='flex-0'></footer>
        </div>
    );
};

export default MyApp;
