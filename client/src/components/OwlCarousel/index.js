import React from 'react';
import Carousel from 'react-owl-carousel';

import OwlCarouselSlide from '../OwlCarouselSlide';

import { useGlobalContext } from '../../util/GlobalState';
import '../../pages/FrontPage/owl.carousel.css'

const OwlCarousel = () => {
    // eslint-disable-next-line no-unused-vars
    const [globalState, dispatch] = useGlobalContext();


    return (
        <div className="bg-carousel-1 bg-carousel-2 bg-carousel-3 bg-none">
            <Carousel className='owl-carousel' loop items={1} dots dotsContainer='dots' autoplay autoplaySpeed={2000} autoplayTimeout={7500}>
            {globalState.carouselQuotes.map((quote, index) => (
                <OwlCarouselSlide quote={quote} key={quote.id} index={index} />
            ))}
            </Carousel>
        </div>
    );
};

export default OwlCarousel;
