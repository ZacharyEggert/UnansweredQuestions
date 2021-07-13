import React, { createContext, useReducer, useContext } from 'react';

const GlobalContext = createContext();
const { Provider } = GlobalContext;

const initialState = {
    philosophers: {
        0: { name: 'Adam Yauch', period: 'Modern', id: 0 },
    },
    carouselQuotes: [{ quote: 'Test Quote', author: 'Test Author', id: 151 }],
    isLoggedin: true,
    currentUser: {
        id: null,
        username: 'test',
        isAdmin: false,
    },
    chatRoom: {
        room: '',
        username: 'test',
    },
    dailyQuestion: {
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
    polls: [
        {
            pollName: 'test Poll',
            pollText:
                'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
            vote_yes: 20,
            vote_no: 1,
        },
        {
            pollName: 'test Poll',
            pollText:
                'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
            vote_yes: 20,
            vote_no: 10,
        },
    ],
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
                dailyQuestion: {content:action.data.question, comments:action.data.comments},
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
