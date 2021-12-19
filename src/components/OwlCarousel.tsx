import dynamic from 'next/dynamic';
import React from 'react';
const Carousel = dynamic(import('react-owl-carousel'), { ssr: false });

import OwlCarouselSlide from './OwlCarouselSlide';

const OwlCarousel: React.FC = () => {
    const carouselQuotes = [
        {
            id: 1,
            quote: 'The best way to predict the future is to create it.',
            author: 'Peter Drucker',
        },
        // {
        //     id: 2,
        //     quote: 'The best way to predict the future is to create it.',
        //     author: 'Peter Drucker',
        // },
        // {
        //     id: 3,
        //     quote: 'The best way to predict the future is to create it.',
        //     author: 'Peter Drucker',
        // },
    ];

    return (
        <div className='bg-carousel-1 bg-carousel-2 bg-carousel-3 bg-none'>
            <Carousel
                className={`owl-carousel`}
                loop
                items={1}
                dots
                dotsContainer='dots'
                autoplay
                autoplaySpeed={2000}
                autoplayTimeout={7500}>
                {carouselQuotes.map((quote, index) => (
                    <OwlCarouselSlide
                        quote={quote}
                        key={quote.id}
                        index={index}
                    />
                ))}
            </Carousel>
        </div>
    );
};

export default OwlCarousel;
