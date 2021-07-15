import React from 'react';
import { Link } from 'react-router-dom';

import { useGlobalContext } from '../../util/GlobalState';

const NavDesktop = () => {
    // eslint-disable-next-line no-unused-vars
    const [globalState, dispatch] = useGlobalContext();

    const { isLoggedIn } = globalState;

    return (
        <nav className="hidden sm:flex justify-between pb-0 h-[70px] items-center text-white">
            <p className="ml-8 text-lg">UnansweredQuestions</p>
            <ul
                className="flex flex-row items-center justify-end mr-8 text-white menu"
                id="myLinks"
            >
                <li className="desktop-nav">
                    <Link to="/">Home</Link>
                </li>
                <li className="desktop-nav">
                    <Link to="/philosophers">
                        Famous
                        <br />
                        Philosophers
                    </Link>
                </li>
                <li className="desktop-nav">
                    <Link to="/quiz">Quiz</Link>
                </li>
                <li className="desktop-nav">
                    <Link to="/qotd">
                        Daily
                        <br />
                        Question
                    </Link>
                </li>
                <li className="desktop-nav">
                    <Link to="/polls">Polls</Link>
                </li>
                 <li className="desktop-nav">
                    <Link to="/news">News</Link>
                </li>
                <li className="desktop-nav">
                    <Link to="/chatroom">LiveChat</Link>
                </li>
                {isLoggedIn ? (
                    <li className="desktop-nav">
                        <Link to="/api/user/logout">Logout</Link>
                    </li>
                ) : (
                    <li className="desktop-nav">
                        <Link to="/login">Login</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default NavDesktop;
