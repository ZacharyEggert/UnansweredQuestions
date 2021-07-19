import React, { useState } from 'react';

const ProfileView = (props) => {
    const { setState, state } = props;

    const handleEditView = (event) => {
        setState({
            ...state,
            view: 'EditView',
        });
    };

    return (
        <div>
            <div>
                <ul>
                    <li>
                        <span>Favorite Quote:</span>{' '}
                        {state['favQuote'] ||
                            'Your moon is too small to block out my sun.'}
                    </li>
                    <li>
                        <span>Favorite Philosopher:</span>{' '}
                        {state['favPhilosopher'] || 'Marcus Aurillius'}
                    </li>
                    <li>
                        <span>Favorite Book:</span>{' '}
                        {state['favBook'] || 'Fear and Loathing in Las Vegas'}
                    </li>
                </ul>
            </div>
            <div>
                <h2>Bio</h2>
                <p>
                    {state['bio'] ||
                        'this is a placeholder bio and ive sure have a lot to say in here... well actually that was all i have to say'}
                </p>
            </div>
            <button onClick={handleEditView}>Edit</button>;
        </div>
    );
};

export default ProfileView;
