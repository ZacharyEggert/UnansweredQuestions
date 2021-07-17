import React from 'react';
import { useGlobalContext } from '../../util/GlobalState';
import { Link } from 'react-router-dom';
import './chatstyle.css';

const JoinChatForm = () => {
    const [globalState, dispatch] = useGlobalContext();
    const { currentUser } = globalState;
    const { chatRoom } = globalState;

    const handleOnChange = (event) => {
        dispatch({
            type: 'setChatRoom',
            data: { [event.target.name]: event.target.value },
        });
        if (currentUser?.user.user_name) {
            dispatch({
                type: 'setChatRoom',
                data: { username: currentUser.user.user_name },
            });
        }
    };

    // const handleUser = (event) => {
    //     dispatch({
    //         type: 'setRoomUsers',
    //         data: { [event.target.name]: event.target.value },
    //     });
    // };

    return (
        <form>
            <div className="mb-4 form-control">
                <label
                    htmlFor="username"
                    className="inline-block w-4/12 text-lg"
                >
                    Username:
                </label>
                {currentUser?.user.user_name ? (
                    <input
                        className="p-1 text-base text-black bg-white"
                        type="text"
                        name="username"
                        value={currentUser.user.user_name}
                        disabled={true}
                        id="username"
                        placeholder={currentUser.user.user_name}
                        required={true}
                        onChange={handleOnChange}
                    />
                ) : (
                    <input
                        className="p-1 text-base text-black bg-white"
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter username..."
                        required
                        onChange={handleOnChange}
                    />
                )}
            </div>
            <div className="mb-4 form-control">
                <label
                    htmlFor="room"
                    className="inline-block w-4/12 text-lg"
                    id="listbox-label"
                >
                    Room:
                </label>
                <select
                    name="room"
                    value={chatRoom.room}
                    onChange={handleOnChange}
                    id="room"
                    className="inline-block p-1 mt-1 mr-0 text-black width-auto form-select"
                    placeholder="Choose room..."
                >
                    <option className="pl-1 text-black" value="">
                        Choose room...
                    </option>
                    <option value="Philosophy Chat" className="pl-1 text-black">
                        Philosophy Chat
                    </option>
                    <option value="General Chat" className="pl-1 text-black">
                        General Chat
                    </option>
                </select>
            </div>
            {chatRoom.room !== '' ? (
                <Link to="/chat">
                    <span className="md:inline-block md:w-8/12 md:text-right">
                        <button className="button w-10/12">Join Chat</button>
                    </span>
                </Link>
            ) : (
                <span className="md:inline-block md:w-10/12 md:text-right">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                        }}
                        className="button w-8/12"
                    >
                        Join Chat
                    </button>
                </span>
            )}
        </form>
    );
};

export default JoinChatForm;
