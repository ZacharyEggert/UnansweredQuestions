import React from 'react';
import * as starStyles from '@styles/Starfield.module.css';

const Starfield: React.FC<React.ComponentProps<'div'>> = (props) => {
    return (
        <div {...props}>
            <div
                className={`absolute overflow-hidden ${starStyles.stars}`}></div>
            <div
                className={`absolute overflow-hidden ${starStyles.stars2}`}></div>
            <div
                className={`absolute overflow-hidden ${starStyles.stars3}`}></div>
        </div>
    );
};

export default Starfield;
