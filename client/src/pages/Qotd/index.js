import React from "react";
import { useGlobalContext } from "../../util/GlobalState";
import CommentCard from "../../components/CommentCard"
import CommentInput from "../../components/CommentInput"
import CommentLogin from "../../components/CommentLogin"
import SuggestionCard from "../../components/SuggestionCard";


const Qotd = () => {

    // eslint-disable-next-line no-unused-vars
    const [globalState, dispatch] = useGlobalContext();

    const { isLoggedin } = globalState;

    return (
        <div className='min-h-full bg-fixed bg-cover bg-branches-3 bg-fade text-white'>
            <main className="flex flex-col justify-center w-screen min-h-screen pt-20 p-7 bg-opacity-80">

                <div className='flex flex-col self-center max-w-5xl my-12 bg-black rounded-md p-7 bg-opacity-60 md:w-9/12'>
                    <div
                        className="flex flex-col items-center self-center max-w-lg pb-8 mb-24 bg-black rounded-md bg-opacity-40 md:w-12/12 ">
                        <h1 className='text-center'>Daily Question</h1>
                        <h2 className='italic text-center'>{globalState.dailyQuestion.name}</h2>
                    </div>

                    <h2 className='items-center flex-1 mb-10 text-center'>Comments</h2>


                    {globalState.dailyQuestion.comments.map((comment) => {
                        return (
                            <CommentCard comment={comment} key={comment.id} />
                        )
                    })}

                    {isLoggedin ? (<CommentInput />) : (<CommentLogin />)}

                </div>

                <div className="py-8 bg-black bg-opacity-80 sm:m-14">
                    <SuggestionCard />
                </div>
            </main>
        </div>
    )
}
export default Qotd;