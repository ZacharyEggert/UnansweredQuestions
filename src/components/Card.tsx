import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
    image: string;
    name: string;
    url: string;
    target?: string;
}

const Card: FC<Props> = ({ image, name, url, target }) => {
    return (
        <div className='p-8'>
            <Link href={url} passHref>
                <div className='bg-stone-200 min-h-[18rem] h-full p-2 text-stone-700 hover:cursor-pointer pb-4'>
                    <div className='relative w-full aspect-square mx-auto'>
                        {/* image container */}
                        <Image
                            className='h-full w-full absolute object-cover'
                            src={image}
                            layout='fill'
                        />
                    </div>
                    <div className='pt-4'>
                        <h3 className='text-center text-xl font-semibold'>
                            {name}
                        </h3>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;
