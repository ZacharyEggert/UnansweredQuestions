import React from "react";

const CommentLogin = () => {
    return (
        <>
            <div
                class="flex flex-1 flex-col justify-center items-center my-7 bg-black bg-opacity-50 w-64 self-center py-3 rounded-md">
                <h4 class='flex-1'>Log in to join the discussion.</h4>

                <link class='flex-1' to="/login">
                    <button class=' my-5 min-w-max' type="submit">Log in</button>
                </link>

            </div>

        </>
    )
}

export default CommentLogin