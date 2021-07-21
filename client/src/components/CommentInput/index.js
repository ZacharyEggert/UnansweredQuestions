import React, { useState } from 'react';
import { useGlobalContext } from '../../util/GlobalState';
import { postComment } from '../../util/API';

const CommentInput = ({ dailyQuestion }) => {
    // eslint-disable-next-line no-unused-vars
    const [globalStore, dispatch] = useGlobalContext();

    const [commentState, setCommentState] = useState({ comment: '' });

    const handleFormChange = (event) => {
        setCommentState({
            ...commentState,
            [event.target.name]: event.target.value,
        });
    };

    const handleFormSubmit = (event) => {
        //handle submit of comment
        event.preventDefault();
        const { comment } = commentState;
        const { currentUser } = globalStore;

        if (comment.length > 0) {
            postComment({
                comment,
                daily_id: dailyQuestion.id,
                user_id: currentUser?.user.id,
            })
                .then((response) => {
                    console.debug(response);
                    setCommentState({ comment: '' });
                    dispatch({ type: 'COMMENT_SUCCESS', data: response.data });
                })
                .catch((error) => {
                    console.error(error);
                });

            setCommentState({ ...commentState, comment: '' });
        }
        // eslint-disable-next-line no-unused-vars
    };

    return (
        <div className="flex flex-col items-center justify-center flex-1 w-11/12 mx-auto my-5 bg-black bg-opacity-50 rounded sm:w-10/12 ">
            <h4 className="my-4 text-2xl italic text-[#CCC]">
                Join the discussion
            </h4>

            <textarea
                value={commentState.comment}
                name="comment"
                className="w-11/12 p-1 px-2 text-black resize-y sm:w-8/12 "
                type="text"
                onChange={handleFormChange}
            ></textarea>
            <div className="flex flex-row-reverse w-11/12 mx-auto sm:w-8/12">
                <button className="px-4 my-4 button" onClick={handleFormSubmit}>
                    Submit
                </button>
            </div>
        </div>
    );
};

export default CommentInput;
