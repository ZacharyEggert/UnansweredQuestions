import React from 'react';

const CommentCard = (props) => {
    const { comment } = props;
    return (
        <>
            <div className="self-center w-11/12 px-5 py-5 my-3 bg-[rgba(0,0,0,0.5)] rounded-md md:w-10/12">
                <h3 className="text-[#AAA] italic">{comment.user}</h3>
                <p className="w-11/12 mx-auto mt-4 sm:w-10/12 ">
                    {comment.content}
                </p>
            </div>
        </>
    );
};

export default CommentCard;
