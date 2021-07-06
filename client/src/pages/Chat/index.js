import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ChatForm from '../../components/ChatForm';
import { io } from 'socket.io-client';
import { useState } from 'react';
import { useGlobalContext } from '../../util/GlobalState';

const Chat = () => {
    const initialState = {
        'chat-form': '',
        'chat-messages': [],
        'room-name': '',
        users: [],
    };

    const [state, setState] = useState(initialState);

    const [globalState, dispatch] = useGlobalContext();
    const { chatRoom } = globalState;
    const { username, room } = chatRoom;

    let socket = io();

    const outputMessage = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        });
    };

    useEffect(() => {
        socket.emit('joinRoom', { username, room });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const outputRoomName = (roomData) => {
        dispatch({
            type: 'setRoomName',
            data: roomData,
        });
    };

    const outputUsers = (userData) => {
        dispatch({
            type: 'setRoomUsers',
            data: userData,
        });
    };

    socket.on('roomUsers', ({ room, users }) => {
        outputRoomName(room);
        outputUsers(users);
    });

    socket.on('message', (message) => {
        console.log(message);
        outputMessage(message);
    });

    //scroll down
    const divRef = useRef(null);
    useEffect(() => {
        divRef.current.scrollIntoView({ behavior: 'smooth' });
    });

    return (
        <div className='min-h-full bg-fixed bg-cover bg-blue-flowers bg-fade'>
            <main
                className="flex items-center justify-center min-w-full min-h-screen px-4 py-12 join-chat opacity-80 sm:px-6 lg:px-8"
                // eslint-disable-next-line react/style-prop-object
                /** style="background-image: url(/img/background-blue-flowers.jpg);"*/
            >
                <div className="py-8"></div>
                <div className="flex flex-col flex-wrap w-full bg-black sm:w-10/12 bg-opacity-70">
                    <header className="flex flex-col items-center justify-between p-4 bg-black chat-header sm:flex-row border-b-white border-b-solid">
                        <h1 className="pb-0 pr-4 text-3xl sm:text-4xl">
                            {room}
                        </h1>
                        <Link
                            to="/"
                            id="leave-btn"
                            className="text-white rounded-md px-3  border-white border-2 border-solid whitespace-nowrap w-auto sm:mr-8 bg-[#4d83a3]"
                        >
                            Leave Room
                        </Link>
                    </header>
                    <section className="chat-main bg-opacity-90 border-b-white border-b-solid">
                        <div className="chat-sidebar">
                            <h3>
                                <i className="fas fa-comments"></i> Room Name:
                            </h3>
                            <h2 id="room-name" className="pl-0">
                                {room}
                            </h2>
                            <h3>
                                <i className="hidden fas fa-users sm:visible"></i>{' '}
                                Users:
                            </h3>
                            <ul id="users">
                                {state['users'].map((user) => (
                                    <li>${user.username}</li>
                                ))}
                            </ul>
                        </div>
                        <div
                            className="chat-messages"
                            name="chat-messages"
                            value={state['chat-messages']}
                            ref={divRef}
                        >
                            {state['chat-messages'].map((message) => (
                                <div className="message">
                                    <p className="meta">
                                        ${message.username}{' '}
                                        <span>${message.time} </span>
                                    </p>
                                    <p className="text">${message.text}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                    <div className="bg-black chat-form-container">
                        <ChatForm socket={socket} />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Chat;
