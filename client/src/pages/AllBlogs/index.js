import React, { useEffect, useState } from 'react'
import SuggestionCard from '../../components/SuggestionCard';
import BlogCard from '../../components/BlogCard';



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
                    <BlogCard blogs={blogs} />
                );
            })}
            <SuggestionCard />

        </div>
    )
}

export default AllBlogs





