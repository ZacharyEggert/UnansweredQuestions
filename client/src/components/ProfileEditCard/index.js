import React from 'react';
import { postProfileInfo } from '../../util/API';

const EditView = (props, { user }) => {
    const { setState, state } = props;

    const handleOnChange = (event) => {
        setState({
            ...state,
            error: null,
            [event.target.name]: event.target.value,
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        postProfileInfo({
            profile: {
                bio: state.bio,
                favPhilosopher: state.favPhilosopher,
                favBook: state.favBook,
                favQuote: state.favQuote,
            },
            user_id: user?.id,
        });

        alert('Your profile has been updated!');
        setState({
            ...state,
            view: 'ProfileView',
        });
    };

    return (
        <div className="w-auto max-w-full p-8 py-8 bg-[rgba(255,255,255,0.2)] min-h-[20rem] text-white">
            <form onSubmit={handleFormSubmit} className="flex flex-col">
                <label
                    htmlFor="bio"
                    className="flex flex-col justify-between w-full mx-auto my-3 text-lg md:items-center md:flex-row md:w-10/12"
                    hidden
                >
                    Bio
                </label>
                <input
                    name="bio"
                    value={state['bio']}
                    id=""
                    type="text"
                    onChange={handleOnChange}
                    placeholder="Enter your bio here..."
                    className="max-w-full pl-1 my-3 text-black"
                />
                <br />
                <label
                    htmlFor="favPhilosopher"
                    className="flex flex-col justify-between w-full mx-auto my-3 text-lg md:items-center md:flex-row md:w-10/12"
                >
                    Favorite Philosopher
                </label>
                <input
                    name="favPhilosopher"
                    id="favPhilosopher"
                    value={state['favPhilosopher']}
                    onChange={handleOnChange}
                    type="text"
                    placeholder="Enter your favorite philosopher..."
                    className="flex flex-col justify-between w-full mx-auto my-3 text-lg md:items-center md:flex-row md:w-10/12"
                />
                <br />
                <label
                    htmlFor="favQuote"
                    className="flex flex-col justify-between w-full mx-auto my-3 text-lg md:items-center md:flex-row md:w-10/12"
                >
                    Favorite Quote
                </label>
                <input
                    name="favQuote"
                    value={state['favQuote']}
                    id="favQuote"
                    type="text"
                    onChange={handleOnChange}
                    placeholder="Enter your favorite quote..."
                    className="max-w-full pl-1 my-3 text-black"
                />
                <br />
                <label htmlFor="favBook" className="inline-block w-4/12 my-3">
                    Favorite Book
                </label>
                <input
                    name="favBook"
                    value={state['favBook']}
                    id="favBook"
                    type="text"
                    onChange={handleOnChange}
                    placeholder="Enter your favorite book..."
                    className="max-w-full pl-1 my-3 text-black"
                />
                <br />
                <span className="inline-block w-8/12 text-right">
                    <button id="save" type="submit" className="button">
                        Save Changes
                    </button>
                </span>
                <span className="block w-11/12 mx-auto text-center md:w-8/12 px-auto">
                    {state.error}
                </span>
            </form>
        </div>
    );
};

export default EditView;
