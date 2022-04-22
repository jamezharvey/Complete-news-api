import { useState } from "react";
import { patchVotes } from "../utils/api";
import '../styling/article.styling.css'

const VoteButton = ({articleid, votes}) => {
    const[voteCount, setVoteCount] = useState(votes);
    // const[errorMsg, setErrorMsg] = useState('');
    const[isVoted, setIsVoted] = useState(false)

    const handleVote = () => {
    const increment = isVoted === true ? -1 : 1;
    setVoteCount(currVoteCount => currVoteCount + increment);
    setIsVoted(!isVoted);
    patchVotes(articleid, {inc_votes: increment})
    .catch(() => {
        setVoteCount(currVoteCount => currVoteCount - increment)
    })
    }

    if(votes === undefined || votes === null || votes === false){
        return null
    }

    return (
        <div className="votes">
        <button className="vote_button" onClick={handleVote}>{isVoted ? "Unvote" : "Vote"}</button>
        <p className="vote_count">{voteCount}</p>
        </div>
    )
}

export default VoteButton