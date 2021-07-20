import React, { useEffect, useState } from 'react'
import SuggestionCard from '../../components/SuggestionCard';
import BlogCard from '../../components/BlogCard';
import { getAllBlogs } from '../../util/API'



const AllBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        setBlogs([getAllBlogs()]);

    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-w-full min-h-full text-white bg-fixed bg-cover bg-greenleaf bg-fade">
            <div className="py-14"></div>
            <h1 className="py-2 mx-auto my-8 text-5xl text-center sm:w-10/12 ">User Blogs</h1>
            <div className="flex-initial py-10 px-10 mb-10 w-11/12 bg-[rgba(0,0,0,0.5)]">

                <div>
                    {blogs.map((blog) => {
                        return (
                            <BlogCard blog={blog} />
                        );
                    })}
                </div>


            </div>
            <SuggestionCard />
        </div>
    )
}

export default AllBlogs





