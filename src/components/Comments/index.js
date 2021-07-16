import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function Comments(){

    const [comments, setComments] = useState([]);

    //API call to post comments - will need to pass out match props to get lanaguage ID and pass it to req.body

    const getCommentsData = async () => {
        const LANG_API_ENDPOINT = `http://localhost:8080/languages/${match.params.id}`
        try{
            const response = await fetch(LANG_API_ENDPOINT);
            const data = await response.json();
            setComments(data.comment)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getCommentsData();
    },[])

    //function to handle delete

    return(
        <Container>
        {sampleCommentData.map((comment, i) => {
                return(
                    <div>
                        <div className='comment-items' key={i}>
                            <p><span style={{color:'blue'}}>{comment.name}</span>: {comment.body}</p>     
                        </div>
                        <div>
                            <Button variant="outline-secondary"> 
                            <Link style={{
                                textDecoration:'none',
                                color:'rgb(97, 106, 113)'
                                }} to={`/`}>EDIT</Link>
                            </Button>
                            <Button variant="secondary">
                                DELETE
                            </Button>
                        </div>
                        
                    </div>
                )
        })}
        </Container>
    )
}

// Link to={`/comments/${comment._id}/edit`}