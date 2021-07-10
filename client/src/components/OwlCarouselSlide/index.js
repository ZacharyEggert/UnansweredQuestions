import React from 'react';
import { Link } from 'react-router-dom';

const OwlCarouselSlide = (props) => {
    const { quote, index } = props;

    return (
        <div
            className={`flex items-center justify-center owl-slide cover opacity-80 bg-carousel-${
                (index % 3) + 1
            } bg-fade`}
        >
            {/* <!--owl-slide--> */}
            <div className="container my-width">
                <div className="flex-row items-center">
                    <div className="static grid-cols-10 md:grid-cols-6">
                        <div className="owl-slide-text boxy">
                            <h2 className="owl-slide-animated owl-slide-title">
                                “{quote.quote}”
                            </h2>
                            <div className="mb-4 owl-slide-animated owl-slide-subtitle">
                                &mdash; {quote.author}
                            </div>
                            <Link
                                className="button owl-slide-animated owl-slide-cta"
                                to="/quiz"
                                role="button"
                            >
                                Test Your Knowledge
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--/owl-slide--> */}
        </div>
    );
};

export default OwlCarouselSlide;
