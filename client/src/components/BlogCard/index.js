import React from 'react';

const BlogCard = (props) => {
    const { blogs } = props;
    return (
        <div className="">
            <div className="">

                <h2 className="">{blogs.title}</h2>
                <ul>
                    <li>{blogs.userName}</li>
                    <li>{blogs.createdAt}</li>
                </ul>
            </div>
        </div>
    );


}

export default BlogCard;

