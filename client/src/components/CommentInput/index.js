import React, { useState } from "react";
import { useGlobalContext } from "../../util/GlobalState";
const CommentInput = () => {
    // eslint-disable-next-line no-unused-vars
    const [globalStore, dispatch] = useGlobalContext()

    const [commentState, setCommentState] = useState({ comment: '' });

    const handleFormChange = (event) => {
        setCommentState({ ...commentState, [event.target.name]: event.target.value })
    }

    const handleFormSubmit = (event) => {
        //handle submit of comment
        // eslint-disable-next-line no-unused-vars
        const { currentUser } = globalStore;
        // eslint-disable-next-line no-unused-vars
        const { comment } = commentState;
        setCommentState({ ...commentState, comment: '' })

    }

    return (<div className='flex flex-col items-center justify-center flex-1 my-5 bg-black rounded bg-opacity-40 '>
        <h4 className='my-5'>Join the discussion</h4>

        <textarea value={commentState.comment} name="comment" className='p-1 px-2 text-black resize-y w-80 ' type="text" onChange={handleFormChange}></textarea>
        <button
            className='my-5  min-w-max' data-userid={globalStore.currentUser.id}
            data-dq={globalStore.dailyQuestion.id} onClick={handleFormSubmit}>Submit</button>

    </div>
    )
}

export default CommentInput;