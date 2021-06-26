import React from 'react';
import { Link } from 'react-router-dom';

const Chat = () => {
    return (
        <div>
            <main
                className="join-chat min-w-full opacity-80 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
                // eslint-disable-next-line react/style-prop-object
                /** style="background-image: url(/img/background-blue-flowers.jpg);"*/
            >
                <div className="py-8"></div>
                <div className="w-full sm:w-10/12 bg-black bg-opacity-70 flex flex-col flex-wrap">
                    <header className="chat-header p-4 flex items-center justify-between flex-col sm:flex-row bg-black border-b-white border-b-solid">
                        <h1 className="text-3xl sm:text-4xl pb-0 pr-4">
                            Philosophy Chat
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
                                Philosophy Chat
                            </h2>
                            <h3>
                                <i className="fas fa-users hidden sm:visible"></i>{' '}
                                Users:
                            </h3>
                            <ul id="users"></ul>
                        </div>
                        <div className="chat-messages"></div>
                    </section>
                    <div className="chat-form-container bg-black">
                        <form id="chat-form">
                            <input
                                id="msg"
                                type="text"
                                placeholder="Enter Message"
                                required
                                autocomplete="off"
                            />
                            <button className="btn mt-0 sm:ml-4 text-sm">
                                <i className="fas fa-paper-plane"></i> Send
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Chat;
