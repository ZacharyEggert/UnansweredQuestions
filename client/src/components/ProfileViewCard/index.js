import React from 'react';

const ProfileView = (props) => {
    const { setState, state } = props;

    const handleEditView = (event) => {
        setState({
            ...state,
            view: 'EditView',
        });
    };

    const pics = [
        'https://www.placecage.com/200/300',
        'https://www.placecage.com/g/200/300',
        'https://www.placecage.com/g/155/300',
        'https://www.placecage.com/c/140/200',
    ];
    const randomPic = pics[Math.floor(Math.random() * pics.length)];

    return (
        <div className="flex flex-col">
            <div className="flex flex-wrap justify-center align-middle px-6">
                <div className="flex-1 flex-shrink-0 ">
                    <img
                        src={randomPic}
                        alt="PlaceCage"
                        className="rounded ml-8 pl-4"
                    ></img>
                </div>
                <div className="flex-1 flex-shrink-0 sm:pl-20 pt-4 min-w-max align-middle">
                    <h2 className="pb-4 sm:pt-6 text-2xl text-white underline">
                        Bio
                    </h2>
                    <ul className="sm:w-10/12">
                        <li className="pb-4">
                            {state['bio'] ||
                                'This is a placeholder bio and ive sure have a lot to say in here... well actually that was all i have to say'}
                        </li>
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
                <button
                    onClick={handleEditView}
                    className="ml-auto items-center w-1/12 p-1 text-white bg-[#FFFFFF10] hover:bg-[#FFFFFF20] border-2 border-white border-solid whitespace-nowrap"
                >
                    Edit
                </button>
            </div>
        </div>
    );
};

export default ProfileView;
