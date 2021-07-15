import "./App.css";

//COMPONENTS
import Languages from "./components/Languages";
import Language from "./components/Language";
import Comments from "./components/Comments";
import CreateComment from "./components/CreateComment";
import EditComment from "./components/EditComment";
import Home from "./components/Home";
import Footer from "./components/Footer";
import NavHeader from "./components/NavHeader";

function App() {
  return (
    <>
      <NavHeader />
      <Home />
      <Languages />
      <Language />
      <Comments />
      <CreateComment />
      <EditComment />
      <Footer />
    </>
  );
}

export default App;
