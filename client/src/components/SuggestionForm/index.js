import React, { SuggFormComponent, useState } from 'react';

const SuggestionForm = () => {
    const initialState = {
        ['suggestion-type']: '',
        ['phil-name']: '',
        ['q-phil-name']: '',
        ['quote']: '',
        ['quest']: '',
    };

    const [state, setState] = useState(initialState);

    const handleOnChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <form>
            <div className="mb-4 form-group sm:flex sm:justify-between">
                <label
                    for="suggestion"
                    className="inline-block w-full sm:w-6/12"
                    id="listbox-label"
                >
                    What would you like to make a suggestion for?
                </label>
                <select
                    value={state['suggestion-type']}
                    name="suggestion-type"
                    id="suggestion-type"
                    className="inline-block w-full p-1 mt-1 text-black sm:w-5/12 form-select"
                    placeholder="Choose subject..."
                >
                    <option
                        className="pl-1 text-black"
                        value=""
                        disabled
                        selected
                    >
                        Choose subject...
                    </option>
                    <option value="philosopher" className="pl-1 text-black">
                        Philosopher
                    </option>
                    <option value="quote" className="pl-1 text-black">
                        Quote
                    </option>
                    <option value="question" className="pl-1 text-black">
                        Daily Question
                    </option>
                </select>
            </div>
            <div
                className="mb-4 philosopher box2 sm:flex sm:justify-between"
                id="otherFieldDiv"
            >
                <label for="phil-name" className="inline-block sm:w-4/12">
                    Philosopher Name:
                </label>
                <input
                    value={state['phil-name']}
                    className="p-1 text-black"
                    type="text"
                    name="phil-name"
                    id="phil-name"
                    placeholder="Enter philosopher name..."
                    required
                />
            </div>
            <div className="mb-4 quote box2" id="otherFieldGroupDiv">
                <div className="mb-4 col-6 sm:flex sm:justify-between">
                    <label for="q-phil-name" className="inline-block sm:w-4/12">
                        Philosopher Name:
                    </label>
                    <input
                        value={state['q-phil-name']}
                        name="q-phil-name"
                        type="text"
                        className="p-1 text-black form-control"
                        id="q-phil-name"
                        placeholder="Enter philosopher name..."
                        required
                    />
                </div>
                <div className="col-6 sm:flex sm:justify-between">
                    <label for="quote" className="inline-block sm:w-4/12">
                        Quote
                    </label>
                    <input
                        value={state['quote']}
                        name="quote"
                        type="text"
                        className="p-1 text-black form-control"
                        id="quote"
                        placeholder="Enter quote..."
                        required
                    />
                </div>
            </div>
            <div
                className="mb-4 question box2 sm:flex sm:justify-between"
                id="otherFieldDiv3"
            >
                <label for="quest" className="inline-block sm:w-4/12">
                    Question:
                </label>
                <input
                    className="p-1 text-black"
                    type="text"
                    name="quest"
                    value={state['quest']}
                    id="quest"
                    placeholder="Enter question..."
                    required
                />
            </div>
            <span className="inline-block w-8/12 text-right contents">
                <button
                    id="suggestion"
                    type="submit"
                    className="text-white rounded-md px-3  border-white border-2 border-solid whitespace-nowrap md:w-3/12 min-w-min bg-[#4d83a3] w-full items-center"
                >
                    Submit
                </button>
            </span>
        </form>
    );
};

export default SuggestionForm;
