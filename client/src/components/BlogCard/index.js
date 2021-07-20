import React from 'react';

const BlogCard = (props) => {
    const { blog } = props;
    return (

        <div className="flex shadow-md ml-5 first:ml-0 px-5 flex-col pb-8 mb-10 bg-black bg-opacity-50  ">

            <div className=" text-xl italic text-middle sm:text-xl text-left">
                <ul>
                    <li>{blog.userName}</li>
                    <li>{blog.createdAt} </li>
                </ul>
            </div>
            <h1 className="my-4 text-2xl text-center  lg:my-6 sm:text-3xl lg:text-3xl">
                {blog.title}
            </h1>

        </div>
    );



}

export default BlogCard;

