import { useEffect, useState } from "react";
import { getComments } from "../utils/api";
import "../styling/comment.styling.css"


const Comments = ({articleid}) => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        getComments(articleid).then((commentsFromApi) => {
            setComments(commentsFromApi)
    })}, [])

    if(comments.length === 0){
        return(
            <>
            <h3>There are no comments yet!</h3>
            </>
        )
    } else {
        return(
            <>
                <ul className="comments">
                    {comments.map((comment) => {
                        let strDate = `${comment.created_at}`;
                        let date = strDate.substring(0, 10);
                        return (
                            <li className="comment">
                                <a className="comment_author">{comment.author}</a>
                                <p className="comment_date">{date}</p>
                                <p className="comment_body">{comment.body}</p>
                                <p className="comment_votes">votes: {comment.votes}</p>
                            </li>
                        )
                    })}</ul>
            </>
        )
    }
}

export default Comments