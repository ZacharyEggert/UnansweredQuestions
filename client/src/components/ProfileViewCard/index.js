import React from 'react';

const ProfileView = (props) => {
    const { setState, state } = props;

    const handleEditView = (event) => {
        setState({
            ...state,
            view: 'EditView',
        });
    };

    return (
        <div className="flex flex-col">
            <div className="flex flex-wrap justify-center align-middle px-6">
                <div className="flex-1 flex-shrink-0 ">
                    <h2 className="p-4 text-2xl text-white underline">Bio</h2>
                    <p className="px-4 sm:w-10/12">
                        {state['bio'] ||
                            'This is a placeholder bio and ive sure have a lot to say in here... well actually that was all i have to say'}
                    </p>
                </div>
                <div className="flex-1 flex-shrink-0 sm:pl-20 pt-4 min-w-max align-middle">
                    <ul className="sm:w-10/12">
                        <li className="pb-4">
                            <span>Favorite Quote:</span>{' '}
                            {state['favQuote'] ||
                                'Your moon is too small to block out my sun.'}
                        </li>
                        <li className="pb-4">
                            <span>Favorite Philosopher:</span>{' '}
                            {state['favPhilosopher'] || 'Marcus Aurillius'}
                        </li>
                        <li>
                            <span>Favorite Book:</span>{' '}
                            {state['favBook'] ||
                                'Fear and Loathing in Las Vegas'}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-end mt-4">
                <button onClick={handleEditView} className="ml-auto">
                    Edit
                </button>
            </div>
        </div>
    );
};

export default ProfileView;
