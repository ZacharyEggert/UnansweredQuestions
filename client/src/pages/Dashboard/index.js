import React, { useEffect, useState } from 'react';

import DashboardScreen from '../../components/DashboardScreen';
import ReviewScreen from '../../components/ReviewScreen';
import SuggestionScreen from '../../components/SuggestionScreen';
import { getSuggestions } from '../../util/API';

const Dashboard = ({user}) => {

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

    const handleCategory = (e) => {
        e.preventDefault();
        // console.log(e.target);
        if(e.target.attributes.name.nodeValue !== dashboardState.screen) {
            setDashboardState({
                ...dashboardState,
                screen: e.target.attributes.name.nodeValue,
                isLoading: true,
            });
        }
    }

    useEffect(() => {
        if(dashboardState.submitError) {
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
        if(dashboardState.screen === 'suggestions'){
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dashboardState.screen]);

    return (
        <div className="h-screen min-w-full min-h-full text-white bg-fixed bg-cover bg-wheat bg-fade">
            <div className="py-14"></div>

            <div className="mx-auto mb-10 w-11/12 min-h-[full]">
                <div className='flex flex-col md:flex-row min-h-[calc(100vh-10rem)]'>
                    <div className='flex-1 bg-[rgba(0,0,0,0.6)] min-h-full flex flex-col mx-2 p-2 my-2 md:my-0'>
                        <span className='w-10/12 py-2 mx-auto text-center button' name='suggestions' onClick={handleCategory}>
                            Suggestions
                        </span>
                    </div>
                    <div className='flex flex-col flex-1 flex-grow-[2] flex-shrink-[2] min-h-full bg-[rgba(0,0,0,0.6)] mx-2 p-2 my-2 md:my-0'>
                        {
                            dashboardState.isLoading ?
                            <div className='flex items-center justify-center w-full h-full'><span className='text-3xl'>Loading...</span></div>:
                            null
                        }{
                            !dashboardState.isLoading && dashboardState.screen === 'dashboard' ?
                            <DashboardScreen state={{dashboardState, setDashboardState}}/>:
                            null
                        }{   
                            !dashboardState.isLoading && dashboardState.screen === 'suggestions' ?
                            <SuggestionScreen state={{dashboardState, setDashboardState, suggestions, setSuggestions}}/>:
                            null
                        }{   
                            !dashboardState.isLoading && dashboardState.screen === 'review' ?
                            <ReviewScreen state={{dashboardState, setDashboardState, suggestions, setSuggestions}} user={user}/>:
                            null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
