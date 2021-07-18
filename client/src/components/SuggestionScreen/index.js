import React, { useEffect, useState } from 'react';


const SuggestionScreen = ({state}) => {

    const { dashboardState, setDashboardState } = state;
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        
    }, []);


    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
};


export default SuggestionScreen;