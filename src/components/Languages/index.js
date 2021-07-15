import { CardDeck, Card } from "react-bootstrap";
import { FaJsSquare } from "react-icons/fa";

const getLanguages = [
  {
    name: "Javascript",
    author: "Brendan Eich",
    release_date: "December 4, 1995",
    logo: <FaJsSquare/>,
  },
  {
    name: "Javascript",
    author: "Brendan Eich",
    release_date: "December 4, 1995",
    logo: <FaJsSquare/>,
  },
  {
    name: "Javascript",
    author: "Brendan Eich",
    release_date: "December 4, 1995",
    logo: <FaJsSquare/>,
  },
];

const Languages = () => {
  return (
    <CardDeck>
      {
          getLanguages.map((language, idx) => {
            return (
                <Card key={idx}>
                    {language.logo}
                    <Card.Body>
                    <Card.Title>{language.name}</Card.Title>
                    <Card.Text>
                        Author: {language.author}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Released: {language.release_date}</small>
                    </Card.Footer>
                </Card>
            );
        })
      }
    </CardDeck>
  );
};

export default Languages;
