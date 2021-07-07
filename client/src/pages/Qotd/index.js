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
        <div className='min-h-full text-white bg-fixed bg-cover bg-branches-3 bg-fade'>
            <main className="flex flex-col justify-center w-screen min-h-screen pt-20 p-7 bg-opacity-80">

                <div className='flex flex-col self-center my-12 bg-black rounded-md p-7 bg-opacity-60 sm:w-9/12'>
                    <div
                        className="flex flex-col self-center w-10/12 pb-8 mb-24 bg-black bg-opacity-50 rounded-md sm:w-8/12">
                        <h1 className='my-4 text-3xl text-center lg:my-6 sm:text-5xl lg:text-6xl'>Daily Question</h1>
                        <h2 className='mx-4 text-xl italic text-center sm:text-2xl'>{globalState.dailyQuestion.content}</h2>
                    </div>

                    <h2 className='flex-1 mb-10 text-center'>Comments</h2>


                    {globalState.dailyQuestion.comments.map((comment) => {
                        return (
                            <CommentCard comment={comment} key={comment.id} />
                        )
                    })}

                    {isLoggedin ? (<CommentInput />) : (<CommentLogin />)}

                </div>

                <div className="py-8 mx-auto bg-black bg-opacity-60 sm:m-14 sm:w-9/12">
                    <SuggestionCard />
                </div>
            </main>
        </div>
    )
}
export default Qotd;