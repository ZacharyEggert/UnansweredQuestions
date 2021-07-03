import React from 'react';

const Login = () => {
    return (
        <div>
            <main
                className='min-w-full opacity-80 min-h-screen'
                style='background-image: url(/img/background-butterfly-3.jpg);'>

                <div className='py-8'></div>

                <div className='m-14 p-7 bg-black bg-opacity-80 flex flex-row flex-wrap'>
                        <div className='w-6/12 pr-1 min-w-max flex-1 flex-shrink-0'>
                            <div className=''>
                                <h1 className='text-4xl underline'>Log in</h1>
                            </div>
                        <div className='form bg-white bg-opacity-20 p-8 py-8 w-auto h-72 max-w-full'>
                            <form>
                                <label
                                    for='email'
                                    className='w-2/12 inline-block my-3'
                                    hidden
                                ></label>
                                <input
                                    name='email'
                                    id=''
                                    type='text'
                                    className='text-black pl-1 my-3 max-w-full'
                                    hidden
                                />
                                <br>
                                <label
                                    for='username'
                                    className='w-4/12 inline-block my-3'
                                >Username</label>
                                <input
                                    name='username'
                                    id='username'
                                    type='text'
                                    className='text-black pl-1 my-3 max-w-full'
                                />
                                <br>
                                <label
                                    for='password'
                                    className='w-4/12 inline-block my-3'
                                >Password</label>
                                <input
                                    name='password'
                                    id='password'
                                    type='text'
                                    className='text-black pl-1 my-3 max-w-full'
                                />
                                <br>
                                <span className='w-8/12 inline-block text-right'><button
                                        id='login'
                                        type='submit'
                                        style='background-color:#4d83a3;'
                                        className='text-white rounded-md px-3 border-white border-2 border-solid whitespace-nowrap w-auto md:w-3/12 min-w-min'
                                    >Log in</button></span>
                            </form>
                        </div>
                    </div>
                    <div className='w-6/12 pl-1 flex-1 min-w-max flex-shrink-0'>
                        <div className='signup-label'>
                            <h1 className='text-4xl underline'>Sign up</h1>
                        </div>
                        <div className='form bg-white bg-opacity-20 p-8 py-8 w-auto h-72 max-w-full'>
                            <form>
                                <label for='email' className='w-4/12 inline-block my-3'>Email</label>
                                <input
                                    name='email'
                                    id='signupemail'
                                    type='text'
                                    className='text-black pl-1 my-3 max-w-full'
                                />
                                <br>
                                <label
                                    for='username'
                                    className='w-4/12 inline-block my-3'
                                >Username</label>
                                <input
                                    name='username'
                                    id='signupusername'
                                    type='text'
                                    className='text-black pl-1 my-3 max-w-full'
                                />
                                <br>
                                <label
                                    for='password'
                                    className='w-4/12 inline-block my-3'
                                >Password</label>
                                <input
                                    name='password'
                                    id='signuppassword'
                                    type='text'
                                    className='text-black pl-1 my-3 max-w-full'
                                />
                                <br>
                                <span className='w-8/12 inline-block text-right'><button
                                        id='signup'
                                        type='submit'
                                        style='background-color:#4d83a3;'
                                        className='text-white rounded-md px-3 border-white border-2 border-solid whitespace-nowrap w-auto md:w-3/12 min-w-min'
                                    >Sign up</button></span>
                            </form>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default Login;