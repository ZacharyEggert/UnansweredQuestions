import React, { useState } from 'react';
import { useGlobalContext } from '../../util/GlobalState';
import SuggestionCard from '../../components/SuggestionCard';
import ProfileView from '../../components/ProfileViewCard';
import EditView from '../../components/ProfileEditCard';

const ProfilePage = () => {
    const [globalState] = useGlobalContext();
    const { currentUser } = globalState;

    return (
        <>
            <div className="flex flex-col items-center justify-center min-w-full min-h-full text-white bg-fixed bg-cover bg-whiteflowers-3 bg-fade">
                <div>
                    <h1>{currentUser?.user?.user_name} Profile</h1>

                    <ProfileView />
                    <button>Edit</button>
                    <EditView />
                </div>
            </div>
            <SuggestionCard />
        </>
    );
};

export default ProfilePage;
