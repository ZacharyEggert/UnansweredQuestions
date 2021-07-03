import React from 'react';
import LoginForm from '../../components/LoginForm';
import SignupForm from '../../components/SignupForm';

const Login = () => {
    return (
        <div>
            <main
                className="min-w-full opacity-80 min-h-screen"
                // style="background-image: url(/img/background-butterfly-3.jpg);"
            >
                <div className="py-8"></div>

                <div className="m-14 p-7 bg-black bg-opacity-80 flex flex-row flex-wrap">
                    <div className="w-6/12 pr-1 min-w-max flex-1 flex-shrink-0">
                        <div className="">
                            <h1 className="text-4xl underline">Log in</h1>
                        </div>
                        <div className="form bg-white bg-opacity-20 p-8 py-8 w-auto h-72 max-w-full">
                            <LoginForm />
                        </div>
                    </div>
                    <div className="w-6/12 pl-1 flex-1 min-w-max flex-shrink-0">
                        <div className="signup-label">
                            <h1 className="text-4xl underline">Sign up</h1>
                        </div>
                        <div className="form bg-white bg-opacity-20 p-8 py-8 w-auto h-72 max-w-full">
                            <SignupForm />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Login;
