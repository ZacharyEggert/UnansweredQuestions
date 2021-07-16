import React, { useState } from 'react';
import { signUp } from '../../util/API';
import { useGlobalContext } from '../../util/GlobalState';

const SignupForm = () => {
    // eslint-disable-next-line no-unused-vars
    const [globalState, dispatch] = useGlobalContext();

    const initialState = {
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
            dispatch({ type: 'SIGN_IN', data: response.data });
            console.debug(response);
        })
        .catch((error) => {
            console.error(error);
        });
    };



    const handleOnChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (
            state['email'] === 'email' || state['email'].trim() === ''
        ) {
            alert('Please enter a valid email');
            return;
        } 
        else if (
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

        sendSignUpRequest();

        console.log({message: 'this should sign you up'});

    };

    return (
        <form>
            <label htmlFor="email" className="inline-block w-4/12 my-3">
                Email
            </label>
            <input
                name="email"
                id="signupemail"
                type="text"
                value={state['email']}
                className="max-w-full pl-1 my-3 text-black"
                onChange={handleOnChange}
            />
            <br />
            <label htmlFor="username" className="inline-block w-4/12 my-3">
                Username
            </label>
            <input
                name="username"
                id="signupusername"
                type="text"
                value={state['username']}
                className="max-w-full pl-1 my-3 text-black"
                onChange={handleOnChange}
            />
            <br />
            <label htmlFor="password" className="inline-block w-4/12 my-3">
                Password
            </label>
            <input
                name="password"
                id="signuppassword"
                type="text"
                value={state['password']}
                className="max-w-full pl-1 my-3 text-black"
                onChange={handleOnChange}
            />
            <br />
            <span className="inline-block w-8/12 text-right">
                <button
                    onClick={handleFormSubmit}
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
