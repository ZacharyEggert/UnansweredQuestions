import React from "react"
import { useGlobalContext } from "../../util/GlobalState"
import PollCard from "../../components/PollCard"
import SuggestionCard from '../../components/SuggestionCard'

const Polls = () => {
    // eslint-disable-next-line no-unused-vars
    const [globalState, dispatch] = useGlobalContext()


    return (
        <>
            <main class="min-h-full bg-cover bg-blue-petals bg-opacity-80 bg-fixed">

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