import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../../util/GlobalState';
import SuggestionCard from '../../components/SuggestionCard';
import ProfileView from '../../components/ProfileViewCard';
import EditView from '../../components/ProfileEditCard';
import { getProfileInfo } from '../../util/API';

const ProfilePage = () => {
    // eslint-disable-next-line no-unused-vars
    const [globalState, dispatch] = useGlobalContext();
    const { currentUser, isLoggedIn } = globalState;

    const initialState = {
        bio: '',
        favPhilosopher: '',
        favBook: '',
        favQuote: '',
        view: 'ProfileView',
    };

    const [state, setState] = useState(initialState);

    useEffect(() => {
        getProfileInfo(currentUser?.user?.id)
            .then((response) => {
                if (response.status < 300) {
                    console.log(response.data);
                    setState({ ...state, ...response.data });
                }
            })
            .catch((err) => {
                console.error(err);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className="flex flex-col items-center justify-center min-w-full min-h-full text-white bg-fixed bg-cover bg-whiteflowers-3 bg-fade">
                <div className="m-4 bg-black md:m-14 p-7 bg-opacity-60">
                    <h1 className="flex justify-center align-middle p-8 text-4xl mb-6 border-b-white border-b-2">
                        {currentUser?.user?.user_name} Profile
                    </h1>
                    {state.view === 'ProfileView' ? (
                        <ProfileView setState={setState} state={state} />
                    ) : null}
                    {state.view === 'EditView' ? (
                        <EditView setState={setState} state={state} />
                    ) : null}
                </div>
            </div>
            <SuggestionCard />
        </>
    );
};

export default ProfilePage;
