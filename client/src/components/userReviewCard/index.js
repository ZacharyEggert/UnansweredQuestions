import React from 'react';
import { adminUser, deleteUser } from '../../util/API';

const UserReviewCard = (props) => {
    const { user, refreshUsers } = props;

    const makeAdmin = () => {
        adminUser({id:user.id}).then((response) => {
            if(response.status < 300) {
                refreshUsers();
            }
        }).catch((error) => {
            console.error(error);
        });
    };

    const delUser = () => {
        deleteUser({id:user.id}).then((response) => {
            if(response.status < 300) {
                refreshUsers();
            }
        }).catch((error) => {
            console.error(error);
        });
    };

    return (
        <div className="py-1 px-1 bg-[#FFF2] my-1 ">
            <div className="flex flex-row ">
                <span className="w-2/12">{user.id}</span>
                <span className="w-4/12">{user.user_name}</span>
                <span className="w-4/12">{user.email}</span>
                <span
                    className="w-1/12 text-center pt-0 pb-0 text-base text-black bg-[#FFFA] hover:bg-[#FFFD] border-black button"
                    onClick={makeAdmin}
                >
                    {user.admin ? 'Y' : 'N'}
                </span>
                <span
                    className="w-1/12 pt-0 pb-0 text-base text-center text-black bg-red-700 border-black bg-opacity-80 hover:bg-red-600 hover:bg-opacity-80 button"
                    onClick={delUser}
                >
                    X
                </span>
            </div>
        </div>
    );
};

export default UserReviewCard;
