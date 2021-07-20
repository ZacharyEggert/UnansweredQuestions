import React from 'react';

const BlogCard = (props) => {
    const { blog } = props;
    return (

        <div className="flex shadow-md px-5 flex-col self-center w-12/12 pb-8 mb-10 bg-black bg-opacity-50  sm:w-5/12 ">

            <div className=" text-xl italic text-middle sm:text-xl text-left">
                <ul>
                    <li>{blog.userName || "Beastmode420's Blog"}</li>
                    <li>{blog.createdAt || "07/17/1995"} </li>
                </ul>
            </div>
            <h1 className="my-4 text-2xl  lg:my-6 sm:text-3xl lg:text-3xl">
                {blog.title || "a non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? "}
            </h1>

        </div>
    );



}

export default BlogCard;

