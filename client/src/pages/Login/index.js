import React from 'react';

const Login = () => {
    return (
        <div className='min-h-full bg-fixed bg-cover bg-butterfly-3 bg-fade'>
            <main
                className='min-w-full min-h-screen'
            // style='background-image: url(/img/background-butterfly-3.jpg);'
            >

                <div className='py-8'></div>

                <div className='flex flex-row flex-wrap bg-black m-14 p-7 bg-opacity-20'>
                    <div className='flex-1 flex-shrink-0 w-6/12 pr-1 min-w-max'>
                        <div className=''>
                            <h1 className='p-8 mb-4 text-4xl text-white underline'>Log in</h1>
                        </div>
                        <div className='w-auto max-w-full p-8 py-8 bg-[rgba(255,255,255,0.2)] h-72 text-white'>
                            <form>
                                <label
                                    htmlFor='email'
                                    className='inline-block w-2/12 my-3 '
                                    hidden
                                ></label>
                                <input
                                    name='email'
                                    id=''
                                    type='text'
                                    className='max-w-full pl-1 my-3 text-black'
                                    hidden
                                />
                                <br />
                                <label
                                    htmlFor='username'
                                    className='inline-block w-4/12 my-3'
                                >Username</label>
                                <input
                                    name='username'
                                    id='username'
                                    type='text'
                                    className='max-w-full pl-1 my-3 text-black'
                                />
                                <br />
                                <label
                                    htmlFor='password'
                                    className='inline-block w-4/12 my-3'
                                >Password</label>
                                <input
                                    name='password'
                                    id='password'
                                    type='text'
                                    className='max-w-full pl-1 my-3 text-black bg-white'
                                />
                                <br />
                                <span className='inline-block w-8/12 text-right'><button
                                    id='login'
                                    type='submit'
                                    className='py-1 button'
                                >Log in</button></span>
                            </form>
                        </div>
                    </div>
                    <div className='flex-1 flex-shrink-0 w-6/12 pl-1 min-w-max'>
                        <div className='signup-label'>
                            <h1 className='p-8 mb-4 text-4xl text-white underline'>Sign up</h1>
                        </div>
                        <div className='w-auto max-w-full p-8 py-8 bg-[rgba(255,255,255,0.2)] h-72 text-white'>
                            <form>
                                <label htmlFor='email' className='inline-block w-4/12 my-3'>Email</label>
                                <input
                                    name='email'
                                    id='signupemail'
                                    type='text'
                                    className='max-w-full pl-1 my-3 text-black '
                                />
                                <br />
                                <label
                                    htmlFor='username'
                                    className='inline-block w-4/12 my-3'
                                >Username</label>
                                <input
                                    name='username'
                                    id='signupusername'
                                    type='text'
                                    className='max-w-full pl-1 my-3 text-black '
                                />
                                <br />
                                <label
                                    htmlFor='password'
                                    className='inline-block w-4/12 my-3'
                                >Password</label>
                                <input
                                    name='password'
                                    id='signuppassword'
                                    type='text'
                                    className='max-w-full pl-1 my-3 text-black '
                                />
                                <br />
                                <span className='inline-block w-8/12 text-right'><button
                                    id='signup'
                                    type='submit'
                                    className='py-1 button'
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