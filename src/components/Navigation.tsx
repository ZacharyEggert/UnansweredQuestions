import Link from 'next/link';
import React from 'react';

interface Props {}

const Navigation: React.FC<Props> = ({}) => {
    const [loggedIn, setLoggedIn] = React.useState(false);

    const [showMenu, setShowMenu] = React.useState(false);

    return (
        <>
            <nav className='hidden md:block w-full'>
                <div className='h-16 bg-stone-950 bg-opacity-60 flex flex-row justify-between items-center px-8 text-stone-200'>
                    <h1 className='text-lg hover:text-stone-50'>
                        <Link href='/'>UnansweredQuestions</Link>
                    </h1>
                    <ul className='flex flex-row justify-end flex-1 space-x-3'>
                        <li className='hover:text-stone-50'>
                            <Link href='/philosopher'>Philosophers</Link>
                        </li>
                        <li className='hover:text-stone-50'>
                            <Link href='/philosophy'>Philosophies</Link>
                        </li>
                        <li className='hover:text-stone-50'>
                            <Link href='/quiz'>Quiz</Link>
                        </li>
                        <li className='hover:text-stone-50'>
                            <Link href='/qotd'>Daily Question</Link>
                        </li>
                        <li className='hover:text-stone-50'>
                            <Link href='/blog'>Blogs</Link>
                        </li>
                        <li className='hover:text-stone-50'>
                            <Link href='/poll'>Polls</Link>
                        </li>
                        <li className='hover:text-stone-50'>
                            <Link href='/chat'>Live Chat</Link>
                        </li>
                        {!loggedIn ? (
                            <li className='hover:text-stone-50'>
                                <Link href='/login'>Login</Link>
                            </li>
                        ) : (
                            <li className='hover:text-stone-50'>
                                <Link href='/logout'>Logout</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
            <div className='block md:hidden group relative'>
                <input
                    type='checkbox'
                    checked={showMenu}
                    onChange={() => setShowMenu(!showMenu)}
                    className='peer absolute left-5 top-5 opacity-0 w-10 h-10'
                />
                <div className='peer-checked:hidden relative left-5 top-5 w-10 h-10 bg-black rounded-lg pointer-events-none menu-button'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav className=''></nav>
            </div>
        </>
    );
};

export default Navigation;
