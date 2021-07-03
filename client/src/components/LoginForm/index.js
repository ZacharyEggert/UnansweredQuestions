import React, { useState } from 'react';
import { useGlobalContext } from '../../util/GlobalState';

const LoginForm = () => {
    const initialState = {
        email: '',
        password: '',
    };
    return (
        <form>
            <label
                for="email"
                className="w-2/12 inline-block my-3"
                hidden
            ></label>
            <input
                name="email"
                id=""
                type="text"
                className="text-black pl-1 my-3 max-w-full"
                hidden
            />
            <br />
            <label for="username" className="w-4/12 inline-block my-3">
                Username
            </label>
            <input
                name="username"
                id="username"
                type="text"
                className="text-black pl-1 my-3 max-w-full"
            />
            <br />
            <label for="password" className="w-4/12 inline-block my-3">
                Password
            </label>
            <input
                name="password"
                id="password"
                type="text"
                className="text-black pl-1 my-3 max-w-full"
            />
            <br />
            <span className="w-8/12 inline-block text-right">
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
