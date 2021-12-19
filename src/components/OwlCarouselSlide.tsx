import React from 'react';
import Link from 'next/link';

interface Props {
    quote: {
        id: number;
        quote: string;
        author: string;
    };
    index: number;
}

const OwlCarouselSlide: React.FC<Props> = (props) => {
    const { quote, index } = props;

    return (
        <div
            className={`h-screen grid place-items-center bg-cover opacity-80 bg-carousel-${
                (index % 3) + 1
            } bg-fade`}>
            {/* <!--owl-slide--> */}
            <div className='h-2/3'>
                <div className='flex flex-end flex-col mr-auto sm:w-9/12'>
                    <div className='overflow-ellipsis overflow-hidden bg-stone-900 bg-opacity-90 text-white w-9/12 mb-8 mx-auto p-8 capitalize'>
                        <h2 className='text-lg text-white sm:text-xl md:text-2xl font-cursive'>
                            “
                            {quote.quote.length > 350
                                ? quote.quote.substring(0, 346) + '...'
                                : quote.quote}
                            ”
                        </h2>
                        <div className='mt-4'>&mdash; {quote.author}</div>
                    </div>
                    <div className='flex flex-row-reverse w-9/12 mx-auto'>
                        <Link as={'a'} href='/quiz'>
                            <button className='py-2 px-3 text-lg rounded-md bg-stone-800 bg-opacity-90 hover:bg-stone-900 hover:text-white hover:bg-opacity-90'>
                                Test Your Knowledge
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* <!--/owl-slide--> */}
        </div>
    );
};

export default OwlCarouselSlide;
