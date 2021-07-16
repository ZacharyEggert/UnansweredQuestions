import React, { useState } from 'react';
import { useGlobalContext } from '../../util/GlobalState';
import { logIn } from '../../util/API';

const LoginForm = () => {
    // eslint-disable-next-line no-unused-vars
    const [globalState, dispatch] = useGlobalContext();
    // const { currentUser } = globalState;

    const initialState = {
        email: '',
        username: '',
        password: '',
    };

    const [state, setState] = useState(initialState);

    const handleOnChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        });
    };

    const setCurrentUser = () => {
        logIn({user_name:state.username, password:state.password})
        .then((response) => {
            dispatch({ type: 'LOG_IN', data: response.data });
            // console.debug(response);
        })
        .catch((error) => {
            console.error(error);
        });
 };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (
            state['username'] === 'username' ||
            state['username'].trim() === ''
        ) {
            alert('Please enter a valid username');
            return;
        } 
        else if (
            state['password'] === 'password' ||
            state['password'].trim() === ''
        ) {
            alert('Please enter a valid password');
            return;
        }

        // console.log({message: 'this should sign you up'});

        setCurrentUser();
        // console.log(state);
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <label
                htmlFor="email"
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
                disabled
            />
            <br />
            <label htmlFor="username" className="inline-block w-4/12 my-3">
                Username
            </label>
            <input
                name="username"
                id="username"
                value={state['username']}
                onChange={handleOnChange}
                type="text"
                className="max-w-full pl-1 my-3 text-black"
            />
            <br />
            <label htmlFor="password" className="inline-block w-4/12 my-3">
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
                >
                    Log in
                </button>
            </span>
        </form>
    );
};

export default LoginForm;
