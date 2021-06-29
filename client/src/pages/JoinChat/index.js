import React from 'react';
import JoinChatForm from '../../components/JoinChatForm';

const JoinChat = () => {
    return (
        <div>
            <main
                className="join-chat min-w-full opacity-80 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
                /** style="background-image: url(/img/background-blue-petals.jpg);"*/
            >
                <div className="py-8"></div>
                <div className="w-full sm:w-auto m-14 p-7 bg-black bg-opacity-80 flex flex-row flex-wrap">
                    <div className="w-6/12 pr-1 sm:min-w-max flex-1 flex-shrink-0">
                        <header className="">
                            <h1 className="sm:text-4xl pb-0 sm:pb-8">
                                Philosophy Chat Room
                            </h1>
                        </header>
                        <section className="form bg-white bg-opacity-20 p-8 py-8 w-auto">
                            <JoinChatForm />
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default JoinChat;
