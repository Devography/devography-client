import {useState, useEffect} from 'react'
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
        <p>Hello from the Language component</p>
        <CreateComment/>
        <Comments/>
        </>
    )
}

export default Language