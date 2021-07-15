import "./App.css";
import { Route } from 'react-router-dom'

// COMPONENTS
import Languages from "./components/Languages";
import Language from "./components/Language";
import Home from "./components/Home";
import NavHeader from "./components/NavHeader";

// MOVED COMPONENTS
// import Comments from "./components/Comments"; // MOVED TO LANGUAGE.JS
// import CreateComment from "./components/CreateComment"; MOVED TO LANGUAGE.JS
// import EditComment from "./components/EditComment"; SUB-COMP OF COMMENTS.JS
// import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavHeader />
      <Route path="/" exact render={(routerProps) => <Home /> } />
      <Route path="/languages" render={(routerProps) => <Languages /> } />
      <Route path="/languages/:id" render={(routerProps) => <Language /> } />
      {/* <Footer />  CONFIRM IF NEEDED */}
    </>
  );
}

export default App;
