import React, { useState } from 'react';
import { useGlobalContext } from '../../util/GlobalState';
import SuggestionCard from '../../components/SuggestionCard';
import ProfileView from '../../components/ProfileViewCard';
import EditView from '../../components/ProfileEditCard';

const ProfilePage = () => {
    // eslint-disable-next-line no-unused-vars
    const [globalState, dispatch] = useGlobalContext();
    const { currentUser } = globalState;

    const initialState = {
        bio: '',
        favPhilosopher: '',
        favBook: '',
        favQuote: '',
        view: 'ProfileView',
    };

    const [state, setState] = useState(initialState);

    return (
        <>
            <div className="flex flex-col items-center justify-center min-w-full min-h-full text-white bg-fixed bg-cover bg-whiteflowers-3 bg-fade">
                <div>
                    <h1>{currentUser?.user?.user_name} Profile</h1>
                    {state.view === 'ProfileView' ? (
                        <ProfileView setState={setState} />
                    ) : null}
                    {state.view === 'EditView' ? (
                        <EditView setState={setState} />
                    ) : null}
                </div>
            </div>
            <SuggestionCard />
        </>
    );
};

export default ProfilePage;
