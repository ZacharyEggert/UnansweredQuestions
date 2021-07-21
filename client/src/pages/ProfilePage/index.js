import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../../util/GlobalState';
import SuggestionCard from '../../components/SuggestionCard';
import ProfileView from '../../components/ProfileViewCard';
import EditView from '../../components/ProfileEditCard';
import { getProfileInfo } from '../../util/API';

const ProfilePage = () => {
    // eslint-disable-next-line no-unused-vars
    const [globalState, dispatch] = useGlobalContext();
    // eslint-disable-next-line no-unused-vars
    const { currentUser } = globalState;

    const initialState = {
        bio: '',
        favPhilosopher: '',
        favBook: '',
        favQuote: '',
        view: 'ProfileView',
    };

    const [state, setState] = useState(initialState);

    const loadProfile = (currentUser) => {
        // console.log(currentUser);
        getProfileInfo({ user_id: currentUser?.user?.id })
            .then((response) => {
                if (response.status < 300) {
                    // console.log(response.data);
                    setState({ ...state, ...response.data });
                }
            })
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect(() => {
        loadProfile(currentUser);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className="flex flex-col items-center justify-center min-w-full min-h-full text-white bg-fixed bg-cover bg-whiteflowers-3 bg-fade">
                <div className="py-6"></div>
                <div className="w-9/12 m-4 bg-black md:m-14 p-7 bg-opacity-60">
                    <h1 className="flex justify-center p-8 mb-6 text-4xl align-middle border-b-2 border-b-white">
                        {currentUser?.user?.user_name}'s Profile
                    </h1>
                    {state.view === 'ProfileView' ? (
                        <ProfileView setState={setState} state={state} />
                    ) : null}
                    {state.view === 'EditView' ? (
                        <EditView setState={setState} state={state} user={currentUser?.user} />
                    ) : null}
                </div>
                <SuggestionCard />
            </div>
        </>
    );
};

export default ProfilePage;
