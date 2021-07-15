import { CardDeck, Card } from "react-bootstrap";
import { FaJsSquare } from "react-icons/fa";

const getLanguages = [
  {
    name: "Javascript",
    author: "Brendan Eich",
    release_date: "December 4, 1995",
    logo: "<FaJsSquare/>",
  },
  {
      "_id":{"$oid":"60eef0ebf439be7b0862825a"},"name":"Ruby","Author":"Yukihiro \"matz\" Matsumoto","year":"1995","Logo":" https://cdn-images-1.medium.com/max/1200/1*9hd_8qR0CMZ8L0pVbFLjDw.png"},
  {
    name: "Javascript",
    author: "Brendan Eich",
    release_date: "December 4, 1995",
    logo: "<FaJsSquare/>",
  },
];

const Languages = () => {
  return (
    <CardDeck>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardDeck>
  );
};

export default Languages;
