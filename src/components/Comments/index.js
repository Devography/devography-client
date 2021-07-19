import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Comments({ match }) {
  
  const [comments, setComments] = useState([]);

    const getCommentsData = async () => {
        const LANG_API_ENDPOINT = `https://devography.herokuapp.com/languages/${match.params.id}`
        try{
            const response = await fetch(LANG_API_ENDPOINT);
            const data = await response.json();
            setComments(data.comments)
        }catch(err){
            console.log(err)
        }
    }

  useEffect(() => {
    getCommentsData();
    //eslint-disable-next-line
  }, []);

  //function to handle delete

    const _handleDelete = async (e) =>{
        const COMM_API_ENDPOINT = `https://devography.herokuapp.com/comments/${e.target.value}`
        try{
            const deleteComment = await fetch(COMM_API_ENDPOINT, {
                method: 'DELETE',
            })
            if(deleteComment.status === 204){
                console.log('Comment have been deleted')
                getCommentsData();
            }else{
                alert('Oops, something went wrong!')
            }
        }catch(err){
            console.log(err)
        }
    }

  if (!comments) {
    return <p>No comments</p>
  }

  return (
    <Container>
      {comments.map((comment, i) => {
        return (
          <div className="comment-container" key={i}>
            <div className="comment-items">
              <p>
                <span style={{ color: "blue" }}>{comment.name}</span>:{" "}
                {comment.body}
              </p>
              {comment.createdAt === comment.updatedAt ? (
                <small>
                  Created at: {new Date(comment.createdAt).toLocaleString()}
                </small>
              ) : (
                <small>
                  Updated at: {new Date(comment.updatedAt).toLocaleString()}
                </small>
              )}
            </div>
            <div>
              <Button variant="outline-secondary">
                <Link
                  style={{
                    textDecoration: "none",
                    color: "rgb(97, 106, 113)",
                  }}
                  to={`/languages/${match.params.id}/comments/${comment._id}/edit`}
                >
                  EDIT
                </Link>
              </Button>
              <Button
                variant="secondary"
                onClick={_handleDelete}
                value={comment._id}
              >
                DELETE
              </Button>
            </div>
          </div>
        );
      })}
    </Container>
  )
}