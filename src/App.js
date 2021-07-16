import { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import "./App.css";

// COMPONENTS
import Languages from "./components/Languages";
import Language from "./components/Language";
import Home from "./components/Home";
import NavHeader from "./components/NavHeader";

function App() {

  const [languages, setLanguages] = useState([])

  const getLanguages = async () => {
    const API_ENDPOINT = 'http://localhost:4000/languages'
    try {
      const response = await fetch(API_ENDPOINT)
      const data = await response.json()
      setLanguages(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getLanguages()
    //eslint-disable-next-line
  },[])

  if (languages.length === 0) {
    return <p>Loading...</p>
  }


  return (
      <div className="app">
        <NavHeader />
        <Switch>
          <Route path="/" exact render={(routerProps) => <Home /> } />
          <Route path="/languages/:id" render={(routerProps) => <Language match={routerProps.match} /> } />
          <Route path="/languages" render={(routerProps) => <Languages match={routerProps.match} languages={languages} /> } />
          {/* <Footer />  CONFIRM IF NEEDED */}
        </Switch>
      </div>
  );
}

export default App;
