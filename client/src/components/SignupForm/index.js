import React, { useState } from 'react';
import { signUp } from '../../util/API';
import { useGlobalContext } from '../../util/GlobalState';

const SignupForm = () => {
    // eslint-disable-next-line no-unused-vars
    const [globalState, dispatch] = useGlobalContext();

    const initialState = {
        error: null,
        email: '',
        password: '',
        username: '',
    };

    const [state, setState] = useState(initialState);

    const sendSignUpRequest = () => {
        signUp({
            email:state.email, 
            password:state.password, 
            user_name:state.username})
            .then((response) => {
                if (response.status < 300) {
                    dispatch({ type: 'LOG_IN', data: response.data });
                    console.debug(response);
                    return;
                }
                
            })
            .catch((error) => {
                console.error(error);
                setState({
                    ...state,
                    error: 'An error occurred',
                });
            });
    };



    const handleOnChange = (event) => {
        setState({
            ...state,
            error: null,
            [event.target.name]: event.target.value,
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (
            state['email'].trim() === ''
        ) {
            alert('Please enter a valid email');
            return;
        } 
        else if (
            state['username'].trim() === ''
        ) {
            alert('Please enter a valid username');
            return;
        } 
        else if (
            state['password'].trim() === ''
        ) {
            alert('Please enter a valid password');
            return;
        }

        sendSignUpRequest();

        // console.log({message: 'this should sign you up'});

    };

    return (
        <form>
            <label htmlFor="email" className="flex flex-col justify-between w-full mx-auto my-3 text-lg md:items-center md:flex-row md:w-10/12">
                Email
            <input
                name="email"
                id="signupemail"
                type="text"
                value={state['email']}
                className="max-w-full pl-1 my-3 text-black"
                onChange={handleOnChange}
            />
            </label>

            <label htmlFor="username" className="flex flex-col justify-between w-full mx-auto my-3 text-lg md:items-center md:flex-row md:w-10/12">
                Username
            <input
                name="username"
                id="signupusername"
                type="text"
                value={state['username']}
                className="max-w-full pl-1 my-3 text-black"
                onChange={handleOnChange}
            />
            </label>
            <label htmlFor="password" className="flex flex-col justify-between w-full mx-auto my-3 text-lg md:items-center md:flex-row md:w-10/12">
                Password
            <input
                name="password"
                id="signuppassword"
                type="text"
                value={state['password']}
                className="max-w-full pl-1 my-3 text-black"
                onChange={handleOnChange}
            />
            </label>
            <span className="block w-full mx-auto text-right md:w-10/12">
                <button
                    onClick={handleFormSubmit}
                    id="signup"
                    type="submit"
                    className="w-auto px-3 py-1 whitespace-nowrap md:w-3/12 min-w-min button"
                >
                    Sign up
                </button>
            </span>
        </form>
    );
};

export default SignupForm;
