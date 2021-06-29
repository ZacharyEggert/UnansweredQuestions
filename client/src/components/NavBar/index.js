import React from 'react';

import NavMobile from '../NavMobile';
import NavDesktop from '../NavDesktop';

const NavBar = () => {
    return (
        <header class='nav-header navigation z-50 bg-black bg-opacity-60'>
            <NavDesktop />
            <NavMobile />
        </header>
    );
};

export default NavBar;
