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
        <main className="homepage">
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            {/* <!-- hero content - what is philosophy  --> */}
            <section className="hero" style={{background:'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)'}}>
                <header className="hero-container">
                <h1>What is Philosophy?</h1>
                <div className="rw-wrapper">
                    <h2 className="text-center whitespace-normal rw-sentence lg:whitespace-nowrap">
                    <span>Philosophy is a way of thinking about certain subjects such as<div className="rw-words rw-words-1">
                        <span>ethics</span>
                        <span>thought</span>
                        <span>existence</span>
                        <span>time</span>
                        <span>meaning</span>
                        <span>value</span>
                    </div></span>
                    
                    </h2>
                </div>
                </header>
            </section>

        </main>

{/* <!-- We are going to put these qoutes in courousel  --> */}

        <OwlCarousel />
    </div>
    )

}


export default FrontPage