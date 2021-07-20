import Carousel from "react-bootstrap/Carousel";
import Image from 'react-bootstrap/Image'
import {Link} from 'react-router-dom'

export default function Home({ languages }) {
  return (
    <>
      <div className="intro">
        <h1 style={{ textAlign: "center"}}>
          {"{"} Hello World {"}"}
        </h1>
        <p>Welcome to devOgraphy, an educaitonal resource for the programming community and beyond. Learn about the history of a specific programming language, leave a comment, and share your work.</p>
      </div>
      <Carousel variant="dark">
        {languages.map((language, idx) => {
          return (
            <Carousel.Item key={idx} interval={2000}>
            <Link to={`/languages/${language._id}`}>
              <Image
                className="d-block w-80 carousel-img"
                src={language.logo}
                alt={language.name}
              />
            </Link>
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}
