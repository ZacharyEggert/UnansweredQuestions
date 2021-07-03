import React from 'react';

const Login = () => {
    return (
        <div>
            <main
                className='min-w-full min-h-screen opacity-80'
                // style='background-image: url(/img/background-butterfly-3.jpg);'
                >

                <div className='py-8'></div>

                <div className='flex flex-row flex-wrap bg-black m-14 p-7 bg-opacity-80'>
                        <div className='flex-1 flex-shrink-0 w-6/12 pr-1 min-w-max'>
                            <div className=''>
                                <h1 className='text-4xl underline'>Log in</h1>
                            </div>
                        <div className='w-auto max-w-full p-8 py-8 bg-white form bg-opacity-20 h-72'>
                            <form>
                                <label
                                    htmlFor='email'
                                    className='inline-block w-2/12 my-3'
                                    hidden
                                ></label>
                                <input
                                    name='email'
                                    id=''
                                    type='text'
                                    className='max-w-full pl-1 my-3 text-black'
                                    hidden
                                />
                                <br/>
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
                                <br/>
                                <label
                                    htmlFor='password'
                                    className='inline-block w-4/12 my-3'
                                >Password</label>
                                <input
                                    name='password'
                                    id='password'
                                    type='text'
                                    className='max-w-full pl-1 my-3 text-black'
                                />
                                <br/>
                                <span className='inline-block w-8/12 text-right'><button
                                        id='login'
                                        type='submit'
                                        className='bg-[#4d83a3] w-auto px-3 text-white border-2 border-white border-solid rounded-md whitespace-nowrap md:w-3/12 min-w-min'
                                    >Log in</button></span>
                            </form>
                        </div>
                    </div>
                    <div className='flex-1 flex-shrink-0 w-6/12 pl-1 min-w-max'>
                        <div className='signup-label'>
                            <h1 className='text-4xl underline'>Sign up</h1>
                        </div>
                        <div className='w-auto max-w-full p-8 py-8 bg-white form bg-opacity-20 h-72'>
                            <form>
                                <label htmlFor='email' className='inline-block w-4/12 my-3'>Email</label>
                                <input
                                    name='email'
                                    id='signupemail'
                                    type='text'
                                    className='max-w-full pl-1 my-3 text-black'
                                />
                                <br/>
                                <label
                                    htmlFor='username'
                                    className='inline-block w-4/12 my-3'
                                >Username</label>
                                <input
                                    name='username'
                                    id='signupusername'
                                    type='text'
                                    className='max-w-full pl-1 my-3 text-black'
                                />
                                <br/>
                                <label
                                    htmlFor='password'
                                    className='inline-block w-4/12 my-3'
                                >Password</label>
                                <input
                                    name='password'
                                    id='signuppassword'
                                    type='text'
                                    className='max-w-full pl-1 my-3 text-black'
                                />
                                <br/>
                                <span className='inline-block w-8/12 text-right'><button
                                        id='signup'
                                        type='submit'
                                        className='bg-[#4d83a3] w-auto px-3 text-white border-2 border-white border-solid rounded-md whitespace-nowrap md:w-3/12 min-w-min'
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