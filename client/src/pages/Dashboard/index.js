import React, { useEffect, useState } from 'react';

import DashboardScreen from '../../components/DashboardScreen';
import ReviewScreen from '../../components/ReviewScreen';
import SuggestionScreen from '../../components/SuggestionScreen';
import { getAllUsers, getSuggestions } from '../../util/API';
import PrivilegeScreen from '../../components/PrivilegeScreen';

const Dashboard = ({ user }) => {
    const initialState = {
        screen: 'dashboard',
        isLoading: true,
        isAuthenticated: false,
        user: null,
        quoteChecked: true,
        questionChecked: true,
        philosopherChecked: true,
        activeReview: false,
        activeReviewId: null,
        activeReviewType: null,
    };

    const [dashboardState, setDashboardState] = useState(initialState);
    const [suggestions, setSuggestions] = useState([]);
    const [users, setUsers] = useState([]);

    const handleCategory = (e) => {
        e.preventDefault();
        // console.log(e.target);
        if (e.target.attributes.name.nodeValue !== dashboardState.screen) {
            setDashboardState({
                ...dashboardState,
                screen: e.target.attributes.name.nodeValue,
                isLoading: true,
            });
        }
    };

    const refreshUsers = () => {
        setDashboardState({...dashboardState, isLoading: true });
        getAllUsers().then(response => {
            return response.data;
        }).then(users => {
            setUsers(users);
            setDashboardState({...dashboardState, isLoading: false });
        }).catch(error => {
            console.error(error);
        });
    };


    useEffect(() => {
        if (dashboardState.submitError) {
            setTimeout(() => {
                setDashboardState({
                    ...dashboardState,
                    submitError: null,
                });
            }, 5000);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dashboardState.submitError]);

    useEffect(() => {
        if (dashboardState.screen === 'suggestions') {
            getSuggestions()
                .then((response) => {
                    setSuggestions(response.data);
                    setTimeout(() => {
                        setDashboardState({
                            ...dashboardState,
                            isLoading: false,
                        });
                    }, 20);
                })
                .catch((error) => {
                    console.log(error);
                });
        }

        if (dashboardState.screen === 'privileges') {
            getAllUsers()
                .then((response) => {
                    // console.debug(response);
                    setUsers(response.data);
                    setTimeout(() => {
                        setDashboardState({
                            ...dashboardState,
                            isLoading: false,
                        });
                    }, 20);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dashboardState.screen]);

    return (
        <div className="h-screen min-w-full min-h-full text-white bg-fixed bg-cover bg-wheat bg-fade">
            <div className="py-14"></div>

            <div className="mx-auto mb-10 w-11/12 min-h-[full]">
                <div className="flex flex-col md:flex-row min-h-[calc(100vh-10rem)]">
                    <div className="flex-1 bg-[rgba(0,0,0,0.6)] min-h-full flex flex-col mx-2 p-2 my-2 md:my-0">
                        <span
                            className="w-10/12 py-2 mx-auto my-2 text-center button"
                            name="suggestions"
                            onClick={handleCategory}
                        >
                            Suggestions
                        </span>
                        <span
                            className="w-10/12 py-2 mx-auto my-2 text-center button"
                            name="privileges"
                            onClick={handleCategory}
                        >
                            Privileges
                        </span>
                    </div>
                    <div className="flex flex-col flex-1 flex-grow-[2] flex-shrink-[2] min-h-full bg-[rgba(0,0,0,0.6)] mx-2 p-2 my-2 md:my-0">
                        {dashboardState.isLoading ? (
                            <div className="flex items-center justify-center w-full h-full">
                                <span className="text-3xl">Loading...</span>
                            </div>
                        ) : null}
                        {!dashboardState.isLoading &&
                        dashboardState.screen === 'dashboard' ? (
                            <DashboardScreen
                                state={{ dashboardState, setDashboardState }}
                            />
                        ) : null}
                        {!dashboardState.isLoading &&
                        dashboardState.screen === 'suggestions' ? (
                            <SuggestionScreen
                                state={{
                                    dashboardState,
                                    setDashboardState,
                                    suggestions,
                                    setSuggestions,
                                }}
                            />
                        ) : null}
                        {!dashboardState.isLoading &&
                        dashboardState.screen === 'privileges' ? (
                            <PrivilegeScreen
                                state={{ dashboardState, setDashboardState }}
                                users={users}
                                refreshUsers={refreshUsers}
                            />
                        ) : null}
                        {!dashboardState.isLoading &&
                        dashboardState.screen === 'review' ? (
                            <ReviewScreen
                                state={{
                                    dashboardState,
                                    setDashboardState,
                                    suggestions,
                                    setSuggestions,
                                }}
                                user={user}
                            />
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
