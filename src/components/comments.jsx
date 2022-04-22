import { useEffect, useState } from "react";
import { getComments, postComments } from "../utils/api";
import DeleteButton from "./delete-comment";
import "../styling/comment.styling.css"


const Comments = ({articleid}) => {
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState("");
    const [username] = useState("cooljmessy")
    const [err, setErr] = useState(null)
    const [isSendable, setIsSendable] = useState(true);

    useEffect(() => {
        getComments(articleid).then((commentsFromApi) => {
            setComments(commentsFromApi)
    })}, [articleid])

    const handleSubmit = (event) => {
        event.preventDefault();
        if(isSendable && newComment !== ""){
        setComments((currentComments) => {
            return [
            {
              body: newComment,
              author: username,
              votes: 0,
            },
            ...currentComments,
          ];
        });

        postComments(articleid, {
            body: newComment,
            username: username
        })
        .then(() => {
            return getComments(articleid)
        })
        .then((data) => {
            setComments(data)
            setNewComment("");
            setIsSendable(true)
        })
        .catch((error) => {
            setErr(error)
        })

        }
    }


    return(
        <>
            <form className="comment_form" onSubmit={handleSubmit}>
            <h4 className="comment_header">Leave a comment:</h4>
            <textarea
                className="comment_input"
                name="comment-body"
                maxLength="300" 
                value={newComment}
                onChange={(event) => {
                    setNewComment(event.target.value);
                }}
            ></textarea>
            <div className="comment_submit">
                <p className="comment_char">{300 - newComment.length}</p>
                <button className="comment_button">Submit</button>
            </div>
            </form>
            <ul className="comments">
                {comments.map((comment) => {
                    let strDate = `${comment.created_at}`;
                    let date = strDate.substring(0, 10);
                    return (
                        <li key={comment.comment_id} className="comment">
                            <a className="comment_author">{comment.author}</a>
                            <p className="comment_date">{date}</p>
                            <p className="comment_body">{comment.body}</p>
                            <div className="comment_interaction">
                                <p className="comment_votes">votes: {comment.votes}</p>
                                <DeleteButton comment={comment} setComments={setComments} username={username}/>
                            </div>
                        </li>
                    )
                })}</ul>
        </>
    )
    
}

export default Comments