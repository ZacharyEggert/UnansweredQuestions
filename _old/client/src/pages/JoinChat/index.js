import React from 'react';
import JoinChatForm from '../../components/JoinChatForm';
import './chatstyle.css';

const JoinChat = () => {
    return (
        <div className="min-h-full bg-fixed bg-cover bg-blue-petals bg-fade text-white">
            <main
                className="flex items-center justify-center min-w-full min-h-screen px-4 py-12 join-chat opacity-80 sm:px-6 lg:px-8"
                /** style="background-image: url(/img/background-blue-petals.jpg);"*/
            >
                <div className="py-8"></div>
                <div className="flex flex-row flex-wrap w-full bg-black sm:w-auto m-14 p-7 bg-opacity-50">
                    <div className="flex-1 flex-shrink-0 w-6/12 pr-1 sm:min-w-max">
                        <header className="">
                            <h1 className="sm:text-4xl sm:p-8 mb-8">
                                Philosophy Chat Room
                            </h1>
                        </header>
                        <section className="w-auto p-8 bg-white form bg-opacity-30">
                            <JoinChatForm />
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default JoinChat;
