import React from 'react';
import * as starStyles from '@styles/Starfield.module.css';

export default function () {
    return (
        <>
            <div
                className={`absolute overflow-hidden ${starStyles.stars}`}></div>
            <div
                className={`absolute overflow-hidden ${starStyles.stars2}`}></div>
            <div
                className={`absolute overflow-hidden ${starStyles.stars3}`}></div>
        </>
    );
}
