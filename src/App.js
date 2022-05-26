    import React from 'react';
    import {
      BrowserRouter as Router,
      Switch,
      Route,
      Link
    } from "react-router-dom";

import './App.css'
import Services from './components/Services';
import Oficialorganizations from './components/Oficialorganizations';
import Home from './components/Home';
import Numberphone from './components/Numberphone';

    function App() {
      return (
        <Router>
          <div className="container mt-5">
            <div className="btn-group">
            <Link to="/" className="btn">
                Inicio
              </Link>
              <Link to="/Oficialorganizations" className="btn ">
                Org. Oficiales
              </Link>
              <Link to="/Services" className="btn">
                Servicios
              </Link>
              <Link to="/Numberphone" className="btn">
                Teléfonos Útiles
              </Link>
            </div>
            <hr />
            <Switch>
            <Route path="/Oficialorganizations">
                <Oficialorganizations />
              </Route>
              <Route path="/Services">
                <Services />
              </Route>
              <Route path="/Numberphone">
                <Numberphone />
              </Route>
              <Route path="/" exact>
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      );
    }

    export default App;
