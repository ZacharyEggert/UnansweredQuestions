import React, { useState } from 'react';
import { useGlobalContext } from '../../util/GlobalState';

const LoginForm = () => {
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

    const setCurrentUser = (event) => {
        //send api fetch request (axios) and response will be used and inserted into global state as current user
        dispatch({
            type: 'setCurrentUser',
            data: { [event.target.name]: event.target.value },
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
            <label
                for="email"
                className="inline-block w-2/12 my-3"
                hidden
            ></label>
            <input
                name="email"
                value={state['email']}
                id=""
                type="text"
                onChange={handleOnChange}
                className="max-w-full pl-1 my-3 text-black"
                hidden
            />
            <br />
            <label for="username" className="inline-block w-4/12 my-3">
                Username
            </label>
            <input
                name="username"
                id="username"
                type="text"
                className="max-w-full pl-1 my-3 text-black"
            />
            <br />
            <label for="password" className="inline-block w-4/12 my-3">
                Password
            </label>
            <input
                name="password"
                value={state['password']}
                id="password"
                type="text"
                onChange={handleOnChange}
                className="max-w-full pl-1 my-3 text-black"
            />
            <br />
            <span className="inline-block w-8/12 text-right">
                <button
                    id="login"
                    type="submit"
                    className="text-white rounded-md px-3 border-white border-2 border-solid whitespace-nowrap w-auto md:w-3/12 min-w-min bg-[#4d83a3]"
                    onClick={handleFormSubmit}
                >
                    Log in
                </button>
            </span>
        </form>
    );
};

export default LoginForm;