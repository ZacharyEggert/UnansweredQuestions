import React, { useState } from 'react';
import { useGlobalContext } from '../../util/GlobalState';

const JoinChatForm = () => {
    const initialState = {
        room: '',
    };

    const [state, setState] = useState(initialState);

    const [globalState, dispatch] = useGlobalContext();

    const handleOnChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form action="chat">
            <div className="form-control mb-4">
                <label for="username" className="w-4/12 inline-block">
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
                    <option value="Philosophy Chat" className="text-black pl-1">
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
    );
};

export default JoinChatForm;
