import React from 'react';

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
                            <form action="chat">
                                <div className="form-control mb-4">
                                    <label
                                        for="username"
                                        className="w-4/12 inline-block"
                                    >
                                        Username:
                                    </label>
                                    <input
                                        className="text-black p-1"
                                        type="text"
                                        name="username"
                                        id="username"
                                        placeholder="Enter username..."
                                        required
                                    />
                                </div>
                                <div className="form-control mb-4">
                                    <label
                                        for="room"
                                        className="w-4/12 inline-block"
                                        id="listbox-label"
                                    >
                                        Room:
                                    </label>
                                    <select
                                        name="room"
                                        id="room"
                                        className="width-auto inline-block form-select block mt-1 text-black p-1"
                                        placeholder="Choose room..."
                                    >
                                        <option
                                            className="text-black pl-1"
                                            value=""
                                            disabled
                                            selected
                                        >
                                            Choose room...
                                        </option>
                                        <option
                                            value="Philosophy Chat"
                                            className="text-black pl-1"
                                        >
                                            Philosophy Chat
                                        </option>
                                    </select>
                                </div>
                                <span className="w-8/12 inline-block text-right contents">
                                    <button
                                        type="submit"
                                        className="text-white rounded-md px-3  border-white border-2 border-solid whitespace-nowrap md:w-3/12 min-w-min bg-[#4d83a3] w-full items-center"
                                    >
                                        Join Chat
                                    </button>
                                </span>
                            </form>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default JoinChat;
