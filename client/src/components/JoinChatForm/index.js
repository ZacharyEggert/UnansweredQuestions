import React from 'react';
import { useGlobalContext } from '../../util/GlobalState';
import { Link } from 'react-router-dom';

const JoinChatForm = () => {
    const [globalState, dispatch] = useGlobalContext();
    const { currentUser } = globalState;
    const { chatRoom } = globalState;

    const handleOnChange = (event) => {
        dispatch({
            type: 'setChatRoom',
            data: { [event.target.name]: event.target.value },
        });
    };

    return (
        <form>
            <div className="form-control mb-4">
                <label for="username" className="w-4/12 inline-block">
                    Username:
                </label>
                {currentUser.username ? (
                    <input
                        className="text-black p-1"
                        type="text"
                        name="username"
                        value={currentUser.username}
                        disabled={true}
                        id="username"
                        placeholder="Enter username..."
                        required={true}
                    />
                ) : (
                    <input
                        className="text-black p-1"
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter username..."
                        required
                    />
                )}
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
                    value={chatRoom.room}
                    onChange={handleOnChange}
                    id="room"
                    className="width-auto inline-block form-select block mt-1 text-black p-1"
                    placeholder="Choose room..."
                >
                    <option className="text-black pl-1" value="" selected>
                        Choose room...
                    </option>
                    <option value="Philosophy Chat" className="text-black pl-1">
                        Philosophy Chat
                    </option>
                    <option value="General Chat" className="text-black pl-1">
                        General Chat
                    </option>
                </select>
            </div>
            {chatRoom.room !== '' ? (
                <Link to="/chat">
                    <span className="w-8/12 inline-block text-right contents">
                        <button className="text-white rounded-md px-3  border-white border-2 border-solid whitespace-nowrap md:w-3/12 min-w-min bg-[#4d83a3] w-full items-center">
                            Join Chat
                        </button>
                    </span>
                </Link>
            ) : (
                <span className="w-8/12 inline-block text-right contents">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                        }}
                        className="text-white rounded-md px-3  border-white border-2 border-solid whitespace-nowrap md:w-3/12 min-w-min bg-[#4d83a3] w-full items-center"
                    >
                        Join Chat
                    </button>
                </span>
            )}
        </form>
    );
};

export default JoinChatForm;
