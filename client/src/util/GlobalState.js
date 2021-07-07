import React, { createContext, useReducer, useContext } from 'react';

const GlobalContext = createContext();
const { Provider } = GlobalContext;

const initialState = {
    philosophers: { 
        0: { name: 'Adam Yauch', period: 'Modern', id: 0 } 
    },
    carouselQuotes: [
        { quote: 'Test Quote', author: 'Test Author', id: 151 }
    ],
    isLoggedin: true,
    currentUser: { 
        id: null, 
        username: 'test', 
        isAdmin: false 
    },
    chatRoom: { 
        room: '', 
        username: 'test' 
    },
    dailyQuestion:{
        name: 'Test Question Name', 
        content: 'This is a question of the day. Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat?', 
        comments: [
            {
                user: 'Test Author', 
                content:'This is a comment', 
                id:505
            },
        ]
    }
};

const reducer = (state, action) => {
    //** REDUCER FOR USE REDUCER */
    switch (action.type) {
        case 'addPhilosophersBulk':
            return {
                ...state,
                philosophers: [...state.philosophers, ...action.data],
            };

        case 'setChatRoom':
            return {
                ...state,
                chatRoom: { ...state.chatRoom, ...action.data },
            };
        case 'setRoomName':
            return {
                ...state,
                chatRoom: { ...state.chatRoom, room: action.data }
            };
        case 'setRoomUsers':
            return {
                ...state,
                chatRoom: { ...state.chatRoom, users: action.data }
            }

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
