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
        <div>
            <h1>All Blogs</h1>

            {blogs.map((blog) => {
                return (
                    <BlogCard blog={blog} />
                );
            })}
            <SuggestionCard />

        </div>
    )
}

export default AllBlogs





