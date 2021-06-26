import React from "react"
import { useGlobalContext } from "../../util/GlobalState"
import PollCard from "./PollCard"

const Polls = () => {
    const [globalState, dispatch] = useGlobalContext()

    return (
        <>
            <main class="poll-main" style="z-index:1; background-size: cover; background-repeat: no-repeat;">

                <div class="py-14"></div>
                <div class="flex flex-row flex-wrap px-6">
                    {globalState.polls.map((poll) => {
                        return (
                            <PollCard poll={poll} key={poll.id} />
                        )
                    })}



                </div>
                <div class="bg-black bg-opacity-60 w-12/12 m-8 py-8">
                    <SuggestionCard />
                </div>
            </main>

            <script src="/js/poll.js"></script>
        </>
    )
}

export default Polls