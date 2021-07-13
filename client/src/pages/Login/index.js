import React from 'react';
import LoginForm from '../../components/LoginForm';
import SignupForm from '../../components/SignupForm';

const Login = () => {
    return (
        <div className="min-h-full bg-fixed bg-cover bg-butterfly-3 bg-fade">
            <main
                className="min-w-full min-h-screen"
                // style='background-image: url(/img/background-butterfly-3.jpg);'
            >
                <div className="py-8"></div>

                <div className="flex flex-row flex-wrap bg-black m-14 p-7 bg-opacity-20">
                    <div className="flex-1 flex-shrink-0 w-6/12 pr-1 min-w-max">
                        <div className="">
                            <h1 className="p-8 mb-4 text-4xl text-white underline">
                                Log in
                            </h1>
                        </div>
                        <div className="w-auto max-w-full p-8 py-8 bg-[rgba(255,255,255,0.2)] h-72 text-white">
                            <LoginForm />
                        </div>
                    </div>
                    <div className="flex-1 flex-shrink-0 w-6/12 pl-1 min-w-max">
                        <div className="signup-label">
                            <h1 className="p-8 mb-4 text-4xl text-white underline">
                                Sign up
                            </h1>
                        </div>
                        <div className="w-auto max-w-full p-8 py-8 bg-[rgba(255,255,255,0.2)] h-72 text-white">
                            <SignupForm />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Login;
