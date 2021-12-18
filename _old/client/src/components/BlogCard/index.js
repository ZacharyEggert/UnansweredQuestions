import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = (props) => {
    const { blog } = props;
    return (
        <div className='mx-4 my-4 flex-1 flex-shrink-0 min-w-[40%] md:w-5/12 '>
            <Link to={'/blog/' + blog.id} key={blog.id}>
                <div className="flex flex-col md:min-h-[15rem] px-5 py-4 bg-black bg-opacity-50">
                    <div className="text-xl italic text-left text-middle sm:text-xl">
                        <ul>
                            <li>{blog.userName}</li>
                            {/* <li>{blog.createdAt} </li> */}
                        </ul>
                    </div>
                    <h1 className="my-4 text-2xl text-center lg:my-6 sm:text-3xl lg:text-3xl">
                        {blog.title}
                    </h1>
                </div>
            </Link>
        </div>
    );
};

export default BlogCard;
