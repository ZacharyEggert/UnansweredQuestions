import React, { useState } from 'react';
import { useGlobalContext } from '../../util/GlobalState';
import { getAllBlogs, postBlog } from '../../util/API';


const CreateBlog = ({ setBlogs }) => {
    // eslint-disable-next-line no-unused-vars
    const [globalStore, dispatch] = useGlobalContext();

    const [blogState, setBlogState] = useState({ title: '', content: '' });

    const handleFormChange = (event) => {
        setBlogState({
            ...blogState,
            [event.target.name]: event.target.value,
        });
    };

    const handleFormSubmit = (event) => {
        //handle submit of new blog
        event.preventDefault();
        const { title, content } = blogState;

        const { currentUser } = globalStore;

        if (title.length && content.length > 0) {
            postBlog({
                title: title,
                content: content,
                userName: currentUser?.user.user_name,
                user_id: currentUser?.id,

            })
                .then((response) => {
                    console.debug(response);
                    setBlogState({ title: '', content: '' });
                    getAllBlogs().then((response) => {
                        setBlogs(response);
                    });

                })
                .catch((error) => {
                    console.error(error);
                });


            setBlogState({ ...blogState, title: '', content: '' });
        }
        // eslint-disable-next-line no-unused-vars
    };

    return (
        <div className="flex flex-col items-center justify-center flex-1 w-11/12 mx-auto my-5 bg-black bg-opacity-50 rounded sm:w-10/12 ">
            <h4 className="my-4 text-2xl italic text-[#CCC]">
                Create a new blog
            </h4>
            <h1>Title</h1>
            <textarea
                value={blogState.title}
                name="title"
                className="w-11/12 p-1 px-2 text-black resize-y sm:w-8/12 "
                type="text"
                onChange={handleFormChange}
            ></textarea>
            <h1>Post</h1>
            <textarea
                value={blogState.content}
                name="content"
                className="w-11/12 p-1 px-2 text-black resize-y sm:w-8/12 "
                type="text"
                onChange={handleFormChange}
            ></textarea>
            <div className="flex flex-row-reverse w-11/12 mx-auto sm:w-8/12">
                <button className="px-4 my-4 button" onClick={handleFormSubmit}>
                    Submit
                </button>
            </div>
        </div>
    );
};

export default CreateBlog;
