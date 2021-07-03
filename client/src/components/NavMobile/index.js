import React from 'react'
import {Link} from 'react-router-dom'

import { useGlobalContext } from '../../util/GlobalState';


const NavMobile = () => {

    // eslint-disable-next-line no-unused-vars
    const [globalState, dispatch] = useGlobalContext();

    const {isLoggedIn} = globalState;

    return (
        <nav id='menuToggle' className='relative z-10 block mr-4 select-none sm:hidden top-4 left-4'>
            <div id='menuToggle'>
                <input type='checkbox' className='w-10 h-8 absolute top-[-7px] left-[-5px] cursor-pointer opacity-0 z-10'/>
                <span></span>
                <span></span>
                <span></span>
                <ul id='menu' className='rounded-br-full absolute w-[300px] mt-[-100px] ml-[-60px] p-[50]'>
                    <li className='mobile-nav'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='mobile-nav'>
                        <Link to='/philosophers'>Famous Philosophers</Link>
                    </li>
                    <li className='mobile-nav'>
                        <Link to='/quiz'>Quiz</Link>
                    </li>
                    <li className='mobile-nav'>
                        <Link to='/qotd'>Daily<br />Question</Link>
                    </li>
                    <li className='mobile-nav'>
                        <Link to='/polls'>Polls</Link>
                    </li>
                    <li className='mobile-nav'>
                        <Link to='/chatroom'>LiveChat<br />&nbsp;<br /></Link>
                    </li>
                    {isLoggedIn?
                        (
                            <li className='mobile-nav'>
                                <Link to='/api/user/logout'>Logout</Link>
                            </li>                        
                        ) :
                        (
                            <li className='mobile-nav'>
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