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
        error: null,
    };

    const [state, setState] = useState(initialState);

    const rememberSetting = localStorage.getItem('remember');

    // console.log(rememberSetting);

    const [remember, setRemember] = useState(rememberSetting === 'true');

    const toggleRemember = () => {
        localStorage.setItem('remember', !remember);
        setRemember(!remember);
    };

    const handleOnChange = (event) => {
        setState({
            ...state,
            error: null,
            [event.target.name]: event.target.value,
        });
    };

    const setCurrentUser = () => {
        logIn({ user_name: state.username, password: state.password, remember })
            .then((response) => {
                if (response.status < 300) {
                    dispatch({ type: 'LOG_IN', data: response.data });
                    console.debug(response);
                    return;
                }
            })
            .catch((error) => {
                if (
                    error.message.match(/404/g) ||
                    error.message.match(/403/g)
                ) {
                    setState({
                        ...state,
                        error: 'Invalid username or password',
                    });
                    return;
                }
                console.error(error);
                setState({
                    ...state,
                    error: 'An error occurred',
                });
            });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (state['username'].trim() === '') {
            alert('Please enter a valid username');
            return;
        } else if (state['password'].trim() === '') {
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
                className="flex flex-row my-3 w-full/12"
                hidden
            >
                &nbsp;
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
            </label>
            <label
                htmlFor="username"
                className="flex flex-col justify-between w-full mx-auto my-3 text-lg md:items-center md:flex-row md:w-10/12"
            >
                Username
                <input
                    name="username"
                    id="username"
                    value={state['username']}
                    onChange={handleOnChange}
                    type="text"
                    className="max-w-full pl-1 my-3 text-black"
                />
            </label>
            <label
                htmlFor="password"
                className="flex flex-col justify-between w-full mx-auto my-3 text-lg md:items-center md:flex-row md:w-10/12"
            >
                Password
                <input
                    name="password"
                    value={state['password']}
                    id="password"
                    type="text"
                    onChange={handleOnChange}
                    className="max-w-full pl-1 my-3 text-black"
                />
            </label>
            <br />
            <span className="block w-full mx-auto text-right md:w-10/12">
                <span className="inline-flex items-center text-sm text-[#FFF6]">
                    Remember?
                    <input
                        type="checkbox"
                        className="w-6 h-6 ml-2 mr-4"
                        checked={remember}
                        onChange={toggleRemember}
                    />
                </span>
                <button
                    id="login"
                    type="submit"
                    className="w-auto px-3 py-1 whitespace-nowrap md:w-3/12 min-w-min button"
                >
                    Log in
                </button>
            </span>
            <span className="block w-11/12 mx-auto text-center md:w-8/12 px-auto">
                {state.error}
            </span>
        </form>
    );
};

export default LoginForm;
