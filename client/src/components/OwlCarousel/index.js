import React from 'react';

import OwlCarouselSlide from '../OwlCarouselSlide';

import { useGlobalContext } from '../../util/GlobalState';

const OwlCarousel = () => {

    // eslint-disable-next-line no-unused-vars
    const [globalState, dispatch] = useGlobalContext();

    const {carouselQuotes} = globalState;


    return (
        <div class="owl-carousel owl-theme full-screen">
        {carouselQuotes.map(quote => <OwlCarouselSlide quote={quote} key={quote.id}/>)}
        </div>
    )
}


export default OwlCarousel;