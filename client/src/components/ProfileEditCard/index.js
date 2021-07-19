import React, { useState } from 'react';
import { useGlobalContext } from '../../util/GlobalState';
// import { logIn } from '../../util/API';
import ProfileView from '../ProfileViewCard';

const EditView = (props) => {
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

        alert('Your profile has been updated!');
        setState({
            ...state,
            view: 'ProfileView',
        });
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <label
                htmlFor="bio"
                className="inline-block w-2/12 my-3"
                hidden
            ></label>
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
            <label htmlFor="favephil" className="inline-block w-4/12 my-3">
                Favorite Philosopher
            </label>
            <input
                name="username"
                id="username"
                value={state['favephil']}
                onChange={handleOnChange}
                type="text"
                placeholder="Enter your favorite philosopher..."
                className="max-w-full pl-1 my-3 text-black"
            />
            <br />
            <label htmlFor="favequote" className="inline-block w-4/12 my-3">
                favequote
            </label>
            <input
                name="favequote"
                value={state['favequote']}
                id="favequote"
                type="text"
                onChange={handleOnChange}
                placeholder="Enter your favorite quote..."
                className="max-w-full pl-1 my-3 text-black"
            />
            <br />
            <label htmlFor="favebook" className="inline-block w-4/12 my-3">
                favebook
            </label>
            <input
                name="favebook"
                value={state['favebook']}
                id="favebook"
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
    );
};

export default EditView;
