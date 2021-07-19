import React from 'react';

const BlogCard = (props) => {
    const { blog } = props;
    return (
        <div className="">
            <div className="">

                <h2 className="">{blog.title}</h2>
                <ul>
                    <li>{blog.userName}</li>
                    <li>{blog.createdAt}</li>
                </ul>
            </div>
        </div>
    );


}

export default BlogCard;

