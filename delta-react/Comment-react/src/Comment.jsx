import { useState } from "react";
import "./Comment.css";
import Commentsform from "./CommentsForms";

export default function Comment() {
    let [Comments, setComment] = useState([
        {
            username: "@DJ",
            remarks: "great job",
            rating: 4,
        }
    ]);

    let addNewComment = (comment) => {
        setComment((currComments) => [...currComments, comment]);
    };

    return (
        <>
            <Commentsform addNewComment={addNewComment} />
            <div>
                <h3>All comments</h3>
                {Comments.map((comment, idx) => (
                    <div className="comment" key={idx}>
                        <span>{comment.remarks}</span>
                        &nbsp;
                        <span>(rating={comment.rating})</span>
                        <p>- {comment.username}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
