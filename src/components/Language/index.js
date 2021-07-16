import {useState, useEffect} from 'react'
import {Card, ListGroup} from 'react-bootstrap/'
import CreateComment from "../CreateComment"
import Comments from "../Comments"

const Language = ({match}) => {

    const [language, setLanguage] = useState([])
    const API_ENDPOINT_ID = `http://localhost:4000/languages/${match.params.id}`

    const getLanguage = async () => {
        try {
            const response = await fetch(API_ENDPOINT_ID)
            const data = await response.json()
            setLanguage(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect (() => {
        getLanguage()
        //eslint-disable-next-line
    }, [])

    return (
        <>
        <h1 style={{textAlign:'center'}}>{`{ ${language.name} }`}</h1>
        <Card style={{width:'400px', margin:'20px auto'}}>
            <Card.Img variant="top" src={language.logo} />
            <Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Author: {language.author}</ListGroup.Item>
                <ListGroup.Item>Release Date: {language.year}</ListGroup.Item>
            </ListGroup>
            </Card.Body>
        </Card>
        <CreateComment/>
        <Comments match={match} />
        </>
    )
}

export default Language