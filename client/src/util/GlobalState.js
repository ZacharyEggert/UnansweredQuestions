import React, { createContext, useReducer, useContext } from 'react';

const GlobalContext = createContext();
const { Provider } = GlobalContext;

const initialState = {
    philosophers: {
        1: { name: 'Adam Yauch', period: 'Modern', id: 1, img:'plato.jpg' },
    },
    carouselQuotes: null,
    isLoggedIn: false,
    currentUser: null,
    chatRoom: {
        room: '',
        username: 'test',
    },
    dailyQuestion: { /** API LOADED */
        name: 'QOTD',
        content:
            'This is a question of the day. Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat?',
        comments: [
            {
                user: 'Test Author',
                content: 'This is a comment',
                id: 505,
            },
        ],
    },
    polls: [],
};

const reducer = (state, action) => {
    //** REDUCER FOR USE REDUCER */
    switch (action.type) {
        case 'addPhilosophersBulk':
            let newState = { ...state };
            action.data.forEach(philosopher => {
                newState.philosophers[philosopher.id] = philosopher;
            });
            return newState;

        case 'setChatRoom':
            return {
                ...state,
                chatRoom: { ...state.chatRoom, ...action.data },
            };
        case 'setRoomName':
            return {
                ...state,
                chatRoom: { ...state.chatRoom, room: action.data },
            };
        case 'setRoomUsers':
            return {
                ...state,
                chatRoom: { ...state.chatRoom, users: action.data },
            };
        case 'setDailyQuestion':
            return {
                ...state,
                dailyQuestion: {id:action.data.id ,content:action.data.question, comments:action.data.comments},
            };
        case 'setPolls':
            return {
                ...state,
                polls: action.data,
            };
        case 'setQuotes':
            return {
                ...state,
                carouselQuotes: action.data,
            };
        case 'ONE_PHILOSOPHER_RECEIVE':
            return {
                ...state,
                philosophers: { 
                    ...state.philosophers,
                    [action.data.id]: action.data,
                }
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
