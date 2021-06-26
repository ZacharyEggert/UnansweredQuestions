import React, { SuggFormComponent } from 'react';

class SuggestionForm extends SuggFormComponent {
    state = {};

    render() {
        return (
            <form>
                <div className="mb-4 form-group sm:flex sm:justify-between">
                    <label
                        for="suggestion"
                        className="w-full sm:w-6/12 inline-block"
                        id="listbox-label"
                    >
                        What would you like to make a suggestion for?
                    </label>
                    <select
                        name="suggestion-type"
                        id="suggestion-type"
                        className="w-full sm:w-5/12 inline-block form-select mt-1 text-black p-1"
                        placeholder="Choose subject..."
                    >
                        <option
                            className="text-black pl-1"
                            value=""
                            disabled
                            selected
                        >
                            Choose subject...
                        </option>
                        <option value="philosopher" className="text-black pl-1">
                            Philosopher
                        </option>
                        <option value="quote" className="text-black pl-1">
                            Quote
                        </option>
                        <option value="question" className="text-black pl-1">
                            Daily Question
                        </option>
                    </select>
                </div>
                <div
                    className="philosopher box2 mb-4 sm:flex sm:justify-between"
                    id="otherFieldDiv"
                >
                    <label for="phil-name" className="sm:w-4/12 inline-block">
                        Philosopher Name:
                    </label>
                    <input
                        className="text-black p-1"
                        type="text"
                        name="phil-name"
                        id="phil-name"
                        placeholder="Enter philosopher name..."
                        required
                    />
                </div>
                <div className="quote box2 mb-4" id="otherFieldGroupDiv">
                    <div className="col-6 mb-4 sm:flex sm:justify-between">
                        <label
                            for="q-phil-name"
                            className="sm:w-4/12 inline-block"
                        >
                            Philosopher Name:
                        </label>
                        <input
                            type="text"
                            className="form-control text-black p-1"
                            id="q-phil-name"
                            placeholder="Enter philosopher name..."
                            required
                        />
                    </div>
                    <div className="col-6 sm:flex sm:justify-between">
                        <label for="quote" className="sm:w-4/12 inline-block">
                            Quote
                        </label>
                        <input
                            type="text"
                            className="form-control text-black p-1"
                            id="quote"
                            placeholder="Enter quote..."
                            required
                        />
                    </div>
                </div>
                <div
                    className="question box2 mb-4 sm:flex sm:justify-between"
                    id="otherFieldDiv3"
                >
                    <label for="quest" className="sm:w-4/12 inline-block">
                        Question:
                    </label>
                    <input
                        className="text-black p-1"
                        type="text"
                        name="quest"
                        id="quest"
                        placeholder="Enter question..."
                        required
                    />
                </div>
                <span className="w-8/12 inline-block text-right contents">
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
    }
}

export default SuggestionForm;
