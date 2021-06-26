import React from "react";
import { useGlobalContext } from "../../util/GlobalState";
const CommentInput = () => {
    const [globalStore, dispatch] = useGlobalContext()
    return (<div class='flex flex-1 flex-col justify-center items-center my-5 bg-black bg-opacity-40 rounded '>
        <h4 class='my-5'>Join the discussion</h4>

        <textarea id="comment" class='text-black px-2 resize-y w-80 p-1 ' type="text"></textarea><button
            class=' my-5 min-w-max ' id="submit" data-userid={globalStore.currentUser.id}
            data-dq={globalStore.dailyQuestion.id}>Submit</button>

    </div>
    )
}

export default CommentInput;