import React, { useState } from "react";
import { useGlobalContext } from "../../util/GlobalState";
const CommentInput = () => {
    const [globalStore, dispatch] = useGlobalContext()

    const [commentState, setCommentState] = useState({ comment: '' });

    const handleFormChange = (event) => {
        setCommentState({ ...commentState, [event.target.name]: event.target.value })
    }

    const handleFormSubmit = (event) => {
        //handle submit of comment
        const { currentUser } = globalStore;
        const { comment } = commentState;
        setCommentState({ ...commentState, comment: '' })

    }

    return (<div class='flex flex-1 flex-col justify-center items-center my-5 bg-black bg-opacity-40 rounded '>
        <h4 class='my-5'>Join the discussion</h4>

        <textarea value={commentState.comment} name="comment" class='text-black px-2 resize-y w-80 p-1 ' type="text" onChange={handleFormChange}></textarea>
        <button
            class=' my-5 min-w-max ' data-userid={globalStore.currentUser.id}
            data-dq={globalStore.dailyQuestion.id} onClick={handleFormSubmit}>Submit</button>

    </div>
    )
}

export default CommentInput;