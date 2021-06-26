import React from "react";

const CommentCard = (props) => {
    const { comment } = props
    return (
        <>
            <div class='bg-white bg-opacity-30 rounded-md my-3 py-5 px-5 self-center w-11/12 md:w-9/12'>
                <h3 class='pr-3 text-gray-400 '>{comment.user.username}</h3>
                <p class='ml-8 mt-2 '>{comment.content}</p>

            </div>
        </>
    )
}

export default CommentCard
