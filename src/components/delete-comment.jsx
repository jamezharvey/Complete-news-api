import { deleteComment } from "../utils/api";
import '../styling/comment.styling.css'

const DeleteButton = ({comment, setComments, username}) => {
    const handleDelete = (event) => {
        event.preventDefault();
        setComments((currComments) => {
            const postDeletionComments = [...currComments];
            return postDeletionComments.filter(
                (thisComment) => thisComment.comment_id !== comment.comment_id
            )
        })
        console.log(comment.comment_id)
        deleteComment(comment.comment_id)
    }

    if (comment.author === username) {

    return (
      <button className="comment_delete" 
        onClick={handleDelete}
      >
        Delete
      </button>
    );
  }
}

export default DeleteButton