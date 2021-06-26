import React from 'react';
import {Link} from 'react-router-dom';

import {useGlobalContext} from '../../util/GlobalState';

const NavDesktop = () => {

    // eslint-disable-next-line no-unused-vars
    const [globalState, dispatch] = useGlobalContext();

    const {isLoggedIn} = globalState;

    return (
        <nav class='main-nav'>
            <p class='header active'>UnansweredQuestions</p>
            <ul class='menu' id='myLinks'>
                <li class='text-sm md:text-base lg:text-xl'>
                    <Link to='/'>Home</Link>
                </li>
                <li class='text-sm md:text-base lg:text-xl'>
                    <Link to='/philosophers'>Famous<br />Philosophers</Link>
                </li>
                <li class='text-sm md:text-base lg:text-xl'>
                    <Link to='/quiz'>Quiz</Link>
                </li>
                <li class='text-sm md:text-base lg:text-xl'>
                    <Link to='/qotd'>Daily<br />Question</Link>
                </li>
                <li class='text-sm md:text-base lg:text-xl'>
                    <Link to='/polls'>Polls</Link>
                </li>
                <li class='text-sm md:text-base lg:text-xl'>
                    <Link to='/chatroom'>LiveChat</Link>
                </li>
                {isLoggedIn ?
                    (
                        <li class='text-sm md:text-base lg:text-xl'><Link to='/api/user/logout'>Logout</Link></li>
                    ) :
                    (
                        <li class='text-sm md:text-base lg:text-xl'><Link to='/login'>Login</Link></li>
                    )
                }
            </ul>
        </nav>
    )
}


export default NavDesktop;