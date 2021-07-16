import React from 'react';

import OwlCarousel from '../../components/OwlCarousel';
import './stars.css';
import './hero.css';
import { useGlobalContext } from '../../util/GlobalState';

const FrontPage = () => {
    // eslint-disable-next-line no-unused-vars
    const [globalState, dispatch] = useGlobalContext();

    return (
        <div>
            <main className="flex flex-col homepage">
                <div id="stars" className="absolute overflow-hidden"></div>
                <div id="stars2" className="absolute overflow-hidden"></div>
                <div id="stars3" className="absolute overflow-hidden"></div>
                {/* <!-- hero content - what is philosophy  --> */}
                <section
                    className="static top-0 hero"
                    style={{
                        background:
                            'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)',
                    }}
                >
                    <header className="hero-container">
                        <h1>What is Philosophy?</h1>
                        <div className="rw-wrapper">
                            <h2 className="text-center whitespace-normal rw-sentence xl:whitespace-nowrap">
                                <div className="-ml-0">
                                    <span className="text-[24px] sm:text-[28px] xl:text-[32px]">
                                        Philosophy is a way of{' '}<br className="sm:hidden" /> thinking{' '}
                                        <br className="hidden sm:inline-block xl:hidden" />
                                        <span className='sm:-ml-20 xl:-ml-0'>
                                        about certain subjects{' '}<br className="sm:hidden" />
                                        <span className='-ml-16 sm:-ml-0'>
                                        such as
                                        <div className="rw-words rw-words-1">
                                            <span className='bottom-[4px] sm:bottom-[2px] xl:bottom-[1px]'>ethics</span>
                                            <span className='bottom-[4px] sm:bottom-[2px] xl:bottom-[1px]'>thought</span>
                                            <span className='bottom-[4px] sm:bottom-[2px] xl:bottom-[1px]'>existence</span>
                                            <span className='bottom-[4px] sm:bottom-[2px] xl:bottom-[1px]'>time</span>
                                            <span className='bottom-[4px] sm:bottom-[2px] xl:bottom-[1px]'>meaning</span>
                                            <span className='bottom-[4px] sm:bottom-[2px] xl:bottom-[1px]'>value</span>
                                        </div>
                                        </span>
                                        </span>
                                    </span>
                                </div>
                            </h2>
                        </div>
                    </header>
                </section>
            </main>

            {/* <!-- We are going to put these qoutes in courousel  --> */}

            {globalState.carouselQuotes?
            (
                <OwlCarousel />
            ):(
                null
            )}
        </div>
    );
};

export default FrontPage;
