import React from 'react';
import UserReviewCard from '../userReviewCard';

const PrivilegeScreen = (props) => {
    // eslint-disable-next-line no-unused-vars
    const { dashboardState, setDashboardState, users, refreshUsers } = props;

    return (
        <div className="flex flex-col flex-1 h-full">
            <h1 className="flex-initial flex-shrink-0 text-xl text-center capitalize">
                Users
            </h1>
            <div>
                <div className="flex flex-col flex-1 h-full">
                    <div className="py-1 px-1 bg-[#FFF2] my-1 ">
                        <div className="flex flex-row">
                            <span className="w-2/12">User ID</span>
                            <span className="w-4/12">Username</span>
                            <span className="w-4/12">Email</span>
                            <span className="w-1/12 text-center">Admin?</span>
                            <span className="w-1/12 text-center">Delete</span>
                        </div>
                    </div>

                    {users?.map((user) => (
                        <UserReviewCard
                            user={user}
                            refreshUsers={refreshUsers}
                            key={user.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PrivilegeScreen;
