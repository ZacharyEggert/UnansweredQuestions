import React, { useState } from 'react';
import { useGlobalContext } from '../../util/GlobalState';

const SignupForm = () => {
    // eslint-disable-next-line no-unused-vars
    const [globalState, dispatch] = useGlobalContext();
    const { currentUser } = globalState;

    const initialState = {
        email: '',
        password: '',
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
        if (state['email'] === 'email' && state['email'].trim() === '') {
            alert('Please enter a valid entry');
        } else if (
            state['username'] === 'username' &&
            state['quote'].trim() === ''
        ) {
            alert('Please enter a valid entry');
        } else if (
            state['password'] === 'password' &&
            state['password'].trim() === ''
        ) {
            alert('Please enter a valid entry');
        } else {
            alert('You are now logged in!');
            setState({
                email: '',
                password: '',
            });

            console.log(state);
        }
    };

    return (
        <form>
            <label for="email" className="inline-block w-4/12 my-3">
                Email
            </label>
            <input
                name="email"
                id="signupemail"
                type="text"
                className="max-w-full pl-1 my-3 text-black"
            />
            <br />
            <label for="username" className="inline-block w-4/12 my-3">
                Username
            </label>
            <input
                name="username"
                id="signupusername"
                type="text"
                className="max-w-full pl-1 my-3 text-black"
            />
            <br />
            <label for="password" className="inline-block w-4/12 my-3">
                Password
            </label>
            <input
                name="password"
                id="signuppassword"
                type="text"
                className="max-w-full pl-1 my-3 text-black"
            />
            <br />
            <span className="inline-block w-8/12 text-right">
                <button
                    id="signup"
                    type="submit"
                    className="text-white rounded-md px-3 border-white border-2 border-solid whitespace-nowrap w-auto md:w-3/12 min-w-min bg-[#4d83a3]"
                >
                    Sign up
                </button>
            </span>
        </form>
    );
};

export default SignupForm;
