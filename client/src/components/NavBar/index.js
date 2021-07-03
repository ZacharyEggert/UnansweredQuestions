import React from 'react';

import NavMobile from '../NavMobile';
import NavDesktop from '../NavDesktop';

const NavBar = () => {
    return (
        <header className='absolute top-0 left-0 z-50 w-full bg-black bg-opacity-60'>
            <NavDesktop />
            <NavMobile />
        </header>
    );
};

export default NavBar;
