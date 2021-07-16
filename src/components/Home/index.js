import Carousel from "react-bootstrap/Carousel";

export default function Home({ languages }) {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        {" "}
        {"{"} Hello World {"}"}
      </h2>

      <Carousel>
        {languages.map((language, idx) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={language.logo}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{language.name}</h3>
                <p>{language.author}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}
