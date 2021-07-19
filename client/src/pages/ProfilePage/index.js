import React from 'react';
import { useGlobalContext } from '../../util/GlobalState';
import SuggestionCard from '../../components/SuggestionCard';

const ProfilePage = () => {
    const [globalState, dispatch] = useGlobalContext();
    const { currentUser } = globalState;

    return (
        <>
            <div className="flex flex-col items-center justify-center min-w-full min-h-full text-white bg-fixed bg-cover bg-whiteflowers-3 bg-fade">
                <div>
                    <h1>Profile Page</h1>
                    <h1>{currentUser?.user?.user_name || 'hello'}</h1>

                    <div>
                        <div>
                            <ul>
                                <li>
                                    <span>Favorite Quote:</span> Your moon is
                                    too small to block out my sun.
                                </li>
                                <li>
                                    <span>Favorite Philosopher:</span> Marcus
                                    Aurillius
                                </li>
                                <li>
                                    <span>Favorite Book:</span> Fear and
                                    Loathing in Las Vegas
                                </li>
                            </ul>
                        </div>
                        <div></div>
                        <div>
                            <h2>Bio</h2>
                            <p>
                                this is a placeholder bio and ive sure have a
                                lot to say in here... well actually that was all
                                i have to say{' '}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <SuggestionCard />
        </>
    );
};

export default ProfilePage;
