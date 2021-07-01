import React, { createContext, useReducer, useContext } from 'react';

const GlobalContext = createContext();
const { Provider } = GlobalContext;

const initialState = {
    philosophers: [{ name: 'Adam Yauch', period: 'Modern', id: 0 }],
    carouselQuotes: [{ quote: 'Test Quote', author: 'Test Author', id: 151 }],
    currentUser: { id: null, username: 'test', isAdmin: false },
    chatRoom: { room: 'Philosophy Chat', username: 'test' },
};

const reducer = (state, action) => {
    //** REDUCER FOR USE REDUCER */
    switch (action.type) {
        case 'addPhilosophersBulk':
            return {
                ...state,
                philosophers: [...state.philosophers, ...action.data],
            };

        default:
            return state;
    }
};

const GlobalProvider = ({ ...props }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <Provider value={[state, dispatch]} {...props} />;
};

const useGlobalContext = () => {
    return useContext(GlobalContext);
};

export { GlobalProvider, useGlobalContext };
