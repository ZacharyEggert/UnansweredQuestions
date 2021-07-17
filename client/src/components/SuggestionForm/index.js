import React, { useState } from 'react';

const SuggestionForm = () => {
    const initialState = {
        'suggestion-type': '',
        'phil-name': '',
        'q-phil-name': '',
        quote: '',
        quest: '',
    };

    const [state, setState] = useState(initialState);

    const handleOnChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (state['suggestion-type'] === '') {
            alert('Please choose a subject');
        } else if (
            state['suggestion-type'] === 'philosopher' &&
            state['phil-name'].trim() === ''
        ) {
            alert('Please enter a valid entry');
        } else if (
            state['suggestion-type'] === 'quote' &&
            state['quote'].trim() === ''
        ) {
            alert('Please enter a valid entry');
        } else if (
            state['suggestion-type'] === 'quest' &&
            state['quest'].trim() === ''
        ) {
            alert('Please enter a valid entry');
        } else {
            alert('Your suggestion has been submitted! Thanks for your input!');
            setState({
                'suggestion-type': '',
                'phil-name': '',
                'q-phil-name': '',
                quote: '',
                quest: '',
            });

            console.log(state);
        }
    };

    return (
        <form>
            <div className="mb-4 form-group sm:flex sm:justify-between">
                <label
                    for="suggestion"
                    className="inline-block w-full sm:w-5/12"
                    id="listbox-label"
                >
                    What would you like to make a suggestion for?
                </label>
                <select
                    value={state['suggestion-type']}
                    name="suggestion-type"
                    onChange={handleOnChange}
                    id="suggestion-type"
                    className="inline-block p-1 mt-2 text-black form-select sm:w-[38%]"
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
            {state['suggestion-type'] === 'philosopher' ? (
                <div
                    className="mb-4 philosopher box2 sm:flex sm:justify-between"
                    id="otherFieldDiv"
                >
                    <label
                        for="phil-name"
                        className="inline-block sm:w-5/12 mb-2"
                    >
                        Philosopher Name:
                    </label>
                    <input
                        value={state['phil-name']}
                        className="p-1 text-black"
                        type="text"
                        name="phil-name"
                        id="phil-name"
                        onChange={handleOnChange}
                        placeholder="Enter philosopher name..."
                        required
                    />
                </div>
            ) : null}
            {state['suggestion-type'] === 'quote' ? (
                <div className="mb-4 quote box2" id="otherFieldGroupDiv">
                    <div className="mb-4 col-6 sm:flex sm:justify-between">
                        <label
                            for="q-phil-name"
                            className="inline-block sm:w-5/12 mb-2"
                        >
                            Philosopher Name:
                        </label>
                        <input
                            value={state['q-phil-name']}
                            name="q-phil-name"
                            type="text"
                            className="p-1 text-black form-control"
                            id="q-phil-name"
                            onChange={handleOnChange}
                            placeholder="Enter philosopher name..."
                            required
                        />
                    </div>
                    <div className="col-6 sm:flex sm:justify-between">
                        <label
                            for="quote"
                            className="inline-block sm:w-5/12 mb-2"
                        >
                            Quote:
                        </label>
                        <input
                            value={state['quote']}
                            name="quote"
                            type="text"
                            className="p-1 text-black form-control"
                            id="quote"
                            onChange={handleOnChange}
                            placeholder="Enter quote..."
                            required
                        />
                    </div>
                </div>
            ) : null}
            {state['suggestion-type'] === 'question' ? (
                <div
                    className="mb-4 question box2 sm:flex sm:justify-between"
                    id="otherFieldDiv3"
                >
                    <label for="quest" className="inline-block sm:w-5/12 mb-2">
                        Question:
                    </label>
                    <input
                        className="p-1 text-black"
                        type="text"
                        name="quest"
                        value={state['quest']}
                        id="quest"
                        onChange={handleOnChange}
                        placeholder="Enter question..."
                        required
                    />
                </div>
            ) : null}
            <span className="text-right flex justify-center">
                <button
                    id="suggestion"
                    type="submit"
                    onClick={handleFormSubmit}
                    className="button mt-4 w-full sm:w-6/12"
                >
                    Submit
                </button>
            </span>
        </form>
    );
};

export default SuggestionForm;
