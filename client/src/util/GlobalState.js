import React, { createContext, useReducer, useContext } from 'react';
import { updateVoteCount } from './API';

const GlobalContext = createContext();
const { Provider } = GlobalContext;

const initialState = {
    philosophers: {
        1: { name: 'Adam Yauch', period: 'Modern', id: 1, img: 'plato.jpg' },
    },
    philosophies: {},
    carouselQuotes: null,
    isLoggedIn: false,
    currentUser: null,
    chatRoom: {
        room: '',
        username: 'test',
    },
    dailyQuestion: {
        /** API LOADED */ name: 'QOTD',
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
            action.data.forEach((philosopher) => {
                newState.philosophers[philosopher.id] = philosopher;
            });
            return newState;
        case 'addPhilosophiesBulk':
            let newPhilState = { ...state };
            action.data.forEach((philosophy) => {
                newPhilState.philosophies[philosophy.id] = philosophy;
            });
            return newPhilState;

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
                dailyQuestion: {
                    id: action.data.id,
                    content: action.data.question,
                    comments: action.data.comments,
                },
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
                },
            };
        case 'ONE_PHILOSOPHY_RECEIVE':
            return {
                ...state,
                philosophies: {
                    ...state.philosophies,
                    [action.data.id]: action.data,
                },
            };

        case 'LOG_IN':
            return {
                ...state,
                isLoggedIn: true,
                currentUser: action.data,
            };

        case 'LOG_OUT':
            return {
                ...state,
                isLoggedIn: false,
                currentUser: null,
            };
        case 'POLL_VOTE':
            // console.debug(action.data);
            updateVoteCount(action.data.poll.id, {
                vote_yes: action.data.yes
                    ? action.data.poll.vote_yes + 1
                    : action.data.poll.vote_yes,
                vote_no: !action.data.yes
                    ? action.data.poll.vote_no + 1
                    : action.data.poll.vote_no,
            })
                .then((response) => {
                    console.log({ response });
                    console.debug('VOTE SUCCESS');
                })
                .catch(() => {
                    console.debug('VOTE FAILED');
                });
            return {
                ...state,
                polls: state.polls.map((poll) => {
                    if (poll.id === action.data.poll.id) {
                        return {
                            ...poll,
                            vote_yes: action.data.yes
                                ? poll.vote_yes + 1
                                : poll.vote_yes,
                            vote_no: !action.data.yes
                                ? poll.vote_no + 1
                                : poll.vote_no,
                        };
                    }
                    return poll;
                }),
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
