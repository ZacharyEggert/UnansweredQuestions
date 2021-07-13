import React from 'react';

const SignupForm = () => {
    return (
        <form>
            <label for="email" className="w-4/12 inline-block my-3">
                Email
            </label>
            <input
                name="email"
                id="signupemail"
                type="text"
                className="text-black pl-1 my-3 max-w-full"
            />
            <br />
            <label for="username" className="w-4/12 inline-block my-3">
                Username
            </label>
            <input
                name="username"
                id="signupusername"
                type="text"
                className="text-black pl-1 my-3 max-w-full"
            />
            <br />
            <label for="password" className="w-4/12 inline-block my-3">
                Password
            </label>
            <input
                name="password"
                id="signuppassword"
                type="text"
                className="text-black pl-1 my-3 max-w-full"
            />
            <br />
            <span className="w-8/12 inline-block text-right">
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
