import React from 'react';

const SuggestionForm: React.FC<React.ComponentProps<'form'>> = (props) => {
    const [formState, setFormState] = React.useState({
        subject: 'choose',
        philosopher: '',
        quote: '',
        question: '',
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Submitted ', formState);
    };

    return (
        <form
            onSubmit={handleSubmit}
            {...props}
            className={`${props.className} flex flex-col`}>
            <div className='flex flex-row justify-between px-8 py-4 items-center'>
                <label htmlFor='subject' className=''>
                    What would you like to
                    <br />
                    make a suggestion for?
                </label>
                <select
                    value={formState.subject}
                    onChange={(e) =>
                        setFormState({ ...formState, subject: e.target.value })
                    }
                    className='text-stone-900 text-lg w-48 px-1'
                    id='subject'
                    name='subject'>
                    <option value='choose' disabled>
                        Choose Subject...
                    </option>
                    <option value='philosopher' className='hover:bg-stone-500'>
                        Philosopher
                    </option>
                    <option value='quote' className='hover:bg-stone-500'>
                        Quote
                    </option>
                    <option
                        value='dailyQuestion'
                        className='hover:bg-stone-500'>
                        Daily Question
                    </option>
                </select>
            </div>
            {formState.subject === 'philosopher' && (
                <div className='flex flex-row justify-between px-8 py-4 items-center'>
                    <label htmlFor='philosopher' className=''>
                        What philosopher would
                        <br />
                        you like to suggest?
                    </label>
                    <input
                        required
                        className='text-stone-900 text-lg w-48 px-1'
                        type={'text'}
                        id='philosopher'
                        name='philosopher'
                        value={formState.philosopher}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                philosopher: e.target.value,
                            })
                        }
                        placeholder='Trey Love'
                    />
                </div>
            )}
            {formState.subject === 'dailyQuestion' && (
                <div className='flex flex-row justify-between px-8 py-4 items-center'>
                    <label htmlFor='question' className=''>
                        What question would
                        <br />
                        you like to suggest?
                    </label>
                    <input
                        required
                        className='text-stone-900 text-lg w-48 px-1'
                        type={'text'}
                        id='question'
                        name='question'
                        value={formState.question}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                question: e.target.value,
                            })
                        }
                        placeholder='What is love?'
                    />
                </div>
            )}
            {formState.subject === 'quote' && (
                <>
                    <div className='flex flex-row justify-between px-8 py-4 items-center'>
                        <label htmlFor='philosopher' className=''>
                            What philosopher would
                            <br />
                            you like to suggest?
                        </label>
                        <input
                            required
                            className='text-stone-900 text-lg w-48 px-1'
                            type={'text'}
                            id='philosopher'
                            name='philosopher'
                            value={formState.philosopher}
                            onChange={(e) =>
                                setFormState({
                                    ...formState,
                                    philosopher: e.target.value,
                                })
                            }
                            placeholder='Trey Love'
                        />
                    </div>
                    <div className='flex flex-row justify-between px-8 py-4 items-center'>
                        <label htmlFor='quote' className=''>
                            What quote would
                            <br />
                            you like to suggest?
                        </label>
                        <input
                            required
                            className='text-stone-900 text-lg w-48 px-1'
                            type={'text'}
                            id='quote'
                            name='quote'
                            value={formState.quote}
                            onChange={(e) =>
                                setFormState({
                                    ...formState,
                                    quote: e.target.value,
                                })
                            }
                            placeholder="I don't know man..."
                        />
                    </div>
                </>
            )}
            <div className='flex flex-row justify-end items-end px-8 flex-1 pb-4'>
                <button
                    type='submit'
                    className='ml-auto mt-auto px-3 py-2 border rounded-md text-lg border-stone-400 bg-stone-700 bg-opacity-60'>
                    Submit
                </button>
            </div>
        </form>
    );
};

export default SuggestionForm;
