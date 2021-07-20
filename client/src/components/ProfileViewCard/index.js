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
        'https://resizing.flixster.com/gFjkV0hWWFFhN2qrf_P_j-1-KSQ=/506x652/v2/https://flxt.tmsimg.com/v9/AllPhotos/258/258_v9_bb.jpg',
        'https://external-preview.redd.it/clDj4CIvEY4fuqJAFlNCoTbBWnSRAtCxsQRf9BFU-Dk.jpg?auto=webp&s=f937e50a4e4737d6b78841aea4ce8572109be8a6',
        'https://1.bp.blogspot.com/-Mq641fjnRTM/X_aMsHoBazI/AAAAAAAD9JA/Ycb-173ugcsoTEkl5h5kQz_rYVxoEiewQCLcBGAsYHQ/s0/young-nicolas-cage-9.jpg',
        'https://1.bp.blogspot.com/-jPKUi2-EcDo/X_aMovASIKI/AAAAAAAD9H8/UmZXX2FYFzUbJirlX3Lsb3mCAxXzQ9csgCLcBGAsYHQ/s0/young-nicolas-cage-1.jpg',
        'https://m.media-amazon.com/images/I/713h514NqbL._AC_SX466_.jpg',
        'https://i2-prod.mirror.co.uk/incoming/article20087531.ece/ALTERNATES/s615b/1_SHOWBIZ-Matchstick-2.jpg',
        'https://m.media-amazon.com/images/I/41SsBOumMfL._AC_.jpg',
        'https://myvideogamelist.com/images/userpics/9155854e5d91M3o.jpg',
    ];
    const randomPic = pics[Math.floor(Math.random() * pics.length)];

    return (
        <div className="flex flex-col">
            <div className="flex flex-col md:flex-row justify-center align-middle p-6 bg-[rgba(255,255,255,0.2)] min-h-[20rem] text-white">
                <div className="md:ml-20">
                    <img
                        src={randomPic}
                        alt="PlaceCage"
                        className="rounded max-w-[200px] h-[300px]"
                    ></img>
                </div>
                <div className="=min-w-max align-middle md:pl-12 md:w-8/12">
                    <h2 className="text-center md:text-left pt-4 md:pt-0 pb-4 text-2xl text-white underline">
                        Bio
                    </h2>
                    <ul className="sm:w-10/12">
                        <li className="pb-4">
                            {state['bio'] ||
                                'This is a placeholder bio and ive sure have a lot to say in here... well actually that was all i have to say'}
                        </li>
                        <li className="pb-4 flex flex-col">
                            <span className="underline">Favorite Quote:</span>
                            <span>
                                "
                                {state['favQuote'] ||
                                    'Your moon is too small to block out my sun.'}
                                "
                            </span>
                        </li>
                        <li className="pb-4 flex flex-col">
                            <span className="underline">
                                Favorite Philosopher:
                            </span>{' '}
                            <span>
                                {state['favPhilosopher'] || 'Marcus Aurillius'}
                            </span>
                        </li>
                        <li className="pb-4 flex flex-col">
                            <span className="underline">Favorite Book:</span>{' '}
                            <span>
                                {state['favBook'] ||
                                    'Fear and Loathing in Las Vegas'}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-end mt-4">
                <button
                    onClick={handleEditView}
                    className="ml-auto items-center md:w-1/12 p-1 text-white bg-[#FFFFFF10] hover:bg-[#FFFFFF20] border-2 border-white border-solid whitespace-nowrap"
                >
                    Edit
                </button>
            </div>
        </div>
    );
};

export default ProfileView;
