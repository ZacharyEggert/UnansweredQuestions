import React, { useRef, useState } from 'react';

interface Props {}

const Login: React.FC<Props> = ({}) => {
    const [signup, setSignup] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('submit: ', formRef.current, signup);
    };

    return (
        <main className='w-full min-h-screen relative grid place-items-center bg-sakura bg-cover bg-fixed'>
            <div className='w-11/12 sm:w-9/12 xl:w-6/12 min-h-[24rem] bg-stone-950 bg-opacity-60 will-change-contents transition-all'>
                <form
                    className='mx-auto w-5/6 py-4'
                    ref={formRef}
                    onSubmit={submitForm}>
                    <div className='pt-4'>
                        <h2 className='text-3xl'>
                            {signup ? 'Sign Up' : 'Log In'}
                        </h2>
                    </div>

                    <div className='relative my-2 group pt-8'>
                        <input
                            className='w-full text-skin-text peer placeholder-transparent border-solid border-[1px] ring-1 px-3 py-2 focus:ring-1 rounded-lg outline-none text-lg'
                            placeholder='Username'
                            id='username'
                            autoComplete='username'
                            name='username'
                        />
                        <label
                            htmlFor='username'
                            className='absolute 
                            text-base top-1.5 
                            peer-placeholder-shown:text-lg left-3 
                            peer-placeholder-shown:top-10 
                            peer-placeholder-shown:text-stone-800 
                            text-stone-200 
                            transition-all pointer-events-none 
                            peer-placeholder-shown:peer-focus:text-stone-200 
                            peer-placeholder-shown:peer-focus:text-base
                            peer-placeholder-shown:peer-focus:top-1.5
                        '>
                            Username
                        </label>
                    </div>
                    {signup && (
                        <div className='relative my-2 group pt-8'>
                            <input
                                className='w-full text-skin-text peer placeholder-transparent border-solid border-[1px] ring-1 px-3 py-2 focus:ring-1 rounded-lg outline-none text-lg'
                                placeholder='Email'
                                id='email'
                                autoComplete='email'
                                name='email'
                            />
                            <label
                                htmlFor='email'
                                className='absolute 
                            text-base top-1.5 
                            peer-placeholder-shown:text-lg left-3 
                            peer-placeholder-shown:top-10 
                            peer-placeholder-shown:text-stone-800 
                            text-stone-200 
                            transition-all pointer-events-none 
                            peer-placeholder-shown:peer-focus:text-stone-200 
                            peer-placeholder-shown:peer-focus:text-base
                            peer-placeholder-shown:peer-focus:top-1.5
                        '>
                                Email
                            </label>
                        </div>
                    )}
                    <div className='relative my-2 group pt-8'>
                        <input
                            className='w-full text-skin-text peer placeholder-transparent border-solid border-[1px] ring-1 px-3 py-2 focus:ring-1 rounded-lg outline-none text-lg'
                            placeholder='Password'
                            id='password'
                            autoComplete='password'
                            name='password'
                        />
                        <label
                            htmlFor='password'
                            className='absolute 
                            text-base top-1.5 
                            peer-placeholder-shown:text-lg left-3 
                            peer-placeholder-shown:top-10 
                            peer-placeholder-shown:text-stone-800 
                            text-stone-200 
                            transition-all pointer-events-none 
                            peer-placeholder-shown:peer-focus:text-stone-200 
                            peer-placeholder-shown:peer-focus:text-base
                            peer-placeholder-shown:peer-focus:top-1.5
                        '>
                            Password
                        </label>
                    </div>
                    <div className='flex flex-row justify-between my-2 pt-8 group'>
                        <span className='text-lg indent-3'>
                            {signup
                                ? 'Already have an account?'
                                : "Don't have an account?"}
                            <button
                                className='text-stone-200 peer placeholder-transparent px-3 py-2 focus:ring-1 ring-stone-200 rounded-lg outline-none text-lg'
                                type='reset'
                                onClick={(e) => {
                                    e.preventDefault();
                                    setSignup(!signup);
                                }}>
                                {signup ? 'Log In' : 'Sign Up'}
                            </button>
                        </span>
                        <button
                            className='text-skin-text peer placeholder-transparent border-solid border-[1px] px-3 py-2 focus:ring-1 rounded-lg outline-none text-lg'
                            type='submit'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default Login;
