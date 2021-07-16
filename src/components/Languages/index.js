import { CardGroup, Card } from "react-bootstrap";
import { Link } from 'react-router-dom'

const Languages = ({match, languages}) => {

  return (
    <CardGroup>
      {
          languages.map((language, idx) => {
            return (
                <Link to={`/languages/${language._id}`} key={idx}>
                    <Card style={{maxWidth: "200px"}}>
                        <Card.Img variant="top" src={language.logo}/>
                        <Card.Body>
                        <Card.Title>{language.name}</Card.Title>
                        <Card.Text>
                            Author: {language.author}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Released: {language.year}</small>
                        </Card.Footer>
                    </Card>
                </Link>
            );
        })
      }
    </CardGroup>
  );
};

export default Languages;
