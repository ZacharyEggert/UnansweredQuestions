import React from 'react';

import OwlCarousel from '../../components/OwlCarousel';
import './stars.css';
import './owl.css';
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
                            <h2 className="text-center whitespace-normal rw-sentence lg:whitespace-nowrap">
                                <div className="-ml-16">
                                    <span className="ml-16 sm:ml-0">
                                        Philosophy is a way of thinking{' '}
                                        <br className="sm:hidden" />
                                        about certain subjects such as
                                        <div className="rw-words rw-words-1">
                                            <span>ethics</span>
                                            <span>thought</span>
                                            <span>existence</span>
                                            <span>time</span>
                                            <span>meaning</span>
                                            <span>value</span>
                                        </div>
                                    </span>
                                </div>
                            </h2>
                        </div>
                    </header>
                </section>
            </main>

            {/* <!-- We are going to put these qoutes in courousel  --> */}

            <OwlCarousel />
        </div>
    );
};

export default FrontPage;
