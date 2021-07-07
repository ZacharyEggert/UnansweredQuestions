import React from "react";

const CommentCard = (props) => {
    const { comment } = props
    return (
        <>
            <div className='self-center w-11/12 px-5 py-5 my-3 bg-[rgba(0,0,0,0.5)] rounded-md md:w-9/12'>
                <h3 className='pr-3 text-gray-400 '>{comment.user.username}</h3>
                <p className='mt-2 ml-8 '>{comment.content}</p>

            </div>
        </>
    )
}

export default CommentCard
