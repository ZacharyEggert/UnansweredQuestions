import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useGlobalContext } from '../../util/GlobalState';

const NavMobile = () => {
    // eslint-disable-next-line no-unused-vars
    const [globalState, dispatch] = useGlobalContext();
    const [navState, setNavState] = useState({
        expanded: false,
        hasNotExpanded: true,
    });

    const handleMenuOpen = (event) => {
        event.target.checked === true
            ? setNavState({ expanded: event.target.checked })
            : setNavState({ expanded: event.target.checked });
    };

    const { isLoggedIn } = globalState;

    return (
        <nav
            id="menuToggle"
            className="relative z-10 block mr-4 select-none sm:hidden top-4 left-4"
        >
            <div id="menuToggle">
                <input
                    type="checkbox"
                    checked={navState.expanded}
                    onChange={handleMenuOpen}
                    className="absolute z-30 w-12 h-12 cursor-pointer top-0.5 left-1 opacity-0"
                />
                {navState.expanded && (
                    <div
                        onClick={() => {
                            setNavState({ expanded: false });
                        }}
                        className="z-[5] w-screen h-screen fixed top-0 left-0 overflow-hidden"
                    ></div>
                )}
                <ul
                    id="menu"
                    className={`flex flex-col justify-center bg-white rounded-br-full z-[10]`}
                >
                    <li className=" mobile-nav">
                        <Link to="/">Home</Link>
                    </li>
                    <li className=" mobile-nav">
                        <Link to="/philosophers">Famous Philosophers</Link>
                    </li>
                    <li className="mobile-nav">
                        <Link to="/quiz">Quiz</Link>
                    </li>
                    <li className="mobile-nav">
                        <Link to="/qotd">
                            Daily
                            <br />
                            Question
                        </Link>
                    </li>
                    <li className="mobile-nav">
                        <Link to="/polls">Polls</Link>
                    </li>
                    <li className="mobile-nav">
                        <Link to="/news">News</Link>
                    </li>
                    <li className="mobile-nav">
                        <Link to="/chatroom">
                            LiveChat
                            <br />
                        </Link>
                    </li>
                    {isLoggedIn ? (
                        <li className="mobile-nav">
                            <Link to="/api/user/logout">Logout</Link>
                        </li>
                    ) : (
                        <li className="mobile-nav">
                            <Link to="/login">
                                Login
                                <br />
                            </Link>
                        </li>
                    )}
                </ul>
                <div className="inline-block p-3 pt-4 bg-black rounded-full bg-opacity-60 click-none">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default NavMobile;
