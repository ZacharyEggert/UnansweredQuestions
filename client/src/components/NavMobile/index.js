import React from 'react'
import {Link} from 'react-router-dom'

import { useGlobalContext } from '../../util/GlobalState';


const NavMobile = () => {

    // eslint-disable-next-line no-unused-vars
    const [globalState, dispatch] = useGlobalContext();

    const {isLoggedIn} = globalState;

    return (
        <nav id='menuToggle'>
            <div id='menuToggle'>
                <input type='checkbox' />
                <span></span>
                <span></span>
                <span></span>
                <ul id='menu' class='rounded-br-full'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/philosophers'>Famous Philosophers</Link>
                    </li>
                    <li>
                        <Link to='/quiz'>Quiz</Link>
                    </li>
                    <li>
                        <Link to='/qotd'>Daily<br />Question</Link>
                    </li>
                    <li>
                        <Link to='/polls'>Polls</Link>
                    </li>
                    <li>
                        <Link to='/chatroom'>LiveChat<br />&nbsp;<br /></Link>
                    </li>
                    {isLoggedIn?
                        (
                            <li>
                                <Link to='/api/user/logout'>Logout</Link>
                            </li>                        
                        ) :
                        (
                            <li>
                                <Link to='/login'>Login<br />&nbsp;<br /></Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        </nav>
    )
}

export default NavMobile;