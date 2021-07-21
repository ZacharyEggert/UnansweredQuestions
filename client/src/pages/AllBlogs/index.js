import React, { useEffect, useState } from 'react';
import SuggestionCard from '../../components/SuggestionCard';
import BlogCard from '../../components/BlogCard';
import CreateBlog from '../../components/CreateBlog';
import { getAllBlogs } from '../../util/API';
import { Link } from 'react-router-dom';

const AllBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        getAllBlogs().then((response) => {
            setBlogs(response);
        });
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-w-full min-h-full text-white bg-fixed bg-cover bg-greenleaf bg-fade">
            <div className="py-14"></div>
            <h1 className="py-2 my-8 text-5xl text-center sm:w-10/12 ">
                User Blogs
            </h1>
            <div className=" flex flex-col  space-between py-10 px-10 mb-10 bg-[rgba(0,0,0,0.5)] md:flex-row">
                {blogs?.length &&
                    blogs.map((blog) => {
                        return (
                            <Link to={'/blog/' + blog.id} key={blog.id}>
                                <BlogCard blog={blog}  />
                            </Link>
                        );
                    })}
            </div>
            <CreateBlog setBlogs={setBlogs} />
            <SuggestionCard />
        </div>
    );
};

export default AllBlogs;
