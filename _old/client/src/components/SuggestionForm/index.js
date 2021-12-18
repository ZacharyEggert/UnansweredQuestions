import React, { useState } from 'react';
import { postSuggestion } from '../../util/API';

const SuggestionForm = ({ user }) => {
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
            postSuggestion({
                suggestion: {
                    sugg_type: state['suggestion-type'],
                    quotephilname: state['q-phil-name'],
                    name: state['phil-name'],
                    question: state.quest,
                    quote: state.quote,
                },
                user_id: user?.id,
            })
                .then((response) => {
                    if (response.status < 300) {
                        alert(
                            'Your suggestion has been submitted! Thanks for your input!'
                        );
                        setState({
                            'suggestion-type': '',
                            'phil-name': '',
                            'q-phil-name': '',
                            quote: '',
                            quest: '',
                        });
                    } else {
                        console.error(response);
                        alert('Something went wrong. Please try again later.');
                    }
                })
                .catch(() => {
                    alert('Something went wrong. Please try again later.');
                });

            // console.log(state);
        }
    };

    return (
        <form>
            <div className="mb-4 form-group sm:flex sm:justify-between">
                <label
                    htmlFor="suggestion-type"
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
                        htmlFor="phil-name"
                        className="inline-block mb-2 sm:w-5/12"
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
                            htmlFor="q-phil-name"
                            className="inline-block mb-2 sm:w-5/12"
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
                            htmlFor="quote"
                            className="inline-block mb-2 sm:w-5/12"
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
                    <label htmlFor="quest" className="inline-block mb-2 sm:w-5/12">
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
            <span className="flex justify-center text-right">
                <button
                    id="suggestion"
                    type="submit"
                    onClick={handleFormSubmit}
                    className="w-full mt-4 button sm:w-6/12"
                >
                    Submit
                </button>
            </span>
        </form>
    );
};

export default SuggestionForm;
