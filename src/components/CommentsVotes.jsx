import { useState } from "react";
import {upateCommentVotes} from "../utils/api"

export const Votes = ({votes, id}) => {

    const [votesNo, setVotesNo] = useState(0)
    const handleChange = (value) => {
    setVotesNo((cuuentChange) => cuuentChange + value)
    upateCommentVotes(id, value)
    }
    return(
        <span><button  className= "Down" disabled= { votesNo === -1} onClick={() => handleChange(-1)}>-1</button>
    <span className="Votes">{votes + votesNo}  Votes</span>
    <button className= "Up" disabled= { votesNo === 1} onClick={() => handleChange(1)}>+1</button></span>
    )

}