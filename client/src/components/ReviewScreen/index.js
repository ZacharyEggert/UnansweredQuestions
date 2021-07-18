import React from 'react';
import API from '../../util/API';

const ReviewScreen = (props) => {
    const { state, user } = props;
    // eslint-disable-next-line no-unused-vars
    const { dashboardState, setDashboardState, suggestions, setSuggestions } =
        state;

    const { activeReviewType, activeReviewId, activeReview } = dashboardState;

    let activeSuggestion;

    if (activeReviewType === 'suggestion') {
        activeSuggestion = suggestions.find((s) => s.id === activeReviewId);
    }

    const approveSuggestionSubmit = (e) => {
        e.preventDefault();
        API.approveSuggestion({id: activeReviewId, user_id: user?.id || 0 })
            .then((response) => {
                console.log('Approve Suggestion Response: ', response);
                setDashboardState({
                    ...dashboardState,
                    activeReview: false,
                    activeReviewId: null,
                    activeReviewType: null,
                    screen: 'suggestions'
                });
            })
            .catch((error) => {
                console.error(error);
                setDashboardState({
                    ...dashboardState,
                    submitError: 'Error approving suggestion'
                });
            }
        );
    };

    const rejectSuggestionSubmit = (e) => {
        e.preventDefault();
        API.deleteSuggestion({id: activeReviewId})
            .then((response) => {
                console.log('Delete Suggestion Response: ', response);
                setDashboardState({
                    ...dashboardState,
                    activeReview: false,
                    activeReviewId: null,
                    activeReviewType: null,
                    screen: 'suggestions'
                });
            })
            .catch((error) => {
                console.error(error);
                setDashboardState({
                    ...dashboardState,
                    submitError: 'Error deleting suggestion'
                });
            }
        );
    };

    return (
        <div className="flex flex-col flex-1 h-full">
            <h1 className="flex-initial flex-shrink-0 text-xl text-center capitalize">
                {activeReviewType} Review
            </h1>
            {activeReviewType === 'suggestion' &&
            activeReviewId &&
            activeReview ? (
                <div className="flex flex-col justify-between flex-1 h-full">
                    <table className="w-11/12 mx-auto mt-8 text-left md:w-9/12 md:text-lg">
                        <tr>
                            <th className="w-4/12 py-2">Suggestion Type:</th>
                            <td className="capitalize">
                                {activeSuggestion.sugg_type}
                            </td>
                        </tr>
                        {activeSuggestion.sugg_type === 'philosopher' && (
                            <tr>
                                <th className="w-4/12 py-2">Philosopher: </th>
                                <td className="capitalize">
                                    {activeSuggestion.name}
                                </td>
                            </tr>
                        )}
                        {activeSuggestion.sugg_type === 'question' && (
                            <tr>
                                <th className="w-4/12 py-2">Question: </th>
                                <td className="capitalize">
                                    {activeSuggestion.question}
                                </td>
                            </tr>
                        )}
                        {activeSuggestion.sugg_type === 'quote' && (
                            <>
                                <tr>
                                    <th className="w-4/12 py-2">Quote: </th>
                                    <td className="">
                                        {activeSuggestion.quote}
                                    </td>
                                </tr>
                                <tr>
                                    <th className="w-4/12 py-2">Source: </th>
                                    <td className="capitalize">
                                        {activeSuggestion.quotephilname}
                                    </td>
                                </tr>
                            </>
                        )}
                    </table>
                    {dashboardState.submitError &&
                        <div className='py-4 text-2xl text-center bg-red-800 bg-opacity-60'>
                                {dashboardState.submitError}
                        </div>
                    }
                    <div className='flex flex-row justify-between pb-5'>
                        <div className='p-0'>
                            <span className="py-1 pb-2 ml-2 button">&lt;- Back</span>
                        </div>
                        <div className='p-0'>
                            <span className='py-1 pb-2 mr-4 bg-[#2B2] hover:bg-[#393] button' onClick={approveSuggestionSubmit}>
                                Approve
                            </span>
                            <span className='py-1 pb-2 mr-2 bg-[#D00] hover:bg-[#B11] button' onClick={rejectSuggestionSubmit}>
                                Delete
                            </span>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default ReviewScreen;
