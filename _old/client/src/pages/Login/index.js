import React from 'react';
import LoginForm from '../../components/LoginForm';
import SignupForm from '../../components/SignupForm';

const Login = () => {
    return (
        <div className="min-h-full pb-4 bg-fixed bg-cover bg-butterfly-3 bg-fade">
            <main
                className="min-w-full min-h-full"
                // style='background-image: url(/img/background-butterfly-3.jpg);'
            >
                <div className="py-12"></div>

                <div className="flex flex-row flex-wrap m-4 bg-black md:m-14 p-7 bg-opacity-60">
                    <div className="flex-1 flex-shrink-0 w-11/12 md:w-2/12 min-w-max md:mr-1">
                        <div className="">
                            <h1 className="p-8 mb-4 text-4xl text-white underline">
                                Log in
                            </h1>
                        </div>
                        <div className="w-auto max-w-full p-8 py-8 bg-[rgba(255,255,255,0.2)] min-h-[20rem] text-white">
                            <LoginForm />
                        </div>
                    </div>
                    <div className="flex-1 flex-shrink-0 w-6/12 pl-1 min-w-max">
                        <div className="signup-label">
                            <h1 className="p-8 mb-4 text-4xl text-white underline">
                                Sign up
                            </h1>
                        </div>
                        <div className="w-auto max-w-full p-8 py-8 bg-[rgba(255,255,255,0.2)] min-h-[20rem] text-white">
                            <SignupForm />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Login;
