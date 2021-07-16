import React from 'react';
import { Link } from 'react-router-dom';
import '../../pages/FrontPage/owl.carousel.css'

const OwlCarouselSlide = (props) => {
    const { quote, index } = props;


    // if (quoteText.length > 500) {
    //     setQuoteText(quoteText.substring(0, 495) + '...');
    // }

    return (
        <div
            className={`h-screen flex items-center justify-center owl-slide bg-cover opacity-80 bg-carousel-${
                (index % 3) + 1
            } bg-fade`}
        >
            {/* <!--owl-slide--> */}
            <div className="flex justify-center flex-column">
                <div className="h-[66%] my-auto">
                    <div className="flex flex-col mr-auto sm:w-9/12">
                        <div className="overflow-ellipsis overflow-hidden bg-[#222] bg-opacity-90 text-white w-9/12 mb-8 mx-auto p-8 capitalize">
                            <h2 className="text-2xl text-white font-cursive">
                                “{quote.quote.length>500?quote.quote.substring(0,495) + '...' : quote.quote}”
                            </h2>
                            <div className="mt-4">
                                &mdash; {quote.author}
                            </div>
                        </div>
                        <div className='flex flex-row-reverse w-9/12 mx-auto'>
                            <Link
                                className=" button bg-[#222] bg-opacity-90 hover:bg-[#111] hover:text-white hover:bg-opacity-90"
                                to="/quiz"
                            >
                                Test Your Knowledge
                            </Link>
                            <div className='dots owl-dots'></div>

                        </div>
                    </div>
                </div>
            </div>
            {/* <!--/owl-slide--> */}
        </div>
    );
};

export default OwlCarouselSlide;
