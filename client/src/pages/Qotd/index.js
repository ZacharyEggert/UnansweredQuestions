import React from "react";
import { useGlobalContext } from "../../util/GlobalState";
import CommentCard from "./components/CommentCard"

const [globalState, dispatch] = useGlobalContext
const Qotd = () => {
    return (
        <div>
            <main class="p-7 pt-20 bg-black bg-opacity-80 flex flex-col justify-center w-screen min-h-screen "
                style='background-image: url(/img/background-branches3.jpg);'>

                <div class='my-12 p-7 bg-black bg-opacity-60 flex flex-col rounded-md max-w-5xl md:w-9/12 self-center'>
                    <div
                        class="flex flex-col items-center self-center  mb-24 bg-black bg-opacity-40 pb-8 rounded-md max-w-lg md:w-12/12 ">
                        <h1 class='text-center'>Daily Question</h1>
                        <h2 class='italic text-center'>{globalState.dailyQuestion.name}</h2>
                    </div>

                    <h2 class='flex-1 items-center mb-10 text-center'>Comments</h2>


                    {globalState.dailyQuestion.comments.map((comment) => {
                        return (
                            <CommentCard comment={comment} key={comment.id} />
                        )
                    })}

                    {isLoggedin ? (<CommentInput />) : (<CommentLogin />)}

                </div>

                <div class="bg-black bg-opacity-80 sm:m-14 py-8">
                    <SuggestionCard />
                </div>
            </main>
            <script src="/js/qotd.js"></script>
        </div>
    )
}
export default Qotd;