import React, { useState } from 'react'
import {Link} from 'react-router-dom'

import { useGlobalContext } from '../../util/GlobalState';


const NavMobile = () => {

    // eslint-disable-next-line no-unused-vars
    const [globalState, dispatch] = useGlobalContext();
    const [navState, setNavState] = useState({expanded:false, hasNotExpanded:true})

    const handleMenuOpen = (event) => {
        event.target.checked === true?
        setNavState({expanded:event.target.checked})
        : 
        setNavState({expanded:event.target.checked})
    }

    const {isLoggedIn} = globalState;

    return (
        <nav id='menuToggle' className='relative z-10 block mr-4 select-none sm:hidden top-4 left-4'>
            <div id='menuToggle'>
                <input type='checkbox' checked={navState.expanded} onChange={handleMenuOpen} className='w-10 h-8 absolute top-[-4px] left-[-3.75px] cursor-pointer opacity-0 z-10'/>
                {navState.expanded&&
                <div onClick={() => {setNavState({expanded:false})}} className='z-[5] w-screen h-screen fixed top-0 left-0 overflow-hidden'></div>}
                
                <ul id='menu' className={`absolute flex flex-col justify-center items-center h-96 w-96 bg-white rounded-full -top-36 -left-36 z-[6] transform ${navState.expanded?'scale-1 animate-grow-in': (navState.hasNotExpanded?'scale-0':'animate-shrink-out scale-0')}`}>
                    <li className=' mobile-nav'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className=' mobile-nav'>
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
                        <Link to='/chatroom'>LiveChat<br /></Link>
                    </li>
                    {isLoggedIn?
                        (
                            <li className='mobile-nav'>
                                <Link to='/api/user/logout'>Logout</Link>
                            </li>                        
                        ) :
                        (
                            <li className='mobile-nav'>
                                <Link to='/login'>Login<br /></Link>
                            </li>
                        )
                    }
                </ul>
                <span></span>
                <span></span>
                <span></span>
            </div>  
        </nav>
    )
}

export default NavMobile;